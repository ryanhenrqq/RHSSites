const socialMedia = document.querySelectorAll("header nav img")

socialMedia.forEach((link, index) => {
    link.addEventListener("click", function() {
        switch (index) {
            case 0:
                if (confirm("Você será redirecionado para instagram.com")) {
                    window.open("https://www.instagram.com/rhs.sites/")
                    break
                } else {
                    break
                }
            case 1:
                if (confirm("Você será redirecionado para o seu site padrão de E-Mail,  na função de envio do mesmo")) {
                    window.open("mailto:rhs.sites.8116@gmail.com?subject=Pedido%20De%20Criação%20de%20Site")
                    break
                } else {
                    break
                }
            default:
                alert("oi")
                break
        }
    })
})