function onLoad() {
    var text = document.getElementById("text")
    var button = document.getElementById("button")
    var concise = document.getElementById("concise")

    button.addEventListener("click", function () {
        var isConcise = concise.checked
        var newText = text.value

        newText = newText.replaceAll("&0", "<black>")
        newText = newText.replaceAll("&1", "<dark_blue>")
        newText = newText.replaceAll("&2", "<dark_green>")
        newText = newText.replaceAll("&3", "<dark_aqua>")
        newText = newText.replaceAll("&4", "<dark_red>")
        newText = newText.replaceAll("&5", "<dark_purple>")
        newText = newText.replaceAll("&6", "<gold>")
        newText = newText.replaceAll("&7", "<gray>")
        newText = newText.replaceAll("&8", "<dark_gray>")
        newText = newText.replaceAll("&9", "<blue>")
        newText = newText.replaceAll("&a", "<green>")
        newText = newText.replaceAll("&b", "<aqua>")
        newText = newText.replaceAll("&c", "<red>")
        newText = newText.replaceAll("&d", "<light_purple>")
        newText = newText.replaceAll("&e", "<yellow>")
        newText = newText.replaceAll("&f", "<white>")

        if (isConcise) {
            newText = newText.replaceAll("&n", "<u>")
            newText = newText.replaceAll("&m", "<st>")
            newText = newText.replaceAll("&k", "<obf>")
            newText = newText.replaceAll("&o", "<i>")
            newText = newText.replaceAll("&l", "<b>")
            newText = newText.replaceAll("&r", "<r>")
        } else {
            newText = newText.replaceAll("&m", "<underlined>")
            newText = newText.replaceAll("&m", "<strikethrough>")
            newText = newText.replaceAll("&k", "<obfuscated>")
            newText = newText.replaceAll("&o", "<italic>")
            newText = newText.replaceAll("&l", "<bold>")
            newText = newText.replaceAll("&r", "<reset>")
        }

        text.value = newText
    });
}

document.addEventListener("DOMContentLoaded", onLoad);