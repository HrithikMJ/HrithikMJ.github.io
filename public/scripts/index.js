	function myFunction() {
  	document.getElementById("head-soc").classList.toggle("show");
   }
   document.getElementsByClassName("fa-globe").addEventListener("click",fasd);
   function fasd(){
   		document.getElementById("head-soc").classList.toggle("show");

   }
   window.onclick = function(event) {
  	if (!event.target.matches('.dropbtn')) {
    	var dropdowns = document.getElementsByClassName("content");
    	var i;
    	for (i = 0; i < dropdowns.length; i++) {
      		var openDropdown = dropdowns[i];
      		if (openDropdown.classList.contains('show')) {
        	openDropdown.classList.remove('show');
      }
    }
  }  
}
function res(a){
  if (a =='Instagram'){
    
    document.getElementById("heading").innerHTML="Check out my  <br> instagram!!";
  }
  else if (a== 'GitHub') {
    document.getElementById("heading").innerHTML="Check out my  <br> Github!!";
  }
  else if (a=='Twitter'){
    document.getElementById("heading").innerHTML="Tweet me!!";

  }
  else{
    document.getElementById("heading").innerHTML="E-mail me !!";
   }
 }  
function out(){
  document.getElementById("heading").innerHTML="Hrithik MJ <br>here!!";
}