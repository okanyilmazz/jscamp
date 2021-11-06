/*

                                                                                -------------------------  ÖDEVLER  -------------------------

*/


/*
1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
*/

function findPrime(...numbers) {
    
    for (let i = 0; i < numbers.length; i++) {
        let checkPrimeCount = 0;
        if(numbers[i] == 0 || numbers[i] == 1){
            console.log(numbers[i]+ " Asal sayı değildir.")  
        }else{
             for(let j = 2; j<numbers[i]; j++){
                if(numbers[i] % j == 0){
                    checkPrimeCount++;
                }
            }
            if(checkPrimeCount != 0){
                console.log(numbers[i]+ " Asal sayı değildir.")
                checkPrimeCount = 0;
             }  
            else{   
                console.log(numbers[i]+ " Asal sayıdır.")    
            } 
        } 
    }
}
findPrime(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20)
console.log("----------------------------------------------------------------------------")


/*
2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)
*/

// İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.

function isFriendNumbers(number1,number2) {
    let number1Total = 0
    let number2Total = 0
    for (let i = 0; i < number1; i++) {
        if(number1 % i ==0){
            number1Total=number1Total+i;
        }
    }
    for (let i = 0; i < number2; i++) {
        if(number2 % i ==0){
            number2Total=number2Total+i;
        }
    }

    if(number1==number2Total && number2==number1Total){
        console.log(number1+ " ve "+number2+ " arkadaş sayılardır.")
    }
    else{
        console.log(number1+ " ve "+number2+ " arkadaş sayı değillerdir.")
    }
}

isFriendNumbers(1184,1210)
console.log("----------------------------------------------------------------------------")

/*
3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
*/

function isPerfectNumber() {
  
    for (let i = 0; i < 1000; i++) {

        let totalDivisor = 0

        for(let j = 0; j < i; j++){
            if(i % j == 0){
                totalDivisor = totalDivisor + j;
            }     
        }
                            
        if(totalDivisor == i){
            console.log(i+" mükemmel sayıdır")
        }
    }
}
isPerfectNumber()
console.log("----------------------------------------------------------------------------")

/*
4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
*/

function primeNumbers() {
    for (let number = 1; number < 1000; number++) {

        let primeNumbersCount = 0;

        for (let i = 2; i < number; i++) {
             if(number % i == 0){
                 primeNumbersCount++;
             }
        }

        if(primeNumbersCount == 0){
            console.log(number+ " Asal sayıdır.")
        }
    }   
}
primeNumbers()
console.log("----------------------------------------------------------------------------")