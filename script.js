const questions = ["¿Estás libre el 14 de febrero?", "¿Te gusta 'La Bocata'?", "¿Quieres ser mi San Valentín?"]

let currentQuestion = 0

const questionElement = document.getElementById("question")
const optionsElement = document.getElementById("options")
const messageElement = document.getElementById("message")
const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")
const retryBtn = document.getElementById("retryBtn")
const backgroundEffects = document.getElementById("background-effects")
const card = document.getElementById("card")
const invitation = document.getElementById("invitation")

function showQuestion() {
  questionElement.textContent = questions[currentQuestion]
  messageElement.textContent = ""
  optionsElement.style.display = "flex"
  retryBtn.style.display = "none"
}

function showMessage(message, showRetry = true) {
  messageElement.textContent = message
  optionsElement.style.display = "none"
  if (showRetry) {
    retryBtn.style.display = "inline-block"
  }
}

function handleAnswer(answer) {
  switch (currentQuestion) {
    case 0:
      if (answer === "no") {
        showMessage("Ya tienes planes con el otro :C")
      } else {
        currentQuestion++
        showQuestion()
      }
      break
    case 1:
      if (answer === "no") {
        showMessage("¿Quién eres?, a mi novia le encanta la bocata")
      } else {
        currentQuestion++
        showQuestion()
      }
      break
    case 2:
      if (answer === "no") {
        showMessage("PAPU NOOOOOOOOOOOO")
      } else {
        showInvitation()
      }
      break
  }
}

function showInvitation() {
  card.style.display = "none"
  invitation.style.display = "block"
}

function retry() {
  currentQuestion = 0
  showQuestion()
}

function createFloatingHeart() {
  const heart = document.createElement("div")
  heart.className = "heart"
  const colors = ["pink", "purple", "gray", "red"]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  heart.classList.add(`heart-${randomColor}`)
  heart.style.left = `${Math.random() * 100}vw`
  heart.style.top = `${Math.random() * 100}vh`
  heart.style.animationDuration = `${5 + Math.random() * 5}s`
  backgroundEffects.appendChild(heart)

  setTimeout(() => {
    heart.remove()
  }, 10000)
}

function addBackgroundEffects() {
  setInterval(createFloatingHeart, 300)
}

yesBtn.addEventListener("click", () => handleAnswer("yes"))
noBtn.addEventListener("click", () => handleAnswer("no"))
retryBtn.addEventListener("click", retry)

showQuestion()
addBackgroundEffects()

