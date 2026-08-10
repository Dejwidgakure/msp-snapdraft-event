(function(root, factory){
  const api = factory();
  if(typeof module === 'object' && module.exports) module.exports = api;
  root.DraftStatsEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function(){
  'use strict';

  const MATCH_TYPES = Object.freeze({
    PLAYED: 'played',
    WALKOVER: 'walkover',
    DOUBLE_WALKOVER: 'doubleWalkover'
  });

  const DRAFT_STATUSES = Object.freeze({
    ACTIVE: 'active',
    FINISHED: 'finished'
  });

  const VALID_MATCH_TYPES = new Set(Object.values(MATCH_TYPES));
  const VALID_DRAFT_STATUSES = new Set(Object.values(DRAFT_STATUSES));

  // Canonical MSP SnapDraft Legend system. Legend Points are derived data:
  // database.js stores historical facts, while the engine owns the scoring model.
  const LEGEND_POINTS = Object.freeze({
    1: 8,
    2: 4,
    3: 3,
    4: 2,
    5: 1
  });
  const MIN_LEGEND_DRAFTS = 2;

  function hasOwn(object, key){
    return Boolean(object) && Object.prototype.hasOwnProperty.call(object, key);
  }

  function numberOrZero(value){
    const number = Number(value);
    return Number.isFinite(number) ? number : 0;
  }

  function isFinitePointValue(value){
    return Number.isFinite(Number(value));
  }

  function normalizeName(value){
    return String(value || '').trim();
  }

  function pairKey(firstName, secondName){
    return [normalizeName(firstName), normalizeName(secondName)].sort().join('::');
  }

  function getScoringSystem(draftOrId){
    if(draftOrId && typeof draftOrId === 'object'){
      const system = normalizeName(draftOrId?.scoring?.system);
      return system || null;
    }
    return null;
  }

  function supportsCleanWins(draftOrId){
    // In legacy10 the losing player always received 0 points, so a score
    // ending in :0 does not prove a true shutout and is not comparable
    // with later scoring systems.
    return getScoringSystem(draftOrId) !== 'legacy10';
  }

  function normalizeExplicitType(value){
    if(value === MATCH_TYPES.WALKOVER) return MATCH_TYPES.WALKOVER;
    if(value === MATCH_TYPES.DOUBLE_WALKOVER) return MATCH_TYPES.DOUBLE_WALKOVER;
    return MATCH_TYPES.PLAYED;
  }

  function getMatchType(match, draftOrId){
    // Canonical rule after the database migration:
    // an omitted resultType always means a normally played match.
    // Walkovers and double walkovers must be stored explicitly in database.js.
    if(hasOwn(match, 'resultType')){
      return normalizeExplicitType(match.resultType);
    }
    return MATCH_TYPES.PLAYED;
  }

  function getMatchResult(match, draftOrId){
    const type = getMatchType(match, draftOrId);
    const pts1 = numberOrZero(match?.pts1);
    const pts2 = numberOrZero(match?.pts2);

    if(type === MATCH_TYPES.DOUBLE_WALKOVER){
      return {type, p1Outcome:'loss', p2Outcome:'loss', winner:null, loser:null};
    }
    if(pts1 > pts2){
      return {type, p1Outcome:'win', p2Outcome:'loss', winner:match.p1, loser:match.p2};
    }
    if(pts2 > pts1){
      return {type, p1Outcome:'loss', p2Outcome:'win', winner:match.p2, loser:match.p1};
    }
    return {type, p1Outcome:'draw', p2Outcome:'draw', winner:null, loser:null};
  }

  function getPlayerOutcome(match, draftOrId, playerName){
    const result = getMatchResult(match, draftOrId);
    if(match?.p1 === playerName) return result.p1Outcome;
    if(match?.p2 === playerName) return result.p2Outcome;
    return null;
  }

  function isWalkover(match, draftOrId){
    return getMatchType(match, draftOrId) === MATCH_TYPES.WALKOVER;
  }

  function isDoubleWalkover(match, draftOrId){
    return getMatchType(match, draftOrId) === MATCH_TYPES.DOUBLE_WALKOVER;
  }

  function isCleanWin(match, draftOrId){
    if(!supportsCleanWins(draftOrId)) return false;
    if(getMatchType(match, draftOrId) !== MATCH_TYPES.PLAYED) return false;
    const pts1 = numberOrZero(match?.pts1);
    const pts2 = numberOrZero(match?.pts2);
    return (pts1 > pts2 && pts2 === 0) || (pts2 > pts1 && pts1 === 0);
  }

  function getRosterNames(draft){
    return (Array.isArray(draft?.players) ? draft.players : [])
      .map(player=>normalizeName(player?.name));
  }

  function getActualPlayerCount(draft){
    return Array.isArray(draft?.players) ? draft.players.length : 0;
  }

  function getExpectedMatchCount(draft){
    const playerCount = getActualPlayerCount(draft);
    return playerCount > 1 ? (playerCount * (playerCount - 1)) / 2 : 0;
  }

  function getExpectedPairKeys(draft){
    const names = getRosterNames(draft);
    const actualCount = getActualPlayerCount(draft);
    if(names.length !== actualCount || names.some(name=>!name)) return null;
    if(new Set(names).size !== actualCount) return null;

    const expectedPairs = new Set();
    for(let first=0; first<names.length; first++){
      for(let second=first+1; second<names.length; second++){
        expectedPairs.add(pairKey(names[first], names[second]));
      }
    }
    return expectedPairs;
  }

  function getResolvedPairKeys(draft){
    const roster = new Set(getRosterNames(draft).filter(Boolean));
    const resolvedPairs = new Set();
    (Array.isArray(draft?.matches) ? draft.matches : []).forEach(match=>{
      const p1 = normalizeName(match?.p1);
      const p2 = normalizeName(match?.p2);
      if(!p1 || !p2 || p1 === p2) return;
      if(!roster.has(p1) || !roster.has(p2)) return;
      if(!isFinitePointValue(match?.pts1) || !isFinitePointValue(match?.pts2)) return;
      resolvedPairs.add(pairKey(p1,p2));
    });
    return resolvedPairs;
  }

  function isFullRoundRobin(draft){
    const expectedPairs = getExpectedPairKeys(draft);
    if(!expectedPairs || expectedPairs.size === 0) return false;
    const resolvedPairs = getResolvedPairKeys(draft);
    return [...expectedPairs].every(key=>resolvedPairs.has(key));
  }

  function getUnplayedMatches(draft){
    const names = getRosterNames(draft).filter(Boolean);
    const resolvedPairs = getResolvedPairKeys(draft);
    const missing = [];
    for(let first=0; first<names.length; first++){
      for(let second=first+1; second<names.length; second++){
        if(!resolvedPairs.has(pairKey(names[first],names[second]))){
          missing.push({p1:names[first], p2:names[second]});
        }
      }
    }
    return missing;
  }

  function getExplicitDraftStatus(draft){
    if(!hasOwn(draft, 'status')) return null;
    const status = normalizeName(draft?.status);
    return VALID_DRAFT_STATUSES.has(status) ? status : null;
  }

  function getDraftStatus(draft){
    const explicitStatus = getExplicitDraftStatus(draft);
    if(explicitStatus) return explicitStatus;
    return isFullRoundRobin(draft) ? DRAFT_STATUSES.FINISHED : DRAFT_STATUSES.ACTIVE;
  }

  function isDraftFinished(draft){
    return getDraftStatus(draft) === DRAFT_STATUSES.FINISHED;
  }

  function emptyPlayerStats(name){
    return {
      name,
      total:0,
      wins:0,
      losses:0,
      winPoints:0,
      lossPoints:0,
      cleanWins:0,
      matches:0
    };
  }

  function getDirectMatchWinner(draft, firstName, secondName){
    const first = normalizeName(firstName);
    const second = normalizeName(secondName);
    if(!first || !second || first === second) return null;

    const directMatches = (Array.isArray(draft?.matches) ? draft.matches : []).filter(match=>
      pairKey(match?.p1, match?.p2) === pairKey(first,second) &&
      isFinitePointValue(match?.pts1) &&
      isFinitePointValue(match?.pts2)
    );
    if(!directMatches.length) return null;

    const winners = new Set();
    directMatches.forEach(match=>{
      const result = getMatchResult(match, draft);
      if(result.type !== MATCH_TYPES.DOUBLE_WALKOVER && result.winner){
        winners.add(normalizeName(result.winner));
      }
    });
    if(winners.size !== 1) return null;
    const winner = [...winners][0];
    return winner === first || winner === second ? winner : null;
  }

  function samePrimaryTieBreak(first, second){
    return first.total === second.total &&
      first.wins === second.wins &&
      first.winPoints === second.winPoints;
  }

  function applyRankingTieBreaks(baseRanking, draft){
    const ranking = [];
    let index = 0;
    while(index < baseRanking.length){
      let end = index + 1;
      while(end < baseRanking.length && samePrimaryTieBreak(baseRanking[index], baseRanking[end])) end++;
      const group = baseRanking.slice(index,end);

      // Head-to-head is unambiguous for a two-player tie. For larger tied
      // groups, the final alphabetical fallback stays deterministic instead
      // of introducing a potentially non-transitive circular H2H order.
      if(group.length === 2){
        const [first,second] = group;
        const directWinner = getDirectMatchWinner(draft, first.name, second.name);
        if(directWinner === second.name) group.reverse();
      }
      ranking.push(...group);
      index = end;
    }
    return ranking;
  }

  function calculateDraftStats(draft){
    const byName = {};
    const rosterNames = getRosterNames(draft).filter(Boolean);
    const roster = new Set(rosterNames);
    rosterNames.forEach(name=>{
      if(!byName[name]) byName[name] = emptyPlayerStats(name);
    });

    (Array.isArray(draft?.matches) ? draft.matches : []).forEach(match=>{
      const p1 = normalizeName(match?.p1);
      const p2 = normalizeName(match?.p2);
      if(!p1 || !p2 || p1 === p2) return;
      if(!roster.has(p1) || !roster.has(p2)) return;
      if(!isFinitePointValue(match?.pts1) || !isFinitePointValue(match?.pts2)) return;

      const pts1 = Number(match.pts1);
      const pts2 = Number(match.pts2);
      const result = getMatchResult(match, draft);

      byName[p1].total += pts1;
      byName[p2].total += pts2;
      byName[p1].matches++;
      byName[p2].matches++;

      if(result.type === MATCH_TYPES.DOUBLE_WALKOVER){
        byName[p1].losses++;
        byName[p2].losses++;
        byName[p1].lossPoints += pts1;
        byName[p2].lossPoints += pts2;
        return;
      }

      if(result.p1Outcome === 'win'){
        byName[p1].wins++;
        byName[p2].losses++;
        byName[p1].winPoints += pts1;
        byName[p2].lossPoints += pts2;
        if(isCleanWin(match, draft)) byName[p1].cleanWins++;
      }else if(result.p2Outcome === 'win'){
        byName[p2].wins++;
        byName[p1].losses++;
        byName[p2].winPoints += pts2;
        byName[p1].lossPoints += pts1;
        if(isCleanWin(match, draft)) byName[p2].cleanWins++;
      }
    });

    const baseRanking = Object.values(byName).sort((a,b)=>
      b.total-a.total ||
      b.wins-a.wins ||
      b.winPoints-a.winPoints ||
      a.name.localeCompare(b.name)
    );
    const ranking = applyRankingTieBreaks(baseRanking, draft);

    return {byName, ranking};
  }

  function calculateDraftRanking(draft){
    return calculateDraftStats(draft).ranking;
  }

  function getDraftLeader(draft){
    const ranking = calculateDraftRanking(draft);
    return ranking[0]?.name || null;
  }

  function getExplicitWinner(draft){
    return normalizeName(draft?.winner) || null;
  }

  function getDraftWinner(draft){
    if(!isDraftFinished(draft)) return null;
    const roster = new Set(getRosterNames(draft).filter(Boolean));
    const explicitWinner = getExplicitWinner(draft);
    if(explicitWinner && roster.has(explicitWinner)) return explicitWinner;
    return getDraftLeader(draft);
  }

  function getDraftLegendOrder(draft){
    if(!isDraftFinished(draft)) return [];
    const ranking = calculateDraftRanking(draft);
    const officialWinner = getDraftWinner(draft);
    if(!officialWinner) return ranking;

    // An explicit, valid official winner is the historical #1 for Legend purposes.
    // The mathematical ranking itself remains untouched; everybody else keeps the
    // relative order produced by the canonical draft ranking engine.
    const winnerEntry = ranking.find(player=>player.name === officialWinner);
    if(!winnerEntry) return ranking;
    return [winnerEntry, ...ranking.filter(player=>player.name !== officialWinner)];
  }

  function getDraftLegendAwards(draft){
    return getDraftLegendOrder(draft).slice(0,5).map((player,index)=>{
      const place = index + 1;
      return {
        place,
        name:player.name,
        points:LEGEND_POINTS[place] || 0,
        draftPoints:player.total,
        wins:player.wins,
        losses:player.losses
      };
    });
  }

  function createLegendPlayer(name){
    return {
      name,
      legendPoints:0,
      draftWins:0,
      first:0,
      second:0,
      third:0,
      fourth:0,
      fifth:0,
      drafts:0,
      draftPoints:0,
      avgDraftPoints:0,
      wins:0,
      losses:0,
      matches:0,
      winRate:0,
      balance:0,
      eligibleForRank:false,
      rank:null
    };
  }

  function ensureLegendPlayer(map, name){
    const normalized = normalizeName(name);
    if(!normalized) return null;
    if(!map[normalized]) map[normalized] = createLegendPlayer(normalized);
    return map[normalized];
  }

  function calculateLegendStandings(drafts){
    const byName = {};
    const finishedDrafts = (Array.isArray(drafts) ? drafts : []).filter(isDraftFinished);

    finishedDrafts.forEach(draft=>{
      const draftStats = calculateDraftStats(draft);

      // Participation is defined by the canonical players[] roster, not by whether
      // a player happened to have a match object in an incomplete historical draft.
      (Array.isArray(draft?.players) ? draft.players : []).forEach(player=>{
        const legendPlayer = ensureLegendPlayer(byName, player?.name);
        if(legendPlayer) legendPlayer.drafts++;
      });

      Object.values(draftStats.byName).forEach(playerStats=>{
        const legendPlayer = ensureLegendPlayer(byName, playerStats.name);
        if(!legendPlayer) return;
        legendPlayer.draftPoints += playerStats.total;
        legendPlayer.wins += playerStats.wins;
        legendPlayer.losses += playerStats.losses;
        legendPlayer.matches += playerStats.matches;
      });

      getDraftLegendAwards(draft).forEach(award=>{
        const legendPlayer = ensureLegendPlayer(byName, award.name);
        if(!legendPlayer) return;
        legendPlayer.legendPoints += award.points;
        if(award.place === 1){ legendPlayer.first++; legendPlayer.draftWins++; }
        if(award.place === 2) legendPlayer.second++;
        if(award.place === 3) legendPlayer.third++;
        if(award.place === 4) legendPlayer.fourth++;
        if(award.place === 5) legendPlayer.fifth++;
      });
    });

    const allPlayers = Object.values(byName).map(player=>{
      const decidedMatches = player.wins + player.losses;
      return {
        ...player,
        avgDraftPoints:player.drafts ? player.draftPoints / player.drafts : 0,
        winRate:decidedMatches ? player.wins / decidedMatches : 0,
        balance:player.wins - player.losses,
        eligibleForRank:player.drafts >= MIN_LEGEND_DRAFTS,
        rank:null
      };
    });

    const ranking = allPlayers
      .filter(player=>player.eligibleForRank)
      .sort((a,b)=>
        b.legendPoints-a.legendPoints ||
        b.draftWins-a.draftWins ||
        b.draftPoints-a.draftPoints ||
        b.winRate-a.winRate ||
        a.name.localeCompare(b.name,'pl')
      )
      .map((player,index)=>({...player, rank:index+1}));

    const rankByName = {};
    ranking.forEach(player=>{ rankByName[player.name] = player.rank; });
    const rankedByName = Object.fromEntries(ranking.map(player=>[player.name,player]));
    const allByName = Object.fromEntries(allPlayers.map(player=>[
      player.name,
      rankedByName[player.name] || player
    ]));

    return {
      legendPoints:LEGEND_POINTS,
      minDrafts:MIN_LEGEND_DRAFTS,
      ranking,
      allPlayers:Object.values(allByName),
      byName:allByName,
      rankByName
    };
  }

  function getPlayerLegendStats(drafts, playerName){
    const name = normalizeName(playerName);
    if(!name) return null;
    return calculateLegendStandings(drafts).byName[name] || null;
  }

  function getPlayerLegendRank(drafts, playerName){
    const stats = getPlayerLegendStats(drafts, playerName);
    return stats?.rank || null;
  }

  function createWarning(code, details){
    return {code, ...(details || {})};
  }

  function validateDraft(draft){
    const warnings = [];
    const rosterNames = getRosterNames(draft);
    const roster = new Set(rosterNames.filter(Boolean));
    const actualPlayerCount = getActualPlayerCount(draft);
    const declaredPlayerCount = Number(draft?.playersCount);

    if(hasOwn(draft, 'status')){
      const rawStatus = normalizeName(draft?.status);
      if(!VALID_DRAFT_STATUSES.has(rawStatus)){
        warnings.push(createWarning('invalidStatus',{value:draft?.status}));
      }
    }

    if(Number.isFinite(declaredPlayerCount) && declaredPlayerCount !== actualPlayerCount){
      warnings.push(createWarning('playersCountMismatch',{
        declared:declaredPlayerCount,
        actual:actualPlayerCount
      }));
    }

    const seenPlayerNames = new Set();
    rosterNames.forEach((name,index)=>{
      if(!name){
        warnings.push(createWarning('blankPlayerName',{index}));
        return;
      }
      if(seenPlayerNames.has(name)) warnings.push(createWarning('duplicatePlayerName',{name}));
      seenPlayerNames.add(name);
    });

    const seenPairs = new Set();
    (Array.isArray(draft?.matches) ? draft.matches : []).forEach((match,index)=>{
      const p1 = normalizeName(match?.p1);
      const p2 = normalizeName(match?.p2);

      if(p1 && p2){
        const key = pairKey(p1,p2);
        if(seenPairs.has(key)) warnings.push(createWarning('duplicateMatchPair',{index,p1,p2}));
        seenPairs.add(key);
      }

      if(p1 && p2 && p1 === p2) warnings.push(createWarning('selfMatch',{index,player:p1}));
      if(p1 && !roster.has(p1)) warnings.push(createWarning('unknownMatchPlayer',{index,player:p1}));
      if(p2 && !roster.has(p2)) warnings.push(createWarning('unknownMatchPlayer',{index,player:p2}));
      if(!isFinitePointValue(match?.pts1) || !isFinitePointValue(match?.pts2)){
        warnings.push(createWarning('invalidPoints',{index,pts1:match?.pts1,pts2:match?.pts2}));
      }

      if(hasOwn(match,'resultType') && !VALID_MATCH_TYPES.has(match.resultType)){
        warnings.push(createWarning('invalidResultType',{index,value:match.resultType}));
      }

      const matchType = getMatchType(match,draft);
      if(matchType === MATCH_TYPES.WALKOVER &&
        isFinitePointValue(match?.pts1) && isFinitePointValue(match?.pts2) &&
        Number(match.pts1) === Number(match.pts2)){
        warnings.push(createWarning('walkoverWithoutWinner',{index,pts1:match.pts1,pts2:match.pts2}));
      }
      if(matchType === MATCH_TYPES.DOUBLE_WALKOVER &&
        isFinitePointValue(match?.pts1) && isFinitePointValue(match?.pts2) &&
        Number(match.pts1) !== Number(match.pts2)){
        warnings.push(createWarning('doubleWalkoverUnequalPoints',{index,pts1:match.pts1,pts2:match.pts2}));
      }
    });

    const draftStatus = getDraftStatus(draft);
    const leader = getDraftLeader(draft);
    const explicitWinner = getExplicitWinner(draft);
    const winnerKnown = Boolean(explicitWinner && roster.has(explicitWinner));
    const officialWinner = getDraftWinner(draft);
    const winnerMismatch = Boolean(
      draftStatus === DRAFT_STATUSES.FINISHED &&
      winnerKnown && leader && explicitWinner !== leader
    );

    if(explicitWinner && !winnerKnown){
      warnings.push(createWarning('unknownWinner',{winner:explicitWinner}));
    }
    if(draftStatus === DRAFT_STATUSES.ACTIVE && explicitWinner){
      warnings.push(createWarning('winnerOnActiveDraft',{winner:explicitWinner}));
    }
    if(winnerMismatch){
      warnings.push(createWarning('winnerMismatch',{
        officialWinner:explicitWinner,
        calculatedLeader:leader
      }));
    }

    const roundRobinComplete = isFullRoundRobin(draft);
    const resolvedPairCount = getResolvedPairKeys(draft).size;
    const expectedMatchCount = getExpectedMatchCount(draft);
    const rawStatus = hasOwn(draft,'status') ? normalizeName(draft?.status) : null;
    const statusSource = VALID_DRAFT_STATUSES.has(rawStatus)
      ? 'explicit'
      : (hasOwn(draft,'status') ? 'invalid-fallback' : 'fallback');

    return {
      valid:warnings.length === 0,
      warnings,
      status:draftStatus,
      statusSource,
      roundRobinComplete,
      actualPlayerCount,
      declaredPlayerCount:Number.isFinite(declaredPlayerCount) ? declaredPlayerCount : null,
      expectedMatchCount,
      resolvedPairCount,
      leader,
      winner:officialWinner,
      winnerMismatch
    };
  }

  return Object.freeze({
    MATCH_TYPES,
    DRAFT_STATUSES,
    LEGEND_POINTS,
    MIN_LEGEND_DRAFTS,
    getScoringSystem,
    supportsCleanWins,
    getMatchType,
    getMatchResult,
    getPlayerOutcome,
    isWalkover,
    isDoubleWalkover,
    isCleanWin,
    getActualPlayerCount,
    getExpectedMatchCount,
    isFullRoundRobin,
    getUnplayedMatches,
    getDraftStatus,
    isDraftFinished,
    calculateDraftStats,
    calculateDraftRanking,
    getDraftLeader,
    getDraftWinner,
    getDraftLegendOrder,
    getDraftLegendAwards,
    calculateLegendStandings,
    getPlayerLegendStats,
    getPlayerLegendRank,
    validateDraft
  });
});
