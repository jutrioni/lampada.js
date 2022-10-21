const turnOn = document.getElementById ( 'turnOn');
const turnOff = document.getElementById ( 'turnOff');
const lamp = document.getElementById ('lamp');

let isbroker = false

function lampOn () {

    if (isbroker == false) {
        lamp.src = 'lampada 1.jpg'

    }
}
function lampOff () {
    if (isbroker == false) {
        lamp.src = 'lampada 2.jpg'

    }
}

function lampbroker () {
    isbroker = true
    lamp.src = 'lampada 3.jpg'
}
   

  

lamp.addEventListener('click', lampbroker)
turnOff.addEventListener('click', lampOff)
turnOn.addEventListener ('click', lampOn);