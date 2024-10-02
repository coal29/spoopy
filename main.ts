input.onButtonPressed(Button.A, function () {
    val = 0
    for (let index = 0; index < 10; index++) {
        strip.setPixelColor(val, neopixel.rgb(255, 123, 0))
        basic.pause(100)
        val += 1
        strip.show()
    }
    val = 0
    for (let index = 0; index < 10; index++) {
        strip.setPixelColor(val, neopixel.colors(NeoPixelColors.Orange))
        basic.pause(100)
        val += 1
        strip.show()
    }
})
input.onButtonPressed(Button.B, function () {
    val = 0
    for (let index = 0; index < 10; index++) {
        strip.setPixelColor(val, neopixel.colors(NeoPixelColors.Black))
        basic.pause(100)
        val += 1
        strip.show()
    }
})
let val = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
val = 0
