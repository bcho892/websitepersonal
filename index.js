var body = $("body")
var container1 = $(".container1")
var nav = $("nav")
var navlink = $('nav ul li a')
var underlines = $("nav ul li")
var totop = $(".totop")
$(window).scroll(function() {
    var hT = $('#page2').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();

    if ((wS < (hT-wH)) || wS < 70){
        container1.removeClass("active");
        nav.removeClass("active");
        navlink.removeClass("active")
        underlines.removeClass("active")
        body.removeClass("active")
        totop.removeClass("active")

    }
    else if (wS > (hT-wH)){
        container1.addClass("active");
        navlink.addClass("active")
        nav.addClass("active");
        underlines.addClass("active")
        body.addClass("active")
        totop.addClass("active")
    }

 });

function turnOff(current, next){
    document.getElementById(next).classList.toggle("off");

    document.getElementById(current).classList.toggle("off");
}


 function scrollDown(){
     document.getElementById("page2").scrollIntoView({ behavior: 'smooth' , block: 'start', inline: 'nearest'});
     
 }