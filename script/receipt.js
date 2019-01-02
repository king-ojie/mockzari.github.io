 
     if(typeof(Storage)!=="undefined") {
        var name = document.getElementById("name").value;
        localStorage.setItem("name", name); }
        /*var email = document.getElementById("email").value;
        var destination = document.getElementById("destination");
        var realD= destination.options[destination.selectedIndex].text;
        var dat = document.getElementById("date").value; 
        var location = document.getElementById("locate");
        var realL=  location.options[location.selectedIndex].text;  */


          {
            var upd = document.getElementById("disp-name").innerHTML; upd =localStorage.getItem(name);
         } /*
        document.getElementById("disp-date").innerHTML= dat; 
        document.getElementById("disp-location").innerHTML= realL;
        document.getElementById("disp-destination").innerHTML= realD;
        document.getElementById("disp-email").innerHTML= email; */
        


        
    
            