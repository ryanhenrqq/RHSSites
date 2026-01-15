const languageSelect = document.getElementById("lang-sel")
const languageSelectBd = document.querySelectorAll(".lang-sel-body")
document.addEventListener("DOMContentLoaded", function() {
    languageSelect.value = "port"
    languageSelectBd.forEach(item => {
        item.value = "port"
    })
})
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
        languageSelectBd.forEach(val => {
            val.value = "port"
        })
        console.log("PT SELECCIONADO")
    } else if (this.value === "eng") {
        ptMainElem.style.display = "none"
        enMainElem.style.display = "flex"
        ptFooterElem.style.display = "none"
        enFooterElem.style.display = "flex"
        portfolioElem.textContent = "Portfólio"
        contactElem.textContent = "Contact"
        languageSelectBd.forEach(val => {
            val.value = "eng"
        })
        console.log("EN SELECCIONADO")
    }
})

languageSelectBd.forEach(item => {
    item.addEventListener("change", function() {
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
            languageSelect.value = "port"
            console.log("PT SELECCIONADO no bd")
            console.log(this.value)
            languageSelectBd.forEach(childValue => {
                childValue.value = "port"
            })
        } else if (this.value === "eng") {
            ptMainElem.style.display = "none"
            enMainElem.style.display = "flex"
            ptFooterElem.style.display = "none"
            enFooterElem.style.display = "flex"
            portfolioElem.textContent = "Portfólio"
            contactElem.textContent = "Contact"
            languageSelect.value = "eng"
            console.log("EN SELECCIONADO no bd")
            console.log(this.value)
            languageSelectBd.forEach(childValue => {
                childValue.value = "eng"
            })
        }
    })
})

