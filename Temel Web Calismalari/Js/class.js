class Personel{
    constructor(ad,soyad)
    {
        this.ad = ad
        this.soyad = soyad
    }

    kaydet(){
        console.log("personel kaydedildi "+ this.ad)
    }
}

const per1 = new Personel("mustafa","taha")

per1.kaydet()

per1.ad = "furkan"
per1.kaydet()