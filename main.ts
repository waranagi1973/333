basic.forever(function () {
    if (!(input.buttonIsPressed(Button.A))) {
        led.plotBarGraph(
        input.soundLevel(),
        255
        )
    } else {
        basic.showString("now vertion:1.0.1")
    }
})
basic.forever(function () {
    music.setVolume(input.soundLevel())
})
basic.forever(function () {
    music.setTempo(input.soundLevel())
    music.ringTone(input.soundLevel())
})
