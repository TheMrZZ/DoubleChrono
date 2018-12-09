'use strict'
let clock

function getEnd(seconds) {
    let end = new Date()
    end.setSeconds(end.getSeconds() + seconds)
    return end
}

function startExercise() {
    if (clock) clearInterval(clock)
    let times = [8, 50]
    let timer = document.getElementById('timer')

    let i = 0
    let end = getEnd(times[i])

    clock = setInterval(function() {
        let actual = new Date()
        let diff = end - actual
        let txt = Math.ceil(diff / 1000).toString() + '/' + times[i]
        timer.innerText = txt
        document.title = txt
        if (actual >= end) {
            i = 1 - i
            end = getEnd(times[i])
            timer.innerText = times[i].toString()
        }
    }, 100)
}