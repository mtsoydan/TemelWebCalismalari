function selamver1(ad:string)
{
    console.log("merhabalar" + ad)
}

let sayi:number

let sehir : string
let myarray : Array<number> =[1,2,3,4]

let myarraysecond :number[] = [123,123,123]
 let array :[number,string] []=[[1,"MTS"],[2,"SOYDAN"]]


//  console.log(array[1])

 var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill","2","deneme"); 
// console.log(employee); //Output: [1, 'Steve', 2, 'Bill']
// console.log(employee[0])
 var tuppleArray : [number,string][] = [[1,"mts"],[2,"bahar"]];

console.log(tuppleArray[0][1])
console.log(tuppleArray[1])


enum Renkler{
    mavi=1 ,kirmizi 
}

let renk :Renkler = Renkler.kirmizi
// 


enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
 }

let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine

console.log(PrintMedia[mediaType])