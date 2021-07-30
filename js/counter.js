


//Q1
const count = { 
    counter: 0, 
    add: function() { 
        this.counter += 1; 
    }, 
    reset: function() { 
        this.counter = 0; 
    } 
}

//Q2
// The free variable is counter. 
// A free variable is simply a variable which is not declared inside a given function, but is used inside it



//Q3
function make_adder(inc) { 
    let counter = 0; 
    return function() { 
        return counter += inc; 
    } 
}; 

//Q4
//Immediately Invoked Function Expression - IIFE

//Q5
const employee = (function() { 
    let name = ""; 
    let age = 0; 
    let salary = 0;

    function getName() {
        return name;
    } 
    function getAge() {
        return age;
    } 
    function getSalary() {
        return salary;
    } 
    
    const setName = function(newName) {
        name = newName;
    } 
    const setAge = function(newAge) {
        age = newAge;
    } 
    const setSalary = function(newSalary) {
        salary = newSalary;
    } 
    return { 
        setName: setName, 
        setAge: setAge, 
        setSalary: setSalary, 
        increaseSalary: function increaseSalary(percentage){ 
            setSalary(getSalary() + (getSalary() * percentage));
        }, 
        incrementAge: function incrementAge(){
            return age = (getAge() + 1);
        }, 
    } 
    })(); 

//Q6
employee.address = ''; 
employee.getAddress = function () { 
    return employee.address; 
}; 
employee.setAddress = function (newAddress) { 
    employee.address = newAddress; 
}; 



//jsFiddle_Question
var me = {
    first: 'Josh',
    last: 'Splinter',
    getFullName: function() {
      return this.first + ' ' + this.last;
    }
  };
  
  var you = {
    first: 'William',
    last: 'Smith'
  };
  
  function theName(){
    first: 'William';
    last: 'Smith';
  }

  console.log(me.getFullName.apply(you)); 
  console.log(me.getFullName.call(you)); 
  console.log(theName.bind(this, you)); 
