const container = document.querySelector(".container")
const fotos =  [
    { name: "Agendamento", image: "images/calendar.png" },
    { name: "Check-In", image: "images/place.png" },
    { name: "Minhas Reservas", image: "images/book.png" }, 
    { name: "Meu Perfil", image: "images/user.png" }
]

const showFotos = () => {
    let output = ""
    fotos.forEach (
        ({ name, image}) =>
        (output += `
            <div class="card">
            <img class="card--avatar" src=${image} />
            <h1 class="card--title">${name}</h1>
            <a class="card--link" href="#">Teste</a>
            </div>
        `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showFotos)