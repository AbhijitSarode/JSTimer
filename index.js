const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector("circle")

const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)

let currentOffset = 0 
let duration

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        duration = totalDuration
        console.log('Timer started')
    },
    onTick(timeRemaining){
        console.log('on tick from callback')
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter)
    }, 
    onCompleted(){
        console.log('completed from callback')
    }
})