"use strict"
import Person from "../../src/practice_8/person.js";
class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }

    introduce(){
        let s = this.basic_introduce();
        if(this.id === 0){
            return s+" I am a Student. I am Leader of Class 2.";
        }
        return s+" I am a Student. I am at Class "+this.klass.klss+".";
    }
}
export default Student;