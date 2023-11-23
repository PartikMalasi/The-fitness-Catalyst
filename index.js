// theme
document.querySelector(".darki").addEventListener("click",addclass);
document.querySelector(".lighti").addEventListener("click",remove);
function addclass(){
    document.querySelector("body").setAttribute("data-bs-theme","dark");
    document.querySelector("body").classList.remove("theme");
    document.querySelector("nav").classList.addclass("border-bottom");
    document.querySelector("nav").classList.addclass("border-white");
}
function remove(){
    document.querySelector("body").setAttribute("data-bs-theme","light");
    document.querySelector("body").classList.addclass("theme");
    document.querySelector("nav").classList.remove("border-bottom");
    document.querySelector("nav").classList.remove("border-white");
}

var w=0;
var h=0;


document.querySelector(".sub").addEventListener("click",bmians);
function bmians(){
    w=document.getElementById("myText").value;
    h= document.getElementById("myText2").value;
    if (isNaN(w) || isNaN(h)) {
        document.querySelector(".result").innerHTML = "<h4>Wrong input.</h4>";
    }
    var result=(w*1.0)/(h*h);
   if(isNaN(result)){
       document.querySelector(".result").innerHTML="<h4>Wrong input.</h4>";
   }
   else if(result<=18.0){
        document.querySelector(".result").innerHTML=""+result+"<br>You are <span class='text-danger'><b> Under weight!</b></span> <br> Don't worry we havea plan for you.";
    
    }
    else if(result<=25){
        document.querySelector(".result").innerHTML=""+result+"<br>You are Normal weight! <br>We have a plan for you to maintain this figure.";
    }
    else{
        document.querySelector(".result").innerHTML=""+result+"<br>You are <span class='text-danger'><b>Over weight!</b></span> <br> Don't worry we have a plan for you.";
    }
}
