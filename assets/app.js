var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
    currentNumberWrapper.style.color = 'black'
    currentNumber += 1
    currentNumberWrapper.innerHTML = currentNumber
    if(currentNumber >= 1){
        currentNumberWrapper.style.color = 'blue'
    }
}

function decrement() {
    currentNumberWrapper.style.color = 'black'
    currentNumber -= 1
    currentNumberWrapper.innerHTML = currentNumber
    if(currentNumber <= -1){
        currentNumberWrapper.style.color = 'red'
    }
}

document.getElementById('subtrair').addEventListener('click', decrement)
document.getElementById('adicionar').addEventListener('click', increment)