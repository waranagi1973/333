input.onGesture(Gesture.Shake, function () {
    歩数計 += 1
    歩数計2 += 1
})
let reward = 0
let reward_points = 0
let 歩数計2 = 0
let 歩数計 = 0
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    music.setTempo(input.soundLevel())
    music.ringTone(input.soundLevel())
})
basic.forever(function () {
    if (歩数計2 == 5) {
        reward_points += 1
        歩数計2 = 0
    }
})
basic.forever(function () {
    music.setVolume(input.soundLevel())
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("  ONDO")
        basic.showString("" + (input.temperature()))
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("  HOUGAKU")
        basic.showString("" + (input.compassHeading()))
    } else if (input.logoIsPressed()) {
        basic.showString("  Now Vertion:1.0.1")
    } else if (input.pinIsPressed(TouchPin.P0)) {
        basic.showString("  HOSU'UKEI")
        basic.showString("" + (歩数計))
        basic.showString("  Reward Points")
        basic.showNumber(reward_points)
    } else if (reward == 1) {
        music.playTone(277, music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.playTone(370, music.beat(BeatFraction.Quarter))
        music.playTone(233, music.beat(BeatFraction.Quarter))
        music.playTone(277, music.beat(BeatFraction.Quarter))
        reward = 0
    } else if (reward_points == 1) {
        reward += 1
        basic.showString("  Achievements Earned Get fit on your first run")
        basic.showString("  Achievement earned Run every day from today")
        basic.showString("  Earned achievements Starting today, start a healthy life with running")
        datalogger.setColumnTitles("実績:今日からランニングで健康な毎日を")
        datalogger.log(datalogger.createCV("実績:今日からランニングで健康な毎日を", 1))
        datalogger.setColumnTitles("実績:初めてのランニングで健康に")
        datalogger.log(datalogger.createCV("実績:初めてのランニングで健康に", 1))
        datalogger.setColumnTitles("実績:今日から毎日ランニング")
        datalogger.log(datalogger.createCV("実績:今日から毎日ランニング", 1))
    } else {
        led.plotBarGraph(
        input.soundLevel(),
        255
        )
    }
})
basic.forever(function () {
	
})
