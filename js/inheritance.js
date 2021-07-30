//window.onload = function(){

    //"use strict";

    // function filter(){
    //     word: 
    // }

    function filter(...bannedWords) {
        //return this.toString().replace(new RegExp(bannedWords.join("|"), "gi"),'').replace(/\s+/g,' ').trim();
    }



    //Q2
    function bubbleSort(arr){
        var i, j;
        var length = arr.length;
        var isSwapped = false;
          
        for(i =0; i < length; i++){
          isSwapped = false;
          for(j = 0; j < length; j++){
              if(arr[j] > arr[j + 1]){
                var temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
              }
          }
          if(!isSwapped){
            break;
          }
        }
        return JSON.stringify(arr);
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
    




//}