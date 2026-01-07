const formRoot = document.getElementById("contact-email-form")

// Aviso de formulario desativado temporario
formRoot.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Envio de formulario desativado! Aguarde atualização futura.")

    const backPanel = document.getElementById("form-backpanel")
    const frontPanel = document.getElementById("form-frontpanel")
    backPanel.style.display = "flex"
    frontPanel.style.display = "none"

    formRoot.reset()
})