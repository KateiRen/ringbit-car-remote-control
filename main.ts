radio.onReceivedNumber(function (receivedNumber) {
    mode = receivedNumber
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("ButtonA")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("ButtonB")
})
let mode = 0
radio.setGroup(31)
radio.setFrequencyBand(0)
basic.showString("Car Ctrl")
basic.forever(function () {
    if (mode == 5) {
        radio.sendValue("x", Math.idiv(input.acceleration(Dimension.X), 10))
        basic.pause(100)
        radio.sendValue("y", Math.idiv(input.acceleration(Dimension.Y), 10))
        basic.pause(100)
    }
})
