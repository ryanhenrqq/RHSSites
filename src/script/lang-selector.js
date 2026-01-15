const languageSelect = document.getElementById("lang-sel")

languageSelect.addEventListener("change", function() {
    const enMainElem = document.getElementById("en-version-index")
    const ptMainElem = document.getElementById("pt-version-index")
    if (this.value === "port") {
        ptMainElem.style.display = "flex"
        enMainElem.style.display = "none"
        console.log("PT SELECCIONADO")
    } else if (this.value === "eng") {
        ptMainElem.style.display = "none"
        enMainElem.style.display = "flex"
        console.log("EN SELECCIONADO")
    }
})