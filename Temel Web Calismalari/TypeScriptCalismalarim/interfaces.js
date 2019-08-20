function save(params) {
    console.log(params.ad + "kaydedildi");
}
save({ id: 4, ad: "mts", adet: 2 });
var dizi = ["konya", "izmir", "mugla"];
for (var i in dizi) {
    console.log(i);
}
for (var _i = 0, dizi_1 = dizi; _i < dizi_1.length; _i++) {
    var i = dizi_1[_i];
    console.log(i);
}
