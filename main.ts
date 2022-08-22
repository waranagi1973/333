basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    music.setVolume(input.soundLevel())
})
basic.forever(function () {
    music.setTempo(input.soundLevel())
    music.ringTone(input.soundLevel())
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("    ONDO")
        basic.showString("" + (input.temperature()))
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("    HOUGAKU")
        basic.showString("" + (input.compassHeading()))
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showString("    Now Vertion:1.0.1")
    } else {
        led.plotBarGraph(
        input.soundLevel(),
        255
        )
    }
})
