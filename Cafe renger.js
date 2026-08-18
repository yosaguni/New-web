// =========================================================
// cafes-data.js の内容をもとに、カフェカードとエリアフィルターを自動で並べる
// このファイルは基本的に編集不要です。
// =========================================================

function cafeCardHTML(cafe) {

    const ratingText = Number(cafe.rating).toFixed(1);

    return `
        <a class="cafe-card" href="${cafe.link || "#"}" data-area="${cafe.area}">
            <div class="cafe-card-image">
                <img src="${cafe.image}" alt="${cafe.name}">
            </div>

            <div class="cafe-card-body">
                <p class="cafe-card-genre">${cafe.genre} ・ ${cafe.area}</p>

                <h3>${cafe.name}</h3>

                <p class="cafe-card-comment">${cafe.comment}</p>

                <div class="rating-row">
                    <span class="stars stars--light" style="--rating:${cafe.rating}"></span>
                    <span class="rating-num rating-num--light">${ratingText} / 5.0</span>
                </div>

                <div class="cafe-card-meta">
                    <span>${cafe.hours}</span>
                    <span>定休日: ${cafe.closed}</span>
                </div>
            </div>
        </a>
    `;

}


function renderCafes() {

    const grid = document.getElementById("cafeGrid");
    const filters = document.getElementById("areaFilters");

    if (!grid || typeof cafes === "undefined") {
        return;
    }

    // カードを描画
    grid.innerHTML = cafes.map(cafeCardHTML).join("");

    if (!filters) {
        return;
    }

    // area の値から、重複なしのエリア一覧を作る（データに出てくる順）
    const areas = [...new Set(cafes.map((cafe) => cafe.area))];

    const allButton = `<button class="area-filter-btn active" data-filter="all">すべて</button>`;

    const areaButtons = areas
        .map((area) => `<button class="area-filter-btn" data-filter="${area}">${area}</button>`)
        .join("");

    filters.innerHTML = allButton + areaButtons;

    filters.addEventListener("click", (e) => {

        const button = e.target.closest(".area-filter-btn");

        if (!button) {
            return;
        }

        filters.querySelectorAll(".area-filter-btn").forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selected = button.dataset.filter;

        grid.querySelectorAll(".cafe-card").forEach((card) => {

            const match = selected === "all" || card.dataset.area === selected;

            card.style.display = match ? "" : "none";

        });

    });

}


document.addEventListener("DOMContentLoaded", renderCafes);