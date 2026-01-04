let headerImgStatus = 0 // 0: logo, 1: foto
function changeHeaderImage() {
    const element = document.getElementById("image-head")
    element.style.opacity = 0

    setTimeout(() => {
        
        if (headerImgStatus == 1) {
            const srcSet = "./src/res/logo/logo-image.png"
            element.src = srcSet
            headerImgStatus = 0
        } else if (headerImgStatus == 0) {
            const srcSet = "./src/res/logo/my-photo.jpg"
            element.src = srcSet
            headerImgStatus = 1
        } else {
            console.error("Erro na troca automatica da foto, retornando ao padrão")
            const srcSet = "./src/res/logo/logo-image.png"
            element.src = srcSet
        }
        element.style.opacity = 1
    }, 400)

}

setInterval(changeHeaderImage, 3000)