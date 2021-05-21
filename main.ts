// Set this to whatever number you like. This will be the transmit frequency.
radio.setGroup(3)
// You want max power transmission, this is a tracker!
radio.setTransmitPower(7)
basic.forever(function () {
    // Repeat with a, b, and c. Three micro:bits in a triangle!
    radio.sendValue("a", 1)
    // You don't want to interfere with your other "satellites"
    basic.pause(1000)
})
