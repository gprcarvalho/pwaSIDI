const container = document.querySelector(".container")
const fotos =  [
    { name: "Agendamento", image: "images/agendamento.png" },
    { name: "Check-In", image: "images/checkin.png" },
    { name: "Minhas Reservas", image: "images/minhasreservas.png" }, 
    { name: "Meu Perfil", image: "images/perfil.png" }
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