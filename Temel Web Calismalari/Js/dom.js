// var intro1 = document.getElementById("intro1");
// var mesaj = document.getElementById("mesaj");
// mesaj.innerHTML = intro1.innerHTML;


// var tumlisteler = document.getElementsByTagName("ul");
// var sehirler = tumlisteler[1];

// var tumElemenlar = sehirler.getElementsByTagName("li");

// // for (let index = 0; index < tumElemenlar.length; index++) {
// //     alert(tumElemenlar[index].innerText);
// // }


// var p1 = document.getElementsByClassName("intro1");

// var queryElamanları = document.querySelectorAll("p.intro1");

// // alert(queryElamanları.length);


// var isimelemanlar = document.getElementsByName("MusteriAdi");
// // alert(isimelemanlar[0].value);


// // var mts = document.getElementById("p1").addEventListener("click",RenkDegistir);
// // function RenkDegistir(){
// //     document.getElementById("p2").style.color ="red";
// //     isimelemanlar[0].value ="mts";
// // }
//  var node = document.getElementById("agac1");
//  alert(node.childNodes.length);


 var baslik = document.createElement("h1");
var node = document.createTextNode("Merbahalaraaa");
baslik.appendChild(node);

var div1 = document.getElementById("div1");
var p = document.getElementById("p2");
 div1.insertBefore(baslik,p);







