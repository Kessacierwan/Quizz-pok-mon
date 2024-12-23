let img = document.querySelector("#imgpoke")
let namepoke = document.querySelector('#namepoke')
let divreponse = document.querySelector('#divreponse')
let count = 0
let shiny = false
let scorediv = document.querySelector("#scorediv")
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function changepokemon() {
    let randompokemon = random(0, 151)

    fetch("https://tyradex.vercel.app/api/v1/pokemon/" + randompokemon).then((response) => {
        response.json().then((data) => {
            namepoke = data.name.fr
            if (shiny == false)
                img.src = data.sprites.regular
            img.style.color = "red"
            if (shiny == true)
                img.src = data.sprites.shiny
            img.style.color = "red"
        })
    })
}

changepokemon()
label = document.querySelector("#label")


document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    let inputtext = casereponse.value;
    let name = inputtext.trim(); // ajout de trim() pour enlever les espaces

    if (name.toLowerCase() === namepoke.toLowerCase()) {
        count++
        divreponse.innerHTML = "Bonne réponse!";
        divreponse.style.color = "red"
        divreponse.style.fontSize = "25px"
        divreponse.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
        scorediv.innerHTML = "votre score : " + count;
        changepokemon()
        casereponse.value = ""

    } else {
        count--
        divreponse.innerHTML = "Mauvaise réponse, essayez à nouveau!";
        divreponse.style.color = "red"
        divreponse.style.fontSize = "25px"
        divreponse.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
        casereponse.value = ""

    }
});





let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let button4 = document.querySelector("#button4")




button1.addEventListener('click', () => {
    img.style.filter = "contrast(100%)";
});

button2.addEventListener('click', () => {
    img.style.filter = "contrast(0%)";
});

button3.addEventListener('click', () => {
    shiny = !shiny
    changepokemon()
    console.log(shiny);
});

button4.addEventListener('click', () => {
    changepokemon()
});

