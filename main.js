function convert(legacy, concise, char, rgb) {
    miniMessage = legacy.replaceAll(char + "0", "<black>")
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
        .replaceAll(char + "f", "<white>");

    if (concise) {
        miniMessage = miniMessage.replaceAll(char + "n", "<u>")
            .replaceAll(char + "m", "<st>")
            .replaceAll(char + "k", "<obf>")
            .replaceAll(char + "o", "<i>")
            .replaceAll(char + "l", "<b>")
            .replaceAll(char + "r", "<r>");
    } else {
        miniMessage = miniMessage.replaceAll(char + "n", "<underlined>")
            .replaceAll(char + "m", "<strikethrough>")
            .replaceAll(char + "k", "<obfuscated>")
            .replaceAll(char + "o", "<italic>")
            .replaceAll(char + "l", "<bold>")
            .replaceAll(char + "r", "<reset>");
    }

    if (rgb) {
        matcher = new RegExp(char + "#([0-9a-fA-F]{6})", "g");
        miniMessage = miniMessage.replaceAll(matcher, "<#$1>");
    }

    return miniMessage;
}

function addConvertListener() {
    var textElement = document.getElementById("text");
    var conciseElement = document.getElementById("concise");
    var charElement = document.getElementById("char");
    var rgbElement = document.getElementById("rgb");
    var convertElement = document.getElementById("convert");

    convertElement.addEventListener("click", function () {
        var text = textElement.value;
        var concise = conciseElement.checked;
        var char = charElement.value;
        var rgb = rgbElement.checked;

        textElement.value = convert(text, concise, char, rgb);
    });
}

function test() {
    function testStandard() {
        expected = "<dark_blue>Hi, I'm blue.\n<aqua>Now, I'm a nice aqua.\n<bold>Whoa, bold!\n<red>More colors.\n<underlined>Underlined.\n<reset>Now, I'm plain.";
        actual = convert("&1Hi, I'm blue.\n&bNow, I'm a nice aqua.\n&lWhoa, bold!\n&cMore colors.\n&nUnderlined.\n&rNow, I'm plain.", false, "&", false);

        return expected == actual;
    }

    function testConcise() {
        expected = "<red>Here's a color.\n<b>Now I'm bold.\n<u>Now I'm underlined.\n<blue>A color, just for fun.\n<i>Italics!";
        actual = convert("&cHere's a color.\n&lNow I'm bold.\n&nNow I'm underlined.\n&9A color, just for fun.\n&oItalics!", true, "&", false);

        return expected == actual;
    }

    function testRgb() {
        expected = "<light_purple>A regular color.\n<#FFFF00>A bright color!\n<#667788>A gray-ish color.\n<#458967>A fancy green.";
        actual = convert("&dA regular color.\n&#FFFF00A bright color!\n&#667788A gray-ish color.\n&#458967A fancy green.", true, "&", true);

        return expected == actual;
    }

    if (!testStandard()) {
        console.log("Standard test failed.");
        return false;
    }
    if (!testConcise()) {
        console.log("Concise test failed.");
        return false;
    }
    if (!testRgb()) {
        console.log("RGB test failed.");
        return false;
    }
    return true;
}

function onLoad() {
    if (!test()) {
        alert("Converter test failed."
            + "\n\nSome parts of the conversion may not work as expected."
            + "\nPlease use with caution and double-check all results.")
    };
    addConvertListener();
}

document.addEventListener("DOMContentLoaded", onLoad);