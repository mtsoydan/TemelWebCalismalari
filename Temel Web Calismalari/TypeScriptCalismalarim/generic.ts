function deger(x: number): number {
    return x;
}

let sayi: number = deger(11);
console.log(sayi)


function myFunction<T>(t:T):T{
    return t;
}


let sayi2 = myFunction<number>(3)

console.log(sayi2)
 let sehir = myFunction<string>("mts")
 console.log(sehir)
