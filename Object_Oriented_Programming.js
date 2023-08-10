//Pseudo Code for an object:
//  class Class_name:
//      properties:
//          ...
//      constructor:
//          ...
//      methods:
//          ...

// Layman way of constructing an Object and Prototyping
const Class_1_proto = {
    MultiplyBy5: function() {
        //console.log("abc")
        return this.a * 5;
    }
};

function Constructor_1(a){
    this.a = a;
}

Object.assign(Constructor_1.prototype, Class_1_proto)

let x = new Constructor_1(6)
console.log(x.a, x.MultiplyBy5())