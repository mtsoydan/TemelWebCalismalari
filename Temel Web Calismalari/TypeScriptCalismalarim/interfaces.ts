interface Product{
    id: number
    ad:string
    adet:number
}

function save(params:Product) {
    console.log(params.ad +"kaydedildi")
}


save({id:4,ad:"mts",adet:2})


let dizi =  ["konya","izmir","mugla"]



for(let i in dizi)

{
console.log(i)
}
for(let i of dizi)
{
    console.log(i)
}