"use strict"

$(function() {
    let circleOpacityTimer;

    $('.start').on('click', function() {
        let circlesNumber = parseInt($('#set-circles-count').val());
        if(circlesNumber <= 0) {
            return;
        }

        while(circlesNumber-- > 0) {
            createcircle();
        }

        $('.circle').css({
            "width": parseInt($('#set-width').val()),
            "height": parseInt($('#set-width').val())
        });
    });

    $(document).on('mouseenter', '.circle', function() {
        circleOpacityTimer = setInterval(opactiy, 400, $(this));
    });

    $(document).on('mouseleave', '.circle', function() {
        $(this).css("opacity", '100%');
        clearInterval(circleOpacityTimer);
    });

    function createcircle() {
        let createdElement;
        let circlesWidth = $('.circles').width();

        createdElement = $("<div class='circle'><div>");
        createdElement.css("background-color", getRandomColor());
        createdElement.css("left", Math.floor(circlesWidth * Math.random()));
        createdElement.appendTo(".circles");

        let circleCreationTimer = setInterval(grow, parseInt($('#set-growth-rate').val()), createdElement);
        createdElement.click(() => {
            createdElement.remove();
            clearInterval(circleCreationTimer);
        });
    }

    function grow(element) {
        element.css('height', element.height() + parseInt($('#set-growth-amount').val()));
        element.css('width', element.width() + parseInt($('#set-growth-amount').val()));
    }

    function opactiy(element) {
        element.css("opacity", (index, value) => value * 0.8);
    }

    // Some guidunce from the internet, refereance: https://stackoverflow.com/questions/1484506/random-color-generator
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
