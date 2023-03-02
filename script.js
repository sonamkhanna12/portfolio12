var tablinks=document.getElementsByClassName("tab-links");
var tabcontent=document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcont of tabcontent){
        tabcont.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
var sidem=document.getElementById("sidemenu");
function openmenu(){
    sidem.style.right="0";
}
function closemenu(){
    sidem.style.right="-200px";
}
function si(){
    var image = document.getElementById('image');

    window.open("https://simple-interest.vercel.app/" );
}
function tip(){
    var image = document.getElementById('image');

    window.open("https://tipcal-two.vercel.app/" );
}
function draw(){
    var image=document.getElementById('image')
    window.open("https://jsdrawingapp.vercel.app/");
}
function chat(){
    var image=document.getElementById('image')
    window.open("https://chat-frontend-five.vercel.app/");
}
function testi(){
    var image=document.getElementById('image')
    window.open("https://vercel.com/sonamkhanna12/testinamial");
}
function first(){
    var image=document.getElementById('image')
    window.open("https://htmlcssproject-self.vercel.app/");
}
function stopw(){
    var image=document.getElementById('image')
    window.open("https://stopwatch-coral-one.vercel.app/");
}