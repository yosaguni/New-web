const languageSelect = document.getElementById("language");

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

