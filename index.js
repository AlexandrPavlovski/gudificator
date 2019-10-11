$(document).ready(function () {
    const levelsSlider = $("#levels_slider");

    $("#gudify").click(function () {
        const sourceText = $("#source").val();

        let gudText = gudify(sourceText, levelsSlider.val());

        $("#dest").val(gudText);
    });

    const hole = $("#levels_hole");
    levelsSlider.on("input", function (e) {
        hole.css("border-left-width", (parseInt(this.value) * 91) + "px");
    });
});

function gudify(source, level) {
    return "GUDGUDGUD";
}