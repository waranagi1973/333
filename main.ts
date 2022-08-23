bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
	
})
input.onGesture(Gesture.Shake, function () {
    歩数計 += 1
})
let 歩数計 = 0
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    music.setTempo(input.soundLevel())
    music.ringTone(input.soundLevel())
})
basic.forever(function () {
    music.setVolume(input.soundLevel())
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("    ONDO")
        basic.showString("" + (input.temperature()))
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("    HOUGAKU")
        basic.showString("" + (input.compassHeading()))
    } else if (input.logoIsPressed()) {
        basic.showString("    Now Vertion:1.0.1")
    } else if (input.pinIsPressed(TouchPin.P0)) {
        basic.showString("HOSU'UKEI")
        basic.showString("" + (歩数計))
    } else {
        led.plotBarGraph(
        input.soundLevel(),
        255
        )
    }
})
