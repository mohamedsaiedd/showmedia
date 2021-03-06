const open = document.querySelector('.bars');
const close = document.querySelector('.close');
var tl = gsap.timeline({ defaults: { duration: 0.4, ease: 'easeIn' } });
open.addEventListener('click', () => {

    disableScroll();
    if (tl.reversed()) {
        tl.play();
    } else {
        tl.to('nav', { top: 0 })
            .to('nav', { height: '100vh' })

        .to('nav .card-list  .card2 ', { margin: '40px' })

        .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
            .to('section', { top: '100vh' }, '-=.8')
            .to('nav .card-list .card2 ', { opacity: 1, pointerEvents: 'all' })
            .to('nav .card-list ', { opacity: 1 }, '-=1')

    }
});



// TEXT
// TweenMax.from(".text h1 .hidetext", 1.5, {
//     delay: 1,
//     y: "100%",
//     ease: Expo.easeInOut
// });


// TweenMax.from(".text h3 .hidetext", 1.5, {
//     delay: 1.2,
//     y: "100%",
//     ease: Expo.easeInOut
// });




// let m = new MagnetMouse({
//     magnet: {
//         element: '.magnet'
//     }
// });

// m.init();


// anime({
//     targets: '.headertextlight::after',
//     scale: '1', // -> from '28px' to '100%',
//     easing: 'easeInOutQuad',
//     direction: 'alternate',
//     loop: true
// });


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}


// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function() { supportsPassive = true; }
    }));
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable scrolling in navbar
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
// call this to enable scrolling in navbar
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}



// mouse scrolling 
// const slider = document.querySelector('.card-list');
// let isDown = false;
// let startX;
// let scrollLeft;



// mouse scolling wheel

$(function() {

    $('.card-list').mousewheel(function(event, delta) {

        this.scrollLeft -= (delta * 100);

        event.preventDefault();

    });

});

// slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });



// slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 2; //scroll-fast
//     slider.scrollLeft = scrollLeft - walk;

// });


// // mouseCusor shape

// var mouseCircle = document.querySelector('.circle');

const curs = document.querySelector('.cursor2 ')
window.addEventListener('mousemove', detectmousemove)

function detectmousemove(e) {
    curs.style.top = e.pageY + "px";
    curs.style.left = e.pageX + "px";

}

close.addEventListener('click', () => {
    tl.reverse();
    enableScroll()
    curs.classList.remove('showin');

});




// slider.addEventListener('mousedown', solidchange)

// function solidchange(e) {
//     mouseCircle.style.border = "2px solid #fff";


// }
// slider.addEventListener('mouseup', dashedchange)

// function dashedchange(e) {
//     mouseCircle.style.border = "1.6px dashed #fff";

// }


const expanded = document.querySelectorAll('.one-new');


// change image in get in touch
expanded.forEach(expand => {

    expand.addEventListener('click', () => {
        expand.classList.toggle('active');

    })

    const newsImage = document.querySelector(".menu__item-img");

    expand.addEventListener('mousemove', (e) => {
        newsImage.style.top = e.pageY + "px";


    })
});







// Wrap every letter in a span
var textWrapperbold = document.querySelector('.headertextbold');
var textWrappertlight = document.querySelector('.headertextlight');
textWrapperbold.innerHTML = textWrapperbold.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrappertlight.innerHTML = textWrappertlight.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//preloader
const preloadDot = $(".preloader__container__preload__dot");
const tl2 = gsap.timeline({ repeat: 4 });
tl2
    .to(preloadDot, 0.3, { delay: 0.3, scale: 1.4, stagger: 0.1 })
    .to(preloadDot, 0.3, {
        scale: 1,
        stagger: {
            amount: 0.35,
            from: "start"
        }
    });

let counter = 000;
const loaderTimer = setInterval(function() {
    counter++;
    $(".preloader__container__percent").text(counter);
    if (counter == 100) {
        clearInterval(loaderTimer);
        gsap.to(".preloader", 0.5, { delay: 0.5, y: "150%" });

        // text animtion after preloader 
        anime.timeline({})
            .add({
                targets: '.headertextbold .letter',
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: (el, i) => 500 + 30 * i
            })

        anime.timeline({})
            .add({
                targets: '.headertextlight .letter',
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: (el, i) => 2000 + 30 * i
            })

    }
}, 55);



// remove video glitsh on click

const videoglitch = document.querySelector('.glitch');
const imageglitch = document.querySelectorAll('.glitch .img');

imageglitch.forEach(image => {
    videoglitch.addEventListener('click', () => {
        image.style.display = "none"
       

    })
})
imageglitch.forEach(image => {
    videoglitch.addEventListener('touchmove', () => {
        image.style.display = "none"


    })
})

// cusror

const vidcurs = document.querySelector('.videoCursour');
const videoelement = document.querySelector('video');






// function delay(n) {
//     n = n || 2000;
//     return new Promise((done) => {
//         setTimeout(() => {
//             done();
//         }, n);
//     });
// }

// function pageTransition() {
//     var t2 = gsap.timeline();
//     t2.to(".loading-screen", {
//         duration: 1.2,
//         width: "100%",
//         left: "0%",
//         ease: "Expo.easeInOut",
//     });

//     t2.to(".loading-screen", {
//         duration: 1,
//         width: "100%",
//         left: "100%",
//         ease: "Expo.easeInOut",
//         delay: 0.3,
//     });
//     t2.set(".loading-screen", { left: "-100%" });
// }

const videoSvg = document.querySelector('.svg-video')

videoSvg.addEventListener('click' , () => {
    const tl3 = gsap.timeline();
    const tl4 = gsap.timeline();
    const tl5 = gsap.timeline();

    disableScroll();
    
        tl3.to('.button', {
            scale : 30,
            zIndex : 10000 ,
            backgroundColor : '#000'
        })
        tl4.to('.svg-video', {
            opacity : '0'
        })
    
    .to('.nav-container' , {
        opacity : '0'
 
     } )
     tl5.to('.textcircle' , {
        
        zIndex : 10000 ,
        opacity: 0
    })
    .to('.close-button-video' , {
        display : 'block',
        delay : 0.5 ,

    })
    .to('.video-js' , {
        position : 'sticky' ,
        zIndex : 10000,
        left: '0',
        width : '100% !important',
        height: '50% !important',
       
                
    })
  
    videoelement.play() 
})

const videoClose = document.querySelector('.close-button-video')

videoClose.addEventListener('click' , () => {
    const tl13 = gsap.timeline();
    const tl14 = gsap.timeline();
    const tl15 = gsap.timeline();

    enableScroll();
    videoelement.pause() 

    tl15.to('.video-js' , {
        position : 'relative' ,
        zIndex : 222,
        width : '100% !important',
        height: '90vh !important', 

    })
    .to('.close-button-video' , {
        display : 'none',
        
    })
        tl13.to('.button', {
            scale : 2,
            zIndex : 222 ,
            backgroundColor : '#1f1f69',
            
        })
        .to('.textcircle' , {
            opacity: 1  
        })
        tl14.to('.svg-video', {
            opacity : '1'
        })
      
    .to('.nav-container' , {
        opacity : '1'
 
     })
    
     
})

const mqs = window.matchMedia('screen and (max-width: 592px)');
videoClose.addEventListener('click' , () => {
    const tl13 = gsap.timeline();
    const tl14 = gsap.timeline();
    const tl15 = gsap.timeline();

if(mqs.matches) {

    enableScroll();
    videoelement.pause() 

    tl15.to('.video-js' , {
        position : 'relative' ,
        zIndex : 222,
        width : '100% !important',
        height: '90vh !important', 

    })
    .to('.close-button-video' , {
        display : 'none',
        
    })
        tl13.to('.button', {
            scale : 1,
            zIndex : 222 ,
            backgroundColor : '#1f1f69',
            
        })
        .to('.textcircle' , {
            opacity: 1  
        })
        tl14.to('.svg-video', {
            opacity : '1'
        })
      
    .to('.nav-container' , {
        opacity : '1'
 
     })
    


}})
