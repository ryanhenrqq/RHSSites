const formRoot = document.getElementById("contact-email-form")

// Aviso de formulario desativado temporario
formRoot.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Envio de formulario desativado! Aguarde atualização futura.")

    setTimeout(goTo404, 1000)
})