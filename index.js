var body = $("body"),
 container1 = $(".container1"),
 nav = $("nav"),
 navlink = $('nav ul li a'),
 underlines = $("nav ul li"),
totop = $(".totop"),
 navbackground = $("nav ul"),
 line = $("#line0"),
 line1 = $("#line1"),
 line15 = $("#line15"),
 container = $(".container"),
 projecttitle = $("#projecttitle"),
 goals = $('#goals'),
 menu = $('nav svg');
const skills = ['htmllevel', 'csslevel', 'jslevel', 'javalevel', 'cslevel', 'clevel'];
$(window).scroll(function() {
    var hT = $('#page2').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop(),
        hTskills = $('.skills').offset().top,
        projects = $('#lastskill').offset().top;

    if (wS < (projects - wH +180)){
        projecttitle.removeClass("active");

    }


    
    if (wS > (hTskills-wH+200)){
            loadSliders();
            line1.addClass("active");
            line15.addClass("active");
        }


    if (wS < (hTskills-wH)){
        removeSliders();
        line1.removeClass("active");
        line15.removeClass("active");
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
        container.removeClass("active")
        projecttitle.removeClass("active")
        goals.removeClass("active");
        menu.removeClass("active");


    }  else if (wS > (projects - wH )){
        body.removeClass('active');
        container.removeClass("active");
        projecttitle.addClass("active");


    }
    else if (wS > (hT-wH)){
        container1.addClass("active");
        navlink.addClass("active");
        nav.addClass("active");
        underlines.addClass("active");
        body.addClass("active");
        totop.addClass("active");
        line.addClass("active");
        navbackground.addClass("active");
        container.addClass("active");
        goals.addClass("active");
        menu.addClass("active");

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

 function scrollProjects(){
    var hT = $('#line2').offset().top;
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

const projectBox = document.querySelector('.projectdisplay'); //adapted from https://codepen.io/thenutz/pen/VwYeYEE
const hoverIcon = document.querySelector('.dragcircle');
let isDown = false;
let startX;
let scrollLeft;

document.addEventListener('mousemove', function(e) {
    let left = e.clientX;
    let top = e.clientY;
    hoverIcon.style.left = left + 'px';
    hoverIcon.style.top = top + 'px';
  });

projectBox.addEventListener('mouseover', () => {
    hoverIcon.classList.remove('off');
})

projectBox.addEventListener('mouseleave', () => {
    hoverIcon.classList.add('off');
})

projectBox.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - projectBox.offsetLeft;
  scrollLeft = projectBox.scrollLeft;
});
projectBox.addEventListener('mouseleave', () => {
  isDown = false;
});
projectBox.addEventListener('mouseup', () => {
  isDown = false;
});
projectBox.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - projectBox.offsetLeft;
  const walk = (x - startX) * 2; 
  projectBox.scrollLeft = scrollLeft - walk;

});

function giveEmail() {
    /* Get the text field */
    const copyText = "bensonconcept1@gmail.com";
  
    /* Select the text field */

     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
}