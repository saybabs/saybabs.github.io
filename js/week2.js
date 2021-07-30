
window.onload = function(){

    "use  strict";

    var x = 5;
    var y = test();
    var b = { x: 4 };
    var z = y.bind(b);
    z();
    function test() {
        console.log(this);
        console.log(x);
        var z = function() {
            var x = 3;
            console.log(this);
            console.log(this.x);
        }
        var x = 8;
        z();
        return z;
    }


}

