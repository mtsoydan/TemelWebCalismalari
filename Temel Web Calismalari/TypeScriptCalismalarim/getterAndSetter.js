var Kisi = /** @class */ (function () {
    function Kisi(name) {
        this._isim = name;
    }
    Object.defineProperty(Kisi.prototype, "isim", {
        get: function () {
            return this._isim + " <3";
        },
        set: function (v) {
            this._isim = v;
        },
        enumerable: true,
        configurable: true
    });
    return Kisi;
}());
var k = new Kisi("mts");
console.log(k.isim);
k.isim = "bahar";
console.log(k.isim);
