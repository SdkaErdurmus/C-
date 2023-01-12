function kdvOrani1(){
	
if(document.getElementById('varsayilanOran').checked) {
   
     var input2 = document.querySelector('#kdvOrani');
		input2.value = '18' ;
		document.getElementById('kdvOrani').disabled = true;
   
}

else if (document.getElementById('ozelOran1').checked) {
   
     var input2 = document.querySelector('#kdvOrani');
		input2.value = ' ' ;
		document.getElementById('kdvOrani').disabled = false;
   
}

}

	
	