let ZAΡΙ = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    ZAΡΙ = randint(1, 3)
    if (1 == ZAΡΙ) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else if (2 == ZAΡΙ) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . # . #
            # # # # #
            . # # # .
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString(";!;")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("!;!")
})
