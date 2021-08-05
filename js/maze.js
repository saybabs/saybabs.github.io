"use strict";

$(function() {
    $("#start").click(start);
    //$("#status").removeClass("lose");
    //$("#status").removeClass("win");

    function start() {
        let result = false;
        cleanStart();

        $(".boundary").mouseover(function() {
            result = true;
            $(this).addClass("youlose").addClass("lose");
            $("#status").removeClass("win");
        });

        $("#end").mouseover(function(event) {
            if(result) {
                $("#status").text("You lost the game, click S to restart").addClass("lose");
                $("#status").removeClass("win");
            } else {
                $("#status").text("You won the game!, click S to restart").addClass("win");
                $("#status").removeClass("lose");
            }
        });

        $("#maze").mouseleave(function() {
            result = true;
            $(".boundary").addClass("youlose");
            $("#status").text("You lost the game, click S to restart").addClass("lose");
            $("#status").removeClass("win");
        });
    };

    function cleanStart() {
        $(".boundary").removeClass("youlose");
        $("#end").off("mouseover");
        $("#status").text(`Click S to begin.`).addClass("lose");
        $("#status").removeClass("win");
        $("#status").removeClass("lose");
    }
});