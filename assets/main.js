// -----------------------------------------------------------------------------
// Animate when visible on viewport
// -----------------------------------------------------------------------------

var Animation = function ({ offset } = { offset: 10 }) {
    var _elements;

    var windowTop = (offset * window.innerHeight) / 100;
    var windowBottom = window.innerHeight - windowTop;
    var windowLeft = 0;
    var windowRight = window.innerWidth;

    function start(element) {
        element.style.animationDelay = element.dataset.animationDelay;
        element.style.animationDuration = element.dataset.animationDuration;
        element.classList.add(element.dataset.animation);
        element.dataset.animated = "true";
    }

    function isElementOnScreen(element) {
        var elementRect = element.getBoundingClientRect();
        var elementTop =
            elementRect.top + parseInt(element.dataset.animationOffset) ||
            elementRect.top;
        var elementBottom =
            elementRect.bottom - parseInt(element.dataset.animationOffset) ||
            elementRect.bottom;
        var elementLeft = elementRect.left;
        var elementRight = elementRect.right;

        return (
            elementTop <= windowBottom &&
            elementBottom >= windowTop &&
            elementLeft <= windowRight &&
            elementRight >= windowLeft
        );
    }

    function checkElementsOnScreen(els = _elements) {
        for (var i = 0, len = els.length; i < len; i++) {
            if (els[i].dataset.animated) continue;

            isElementOnScreen(els[i]) && start(els[i]);
        }
    }

    function update() {
        _elements = document.querySelectorAll(
            "[data-animation]:not([data-animated])"
        );
        checkElementsOnScreen(_elements);
    }

    window.addEventListener("load", update, false);
    window.addEventListener("scroll", () => checkElementsOnScreen(_elements), {
        passive: true
    });
    window.addEventListener(
        "resize",
        () => checkElementsOnScreen(_elements),
        false
    );

    return {
        start,
        isElementOnScreen,
        update
    };
};

var options = {
    offset: 20
};
var animation = new Animation(options);


// -----------------------------------------------------------------------------
// Back to the top button
// -----------------------------------------------------------------------------

//Get the button:
mybutton = document.getElementById("scrollTop");

// When the user scrolls down 120px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// -----------------------------------------------------------------------------
// Count Up 
// -----------------------------------------------------------------------------

$(function(){
  $('.counter-value').rCounter({
    duration: 30
  });
});


// -----------------------------------------------------------------------------
// ScrollSpy
// -----------------------------------------------------------------------------

$(document).ready(function(){

  var sectionIds = $('#scrollspy-indicator li a');

    $(document).scroll(function(){
        sectionIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
    
            if(scrollPosition < containerBottom - 300 && scrollPosition >= containerOffset - 300){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
        });
    });
   
});


//
  $("document").ready(function () {

        $('.navbar li a[href="#about"]').click(function () {

            $('html, body').animate({
                scrollTop: $("#about").offset().top - 230
            }, 100);

        });


    });