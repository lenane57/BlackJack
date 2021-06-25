// let firstCard = 7
// let secondCard = 11
// let sum = firstCard + secondCard

// if (sum < 21){
//     console.log("Do you want to draw a other card")

// }
// else if (sum === 21){
//     console.log("BLACKJACK")
// }
// else if (sum > 21){
//     console.log("Your OUT")
// }

// let age = 21

// if (age < 21){
//     console.log("You are not allowed in")
// } else {
//     console.log("Come on in!!")
// }

// let age = 101

// if (age < 100){
//     console.log("Not elegible")
// } else if (age === 100){
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }


let cards = [ ]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
    name : "Richard",
    chips : 150
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard(){

    let i = Math.floor( Math.random() * 13 ) + 1
        if ( i === 1){
            return 11
        } else if (i > 10){
            return 10
        } else {
            return i
        }
       
}



function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard

    // cards.textContent = sum

    renderGame()

    // isAlive = true
    // // Generate two random numbes
    // // Re-assign the cards and sum variables so that the game can start
    // let firstCard = getRandomCard()
    // let secondCard = getRandomCard()
    
    // cardEl = firstCard + secondCard
    // sum = firstCard + secondCard
    // cardEl.innerText = cardEl
    // // sum = firstCard + secondCard

    // cards.textContent = sum
}

// Write the conditional according to these rules:
function renderGame(){


    cardsEl.textContent = "Cards: "

    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++){

        cardsEl.textContent += cards[i] + " "
    }

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
if (sum <= 20){
    message = "Do you want to draw a new card?"
    isAlive = true
    sumEl.innerText = "Sum: " + sum
    
    }
// else if exactly 21 -> "Wohoo! You've got Blackjack!"
else if (sum === 21){
    message = "You've got Blackjack! "
    hasBlackJack = true
    sumEl.innerText = "Sum: " + sum
}
// else -> "You're out of the game! 😭"
else {
    message = "You're out of the game!"
    isAlive = false
    sumEl.innerText = "Sum: " + sum
}

//cash out!
// console.log(hasBlackJack)
messageEl.textContent = message
}

function newCard(){
    // console.log("Drawing a new Card")
    if (isAlive === true && hasBlackJack === false ){
    let card = getRandomCard()

    sum += card
// Push the card to the cards array
    cards.push(card)
}

    renderGame()
}
