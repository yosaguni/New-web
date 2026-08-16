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
function showTown(town) {

    const townInfo = document.getElementById("town-info");

    if (town === "honmachi") {

        townInfo.innerHTML = `
            <h2>本町</h2>

            <img src="honmachi.jpg" alt="本町の写真">

            <h3>本町の観光スポット</h3>

            <p>
                本町周辺のおすすめスポットを紹介します。
            </p>
        `;

    }

    else if (town === "asahimachi") {

        townInfo.innerHTML = `
            <h2>旭町</h2>

            <img src="asahimachi.jpg" alt="旭町の写真">

            <h3>旭町の観光スポット</h3>

            <p>
                旭町周辺のおすすめスポットを紹介します。
            </p>
        `;

    }

    else if (town === "shinmeicho") {

        townInfo.innerHTML = `
            <h2>神明町</h2>

            <img src="shinmeicho.jpg" alt="神明町の写真">

            <h3>神明町の観光スポット</h3>

            <p>
                神明町周辺のおすすめスポットを紹介します。
            </p>
        `;

    }

    else if (town === "hinodemachi") {

        townInfo.innerHTML = `
            <h2>日の出町</h2>

            <img src="hinodemati.jpg" alt="日の出町の写真">

            <h3>日の出町の観光スポット</h3>

            <p>
                日の出町周辺のおすすめスポットを紹介します。
            </p>
        `;

    }

    else if (town === "yanagimachi") {

        townInfo.innerHTML = `
            <h2>柳町</h2>

            <img src="yanagimachi.jpg" alt="柳町の写真">

            <h3>柳町の観光スポット</h3>

            <p>
                柳町周辺のおすすめスポットを紹介します。
            </p>
        `;

    }

}