// =========================================================
// cafes-data.js の内容をもとに、カフェカード・スワイプ帯・
// エリアフィルターを自動で並べる
// このファイルは基本的に編集不要です。
// =========================================================

function cafeCardHTML(cafe, index) {

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


function swipeItemHTML(cafe, index) {

    return `
        <button class="swipe-item" data-index="${index}" style="background-image:url('${cafe.image}')">
            <span class="swipe-item-label">${cafe.name}</span>
        </button>
    `;

}


function renderCafes() {

    const grid = document.getElementById("cafeGrid");
    const filters = document.getElementById("areaFilters");
    const strip = document.getElementById("swipeStrip");

    if (typeof cafes === "undefined") {
        return;
    }

    // カードを描画
    if (grid) {
        grid.innerHTML = cafes.map(cafeCardHTML).join("");
    }

    // スワイプ帯を描画
    if (strip) {

        strip.innerHTML = cafes.map(swipeItemHTML).join("");

        strip.querySelectorAll(".swipe-item").forEach((item) => {

            item.addEventListener("click", () => {

                const cafe = cafes[Number(item.dataset.index)];

                if (cafe) {
                    openCafeModal(cafe);
                }

            });

        });

    }

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


// =========================================================
// 詳細モーダル
// =========================================================

function openCafeModal(cafe) {

    const overlay = document.getElementById("modalOverlay");

    if (!overlay) {
        return;
    }

    document.getElementById("modalImage").src = cafe.image;
    document.getElementById("modalImage").alt = cafe.name;
    document.getElementById("modalGenre").textContent = `${cafe.genre} ・ ${cafe.area}`;
    document.getElementById("modalName").textContent = cafe.name;
    document.getElementById("modalComment").textContent = cafe.comment;
    document.getElementById("modalStars").style.setProperty("--rating", cafe.rating);
    document.getElementById("modalRatingNum").textContent = `${Number(cafe.rating).toFixed(1)} / 5.0`;
    document.getElementById("modalAddress").textContent = cafe.address;
    document.getElementById("modalHours").textContent = cafe.hours;
    document.getElementById("modalClosed").textContent = cafe.closed;

    overlay.classList.add("open");

    document.body.style.overflow = "hidden";

}


function closeCafeModal() {

    const overlay = document.getElementById("modalOverlay");

    if (!overlay) {
        return;
    }

    overlay.classList.remove("open");

    document.body.style.overflow = "";

}


document.addEventListener("DOMContentLoaded", () => {

    renderCafes();

    const overlay = document.getElementById("modalOverlay");
    const closeBtn = document.getElementById("modalClose");

    if (closeBtn) {
        closeBtn.addEventListener("click", closeCafeModal);
    }

    if (overlay) {

        overlay.addEventListener("click", (e) => {

            if (e.target === overlay) {
                closeCafeModal();
            }

        });

    }

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {
            closeCafeModal();
        }

    });

});