var arr = ["Dolar", "Euro", "Türk Lirası"]

var paraTurleri = [
    {sembol: '$', aciklama: 'Dolar'},
    {sembol: '€', aciklama: 'Euro'},
    {sembol: '₺', aciklama: 'Türk Lirası'},
];

var select = document.querySelector('.form-select-sm');
select.onchange= function hesapla (){
    var sembol = this.value;
    var aciklama = select.options[this.selectedIndex].text;
    console.log(sembol + '/' + aciklama);

    var input = document.querySelector('#sayi1');
    input.value = sembol;
}

for(para of paraTurleri){
    var option = new Option(para.aciklama,para.sembol);
    select.add(option);
}

	function hesapla(){

	var deger = Number(document.getElementById("kdvOrani").value);
	var Tutar = Number(document.getElementById("brFiyat").value);
	
	
	var urunAdet = Number(document.getElementById("urunAdedi").value);
    var adet = urunAdet;
	var totalFiyat = Number(document.getElementById("totalFiyat").value);
    var totalFiyat = (Tutar * adet);
	
    var SonucInput2 = document.querySelector("#kdvTutari");
	var kdv = (Tutar * adet * deger)/100;
    SonucInput2.value = kdv;
    document.getElementById("kdvTutari").innerHTML = SonucInput2 ;


    var SonucInput = document.querySelector("#totalFiyat");
    SonucInput.value = totalFiyat;
    document.getElementById("totalFiyat").innerHTML = SonucInput ;
	
	
	var totalFiyat = Number(document.getElementById("totalFiyat").value);
    var totalFiyat = (Tutar* adet);

    var SonucInput = document.querySelector("#sayi");
    SonucInput.value = totalFiyat + kdv;
    document.getElementById("sayi").innerHTML = SonucInput ;



    var SonucInput = document.querySelector("#ozet");
    SonucInput.value = adet + ' ' + 'adet' + ' ' + ' Adet Fiyatı: '+ Tutar +' ' + '(' + 'Fiyat ='+ totalFiyat + ' ' + '+' +' Kdv'+ ':'+ kdv + ')' ;
    document.getElementById("ozet").innerHTML = SonucInput ;

}
