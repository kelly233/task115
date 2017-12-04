"use strict"
import Person from "../../src/practice_9/person.js";
class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        let s = this.basic_introduce() + " I am a Teacher.";
        if (!this.klass) {
            return s + " I teach No Class.";
        }
        return s + " I teach Class " + this.klass.klss + ".";
    }
}

export default Teacher;