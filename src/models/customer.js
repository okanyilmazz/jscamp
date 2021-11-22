import User from "./user.js"

export default class Customer extends User{
    // extends User sayesinde ortak alanları ayrı ayrı yazmamıza gerek yoktur.
    constructor(id, firstName, lastName, city, age, creditCardNumber) {
        super(id, firstName, lastName, city, age) // User'daki bu alanları çalıştır demek. 
        this.creditCardNumber=creditCardNumber
    }
}