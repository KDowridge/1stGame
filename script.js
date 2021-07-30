const startbtn = document.querySelector ("#startbtn")  
const time = document.querySelector ("#time")
const scoreP = document.querySelector ("#score")
const audio = document.querySelector ("#audio")
let seconds = 45
let score = 0
startbtn .addEventListener("click", () =>{
    startbtn .disabled = true
audio.play()
let timer = setInterval(() => {
  if (seconds == 0) {
      endgame (timer) 

  }
  else {
      time.textContent = `Seconds left: ${seconds}`
      seconds --     

  }
    
}, 1000);

// card options
const cardArray = [
    {
        name: '1Deku',
        Image:'images/Deku.jpg'
    },
    {
        name: '2Deku',
        Image:'images/Deku.jpg'
    },
    {
        name: '1senju',
        Image:'images/senju.png'
    },
    {
        name: '2senju',
        Image:'images/senju.png'
    },
    {
        name: '1Sharingan',
        Image:'images/sharingan.png'
    },
    {
        name: '2Sharingan',
        Image:'images/sharingan.png'
    },
    {
        name: '1deku2',
        Image:'images/deku2.png'
    },
    {
        name: '2deku2',
        Image:'images/deku2.png'
    },
    {
        name: '1Uchiha',
        Image:'images/Uchiha.png'
    },
    {
        name: '2Uchiha',
        Image:'images/Uchiha.png'
    },
    {
        name: '1Luffy',
        Image:'images/Luffy.png'
    },
    {
        name: '2Luffy',
        Image:'images/Luffy.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

var cardsChosen = []
var cardsChosenId = []
var cardswon = []

// Create Board
function createBoard () {console.log ("test")
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/Back.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if ((cardsChosen[0].slice(1) == cardsChosen[1].slice(1)) && (cardsChosen[0] != cardsChosen[1])) {
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardswon.push(cardsChosen)
    } else {
        cards [optionOneId].setAttribute('src', 'images/Fail.png')
        cards [optionTwoId].setAttribute('src', 'images/Fail.png')
        alert('NOPE!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'PLUS ULTRA!'
    }

}

//flip your card
function flipcard(e) {
    var cardId = e.target.getAttribute('data-id')
    console.log(cardId)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].Image)
    if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
    }
}




console.log("before create board")

createBoard()


})
    