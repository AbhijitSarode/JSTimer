class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton
        if (callbacks) {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onCompleted = callbacks.onCompleted
        }

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining)
        }
        this.tick()
        this.interval = setInterval(this.tick, 20)
    }

    pause = () => {
        if (this.onCompleted) {
            this.onCompleted()
        }
        clearInterval(this.interval)
        console.log('paused')
    }

    tick = () => {
        if (this.onTick) {
            this.onTick(this.timeRemaining)
        }
        console.log("ticked")
        if (this.timeRemaining <= 0) {
            this.pause()
            console.log("paused from tick")
        } else {

            // const timeRemaining = this.timeRemain
            // this.durationInput.value  = timeRemaining - 1

            /* This is the appropriate place to invoke onTick from callback */
            this.timeRemaining -= 0.02
            console.log(this.timeRemaining)
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value)
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2)
    }

}