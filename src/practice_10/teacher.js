"use strict"
import Person from "../../src/practice_10/person.js";
class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses = klasses;
    }
    introduce() {
        let s = this.basic_introduce() + " I am a Teacher.";
        if(!this.klasses){
            return s+" I teach No Class.";
        }
        return s + " I teach Class " + this.klasses[0].klss +", "+this.klasses[1].klss+ ".";
    }
    isTeaching(student){
        if(this.klass.isIn(student) === true){return true;}
        return false;
    }
}
export default Teacher;
