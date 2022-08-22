basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
basic.forever(function () {
    music.setTempo(input.soundLevel())
    music.ringTone(input.soundLevel())
})
basic.forever(function () {
    music.setVolume(input.soundLevel())
})
