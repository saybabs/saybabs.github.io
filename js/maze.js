"use strict";

$(function() {
    $("#start").click(start);

    function start() {
        let result = false;
        cleanStart();

        $(".boundary").mouseover(function() {
            result = true;
            $(this).addClass("youlose");
        });

        $("#end").mouseover(function(event) {
            if(result) {
                $("#status").text("You lost the game");
            } else {
                $("#status").text("You won the game!");
            }
        });

        $("#maze").mouseleave(function() {
            result = true;
            $(".boundary").addClass("youlose");
            $("#status").text("You lost the game");
        });
    };

    function cleanStart() {
        $(".boundary").removeClass("youlose");
        $("#end").off("mouseover");
        $("#status").text(`Click S to begin.`)
    }
});