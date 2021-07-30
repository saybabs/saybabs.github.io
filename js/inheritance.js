//window.onload = function(){

    //"use strict";

    // function filter(){
    //     word: 
    // }







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

        // function Teacher(course){
        //     this.course = course;
        //     teach: function teach(course){
        //         return this.course;
        //     }
        // }

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