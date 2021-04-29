let abstand = 0
basic.forever(function () {
    abstand = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (abstand >= 0) {
        basic.showNumber(abstand)
    }
})
