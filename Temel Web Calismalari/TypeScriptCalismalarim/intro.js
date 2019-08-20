function selamver1(ad) {
    console.log("merhabalar" + ad);
}
var sayi;
var sehir;
var myarray = [1, 2, 3, 4];
var myarraysecond = [123, 123, 123];
var array = [[1, "MTS"], [2, "SOYDAN"]];
//  console.log(array[1])
var employee = [1, "Steve"];
employee.push(2, "Bill", "2", "deneme");
// console.log(employee); //Output: [1, 'Steve', 2, 'Bill']
// console.log(employee[0])
var tuppleArray = [[1, "mts"], [2, "bahar"]];
console.log(tuppleArray[0][1]);
console.log(tuppleArray[1]);
var Renkler;
(function (Renkler) {
    Renkler[Renkler["mavi"] = 1] = "mavi";
    Renkler[Renkler["kirmizi"] = 2] = "kirmizi";
})(Renkler || (Renkler = {}));
var renk = Renkler.kirmizi;
// 
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
}
var mediaType = getMedia('Forbes'); // returns Magazine
console.log(PrintMedia[mediaType]);
