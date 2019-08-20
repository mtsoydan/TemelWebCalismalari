abstract class KrediBase {
    constructor() {
        
    }
     Kaydet():void {
        console.log("kaydedildi")
    }

    abstract hesapla():void;//imza şeklinde kalıp
    
}

class TuketiciKredi extends KrediBase{
    hesapla(): void {
        console.log("tuketici kredisine göre hesaplandı")
    }

}