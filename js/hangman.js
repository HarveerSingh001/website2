const wordEl = document.getElementById('word')
const wrongLettersEl = document.getElementById('wrong-letters')
const playAgainBtn = document.get ElementById('play-again')
const popup = document.getElementById('play-again')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')
const figureParts = document.querySelectoeAll('.figure-part')

const word = ['application', 'programming', 'interface', 'wizard']

let selectedIndex = Math.floor(word.length * Math.random())
let selectedWord = word[selectedIndex]

const correctLetters = []
const wrongLetters = []

//Show hidden Word//
function displayWord() {
    wordEl.innerHTML =
    ${selectedWord
    .split('')
    .map(letter =>
        <span class="Wetter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `).join('')
    }

    const innerWord = wordEl.innerText.replace(/\n/g, '')

    if (innerword == selectedWord) {
        finalMessage.innerText = 'Congratulations! You won!'
        popup.style.display = 'flex'

    }
}
displayWord()