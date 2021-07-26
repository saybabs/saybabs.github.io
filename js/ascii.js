window.onload = function(){
    "use strict";
    let btnStart = document.getElementById("start");
    let btnStop = document.getElementById("stop");
    let txtArea = document.getElementById("text-area");
    let cbTurbo = document.getElementById("turbo");
    let ddlAnimations = document.getElementById("animation");
    let ddlSizeOfFont = document.getElementById("fontsize");

    
    let run;
    let frame2 = 0;
    let frame3;
    let turbo = 100;
    let timer = null; 
    let frame1;

    btnStart.onclick = start;
    btnStop.onclick = stop;
    ddlAnimations.onchange = display;
    ddlSizeOfFont.onchange = size;
    cbTurbo.onclick = speed;

    //starting the animations
    function start() {
        run = true;
        btnStop.disabled = false;
        btnStart.disabled = true;
        txtArea.disabled = true;
        ddlAnimations.disabled = true;

        frame3 = txtArea.value;
        speedCheck();
        if (txtArea.value != " ") {
            playAnimation2(txtArea.value);
        } else {
            playAnimation();
        }
    }

    
    function stop() {
        btnStop.disabled = true;
        btnStart.disabled = false;
        txtArea.disabled = false;
        ddlAnimations.disabled = false;

        txtArea.value = frame3;
        frame3 = frame2;
        run = false;
        clearInterval(timer);
        timer = null;
    }

    function display() {
        txtArea.value = ANIMATIONS[ddlAnimations.value.toString()];
    }

    function size() {
        txtArea.style.fontSize = ddlSizeOfFont.value;
    }

    function playAnimation2(frameStr) {
        if (frameStr.indexOf("\r\n") != -1) {
            frame1 = frameStr.split("=====\r\n");
        } else {
            frame1 = frameStr.split("=====\n");
        }

        timer = setInterval(showNextFrame, turbo);
    }

    function showNextFrame(){
        txtArea.value = frame1[frame2];
        frame2 = (frame2 + 1) % frame1.length;
    }

    function speed(){
        if(run){
            if (cbTurbo.checked == true) {
                clearInterval(timer);
                turbo = 50;
                timer = setInterval(showNextFrame, turbo);
            } else {
                clearInterval(timer);
                turbo = 100;
                timer = setInterval(showNextFrame, turbo);
            }
        }
    }

    function speedCheck(){
        if (cbTurbo.checked == true) {
            turbo = 50;
        } else {
            turbo = 100;
        }
    }

    function playAnimation() {
        let frameStr = ANIMATIONS[ddlAnimations.value.toString()];
        if (frameStr.indexOf("\r\n") != -1) {
            frame1 = frameStr.split("===\r\n");
        } else {
            frame1 = frameStr.split("===\n");
        }
        timer = setInterval(showNextFrame, turbo);
    }

};
