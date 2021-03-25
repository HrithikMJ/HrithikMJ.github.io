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
    document.getElementById("heading").innerHTML=""; 
    document.getElementById("para").innerHTML="Check <br> out my  <br> instagram!!";
  }
  else if (a== 'GitHub') {
    document.getElementById("heading").innerHTML=""; 
    document.getElementById("para").innerHTML="Check <br>out my  <br> Github!!";
  }
  else if (a=='Twitter'){
    document.getElementById("heading").innerHTML=""; 
    document.getElementById("para").innerHTML="Tweet <br> me!!";

  }
  else if (a=='email'){
    document.getElementById("heading").innerHTML=""; 
    document.getElementById("para").innerHTML="E-mail <br>me !!";

   }
  else{
    document.getElementById("heading").innerHTML="social <br> links!!"; 
    document.getElementById("para").innerHTML="";

  } 
 }  
function out(){
  document.getElementById("para").innerHTML=""; 
  document.getElementById("heading").innerHTML="Hrithik MJ <br>here!!";
}