function onLoad() {
    var textElement = document.getElementById("text")
    var conciseElement = document.getElementById("concise")
    var charElement = document.getElementById("char")
    var convertElement = document.getElementById("convert")

    convertElement.addEventListener("click", function () {
        var concise = conciseElement.checked
        var char = charElement.value
        var text = textElement.value

        text = text.replaceAll(char + "0", "<black>")
            .replaceAll(char + "1", "<dark_blue>")
            .replaceAll(char + "2", "<dark_green>")
            .replaceAll(char + "3", "<dark_aqua>")
            .replaceAll(char + "4", "<dark_red>")
            .replaceAll(char + "5", "<dark_purple>")
            .replaceAll(char + "6", "<gold>")
            .replaceAll(char + "7", "<gray>")
            .replaceAll(char + "8", "<dark_gray>")
            .replaceAll(char + "9", "<blue>")
            .replaceAll(char + "a", "<green>")
            .replaceAll(char + "b", "<aqua>")
            .replaceAll(char + "c", "<red>")
            .replaceAll(char + "d", "<light_purple>")
            .replaceAll(char + "e", "<yellow>")
            .replaceAll(char + "f", "<white>")

        if (concise) {
            text = text.replaceAll(char + "n", "<u>")
                .replaceAll(char + "m", "<st>")
                .replaceAll(char + "k", "<obf>")
                .replaceAll(char + "o", "<i>")
                .replaceAll(char + "l", "<b>")
                .replaceAll(char + "r", "<r>")
        } else {
            text = text.replaceAll(char + "n", "<underlined>")
                .replaceAll(char + "m", "<strikethrough>")
                .replaceAll(char + "k", "<obfuscated>")
                .replaceAll(char + "o", "<italic>")
                .replaceAll(char + "l", "<bold>")
                .replaceAll(char + "r", "<reset>")
        }

        textElement.value = text
    });
}

document.addEventListener("DOMContentLoaded", onLoad);