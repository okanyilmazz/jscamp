import User from "./user.js"

export default class Employee extends User{
    // extends User sayesinde ortak alanları ayrı ayrı yazmamıza gerek yoktur.
    constructor(id, firstName, lastName, city, age, salary) {
        super(id, firstName, lastName, city, age) // User'daki bu alanları çalıştır demek. 
        this.salary = salary
    }
}