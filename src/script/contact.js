const formRoot = document.getElementById("contact-email-form")
const formRpo = document.getElementById("contact-report-form")

function changeToSubmited() {
    const subElem = document.getElementById("submitted")
    const frontElem = document.getElementById("form-frontpanel")
    subElem.style.display = "flex"
    frontElem.style.display = "none"
}

if (formRoot) {
    // Aviso de formulario desativado temporario
    formRoot.addEventListener("submit", async (e) => {
        e.preventDefault()
        const formData = new FormData(formRoot)

        try {
            const response = await fetch("https://formspree.io/f/mbddjrwd", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            })

            if (response.ok) {
                changeToSubmited()
            } else {
                console.error("Erro no envio do formulario: Dentro da condicional do submit")
                setTimeout(goTo500, 5000)
            }
        } catch(err) {
            console.error(err)
            setTimeout(goTo500, 5000)
        }
    })

}

if (formRpo) {
    // necessario corrigir bug - envio de formulario incorreto - formRoot is null 5:1
    formRpo.addEventListener("submit", async (e) => {
        e.preventDefault()
        const formData = new FormData(formRpo)

        try {
            const response = await fetch("https://formspree.io/f/mpqpyykr", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            })

            if (response.ok) {
                changeToSubmited()
            } else {
                console.error("Erro no envio do formulario: Dentro da condicional do submit")
                setTimeout(goTo500, 5000)
            }
        } catch(err) {
            console.error(err)
            setTimeout(goTo500, 5000)
        }
    })
}
