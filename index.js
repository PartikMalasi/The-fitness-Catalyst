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
document.querySelector(".bmibtn").addEventListener("click",bmi);
var w=0;
var h=0;
function bmi(){
    w= prompt("Enter the weight");
    h= prompt("Enter the height");
   document.querySelector(".heig").value=h;
   document.querySelector(".weig").value=w;
   
}


document.querySelector(".sub").addEventListener("click",bmians);
function bmians(){
    var result=(w*1.0)/(h*h);
   
    if(result<=18.0){
        document.querySelector(".result").innerHTML=""+result+"<br>You are <span class='text-danger'><b> Under weight!</b></span> <br> Don't worry we have a plan for you.";
    
    }
    else if(result<=25){
        document.querySelector(".result").innerHTML=""+result+"<br>You are Normal weight! <br>We have a plan for you to maintain this figure.";
    }
    else{
        document.querySelector(".result").innerHTML=""+result+"<br>You are <span class='text-danger'><b>Over weight!</b></span> <br> Don't worry we have a plan for you.";
    }
}

