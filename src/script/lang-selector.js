const languageSelect = document.getElementById("lang-sel")

languageSelect.addEventListener("change", function() {
    const enMainElem = document.getElementById("en-version-index")
    const ptMainElem = document.getElementById("pt-version-index")
    const enFooterElem = document.getElementById("en-version-footer-index")
    const ptFooterElem = document.getElementById("pt-version-footer-index")
    const portfolioElem = document.getElementById("lang-header-portfolio")
    const contactElem = document.getElementById("lang-header-contact")

    if (this.value === "port") {
        ptMainElem.style.display = "flex"
        enMainElem.style.display = "none"
        ptFooterElem.style.display = "flex"
        enFooterElem.style.display = "none"
        portfolioElem.textContent = "Portfólio"
        contactElem.textContent = "Contato"
        console.log("PT SELECCIONADO")
    } else if (this.value === "eng") {
        ptMainElem.style.display = "none"
        enMainElem.style.display = "flex"
        ptFooterElem.style.display = "none"
        enFooterElem.style.display = "flex"
        portfolioElem.textContent = "Portfólio"
        contactElem.textContent = "Contact"
        console.log("EN SELECCIONADO")
    }
})