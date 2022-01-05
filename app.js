var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
    if(currentNumber < 10){
        currentNumber += 1
        currentNumberWrapper.innerHTML = currentNumber
    }
}

function decrement() {
    if(currentNumber > 0){
        currentNumber -= 1
        currentNumberWrapper.innerHTML = currentNumber
    }
}

document.getElementById('subtrair').addEventListener('click', decrement)
document.getElementById('adicionar').addEventListener('click', increment)