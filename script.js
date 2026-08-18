// =========================
// スクロールアニメーション
// =========================

const sections = document.querySelectorAll(
    ".intro, .about, .menu, .gallery-section, .access"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    observer.observe(section);

});


// =========================
// ヘッダーの変化 + リングの回転
// =========================

const header = document.querySelector("header");
const logoRing = document.getElementById("logoRing");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }


    if (logoRing && !prefersReducedMotion) {

        const rotation = window.scrollY * 0.15;

        logoRing.style.setProperty("--scroll-rotate", `${rotation}deg`);

    }

});


// =========================
// カスタムカーソル（年輪）
// =========================

const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;


if (supportsFinePointer && !prefersReducedMotion) {

    document.body.classList.add("cursor-active");

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    window.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;

    });


    function animateRing() {

        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;

        requestAnimationFrame(animateRing);

    }

    animateRing();


    const hoverTargets = document.querySelectorAll(
        "a, button, .menu-item, .gallery div"
    );

    hoverTargets.forEach((el) => {

        el.addEventListener("mouseenter", () => {
            ring.classList.add("hovering");
        });

        el.addEventListener("mouseleave", () => {
            ring.classList.remove("hovering");
        });

    });

}