// smoth scroll

const body = document.body;
const main = document.getElementById('main');

let sx = 0, // For scroll positions
    sy = 0;
let dx = sx, // For container positions
    dy = sy;


body.style.height = body.pageX + 'px';


main.style.position = 'absolute';
main.style.top = 0;
main.style.left = 0;

// Bind a scroll function
window.addEventListener('scroll', easeScroll);


function easeScroll() {
  
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}


window.requestAnimationFrame(render);

function render(){
  //We calculate our container position by linear interpolation method
  dx = li(dx,sx,0.07);
  dy = li(dy,sy,0.07);
  
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  
  
  main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
 
  
  
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}





// let imageItems = [...document.querySelectorAll('.img-wrap')];
// // let titles = [...document.querySelectorAll('h2')]
// let sections = [];

// let options = {
//     rootMargin: '0px',
//     threshold: .2
//   }


// let setItemActive = (entries, observer) => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             entry.target.classList.add('active');
//         }
       
//     })
// }

// let observer = new IntersectionObserver(setItemActive, options);
  
// imageItems.forEach((item,idx) => {
//     item.children[0].style.backgroundImage = `url(./images/${idx+1}.jpeg)`
//     idx % 2 == 0 ? item.style.left = '55%' : item.style.left = '5%'
//     observer.observe(item)
// })

// titles.forEach((title, idx) => {
//     idx % 2 == 0 ? title.style.left = '45%' : title.style.left = '35%';
//     observer.observe(title)
// })

// class Section{
//     constructor(element, idx){
//         this.idx = idx
//         this.element = element
//         this.observer = new IntersectionObserver(entries => {
//             entries.forEach(entry => this.isVisible = entry.isIntersecting);
//         });
//         this.observer.observe(this.element);

//     }

//     animateText(){
//         let pos = (
//                     window.scrollY - (window.innerHeight * this.idx)) * 0.55 < 0 
//                     ? 0
//                     : (window.scrollY - (window.innerHeight * this.idx)
//                     ) * 0.55 
//         this.element.children[0].style.transform = `translateY(-${pos}px)`
//     }
// }

// [...document.querySelectorAll('section')].forEach((section, idx) => {
//     let newSection = new Section(section, idx);
//     sections.push(newSection);

// })

// function animate(){
//     sections.forEach(section => {
//         section.animateText()
//     })
//     requestAnimationFrame(animate)
// }

// animate()



let listItems = [...document.querySelectorAll('.text')];

let options = {
    rootMargin : '-10%',
    threshold: 0.0
}


let observer = new IntersectionObserver(showitem, options);


  function showitem(entries) {
      entries.forEach(entry=> {
          if(entry.isIntersecting) {
            //   let letters = [...entry.target.querySelectorAll('.text')];
            //   letters.forEach((letter , idx ) => {
            //       setTimeout(()=> {
            //           letter.classList.add('active');
            //       } , idx * 70)
            //   })
              entry.target.classList.add('active');
          }
      })
  } 

  listItems.forEach(item => {
        // let newstring = '';
        // let itemtext = item.innerText.split('');
        // itemtext.map(letter => (newstring += letter == ' ' ? `<span class='gap'></span>` : `<span>${letter}</span>` ))
        // item.innerHTML = newstring

    observer.observe(item);
  })



//   arrayOfLines = lineString.match(/[^\r\n]+/g);