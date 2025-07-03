// const button {
//     germany = document.querySelector(".button__product"),
//     england = document.querySelector(".button__product")
// }



const buttonFrance = document.getElementById("product__france-button");
const buttonGermany = document.getElementById("product__germany-button");
const buttonEngland = document.getElementById("product__england-button");

const contentFrance = document.getElementById("content__france");
const contentGermany = document.getElementById("content__germany");
const contentEngland = document.getElementById("content__england");


// buttonFrance.addEventListener("click", function() {
//     console.log("Продукты: Франция");
//     buttonFrance.style.background = "#376b44"
//     buttonFrance.style.color = "#FFF"
//     buttonGermany.style.background = "#d4e8d9"
//     buttonGermany.style.color = "#000" 
//     buttonEngland.style.background = "#d4e8d9"
//     buttonEngland.style.color = "#000"
// })

    contentGermany.style.display = "none";
    contentEngland.style.display = "none";

buttonFrance.addEventListener("click", function() {
    console.log("Продукты: Франция");
    buttonFrance.classList.toggle("voice-button__product");
    buttonGermany.classList.remove("voice-button__product");
    buttonEngland.classList.remove("voice-button__product");
    contentFrance.style.display = "grid";
    contentEngland.style.display = "none";
    contentGermany.style.display = "none";

})

buttonGermany.addEventListener("click", function() {
    console.log("Продукты: Германия");
    buttonGermany.classList.toggle("voice-button__product");
    buttonEngland.classList.remove("voice-button__product");
    buttonFrance.classList.remove("voice-button__product");
    contentFrance.style.display = "none";
    contentEngland.style.display = "none";
    contentGermany.style.display = "grid";
    // contentGermany.style.display = "grid";
})

buttonEngland.addEventListener("click", function() {
    console.log("Продукты: Англия");
    buttonEngland.classList.toggle("voice-button__product");
    buttonGermany.classList.remove("voice-button__product");
    buttonFrance.classList.remove("voice-button__product");
    contentFrance.style.display = "none";
    contentGermany.style.display = "none";
    contentEngland.style.display = "grid";
})


// buttonGermany.addEventListener("click", function() {
//     console.log("Продукты: Германия");
//     buttonGermany.style.background = "#376b44"
//     buttonGermany.style.color = "#FFF"
//     buttonFrance.style.background = "#d4e8d9"
//     buttonFrance.style.color = "#000" 
//     buttonEngland.style.background = "#d4e8d9"
//     buttonEngland.style.color = "#000"
// })

// buttonEngland.addEventListener("click", function() {
//     console.log("Продукты: Англия");
//     buttonEngland.style.background = "#376b44"
//     buttonEngland.style.color = "#FFF"
//     buttonGermany.style.background = "#d4e8d9"
//     buttonGermany.style.color = "#000" 
//     buttonFrance.style.background = "#d4e8d9"
//     buttonFrance.style.color = "#000"
// })