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
function goToIgPort() {
    window.open("https://www.instagram.com/rhs.code/")
}
function goToIgEng() {
    window.open("https://www.instagram.com/rhs.codev/")
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
    } else if (index === 2) {
        localStorage.setItem("pgName-bug-report", "Flood The Cookie")
        window.open("./report.html")
    } else {
        goTo404()
    }
}
function goToOoniquePass(index) {
    if (index === 0) {
        window.open("https://ryanhenrqq.github.io/OoniquePass/")
    } else if (index === 1) {
        window.open("https://www.github.com/ryanhenrqq/OoniquePass/")
    } else if (index === 2) {
        localStorage.setItem("pgName-bug-report", "OoniquePass")
        window.open("./report.html")
    } else {
        goTo404()
    }
}
function goToToDoTasks(index) {
    if (index === 0) {
        window.open("https://ryanhenrqq.github.io/ToDoTasks/")
    } else if (index === 1) {
        window.open("https://www.github.com/ryanhenrqq/ToDoTasks/")
    } else if (index === 2) {
        localStorage.setItem("pgName-bug-report", "To-Do Tasks")
        window.open("./report.html")
    } else {
        goTo404()
    }
}
function goToOpenWeatherApp(index) {
    if (index === 0) {
        window.open("https://ryanhenrqq.github.io/ClimaComOpenWeather/")
    } else if (index === 1) {
        window.open("https://www.github.com/ryanhenrqq/ClimaComOpenWeather/")
    } else if (index === 2) {
        localStorage.setItem("pgName-bug-report", "Open Weather App")
        window.open("./report.html")
    } else {
        goTo404()
    }
}
function goToKalcCalculadora(index) {
    if (index === 0) {
        window.open("https://ryanhenrqq.github.io/KalcCalculadora/")
    } else if (index === 1) {
        window.open("https://www.github.com/ryanhenrqq/KalcCalculadora/")
    } else if (index === 2) {
        localStorage.setItem("pgName-bug-report", "Kalc Calculadora - React Version")
        window.open("./report.html")
    } else {
        goTo404()
    }
}
function goToKalcCalculadoraLite(index) {
    if (index === 0) {
        window.open("https://ryanhenrqq.github.io/KalcCalculadoraLite/")
    } else if (index === 1) {
        window.open("https://www.github.com/ryanhenrqq/KalcCalculadoraLite/")
    } else if (index === 2) {
        localStorage.setItem("pgName-bug-report", "Kalc Calculadora Lite - Android Studio")
        window.open("./report.html")
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