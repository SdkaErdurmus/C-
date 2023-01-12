var kdvOrani = '18';

var arr = ["Yüz Temizleme Jeli", "Beauty Collogen", "Nem Bombası", "Stick Cold Cream", "Unisex Güneş Gözlüğü"]

var urunAdi = [
	{fiyat: '', aciklama: 'Seçim'},
    {fiyat: '239.90', aciklama: 'Yüz Temizleme Jeli'},
    {fiyat: '222', aciklama: 'Beauty Collogen'},
    {fiyat: '44.95', aciklama: 'Nem Bombası'},
	{fiyat: '159.40', aciklama: 'Stick Cold Cream'},
	{fiyat: '750', aciklama: 'Unisex Güneş Gözlüğü'},
	
];

var select = document.querySelector('#urunAdi');
select.onchange= function(){
    var fiyat = this.value;
    var input = document.querySelector('#brFiyat');
    input.value = fiyat;

}

for(urun of urunAdi){
    var option = new Option(urun.aciklama,urun.fiyat);
    select.add(option);
	
	
}


var iskontoOran = [
	{isk: '30', aciklama: 'Bayi'},
    {isk: '5', aciklama: 'Mimar'},
    {isk: '2', aciklama: 'Öğrenci'},

];

var select = document.querySelector('#iskontoOrani');
select.onchange= function(){
    var isk= this.value;
    var input = document.querySelector('#iskonto');
    input.value = isk;

}
for(urun of iskontoOran){
    var option = new Option(urun.aciklama,urun.isk);
    select.add(option);
	
	
}


function iskontoOrani(){
	
	var indirimOrani = $("#iskontoOrani").val();
	
	if(indirimOrani ==  30 ){
		
		document.getElementById("bayiKodu").style.display="block";
	} else {
		document.getElementById("bayiKodu").style.display="none";
		
	}
	
	
}


	function kdv(){
		
	if(document.getElementById('kdv').checked) {
	
		kdvOrani = '18' ;
	}
	
	else if (document.getElementById('kdvsiz').checked) {
		
		kdvOrani = '0' ;
	}

}

	function hesapla(){
	
	var musteriAdi = document.getElementById("musteriAdi");


	var name = document.getElementById("urunAdi");
	var urunAdi = name.options[name.selectedIndex].text;

	var urunAdet = Number(document.getElementById("urunAdedi").value);
	var adet = urunAdet;
	
	var tutar = Number(document.getElementById("brFiyat").value);
	
    var totalFiyat = (tutar * adet);

	var iskonto3 = Number(document.getElementById("iskonto").value);
	var iskonto5 = (totalFiyat * iskonto3) / 100;
	
	var iskontoluFiyat = (totalFiyat - iskonto5);
	

	var kdvliTutar = iskontoluFiyat + (iskontoluFiyat * kdvOrani);
	
	

   document.getElementById('ozet').innerHTML = "Müşteri Adı : " + musteriAdi.value + "<br>" + "Ürün : " + urunAdi  + "<br>" +"Adet : " + " " + urunAdet + "<br>" +"Birim Fiyat : " + " " + tutar + "₺" + "<br>" + "Toplam Fiyat : " + " " + totalFiyat + "₺" + "<br>"+ "İskontolu Fiyat : " + " " + iskontoluFiyat +"₺" + "<br>" + "Kdv'li Fiyat : " + " " + kdvliTutar +"₺";

}
