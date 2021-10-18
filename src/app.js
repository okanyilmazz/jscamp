console.log("Merhaba Kodlama.io")

//JS type safe değildir

let dolarBugun = 9.30

let dolarDun = 9.20

{
    let dolarDun = 9.10
}

console.log(dolarDun)


// Const değiştirilemez tiptir. sadece okunabilir.
const  euroDun = 11.2
//euroDun=11 
console.log(euroDun)

// birden fazla veriyi tutmak için arraylerden yararlanırız.

//isimlerdirme yaparken çoğul vs. dikkat edilmeli ve 
//camelCasing kullanılmalıdır. ilk harf küçük şeklinde başlar.
//PascalCasing ise İlk harf büyük şeklindedir.

let konutKredileri=["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]
console.log(konutKredileri)

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")






