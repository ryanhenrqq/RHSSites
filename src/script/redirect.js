function goToGithub() {
    window.open("https://www.github.com/ryanhenrqq")
}
function goToPortfolio() {
    window.location.replace("./pg/portfolio.html")
}
function goContact() {
    window.location.replace("./pg/contact.html")
}
function goToEmail() {
    window.open("mailto:rhs.sites.8116@gmail.com")
}
function goToIg() {
    window.open("https://www.instagram.com/rhs.code/")
}
function goToNewPipe() {
    window.open("https://newpipe.net/")
}
// Portfolio
function goToFloodTheCookie(index) {
    if (index === 0) {
        window.open("https://ryanhenrqq.github.io/FloodTheCookie/")
    } else if (index === 1) {
        window.open("https://www.github.com/ryanhenrqq/FloodTheCookie/")
    } else {
        goTo404()
    }
}
function goToOoniquePass(index) {
    if (index === 0) {
        window.open("https://ryanhenrqq.github.io/OoniquePass/")
    } else if (index === 1) {
        window.open("https://www.github.com/ryanhenrqq/OoniquePass/")
    } else {
        goTo404()
    }
}
function goToToDoTasks(index) {
    if (index === 0) {
        window.open("https://ryanhenrqq.github.io/ToDoTasks/")
    } else if (index === 1) {
        window.open("https://www.github.com/ryanhenrqq/ToDoTasks/")
    } else {
        goTo404()
    }
}
function goToOpenWeatherApp(index) {
    if (index === 0) {
        window.open("https://ryanhenrqq.github.io/ClimaComOpenWeather/")
    } else if (index === 1) {
        window.open("https://www.github.com/ryanhenrqq/ClimaComOpenWeather/")
    } else {
        goTo404()
    }
}
function goToKalcCalculadora(index) {
    if (index === 0) {
        window.open("https://ryanhenrqq.github.io/KalcCalculadora/")
    } else if (index === 1) {
        window.open("https://www.github.com/ryanhenrqq/KalcCalculadora/")
    } else {
        goTo404()
    }
}
function goToKalcCalculadoraLite(index) {
    if (index === 0) {
        window.open("https://ryanhenrqq.github.io/KalcCalculadoraLite/")
    } else if (index === 1) {
        window.open("https://www.github.com/ryanhenrqq/KalcCalculadoraLite/")
    } else {
        goTo404()
    }
}
// go back to home (paginas dentro de pg)
function goHome() {
    window.location.replace("../index.html")
}
function goTo404() {
    window.open("./except/404.html")
}
function goTo500() {
    window.open("./except/500.html")
}