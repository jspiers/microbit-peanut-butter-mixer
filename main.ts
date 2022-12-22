function show_mix_frequency_in_seconds () {
    basic.showNumber(Math.idiv(2 ** mix_frequency, 1000))
    basic.pause(2000)
    basic.clearScreen()
}
function mix () {
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 30)
    basic.pause(400)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
}
input.onButtonPressed(Button.A, function () {
    mix_frequency += 1
    show_mix_frequency_in_seconds()
})
input.onButtonPressed(Button.B, function () {
    if (mix_frequency > 10) {
        mix_frequency += -1
    }
    show_mix_frequency_in_seconds()
})
let mix_frequency = 0
wuKong.stopAllMotor()
mix_frequency = 12
show_mix_frequency_in_seconds()
basic.forever(function () {
    basic.pause(2 ** mix_frequency)
    mix()
})
