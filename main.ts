// Set the same radio group for communication
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Bin Full") {
        basic.showString("Alert: Bin Full")
        // Higher beep sound (C note)
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
// Set the same radio group for communication
radio.setGroup(1)
