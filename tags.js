/* ============================================================
   MSP SNAP DRAFT — TAG DATABASE
   Version 1.50

   Kanoniczna kolejność tagów w cards.js:
   series → abilityTypes → archetypes → subtypes
   → teams → themes → special

   Tagi specjalne zawsze znajdują się na końcu.
============================================================ */

const TAG_CATEGORIES = {
  series: {
    name: "Pula / Seria",
    color: "#9B5CFF",
    glow: "rgba(155, 92, 255, .42)",
    description: "Klasyfikuje karty według sposobu ich odblokowania oraz serii kolekcjonerskiej, do której należą."
  },

  abilityTypes: {
    name: "Typy zdolności",
    color: "#35B8FF",
    glow: "rgba(53, 184, 255, .40)",
    description: "Określa podstawowy rodzaj zdolności karty, moment jej działania albo sposób aktywacji efektu. Karta może posiadać więcej niż jeden typ zdolności."
  },

  archetypes: {
    name: "Archetypy i synergie",
    color: "#FF5FA2",
    glow: "rgba(255, 95, 162, .42)",
    description: "Szerokie rodziny mechaniczne oraz bardziej konkretne archetypy talii. Obejmują karty wykonujące daną mechanikę, jej enablery, payoffy, stałe supporty i charakterystyczne filary określonego planu gry."
  },

  subtypes: {
    name: "Mechaniki szczegółowe",
    color: "#FF9F43",
    glow: "rgba(255, 159, 67, .40)",
    description: "Węższe i bardziej precyzyjne cechy kart opisujące konkretną operację, sposób działania efektu albo szczególny rodzaj interakcji. Nie obejmują kart wyłącznie z powodu luźnej synergii deckowej."
  },

  teams: {
    name: "Drużyny i przynależności",
    color: "#43E08D",
    glow: "rgba(67, 224, 141, .38)",
    description: "Klasyfikuje postacie według ich drużyn, organizacji, frakcji oraz innych kanonicznych przynależności w uniwersum Marvela."
  },

  themes: {
    name: "Cechy tematyczne",
    color: "#E94CFF",
    glow: "rgba(233, 76, 255, .42)",
    description: "Fabularne, wizualne i gatunkowe cechy kart niezależne od ich mechaniki w grze, takie jak pochodzenie, magia, technologia, typ postaci albo motyw przewodni."
  },

  special: {
    name: "Specjalne",
    color: "#F6C94C",
    glow: "rgba(246, 201, 76, .46)",
    description: "Ręcznie nadawane wyróżnienia oraz oznaczenia związane z edycjami MSP SnapDraft i zwycięskimi taliami."
  }
};

const TAGS = {

  series: [
    {
      id: "starter",
      name: "Starter",
      description: "Karty dostępne od początku gry."
    },

    {
      id: "recruit-pass",
      name: "Recruit Pass",
      description: "Karty odblokowywane w Recruit Pass."
    },

    {
      id: "series0",
      name: "Series 0",
      description: "Karty należące do Series 0."
    },

    {
      id: "series1",
      name: "Series 1",
      description: "Karty należące do Series 1."
    },

    {
      id: "series2",
      name: "Series 2",
      description: "Karty należące do Series 2."
    },

    {
      id: "series3",
      name: "Series 3",
      description: "Karty należące do Series 3."
    },

    {
      id: "series4",
      name: "Series 4",
      description: "Karty należące do Series 4."
    },

    {
      id: "series5",
      name: "Series 5",
      description: "Karty należące do Series 5."
    }
  ],

  abilityTypes: [
    {
      id: "activate",
      name: "Activate",
      description: "Karta posiada efekt Activate."
    },

    {
      id: "endofgame",
      name: "End of Game",
      description: "Efekt karty aktywuje się po zakończeniu gry."
    },

    {
      id: "endofturn",
      name: "End of Turn",
      description: "Efekt karty aktywuje się na końcu tury."
    },

    {
      id: "gamestart",
      name: "Game Start",
      description: "Efekt karty aktywuje się przed rozpoczęciem gry."
    },

    {
      id: "moveable",
      name: "Moveable",
      description: "Karta może zostać przesunięta dzięki własnej zdolności lub wbudowanej mechanice."
    },

    {
      id: "no-ability",
      name: "No Ability",
      description: "Karta nie posiada zdolności."
    },

    {
      id: "objective",
      name: "Objective",
      description: "Karta posiada cel lub specjalny warunek realizowany podczas gry."
    },

    {
      id: "on-reveal",
      name: "On Reveal",
      description: "Karta posiada efekt On Reveal."
    },

    {
      id: "ongoing",
      name: "Ongoing",
      description: "Karta posiada efekt Ongoing albo przejmuje tekst efektu Ongoing."
    },

    {
      id: "quickdraw",
      name: "Quick Draw",
      description: "Karta posiada zdolność Quick Draw."
    },

    {
      id: "startofturn",
      name: "Start of Turn",
      description: "Efekt karty aktywuje się na początku tury."
    },

    {
      id: "trigger-card",
      name: "Trigger Card",
      description: "Zdolność reaguje na określone wydarzenie albo warunek, na przykład zagranie, przesunięcie, zniszczenie lub zmianę stanu karty."
    }
  ],

  archetypes: [
    {
      id: "afflict",
      name: "Afflict",
      description: "Duża rodzina oparta na nakładaniu ujemnej siły oraz wykorzystywaniu osłabionych kart, wraz z jej enablerami i payoffami."
    },

    {
      id: "bounce",
      name: "Bounce",
      description: "Duża rodzina oparta na zwracaniu kart do ręki i ponownym ich zagrywaniu, wraz z charakterystycznymi enablerami i payoffami talii Bounce."
    },

    {
      id: "buff",
      name: "Buff",
      description: "Szeroka rodzina archetypów i talii opartych na trwałym zwiększaniu Power własnych kart, przekazywaniu lub powielaniu otrzymanych wzmocnień oraz wykorzystywaniu charakterystycznych celów, supportów i payoffów związanych z buffowaniem."
    },

    {
      id: "card-generation",
      name: "Card Generation",
      description: "Szeroka rodzina kart tworzących nowe karty w ręce, talii lub na planszy oraz charakterystycznych enablerów i payoffów wykorzystujących karty utworzone podczas gry albo karty, które nie rozpoczęły gry w talii."
    },

    {
      id: "clog",
      name: "Clog",
      description: "Duża rodzina oparta na zapychaniu lokacji przeciwnika, ograniczaniu jego miejsca oraz wykorzystywaniu przepełnionego boardu."
    },

    {
      id: "destroy",
      name: "Destroy",
      description: "Duża rodzina oparta na niszczeniu kart: wykonujące mechanikę Destroy, jej enablery, payoffy oraz stałe filary talii wykorzystujących niszczenie."
    },

    {
      id: "discard",
      name: "Discard",
      description: "Duża rodzina oparta na odrzucaniu kart: wykonujące mechanikę Discard, jej enablery, payoffy oraz stałe filary talii wykorzystujących odrzucenia."
    }
,

    {
      id: "highevo",
      name: "High Evolutionary",
      description: "Archetyp talii zbudowanych wokół High Evolutionary, odblokowanych zdolności kart bez tekstu oraz ich charakterystycznych synergii."
    },

    {
      id: "merge",
      name: "Merge",
      description: "Duża rodzina oparta na łączeniu kart mechaniką Merge oraz na enablerach i payoffach wykorzystujących scalone jednostki."
    },

    {
      id: "mill",
      name: "Mill",
      description: "Karty odbierające przeciwnikowi zasoby albo dostęp do nich poprzez usuwanie, podkradanie, wymuszanie, psucie lub blokowanie kart w jego talii i ręce oraz powodowanie utraty wartościowych drawów."
    },

    {
      id: "move",
      name: "Move",
      description: "Szeroka rodzina kart z keywordem i mechaniką Move oraz kart związanych z taktykami opartymi na przesuwaniu własnych kart lub kart przeciwnika, obejmująca wykonawców ruchu, enablery, payoffy i charakterystyczne filary takich talii."
    }
,

    {
      id: "no-ability-buff",
      name: "No-Ability Buff",
      description: "Archetyp kart bez zdolności, kart wzmacniających takie jednostki oraz generatorów własnych tokenów i Rocków bez tekstu, które naturalnie współgrają z tym planem."
    },

    {
      id: "ongoing-combo",
      name: "Ongoing Combo",
      description: "Archetyp talii skupionych na budowaniu, kopiowaniu, wzmacnianiu i łączeniu efektów Ongoing, obejmujący charakterystyczne pakiety Spectrum, Living Tribunal oraz stałe supporty i payoffy Ongoing Combo."
    }
,

    {
      id: "tech",
      name: "Tech",
      description: "Karty pełniące rolę reaktywnej albo proaktywnej odpowiedzi, ochrony własnego planu lub anty-techu przeciwko konkretnym mechanikom, archetypom, efektom, typom kart albo lokacjom."
    },

    {
      id: "wongreveal",
      name: "Wong / On Reveal Combo",
      description: "Archetyp talii combo opartych na wielokrotnym uruchamianiu, kopiowaniu lub ponawianiu efektów On Reveal oraz na charakterystycznych payoffach szczególnie korzystających z ich powielania."
    },

    {
      id: "zombie",
      name: "Zombie / Horde",
      description: "Szeroka rodzina kart Zombie oraz kart tworzących, wzmacniających lub bezpośrednio wspierających mechanikę Horde."
    },

    {
      id: "zoo",
      name: "Zoo",
      description: "Archetyp oparty na zalewaniu planszy tanimi kartami, szczególnie charakterystycznymi kartami za 1, generatorami jedynek oraz payoffami i efektami wzmacniającymi szeroki board."
    }
  ,
    {
      id: "spells",
      name: "Spells",
      description: "Szeroka rodzina kart będących Spellami, tworzących Spelle albo bezpośrednio wspierających zagrywanie Spelli."
    },

    {
      id: "end-of-turn-combo",
      name: "End of Turn Combo",
      description: "Archetyp talii budowanych wokół wielu zdolności End of Turn, ich powtarzania i wzmacniania oraz charakterystycznych payoffów szczególnie korzystających z dodatkowych uruchomień na końcu tury."
    },

    {
      id: "negative",
      name: "Negative",
      description: "Archetyp talii zbudowanych wokół Mister Negative, wcześniejszego uruchamiania jego zdolności oraz wykorzystywania kart o wysokim koszcie i niskiej bazowej Power, które po zamianie statystyk stają się wyjątkowo tanimi payoffami."
    },

    {
      id: "lockdown",
      name: "Lockdown",
      description: "Archetyp talii ograniczających przestrzeń i możliwości zagrywania kart przez zamykanie lokacji, miękkie blokady oraz charakterystyczne supporty obchodzące te ograniczenia lub dostarczające Power do niedostępnych miejsc."
    },

    {
      id: "scream",
      name: "Scream / Opponent Move",
      description: "Archetyp talii opartych na przymusowym przesuwaniu kart przeciwnika, karaniu ich za ruch, kontrolowaniu ich pozycji oraz wykorzystywaniu efektów zależnych od przesunięć wrogich kart."
    },

    {
      id: "mini-movers",
      name: "Mini Movers",
      description: "Archetyp talii opartych na tanich i mobilnych kartach, częstym przesuwaniu własnych jednostek, generowaniu wartości z kolejnych ruchów oraz elastycznym rozkładaniu Power między lokacjami."
    },

    {
      id: "priority-control",
      name: "Priority Control",
      description: "Archetyp talii budujących i utrzymujących przewagę na planszy od wczesnych tur, wykorzystujących tanie lub efektywne statystycznie karty oraz narzędzia kontrolne szczególnie skuteczne przy posiadaniu priorytetu."
    },

    {
      id: "shou-lao",
      name: "Shou-Lao",
      description: "Archetyp talii opartych na regularnym zagrywaniu wielu kart, budowaniu progresu Shou-Lao oraz przekazywaniu dużych, skumulowanych wzmocnień charakterystycznym celom i payoffom."
    },

    {
      id: "aurora",
      name: "Aurora",
      description: "Archetyp talii budowanych wokół Aurory, różnorodnych typów zdolności oraz rozdzielania Power między wieloma lokacjami przy użyciu charakterystycznych, elastycznych supportów."
    },

    {
      id: "arishem-thanos",
      name: "Arishem / Thanos",
      description: "Archetyp talii łączących losowe zasoby i dodatkową energię Arishema z pakietem Stones Thanosa, wykorzystujący kosztowe payoffy, szerokie narzędzia kontroli oraz wartość generowaną przez karty spoza talii."
    },

    {
      id: "hammer-bros",
      name: "Hammer Bros",
      description: "Archetyp talii zbudowanych wokół Thora, Beta Ray Billa, ich charakterystycznych młotów oraz narzędzi dobierania, przyzywania i ponownego uruchamiania efektów tych kart."
    },

    {
      id: "fantomex",
      name: "Fantomex",
      description: "Hybrydowy archetyp Destroy–Discard zbudowany wokół Fantomexa oraz kart łączących odrzucanie, niszczenie, odzyskiwanie zasobów i charakterystyczne payoffy obu mechanik."
    },

    {
      id: "nimrod-phoenix",
      name: "Nimrod / Phoenix",
      description: "Archetyp talii łączących wzmacnianie i niszczenie Nimroda z pakietem Phoenix Force, wskrzeszaniem oraz przesuwaniem silnych kart takich jak Human Torch i Multiple Man."
    },

    {
      id: "skaar",
      name: "Skaar",
      description: "Archetyp talii opartych na wystawianiu wielu kart o bardzo wysokiej Power, obniżaniu kosztu Skaara oraz wykorzystywaniu charakterystycznych dużych jednostek i kart wspierających plan 10+ Power."
    },

    {
      id: "zombie-galacti",
      name: "Zombie Galacti",
      description: "Archetyp talii zbudowanych wokół Zombie Galacti, wzmacniania i wykorzystywania jego charakterystycznego pakietu kart oraz elastycznych supportów pozwalających rozwijać szeroki plan gry."
    },

    {
      id: "wiccan",
      name: "Wiccan",
      description: "Archetyp talii zbudowanych wokół Wiccana, przewidywalnej krzywej pierwszych tur, pełnego wykorzystywania energii oraz charakterystycznych kart stabilizujących dobór i tempo gry."
    },

    {
      id: "werewolf-sentry",
      name: "Werewolf / Sentry",
      description: "Archetyp talii opartych na wielokrotnym zagrywaniu i cofaniu Werewolfa, pakiecie The Hood–Sentry–Annihilus oraz elastycznych narzędziach Merlina do generowania wartości i kontroli planszy."
    },

    {
      id: "surfer",
      name: "Surfer",
      description: "Archetyp talii opartych na Silver Surferze, szerokim pakiecie kart za 3, generowaniu wielu ciał oraz charakterystycznych enablerach, payoffach i narzędziach redukcji kosztu."
    }
  ],

  subtypes: [

    {
      id: "board-generator",
      name: "Board Generator",
      description: "Tworzy nowy egzemplarz karty bezpośrednio na planszy. Obejmuje tokeny, losowe karty, kopie i klony oraz nowe karty zastępujące zniszczony egzemplarz. Nie obejmuje przenoszenia istniejących kart z ręki, talii, discardu ani stosu zniszczonych — te należą do Summon."
    },

    {
      id: "card-copy",
      name: "Card Copy",
      description: "Mechaniczna rodzina kart, które tworzą nowy pełny egzemplarz istniejącej karty w ręce, talii lub na planszy, kopiują same siebie albo stają się pełną kopią innej karty. Nie obejmuje kopiowania wyłącznie tekstu, Power ani samej zdolności."
    },

    {
      id: "cost-reduction",
      name: "Cost Reduction",
      description: "Karty, które obniżają lub mogą obniżyć własny koszt albo koszt innych kart, w tym przez warunek, ustawienie kosztu na niższą wartość, zamianę kosztów lub tworzenie karty z obniżonym kosztem."
    },

    {
      id: "deck-generator",
      name: "Deck Generator",
      description: "Tworzy nowy egzemplarz karty bezpośrednio w talii własnej albo przeciwnika. Obejmuje tasowanie nowych kart, tokenów, kopii i losowych kart do talii oraz przekształcanie kart w talii w nowe egzemplarze. Nie obejmuje przenoszenia istniejącej karty z innej strefy do talii."
    },

    {
      id: "disruption",
      name: "Disruption",
      description: "Karty, które same bezpośrednio i zazwyczaj realnie utrudniają przeciwnikowi realizację planu przez ingerowanie w jego rękę, talię, teksty, pozycje, lokacje, możliwość zagrywania, ujawniania albo dostęp do zasobów. Nie obejmuje wąskich kontr działających tylko w specyficznych matchupach, payoffów za cudze efekty ani kart, które jedynie czasami mogą przeszkodzić."
    },

    {
      id: "double-power",
      name: "Double Power",
      description: "Karty, które bezpośrednio podwajają Power własną albo innej konkretnej karty, również poprzez swoje stałe spelle, Stones, programy lub inne karty potomne. Nie obejmuje podwajania całkowitej Power lokacji, efektów, buffów ani redukcji Power."
    },

    {
      id: "draw",
      name: "Draw",
      description: "Przenosi istniejącą kartę z talii własnej albo przeciwnika do ręki lub bezpośrednio manipuluje tym, jaka karta i kiedy zostanie dobrana. Obejmuje dobieranie konkretnej, losowej albo warunkowej karty oraz efekty wykonywane przez stałe spelle, Stones i inne karty potomne. Nie obejmuje kart, które jedynie zaczynają grę w opening hand."
    },

    {
      id: "delayed-reveal",
      name: "Delayed Reveal",
      description: "Karty, które bezpośrednio opóźniają ujawnienie własnych albo innych kart do końca gry lub umieszczają karty bez ujawnienia, aby zostały ujawnione później. Nie obejmuje zwykłych efektów End of Game, ukrywania informacji bez późniejszego revealu ani powtarzania już ujawnionych zdolności."
    },

    {
      id: "effect-multiplier",
      name: "Effect Multiplier",
      description: "Mechaniczna rodzina kart, które kopiują, powtarzają, podwajają lub wzmacniają działanie zdolności, efektów kart albo efektów lokacji. Obejmuje także karty bazowe, których stałe unikalne spelle lub tokeny wykonują taką funkcję."
    },

    {
      id: "energy-ramp",
      name: "Energy / Ramp",
      description: "Karty generujące dodatkową energię, zwiększające maksymalną energię albo pozwalające wystawiać droższe karty wcześniej z pominięciem standardowej krzywej kosztu."
    },

    {
      id: "give-power",
      name: "Give Power",
      description: "Karty, które bezpośrednio i trwale zwiększają Power innej karty albo grupy kart, niezależnie od ich strefy, właściciela, liczby celów oraz sposobu obliczenia bonusu. Obejmuje buffy na planszy, w ręce i talii, zwiększanie Horde oraz efekty wykonywane przez własne zamknięte zestawy spelli, Tools, Stones, programów i innych kart potomnych. Nie obejmuje zwiększania wyłącznie własnej Power, bonusów Ongoing, ustawiania lub kopiowania Power, transformacji ani wzrostu wynikającego wyłącznie z Merge."
    },

    {
      id: "hand-gen",
      name: "Hand Generation",
      description: "Tworzy nowy egzemplarz karty bezpośrednio w ręce własnej albo przeciwnika. Obejmuje losowe i określone karty, tokeny, unikalne karty oraz nowe kopie istniejących kart. Nie obejmuje dobierania kart z talii, zwracania kart z planszy ani przywracania utraconych kart."
    },

    {
      id: "location",
      name: "Location",
      description: "Karta tworząca, zmieniająca lub bezpośrednio wykorzystująca lokacje."
    },

    {
      id: "multi-location-power",
      name: "Multi-Location Power",
      description: "Karty, które zwiększają, dostarczają albo rozdzielają naszą Power pomiędzy co najmniej dwie lokacje, bezpośrednio lub poprzez własne stałe efekty Ongoing, spelle, tokeny albo inne karty potomne. Nie obejmuje efektów ograniczonych wyłącznie do jednej lokacji ani samego tworzenia kart bez zwiększania Power."
    },

    {
      id: "scaler",
      name: "Power Scaler",
      description: "Karty, których własna Power może wielokrotnie i trwale rosnąć dzięki powtarzalnym efektom, kolejnym zdarzeniom, gromadzonemu progresowi albo naturalnym supportom zaprojektowanym do ponawiania ich mechaniki. Obejmuje także historyczne liczniki Ongoing, które zasadniczo tylko narastają. Nie obejmuje jednorazowych bonusów ani wartości zależnych wyłącznie od bieżącego stanu ręki, talii lub planszy."
    },

    {
      id: "self-buff",
      name: "Self Buff",
      description: "Karty mające bezpośredni lub gwarantowany dostęp do zamkniętego, jednorazowego albo burstowego zwiększenia własnej Power, również poprzez swoje stałe unikalne spelle, Tools, Stones, programy lub inne karty potomne. Nie obejmuje kart, których wzrost wynika wyłącznie z powtarzalnego triggera i stanowi ich naturalną mechanikę skalowania, ani efektów, które mogą objąć kartę bazową jedynie jako jeden z niegwarantowanych celów."
    },

    {
      id: "set-power",
      name: "Set Power",
      description: "Karty, które bezpośrednio ustawiają albo resetują Power własną lub innej karty do konkretnej wartości, wartości bazowej albo wartości wyznaczonej przez inną kartę lub parametr. Obejmuje także efekty wykonywane przez własne zamknięte zestawy spelli, Stones, programów i innych kart potomnych. Nie obejmuje zwykłego dodawania lub odejmowania Power, bonusów Ongoing, zamiany Costu z Power, zamiany Power pomiędzy kartami, kopiowania całej karty ani transformacji."
    },

    {
      id: "revive",
      name: "Revive",
      description: "Mechaniczna rodzina kart, które przywracają siebie albo inną istniejącą kartę po jej odrzuceniu, zniszczeniu lub trafieniu do innej utraconej strefy. Obejmuje powrót na rękę, do talii albo bezpośrednio na planszę, niezależnie od tego, czy karta wraca sama, czy dzięki działaniu innej karty. Nie obejmuje zwykłego powrotu z planszy do ręki ani tworzenia nowych kopii."
    },

    {
      id: "summon",
      name: "Summon",
      description: "Umieszcza istniejący egzemplarz karty z ręki, talii, stosu odrzuconych, stosu zniszczonych albo innej strefy bezpośrednio na planszy, bez normalnego zagrania. Obejmuje również zamianę karty na planszy na istniejącą kartę z innej strefy oraz mechaniki wykonywane przez stałe spelle lub formy."
    }
,

    {
      id: "transform",
      name: "Transform",
      description: "Mechaniczna rodzina kart, które bezpośrednio zmieniają siebie albo inną istniejącą kartę w inną kartę, pełną kopię karty lub określoną alternatywną formę. Obejmuje także karty bazowe, których stałe unikalne spelle wykonują transformację."
    },

    {
      id: "unique-card-creation",
      name: "Unique Card Creation",
      description: "Tworzy konkretną unikalną kartę albo zamknięty zestaw kart niedostępnych jako zwykłe karty kolekcjonerskie."
    },

    {
      id: "random-card-pool",
      name: "Random Card Pool",
      description: "Karty, które losowo wybierają tożsamość karty albo tekst zdolności z szerokiej lub zewnętrznej puli istniejących kart, a następnie tworzą, kopiują, przyjmują, zastępują lub transformują kartę według tego wyniku. Nie obejmuje losowania wyłącznie celu, miejsca lub lokacji, małych własnych zestawów trybów i tokenów ani efektów wybierających kartę z własnej talii według konkretnego warunku."
    },

    {
      id: "text-copy",
      name: "Text Copy",
      description: "Karty, które bezpośrednio kopiują tekst zdolności innej karty na siebie albo na inną kartę. Obejmuje kopiowanie całego tekstu lub tekstu określonego typu zdolności oraz efekty wykonywane przez własne stałe karty potomne. Nie obejmuje kopiowania całej karty, samej Power, powtarzania zdolności bez przejęcia jej tekstu ani kradzieży tekstu usuwającej go z pierwotnej karty."
    },

    {
      id: "text-disruption",
      name: "Text Disruption",
      description: "Karty, które destrukcyjnie ingerują w tekst istniejącej karty przez usunięcie całego tekstu, wyłączenie określonych zdolności, kradzież tekstu albo zastąpienie go innym tekstem. Obejmuje efekty działające na planszy, w ręce i talii oraz wykonywane przez własne stałe karty potomne. Nie obejmuje kopiowania tekstu bez odebrania go pierwotnej karcie, blokowania wykonania zdolności bez zmiany tekstu, transformacji całej karty ani jej zniszczenia."
    },

    {
      id: "power-steal",
      name: "Power Steal",
      description: "Karty, które bezpośrednio odbierają Power jednej lub kilku istniejącym kartom i przekazują odpowiadającą jej wartość sobie albo wskazanej własnej karcie. Obejmuje kradzież Power z planszy, ręki i talii oraz efekty wykonywane przez własne stałe spelle, tokeny i inne karty potomne. Nie obejmuje zwykłego nakładania ujemnej Power, kopiowania cudzej wartości bez jej odebrania ani kradzieży tekstu, kart lub innych zasobów."
    },

    {
      id: "row-interaction",
      name: "Row Interaction",
      description: "Karty, których zdolność bezpośrednio zależy od położenia kart w front row lub back row, zapełnienia określonego rzędu albo relacji między kartami stojącymi przed i za sobą. Obejmuje także efekty wykonywane przez własne stałe formy, spelle, tokeny i inne karty potomne."
    },

    {
      id: "full-location",
      name: "Full Location",
      description: "Karty, których efekt uruchamia się, zmienia, skaluje albo zostaje wyłączony wskutek zapełnienia jednej lub obu stron lokacji. Obejmuje także efekty wykonywane przez własne stałe tokeny, Stones, Arrows i inne karty potomne. Nie obejmuje kart, dla których pełność albo brak pełności lokacji stanowi jedynie ograniczenie wyboru celu lub miejsca."
    },

    {
      id: "play-requirement",
      name: "Play Requirement",
      description: "Karty, których charakterystyczna zdolność, koszt albo możliwość zagrania wymaga określonej liczby własnych kart zagranych w turze, niezagrania żadnej karty albo zagrania karty o konkretnym koszcie. Nie obejmuje zwykłych reakcji na zagranie, efektów jedynie skalujących się z liczbą kart ani warunków dotyczących miejsca zagrania."
    },

    {
      id: "unspent-energy",
      name: "Unspent Energy",
      description: "Karty, które bezpośrednio sprawdzają, wykorzystują albo reagują na niewydaną energię własną lub przeciwnika, jej liczbę albo wcześniejsze tury zakończone z niewydaną energią. Obejmuje także zdolności Evolved odblokowywane przez High Evolutionary i dziedziczone przez bazowe karty. Nie obejmuje kart sprawdzających wyłącznie, czy zagrano kartę, ani kart jedynie odblokowujących tę mechanikę bez wykonywania jej samodzielnie."
    },

    {
      id: "winning",
      name: "Winning",
      description: "Karty, których mechanika bezpośrednio wiąże się z wygrywaniem lokacji: działają lub zyskują efekt, gdy wygrywasz, próbują przejąć albo utrzymać przewagę, sprawdzają zwycięzcę lokacji albo reagują na przegrywanie, aby odwrócić jej wynik."
    },

    {
      id: "zero-downsides",
      name: "Zero / Downsides",
      description: "Mechaniczna rodzina kart posiadających negatywne efekty lub ograniczenia oraz kart, które usuwają, obchodzą albo wykorzystują takie wady."
    }
  ],

  teams: [
    {
      id: "annihilators",
      name: "Annihilators",
      description: "Najpotężniejsi kosmiczni bohaterowie należący do drużyny Annihilators."
    },
    {
      id: "celestial-eternals",
      name: "Celestials & Eternals",
      description: "Celestials oraz stworzeni przez nich Eternals, połączeni w jedną kosmiczną afiliację."
    },
    {
      id: "atlanteans",
      name: "Atlanteans",
      description: "Postacie należące do Atlantydy i jej atlantydzkiej społeczności."
    },
    {
      id: "agents-of-atlas",
      name: "Agents of Atlas",
      description: "Członkowie klasycznych i współczesnych inkarnacji Agents of Atlas."
    },
    {
      id: "x-force",
      name: "X-Force",
      description: "Najważniejsi i długoterminowi członkowie różnych inkarnacji X-Force."
    },
    {
      id: "new-mutants",
      name: "New Mutants",
      description: "Najważniejsi i długoterminowi członkowie drużyny New Mutants."
    },
    {
      id: "new-avengers",
      name: "New Avengers",
      description: "Najważniejsi członkowie oryginalnej oraz podziemnej inkarnacji New Avengers."
    },
    {
      id: "west-coast-avengers",
      name: "West Coast Avengers",
      description: "Najważniejsi członkowie klasycznych i współczesnych inkarnacji West Coast Avengers."
    },
    {
      id: "cabal",
      name: "Cabal",
      description: "Członkowie tajnej rady złoczyńców utworzonej przez Normana Osborna podczas Dark Reign."
    },
    {
      id: "illuminati",
      name: "Illuminati",
      description: "Członkowie tajnej rady najpotężniejszych i najbardziej wpływowych bohaterów Marvela."
    },
    {
      id: "dark-avengers",
      name: "Dark Avengers",
      description: "Norman Osborn i członkowie jego rządowej drużyny złoczyńców podszywających się pod Avengers."
    },
    {
      id: "brotherhood",
      name: "Brotherhood of Mutants",
      description: "Najważniejsi i wieloletni członkowie różnych inkarnacji Brotherhood of Mutants."
    },
    {
      id: "hellfire-club",
      name: "Hellfire Club",
      description: "Najważniejsi i długoterminowi członkowie Hellfire Club oraz jego Inner Circle."
    },
    {
      id: "horsemen",
      name: "Horsemen of Apocalypse",
      description: "Apocalypse, En Sabah Nur oraz postacie przedstawione jako jego Jeźdźcy Apokalipsy."
    },
    {
      id: "hydra",
      name: "Hydra",
      description: "Liderzy, agenci i najważniejsi członkowie organizacji Hydra."
    },
    {
      id: "heroes-for-hire",
      name: "Heroes for Hire",
      description: "Stali i najbardziej rozpoznawalni członkowie organizacji Heroes for Hire."
    },
    {
      id: "marvel-knights",
      name: "Marvel Knights",
      description: "Członkowie ulicznego sojuszu Marvel Knights działającego przeciwko przestępczości i zagrożeniom miejskim."
    },
    {
      id: "future-foundation",
      name: "Future Foundation",
      description: "Członkowie i najważniejsi współpracownicy organizacji Future Foundation związanej z Fantastyczną Czwórką."
    },
    {
      id: "defenders",
      name: "Defenders",
      description: "Członkowie klasycznych i ulicznych inkarnacji drużyny Defenders."
    },
    {
      id: "wakanda",
      name: "Wakanda",
      description: "Postacie należące do Wakandy oraz najważniejsze osoby i bóstwa związane z jej historią, kulturą i władzą."
    },
    {
      id: "black-order",
      name: "Black Order",
      description: "Thanos oraz członkowie elitarnej kosmicznej organizacji Black Order."
    },
    {
      id: "asgardians",
      name: "Asgardians",
      description: "Bogowie, mieszkańcy i bohaterowie związani z Asgardem."
    },

    {
      id: "avengers",
      name: "Avengers",
      description: "Członkowie Avengers."
    }
,

    {
      id: "fantastic4",
      name: "Fantastic Four",
      description: "Członkowie Fantastic Four."
    },

    {
      id: "guardians",
      name: "Guardians of the Galaxy",
      description: "Członkowie Guardians of the Galaxy."
    },

    {
      id: "inhumans",
      name: "Inhumans",
      description: "Członkowie Inhumans."
    },

    {
      id: "midnight-sons",
      name: "Midnight Sons",
      description: "Członkowie Midnight Sons."
    },

    {
      id: "shield",
      name: "S.H.I.E.L.D.",
      description: "Agenci i członkowie organizacji S.H.I.E.L.D."
    },

    {
      id: "sinister-six",
      name: "Sinister Six",
      description: "Członkowie Sinister Six."
    },

    {
      id: "spider-verse",
      name: "Spider-Verse",
      description: "Postacie należące do uniwersum Spider-Mana."
    },

    {
      id: "symbiotes",
      name: "Symbiotes",
      description: "Symbionty oraz postacie bezpośrednio z nimi związane."
    },

    {
      id: "thunderbolts",
      name: "Thunderbolts",
      description: "Członkowie Thunderbolts."
    },

    {
      id: "xmen",
      name: "X-Men",
      description: "Członkowie X-Men."
    },

    {
      id: "young-avengers",
      name: "Young Avengers",
      description: "Członkowie Young Avengers."
    }
  ],

  themes: [

    {
      id: "animals",
      name: "Animals",
      description: "Faktyczne zwierzęta, antropomorficzne zwierzęta oraz jednoznacznie zwierzęce istoty."
    }


,

    {
      id: "monsters",
      name: "Monsters",
      description: "Potwory."
    }
,

    {
      id: "robots-cyborgs",
      name: "Robots & Cyborgs",
      description: "Roboty, androidy, synthezoidy oraz postacie trwale połączone z cybernetyką, dla których mechaniczne ciało lub części są kluczowym elementem tożsamości. Nie obejmuje zwykłych użytkowników zbroi, mechów ani technologicznego wyposażenia."
    }

,

    {
      id: "antiheroes",
      name: "Antiheroes",
      description: "Postacie działające po stronie dobra lub jako protagoniści, ale stosujące moralnie szare, brutalne albo przestępcze metody."
    }

,

    {
      id: "villains",
      name: "Villains",
      description: "Złoczyńcy."
    }

  ,

    {
      id: "magicians",
      name: "Magicians",
      description: "Magowie, czarownicy, wiedźmy oraz postacie aktywnie używające magii i mistycznych mocy."
    },

    {
      id: "cosmic-entities",
      name: "Cosmic Entities",
      description: "Kosmiczne byty, abstrakty i istoty o ponadludzkiej, uniwersalnej lub międzywymiarowej skali mocy."
    }
,

    {
      id: "geniuses",
      name: "Geniuses",
      description: "Wybitni naukowcy, wynalazcy, konstruktorzy i strategiczni geniusze, których intelekt jest jedną z głównych cech postaci."
    }
,

    {
      id: "animal-themed",
      name: "Animal-Themed",
      description: "Postacie niebędące faktycznymi zwierzętami, ale wyraźnie nawiązujące do istniejącego zwierzęcia przez nazwę, wygląd, kostium, moce albo motyw."
    }
],

  special: [
    {
      id: "featured",
      name: "Featured",
      description: "Karty wyróżnione."
    },

    {
      id: "wind1",
      name: "Winning Draft 1",
      description: "Karta znajdowała się w zwycięskim decku Draftu 1."
    },

    {
      id: "wind2",
      name: "Winning Draft 2",
      description: "Karta znajdowała się w zwycięskim decku Draftu 2."
    },

    {
      id: "wind3",
      name: "Winning Draft 3",
      description: "Karta znajdowała się w zwycięskim decku Draftu 3."
    },

    {
      id: "wind4",
      name: "Winning Draft 4",
      description: "Karta znajdowała się w zwycięskim decku Draftu 4."
    },

    {
      id: "wind5",
      name: "Winning Draft 5",
      description: "Karta znajdowała się w zwycięskim decku Draftu 5."
    },

    {
      id: "wind6",
      name: "Winning Draft 6",
      description: "Karta znajdowała się w zwycięskim decku Draftu 6."
    },

    {
      id: "wind7",
      name: "Winning Draft 7",
      description: "Karta znajdowała się w zwycięskim decku Draftu 7."
    },

    {
      id: "wind8",
      name: "Winning Draft 8",
      description: "Karta znajdowała się w zwycięskim decku Draftu 8."
    },

    {
      id: "wind9",
      name: "Winning Draft 9",
      description: "Karta znajdowała się w zwycięskim decku Draftu 9."
    },

    {
      id: "wind10",
      name: "Winning Draft 10",
      description: "Karta znajdowała się w zwycięskim decku Draftu 10."
    },

    {
      id: "wind11",
      name: "Winning Draft 11",
      description: "Karta znajdowała się w zwycięskim decku Draftu 11."
    },

    {
      id: "wind12",
      name: "Winning Draft 12",
      description: "Karta znajdowała się w zwycięskim decku Draftu 12."
    },

    {
      id: "wind13",
      name: "Winning Draft 13",
      description: "Karta znajdowała się w zwycięskim decku Draftu 13."
    },

    {
      id: "wind14",
      name: "Winning Draft 14",
      description: "Karta znajdowała się w zwycięskim decku Draftu 14."
    },

    {
      id: "wind15",
      name: "Winning Draft 15",
      description: "Karta znajdowała się w zwycięskim decku Draftu 15."
    },

    {
      id: "wind16",
      name: "Winning Draft 16",
      description: "Karta znajdowała się w zwycięskim decku Draftu 16."
    },

    {
      id: "wind17",
      name: "Winning Draft 17",
      description: "Karta znajdowała się w zwycięskim decku Draftu 17."
    },

    {
      id: "wind18",
      name: "Winning Draft 18",
      description: "Karta znajdowała się w zwycięskim decku Draftu 18."
    },

    {
      id: "wind19",
      name: "Winning Draft 19",
      description: "Karta znajdowała się w zwycięskim decku Draftu 19."
    },

    {
      id: "wind20",
      name: "Draft 20",
      description: "Karta powiązana z Draftem 20."
    },

    {
      id: "wind21",
      name: "Draft 21",
      description: "Karta powiązana z Draftem 21."
    },

    {
      id: "wind22",
      name: "Draft 22",
      description: "Karta powiązana z Draftem 22."
    },

    {
      id: "wind23",
      name: "Draft 23",
      description: "Karta powiązana z Draftem 23."
    },

    {
      id: "wind24",
      name: "Draft 24",
      description: "Karta powiązana z Draftem 24."
    },

    {
      id: "wind25",
      name: "Draft 25",
      description: "Karta powiązana z Draftem 25."
    },

    {
      id: "wind26",
      name: "Draft 26",
      description: "Karta powiązana z Draftem 26."
    }
  ]

};
