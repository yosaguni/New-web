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
// ヘッダーの変化
// =========================

const header = document.querySelector("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});