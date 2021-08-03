
window.onload = function(){

    "use  strict";

    // var x = 5;
    // var y = test();
    // var b = { x: 4 };
    // var z = y.bind(b);
    // z();
    // function test() {
    //     console.log(this);
    //     console.log(x);
    //     var z = function() {
    //         var x = 3;
    //         console.log(this);
    //         console.log(this.x);
    //     }
    //     var x = 8;
    //     z();
    //     return z;
    // }

//alert('sgsgs')
    // class Computer {
    //     constructor(ram, cpu, storage) {
    //       this.ram = ram;
    //       this.cpu = cpu;
    //       this.storage = storage;
    //     }
    //   }


    var Computer = function() {};
    Computer.prototype.initialize = function(ram, cpu, storage)
      {
          this.ram = ram;
          this.cpu = cpu;
          this.storage = storage;
      }

    Computer.prototype.runProgram = function(program){
      console.log("running "+ program);
    }


    var Laptop = function() {};
    Laptop.prototype.initialize = function(battery)
    {
          this.battery = battery;
    }
    Laptop.prototype = new Computer();
    Laptop.prototype.carryAround = function(){
        console.log("carrying laptop:  cpu " + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery)
    }


    var computer = new Computer();
    computer.initialize(16, "duo core", "1TB SSD");
    computer.runProgram("IntelliJS");

    var laptop = new Laptop();
    laptop.initialize("better battery")
    laptop.initialize(16, "duo core", "1TB SSD");
    laptop.carryAround();





var b = 5;
var c = hello(b);
var a = 1000;
var d = {a: 50, b: 90};
console.log(c.apply(d));
function hello(a) {
    console.log(this);
    a = a * 2;
    console.log(bye())
    function bye() {
        console.log(this);
        console.log(b);
        console.log(this.b);
        return a;
    }
    var b = 100;
    return bye;
}
        

}





