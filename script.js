let expressions = document.getElementsByClassName(`exp`)
let object1 = document.getElementById(`object1`)
let object2 = document.getElementById(`object2`)

document.addEventListener(`keydown`, keyPressed)

function keyPressed(event) {
  event.preventDefault()

  if (event.keyCode == 37) {
    // left arrow
    object1.style.left = `${object1.offsetLeft - 5}px`
  } else if (event.keyCode == 38) {
    // up arrow
    object1.style.top = `${object1.offsetTop - 5}px`
  } else if (event.keyCode == 39) {
    // right arrow
    object1.style.left = `${object1.offsetLeft + 5}px`
  } else if (event.keyCode == 40) {
    // down arrow
    object1.style.top = `${object1.offsetTop + 5}px`
  }

  if (touching(object1, object2)) {
    object1.classList.add(`highlighted`)
    object2.classList.add(`highlighted`)
  } else {
    object1.classList.remove(`highlighted`)
    object2.classList.remove(`highlighted`)
  }
}

function touching(object1, object2) {
  let object1Left = object1.offsetLeft
  let object1Right = object1.offsetLeft + object1.offsetWidth
  let object1Top = object1.offsetTop
  let object1Bottom = object1.offsetTop + object1.offsetHeight

  let object2Left = object2.offsetLeft
  let object2Right = object2.offsetLeft + object2.offsetWidth
  let object2Top = object2.offsetTop
  let object2Bottom = object2.offsetTop + object2.offsetHeight

  let xLinesUp = object1Left <= object2Right && object1Right >= object2Left
  let yLinesUp = object1Top <= object2Bottom && object1Bottom >= object2Top

  for (let expression of expressions) {
    expression.classList.remove(`highlighted`)
  }

  if (xLinesUp) {
    expressions[0].classList.add(`highlighted`)
    expressions[7].classList.add(`highlighted`)
  }

  if (object1Left <= object2Right) {
    expressions[1].classList.add(`highlighted`)
  }

  if (object1Right >= object2Left) {
    expressions[2].classList.add(`highlighted`)
  }

  if (yLinesUp) {
    expressions[3].classList.add(`highlighted`)
    expressions[8].classList.add(`highlighted`)
  }

  if (object1Top <= object2Bottom) {
    expressions[4].classList.add(`highlighted`)
  }

  if (object1Bottom >= object2Top) {
    expressions[5].classList.add(`highlighted`)
  }

  if (xLinesUp && yLinesUp) {
    expressions[6].classList.add(`highlighted`)
  }

  return xLinesUp && yLinesUp
}
