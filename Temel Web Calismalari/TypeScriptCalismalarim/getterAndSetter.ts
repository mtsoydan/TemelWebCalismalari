class Kisi{

    
    private _isim : string;
    public get isim() : string {
        return this._isim+" <3";
    }
    public set isim(v : string) {
        this._isim = v;
    }
    constructor(name:string)
    {
this._isim = name;
    }


}

let k = new Kisi("mts");
console.log(k.isim)
k.isim = "Soydan"
console.log(k.isim)
