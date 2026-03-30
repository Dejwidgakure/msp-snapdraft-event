// =============================
// JEFF ENGINE 2.1 – COSMIC BURST
// =============================

document.addEventListener("DOMContentLoaded", () => {

    const JEFF_SIZE = 130;
    const BASE_SPEED = 2.4;
    const TRAIL_INTERVAL = 60; // więcej traila niż wcześniej

    const jeffImages = [
        "jeff_love.png",
        "jeff_normal.png",
        "jeff_shocked.png",
        "jeff_angry.png"
    ];

    const jeffLayer = document.createElement("div");
    jeffLayer.id = "jeffLayer";
    document.body.appendChild(jeffLayer);

    const style = document.createElement("style");
    style.innerHTML = `
        #jeffLayer {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 2;
        }

        .jeff {
            position: absolute;
            width: ${JEFF_SIZE}px;
            will-change: transform;
        }

        .jeffTrail, .jeffBurst {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);

    const jeff = document.createElement("img");
    jeff.className = "jeff";
    jeff.src = jeffImages[0];
    jeffLayer.appendChild(jeff);

    let x = 300;
    let y = 200;
    let vx = BASE_SPEED;
    let vy = BASE_SPEED * 0.9;
    let rotation = 0;
    let lastFaceIndex = 0;
    let lastTrailTime = 0;

    function randomFace() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * jeffImages.length);
        } while (newIndex === lastFaceIndex);

        lastFaceIndex = newIndex;
        jeff.src = jeffImages[newIndex];
    }

    function currentTrailColors() {

        // angry → czerwony
        if (lastFaceIndex === 3) {
            return ["#ff3b3b", "#ff6b6b", "#ff0000"];
        }

        return ["white", "#9fd3ff", "#caa6ff", "#fff3a1"];
    }

    function spawnTrail(timestamp) {

        if (timestamp - lastTrailTime < TRAIL_INTERVAL) return;
        lastTrailTime = timestamp;

        const colors = currentTrailColors();

        for (let i = 0; i < 2; i++) { // więcej niż wcześniej

            const star = document.createElement("div");
            star.className = "jeffTrail";

            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 3 + 2;

            star.style.width = size + "px";
            star.style.height = size + "px";
            star.style.background = color;
            star.style.boxShadow = `
                0 0 ${size * 6}px ${color},
                0 0 ${size * 12}px ${color}
            `;

            star.style.left = (x + JEFF_SIZE * 0.4 + (Math.random() * 20 - 10)) + "px";
            star.style.top = (y + JEFF_SIZE * 0.7 + (Math.random() * 20 - 10)) + "px";

            jeffLayer.appendChild(star);

            star.animate(
                [
                    { opacity: 1, transform: "scale(1)" },
                    { opacity: 0, transform: "scale(0.3)" }
                ],
                { duration: 600, easing: "ease-out" }
            );

            setTimeout(() => star.remove(), 600);
        }
    }

    function spawnBurst() {

        const colors = currentTrailColors();

        for (let i = 0; i < 12; i++) {

            const particle = document.createElement("div");
            particle.className = "jeffBurst";

            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 6 + 4;

            particle.style.width = size + "px";
            particle.style.height = size + "px";
            particle.style.background = color;
            particle.style.boxShadow = `
                0 0 ${size * 8}px ${color},
                0 0 ${size * 14}px ${color}
            `;

            const centerX = x + JEFF_SIZE / 2;
            const centerY = y + JEFF_SIZE / 2;

            particle.style.left = centerX + "px";
            particle.style.top = centerY + "px";

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 80 + 40;

            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;

            jeffLayer.appendChild(particle);

            particle.animate(
                [
                    { transform: "translate(0,0)", opacity: 1 },
                    { transform: `translate(${dx}px, ${dy}px)`, opacity: 0 }
                ],
                { duration: 700, easing: "ease-out" }
            );

            setTimeout(() => particle.remove(), 700);
        }
    }

    function bounce() {

        const w = window.innerWidth;
        const h = window.innerHeight;
        let bounced = false;

        if (x <= 0 || x + JEFF_SIZE >= w) {
            vx *= -1;
            bounced = true;
        }

        if (y <= 0 || y + JEFF_SIZE >= h) {
            vy *= -1;
            bounced = true;
        }

        if (bounced) {

            randomFace();
            spawnBurst();

            vx += (Math.random() - 0.5) * 0.6;
            vy += (Math.random() - 0.5) * 0.6;
            rotation += (Math.random() - 0.5) * 40;
        }
    }

    function animate(timestamp) {

        x += vx;
        y += vy;
        rotation += 0.5;

        bounce();

        jeff.style.transform = `
            translate(${x}px, ${y}px)
            rotate(${rotation}deg)
        `;

        spawnTrail(timestamp);

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});