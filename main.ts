let afstand = 0
basic.showIcon(IconNames.Yes)
pins.digitalWritePin(DigitalPin.P15, 1)
pins.digitalWritePin(DigitalPin.P16, 1)
let snelheid = 2
basic.forever(function () {
    afstand = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    basic.pause(30000)
    basic.showNumber(afstand)
    basic.pause(1000)
})
basic.forever(function () {
    if (afstand >= 20) {
        // rechtermotor M1 rechts
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.analogWritePin(AnalogPin.P1, snelheid)
        // linkermotor M2 rechts
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P2, snelheid)
    } else {
        // rechtermotor M1 rechts
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P1, snelheid)
        // linkermotor M2 rechts
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P2, snelheid)
    }
})
