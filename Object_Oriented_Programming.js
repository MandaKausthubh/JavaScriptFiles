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

// INHERITANCE:
// Psuedo Code:
// class parent_class:
//     properties:
//          ...
//      constructor:
//          ...
//      meathods:
//          ...
// 

//class child_class: extended parent_class
//      properties(exclusive):
//          ...
//      constructor:
//          ...
//      meathods(exclusive):
//          ...


class person{
    name;

    constructor(name){
        this.name = name;
    }

    IntroduceYourself(){
        console.log(`Hello, my name is ${this.name}.`)
    }
}

class Teacher extends person{
    Subjects;

    constructor(name, sub){
        super(name);
        this.Subjects = sub;
    }

    //You can overwrite the methods.
    IntroduceYourself(){
        console.log(`Hi, I am a teacher. My name is ${this.name} and the subject I will be teaching you is ${this.Subjects}.`)
    }

    GradePapers(){
        console.log('zzzzzzzz');
    }
}

//Encapsulation:
// For private attributes just use #attribute_name instead of #attribute
