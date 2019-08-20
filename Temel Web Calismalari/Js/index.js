var kullanicilar = [{email:"mustafataha.soydan@gmail.com",sifre:"123455"},
{email:"furki.soydan@gmail.com",sifre:"123456"},
{email :"mts",sifre:"123"}
]


var tivitler = [
    {email:"mustafataha.soydan@gmail.com",tivit :"mustafa"},
{email:"furkan.soydan@gmail.com",tivit :"furkan"},
{email:"mustafataha.soydan@gmail.com",tivit :"deneme123"}
]


var email = prompt("email?")
var sifre = prompt("sifre")

function giris(){
if(email == kullanicilar[0].email && sifre == kullanicilar[0].sifre)
{
    console.log(tivitler)
}
}

KullaniciAra(email,sifre)


function KullaniciAra(email,sifre)
{
    kullanicilar.forEach(function(item){
        if(item.email == email && item.sifre == sifre)
        {
            console.log("giriş Başarılı")
            console.log(tivitler)
            return true
        }
    });

}