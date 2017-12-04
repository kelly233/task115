"use strict"
import Person from "../../src/practice_7/person.js";
class Teacher extends Person{
    constructor(name, age, klass) {
        super(name,age);
        this.klass = klass;
    }
    introduce() {
        let s = this.basic_introduce()+" I am a Teacher. I teach ";
        if(!this.klass){
            return s+"No Class.";
        }
        return s + "Class " +this.klass.number + ".";
    }
    introduceWith(student){
        let s = this.basic_introduce()+" I am a Teacher. ";
        if(this.klass === student.klass){
            return s + "I teach "+student.name+".";
        }
        return s + "I don't teach "+student.name+".";
    }
}

export default Teacher;