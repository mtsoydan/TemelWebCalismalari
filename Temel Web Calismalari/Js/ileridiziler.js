var sayilar = [1,2,3,4]
var karedizisi =[]
 i = 0;
// sayilar.forEach(sayi => {
//     i++;
//     karedizisi[i] = sayi*sayi
// });

sayilar.forEach(sayi => {
    karedizisi.push(sayi*sayi)
});

karedizisi.forEach(karedizisisayi =>{
    console.log(karedizisisayi)
});


 var mapdizi =karedizisi.map(deneme =>
    deneme*3
    );
    
           
   


    mapdizi.forEach (_sayi =>{

        console.log(_sayi)
    });


    //filter

    var newArray = sayilar.filter(_sayi => _sayi>2)

  newArray.forEach(sayi =>{
        console.log(sayi)
    });

    console.log(newArray)


    const toplam = sayilar.reduce((acc,sayi)=>{
        return acc+ sayi

    });

  console.log(toplam);