const formRoot = document.getElementById("contact-email-form")

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
            window.location.replace("./submited.html")
        } else {
            console.error("Erro no envio do formulario: Dentro da condicional do submit")
            setTimeout(goTo500, 5000)
        }
    } catch(err) {
        console.error(err)
        setTimeout(goTo500, 5000)
    }
})