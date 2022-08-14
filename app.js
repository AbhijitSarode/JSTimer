class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton
        
        this.startButton.addEventListener('click', this.start)
    }

    start() {
        console.log('start timer');
    }
}