"use strict"
import Person from "../../src/practice_6/person.js";
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        if(!this.klass){
            return this.basic_introduce()+" I am a Teacher. I teach No Class."
        }
        return this.basic_introduce()+" I am a Teacher. I teach Class "+this.klass+".";
    }
}
export default Teacher;