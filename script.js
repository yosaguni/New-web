// ===== 言語切り替え =====

const languageSelect = document.getElementById("language");

if (languageSelect) {

    languageSelect.addEventListener("change", function () {

        const language = this.value;

        const elements = document.querySelectorAll("[data-ja]");

        elements.forEach(function (element) {

            if (language === "en") {
                element.textContent = element.getAttribute("data-en");
            } else {
                element.textContent = element.getAttribute("data-ja");
            }

        });

    });

}


// ===== 観光スポットのアニメーション =====

const cards = document.querySelectorAll(".card");

if (cards.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    });

    cards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.6s";

        observer.observe(card);

    });

}
function toggleTown() {

    const townList = document.getElementById("town-list");

    if (townList.style.display === "none" || townList.style.display === "") {
        townList.style.display = "block";
    } else {
        townList.style.display = "none";
    }

}
