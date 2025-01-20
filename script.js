const renderOne = document.getElementById("render-one")
const renderTwo = document.getElementById("render-two")
const renderThree = document.getElementById("render-three")
const renderFour = document.getElementById("render-four")
const renderFive = document.getElementById("render-five")

document.addEventListener("click", (e) => {
    if(e.target.id === "display-one") {
        renderOne.style.display = "block"
        renderTwo.style.display = "none"
        renderThree.style.display = "none"
        renderFour.style.display = "none"
        renderFive.style.display = "none"
    }
    if(e.target.id === "display-two") {
       renderTwo.style.display = "block"
       renderThree.style.display = "none"
        renderFour.style.display = "none"
        renderFive.style.display = "none"
        renderOne.style.display = "none"
    }
    if(e.target.id === "display-three") {
        renderThree.style.display = "block"
        renderFour.style.display = "none"
        renderFive.style.display = "none"
        renderOne.style.display = "none"
        renderTwo.style.display = "none"
    }
    if(e.target.id === "display-four") {
        renderFour.style.display = "block"
        renderFive.style.display = "none"
        renderOne.style.display = "none"
        renderTwo.style.display = "none"
        renderThree.style.display = "none"
    }
    if(e.target.id === "display-five") {
        renderFive.style.display = "block"
        renderOne.style.display = "none"
        renderTwo.style.display = "none"
        renderThree.style.display = "none"
        renderFour.style.display = "none"
    }
})
