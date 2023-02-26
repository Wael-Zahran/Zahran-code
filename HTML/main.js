let compArr = ["paper.jpg","Rock.jpg", "Scis.jpg"]
let btns = document.querySelectorAll(".opt")
let playerChoice = document.getElementById("playerS")
let computerChoice = document.getElementById("computerS")
let resultD = document.getElementById("resultD")
let yScore = document.getElementById("yScore")
let cScore = document.getElementById("cScore")
let playerName = document.getElementById("playerName")
let nameInput = document.getElementById("nameInput")
let playBtn = document.getElementById("playBtn")
let playerCounter = 1
let computerCounter = 1
let player;
let computer;
let playerSrc;
let computerRan;
let result;

playBtn.addEventListener("click",function(){
    playerName.innerHTML = nameInput.value
    document.querySelector(".main").style.display ="none"
    document.querySelector(".inMain").style.display= "block"
})


btns.forEach(el => el.addEventListener("click", function () {
    playerSrc = el.getAttribute("src")
    player = playerChoice.setAttribute("src", playerSrc)

    computerRan = compArr[Math.floor(Math.random() * compArr.length)]
    computerChoice.setAttribute("src", computerRan)
    computer = computerChoice.setAttribute("src", computerRan)

    resultD.innerHTML = check()
    result = resultD.innerHTML
    
    if (result == "You Win!") {
        yScore.innerHTML = playerCounter++
    }else if(result == "You Lose!"){
        cScore.innerHTML = computerCounter++
    }

}))


function check() {
    if (playerSrc == computerRan) {
        return "Draw!"
    }else if(computerRan == "Rock.jpg"){
        return (playerSrc == "paper.jpg")? "You Win!" : "You Lose!"
    }else if(computerRan == "Scis.jpg"){
        return (playerSrc == "Rock.jpg")? "You Win!" : "You Lose!"
    }else if(computerRan == "paper.jpg"){
        return (playerSrc == "Scis.jpg" )? "You Win!" : "You Lose!"
    }
}