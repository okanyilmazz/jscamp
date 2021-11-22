export default class User {
    //new User dediğimizde constructor çalışıyor.
    //bunun içerisinde verileri gönderebiliriz.
    constructor(id, firstName, lastName, city,age) {
        // this demek bu class demek.
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.age = age
    }
}