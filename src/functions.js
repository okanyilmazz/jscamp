<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
/* console.log("sepete eklendi!")

console.log("sepete eklendi!")

console.log("sepete eklendi!")

console.log("sepete eklendi!") */


//Default değer = productName="Elma"
function addToCart(productName = "Elma",quantity) {
    console.log("sepete eklendi : ürün : "+ productName + " adet : "+ quantity)
}

// Undefined'ı null ile karıştırmayalım
//Undefined = ben aslında yokum, tanımlı olmayan

//DEFAULT DEĞERLER EN SONA YAZILIR.

function addToCart(quantity,productName = "Elma") {
    console.log("sepete eklendi : ürün : "+ productName + " adet : "+ quantity)
}

//addToCart("")
addToCart("Yumurta",10)
addToCart(10)
//addToCart("15")


// this keywordunun davranışı arasında fark var 
//en önemli farkı budur . arrow function arasında ki fark budur.
let sayHello= ()=>{
    console.log("Hello World!")
}
sayHello()

let SayHello2= function () {
    console.log("Hello World2!")
}

SayHello2();



//22.10 
//birden fazla parametreyi göönderirsek tavsite etmeyiz.


function  addToCart2(productName,quantity,unitPrice) {
=======
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
    
}

addToCart2("Elma",5,10)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

//bu tip durumlar için objeler oluştururuz.. => 


//obje tanımı = {} ' dir
=======
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)


let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)

// ------------- ÇOK ÖNEMLİ ...

//Sayılar, veritipleri  değer tipidir => stackte iş yapar 
//objeler,arrayler referans tipidir => heapte iş yapar => atamalarda veri atanmaz, bellek numarası atanır.
//değer tiplerde dğer atadığın zaman işin biter 

// içerisinde products bulamazsa bir üst scopa odaklanır ve ürünleri yine yazar.

function addToCart4(x) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}

]
addToCart4(products)

/*
function addToCart5(products) {
=======
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

]
addToCart5(products)
*/

function add(number1,number2){
    console.log(number1+number2)
}

add(20,30)


function add2(...numbers) { // rest budur.
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
    }
    console.log(total)
}

add2(20,30)
add2(20,30,40)
add2(20,30,40,50)

/*
function add3(...numbers,bisey) { // rest budur.
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add3(20,30)
*/

function add4(bisey,...numbers) { // rest budur.
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
=======
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
]

addToCart4(products)

function add(bisey,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
    }
    console.log(total)
    console.log(bisey)
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
add4(20,30)

console.log(Math.max(30,10,500,600,120))

let numbers=[30,10,500,600,120]
console.log(...numbers)

console.log(Math.max(...numbers))





let regions = ["İç Anadolu","Marmara","Karadeniz"]
console.log(regions[1])

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]
//console.log(icAnadolu.name)
//console.log(icAnadolu.population)

console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)
console.log(karadenizSehirleri)

let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}={productName:"Elma",unitPrice:4,quantity:5})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
=======
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
add(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
