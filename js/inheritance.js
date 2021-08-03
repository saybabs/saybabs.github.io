

    //Q1
    String.prototype.filter = function ([...args]) {
        return this.split(" ")
        .filter(word => args.indexOf(word) === -1)
        .join(" ");
    }



    //Q2
    Array.prototype.bubbleSort = function(){
        var i, j;
        var length = this.length;
        var isSwapped = false;
          
        for(i =0; i < length; i++){
          isSwapped = false;
          for(j = 0; j < length; j++){
              if(this[j] > this[j + 1]){
                var temp = this[j]
                this[j] = this[j+1];
                this[j+1] = temp;
                isSwapped = true;
              }
          }
          if(!isSwapped){
            break;
          }
        }
        return this;
      }




    //Q3

    function question3(){
        var Person = function() {};
        var result = "";
        Person.prototype.initialize = function(name, age)
        {
            this.name = name;
            this.age = age;
        }
        Person.prototype.describe = function()
        {
            return this.name + ", " + this.age + " years old.";
        }
        var Student = function() {};
        Student.prototype = new Person();

        Student.prototype.learn = function(subject)
        {
            console.log(this.name + " just learned " + subject);
        }

        var me = new Student();


        var Teacher = function() {};
        Teacher.prototype = new Person();
        Teacher.prototype.teach = function(course){
            console.log(this.name + " is teaching " + course);
            result = this.name + " is teaching " + course;
        }
        var teacher = new Teacher();
        teacher.initialize("Michael", 44);
        teacher.teach("Web Application Programming");
        return result;
        // me.initialize("John", 25);
        // me.learn("Inheritance");
    }
    



    

    class Computer {
        constructor(ram, cpu, storage) {
          this.ram = ram;
          this.cpu = cpu;
          this.storage = storage;
        }
      }

      Computer.prototype.runProgram = function(program){
        console.log("running "+ program);
      }

      class Laptop {
        constructor(battery){
            this.battery = this.battery;
        }
      };
      Laptop.prototype = new Computer();
      Laptop.prototype.carryAround = function(){
          console.log("carrying laptop:  cpu" + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery)
      }

      