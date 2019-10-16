$(document).ready(function () {
    $("#levels_slider").on("input", function (e) {
        $("#levels_hole").css("border-left-width", (parseInt(this.value) * 91) + "px");

        start();
    });

    $("#source").on("input", function (e) {
        start();
    });
});

function start() {
    const sourceText = $("#source").val();
    let gudText = gudify(sourceText.toLowerCase(), $("#levels_slider").val());
    $("#dest").val(gudText);
}

function gudify(source, level) {
    return source.split(" ").map(function (sourceWord) {
        if (level == 0) {
            return level0Gu(sourceWord);
        }

        if (level == 1) {
            return level1Gu(sourceWord);
        }

        if (level == 2) {
            return level2Gu(sourceWord);
        }

        if (level == 3) {
            return level3Gu(sourceWord);
        }

        if (level == 4) {
            return level4Gu(sourceWord.toLowerCase());
        }
    }).join(" ");
}

function level0Gu(word) {
    let result = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "г" && isVowel(word[i + 1]) && word[i + 2] == "д") {
            result.push("гуд");
            i += 2;
        } else if (word[i] == "у") {
            if (i == word.length - 1) {
                if (word[i - 1] == "г") {
                    result.push("у");
                } else {
                    result.push("гу");
                }
            } else {
                let spliceDeleteCount = (i == 0 || isVowel(word[i - 1])) ? 0 : 1;
                result.splice(i-spliceDeleteCount, spliceDeleteCount, "г");
                result.push("у");
            }
        } else {
            result.push(word[i]);
        }
    }
    return result.join("");
}

function level1Gu(word) {
    let result = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "у") {
            if (i == word.length - 1) {
                result.push("гуд");
            } else {
                let spliceDeleteCount = (i == 0 || isVowel(word[i - 1])) ? 0 : 1;
                result.splice(i-spliceDeleteCount, spliceDeleteCount, "г");
                result.push("уд");
                i++;
            }
        } else {
            result.push(word[i]);
        }
    }
    return result.join("");
}

function level2Gu(word) {
    let result = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "г" || word[i] == "у" || word[i] == "д") {
            result.push("гуд");
        } else {
            result.push(word[i]);
        }
    }
    return result.join("");
}

function level3Gu(word) {
    let result = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "г" || word[i] == "у" || word[i] == "д") {
            result.push("гуд");
        } else if (word[i] == "к" || word[i] == "ю" || word[i] == "т") {
            result.push("гуд");
        } else {
            result.push(word[i]);
        }
    }
    return result.join("");
}

function level4Gu(word) {
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (isVowel(word[i])) {
            vowelCount++;
        }
    }

    if (vowelCount == 0) {
        vowelCount = word.length;
    }

    let result = "";
    for(let i = 0; i < vowelCount; i++) {
        if (Math.floor(Math.random() * 2) == 0) {
            result += "гуд";
        } else {
            result += "гу";
        }
    }
    return result;
}

var vowel = "аеёиоуыэюя";
var cons = "бвгджзйклмнпрстфхцчшщьъ";

function isVowel(letter) {
    return vowel.includes(letter);
}
function isCon(letter) {
    return cons.includes(letter);
}