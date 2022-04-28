var body = $("body")
var container1 = $(".container1")
var nav = $("nav")
var navlink = $('nav ul li a')
var underlines = $("nav ul li")
var totop = $(".totop")
var navbackground = $("nav ul")
var line = $("#line0")
var line1 = $("#line1")
const skills = ['htmllevel', 'csslevel', 'jslevel', 'javalevel', 'clevel'];
$(window).scroll(function() {
    var hT = $('#page2').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop(),
        hTskills = $('.skills').offset().top;

    if (wS > (hTskills-wH)){
            line1.addClass("active");
            loadSliders();
    }


    if (wS < (hTskills-wH)){
        line1.removeClass("active")
        removeSliders();

    }

    if ((wS < (hT-wH)) || wS < 300){
        container1.removeClass("active");
        nav.removeClass("active");
        navlink.removeClass("active")
        underlines.removeClass("active")
        body.removeClass("active")
        totop.removeClass("active")
        line.removeClass("active")
        navbackground.removeClass("active")
        

    }
    else if (wS > (hT-wH)){
        container1.addClass("active");
        navlink.addClass("active")
        nav.addClass("active");
        underlines.addClass("active")
        body.addClass("active")
        totop.addClass("active")
        line.addClass("active")
        navbackground.addClass("active")


    }

    
 });

function turnOff(current, next){
    document.getElementById(next).classList.toggle("off");

    document.getElementById(current).classList.toggle("off");
}


 function scrollDown(){
    var hT = $('#page2').offset().top;
    window.scrollTo(0, hT)     
 }

 function scrollSkills(){
     var hT = $('#line1').offset().top;
     window.scrollTo(0, hT)
 }

 function menuOpen(){
     if(!$('nav ul li').hasClass('opened')){
    $('nav ul li').addClass('opened');
    return;
     } else{
        $('nav ul li').removeClass('opened');

     }
}

function loadSliders(){
    var elements = $(".skills .skillbar .skills");
    for(let i = 0; i < skills.length; i++){
        $(elements[i]).addClass(skills[i]);
    }
}

function removeSliders(){
    var elements = $(".skills .skillbar .skills");
    for(let i = 0; i < skills.length; i++){
        $(elements[i]).removeClass(skills[i]);
    }
}