let cart = [
    {id:1, productName:"Telefon",quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak",quantity:2, unitPrice:30},
    {id:3, productName:"Kalem",quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı",quantity:2, unitPrice:100},
    {id:5, productName:"Kitap",quantity:3, unitPrice:30},
    {id:6, productName:"Pot",quantity:5, unitPrice:150},
]


//---------MAP


//Array'i tek tek dolaşmaya yarar.
//Takma isim belirliyoruz. örneğin ; product => 
//Sepeti dolaş > her bir product için ekrana yazdırma işlemini yap. (foreach gibi)

cart.map(product=>console.log(product.productName))

//Satır birden fazlada tutabilir. örnek ; 
console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : " + product.unitPrice * product.quantity+"</li>")
})
console.log("</ul>")


//---------FILTER


//Ürün adeti 2'den büyükse yep yeni bir array oluştur ve quantityOver2'ye ata.

let quantityOver2 = cart.filter(product=>product.quantity>2)

console.log(quantityOver2)


//---------REDUCE => Nadiren kullanılır. Genelde Map ve Filter kullanılır.

// ürünün birim fiyatını acc'e ekliyor. ilk değeri = 0.

let unitTotal = cart.reduce((acc,product)=>acc+ product.unitPrice,0)
console.log(total)

// ürünün birim fiyatı * adetini acc'e ekliyor. ilk değeri = 0

let total = cart.reduce((acc,product)=>acc+ product.unitPrice*product.quantity,0)
console.log(total)














function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat",quantity:1, unitPrice:20})
}
addToCart(cart)
console.log(cart)

let sayi=10
function sayiTopla(number) {
    number+=1
}
sayiTopla(sayi)
console.log(sayi)