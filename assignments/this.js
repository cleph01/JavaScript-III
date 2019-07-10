/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - When a reference to 'this' is in the Global scope, the value will be the window/console Object. 
* 2. Implicit Binding - When a function is called by a preceding dot, the object to left of the dot is 'this'
* 3. New Binding - When a constructor function is used, 'this' refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding - Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
//Window/Global Object Binding

// code example for Window Binding
function showAge(name) {
    console.log(this);
    return name;
  }
  showAge("Charlie");

// Principle 2
//Implicit Binding

// code example for Implicit Binding
const person = {
    
    greet : function(name){
        console.log(`Hello, my name is ${name}`);
    }
};

person.greet("Bill");

// Principle 3
//New Binding

// code example for New Binding
function Car(model) {
    this.model = model
    this.sound = 'vroom';

    this.switch_on = function() {
      console.log(this.sound); 
    };
    this.show_model = function(){
        console.log(this.model);
    }
  }
  
  const car1 = new Car('vw');
  const car2 = new Car('bwm');
  
  car1.switch_on();
  
  

// Principle 4
//Explicit Binding
// code example for Explicit Binding

car1.show_model.call(car2);