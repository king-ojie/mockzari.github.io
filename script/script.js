 var navbar = document.getElementsByClassName("navbar")[0]; 
           var scrollH = 50;
		   
		   function updateNav(){
		   var vertical = window.scrollY; ;
		   if (vertical > scrollH) {
			   navbar.classList.add ('sticky');
		   } 
            else if (vertical< scrollH ) {
                navbar.classList.remove ('sticky')  ;   
            }  
               else {
			   navbar.classList.add('navbar-default');
		   }
			   
		   }
		   window.addEventListener('scroll', updateNav, false);
        
/*for show/hid button */
      var button = document.getElementById("btn-primary") ;
        button.addEventListener("click", showSite);
function showSite() {
	var disp = document.getElementById("section");
	if (disp.style.display === 'none') {
	disp.style.display = 'block'; }
	 else {
		disp.style.display = 'none';	
	} 
} 

var name = document.getElementById("name").value;
alert (name);
