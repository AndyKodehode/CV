//IMAGE SLIDER FRONT-PAGE
let body = document.querySelector("body")

let titleCont = document.querySelectorAll(".title-cont")
let kahootImg = document.querySelector("#kahoot-img-cont")
let streamingImg = document.querySelector("#streaming-img-cont")
let fromRight = document.querySelectorAll(".from-right")
let fromLeft = document.querySelectorAll(".from-left")
let designCont = document.querySelectorAll(".design-cont")





//RIGHT
const targetRight = document.querySelectorAll(['#kahoot-img-cont', '.css-cont', '.title-cont'])

let observerRight = new IntersectionObserver(entries => {
  entries.forEach( entry => {
    
  
    if (entry.isIntersecting) {
      entry.target.classList.add('a-right')
      

    } else {
      entry.target.classList.remove('a-right')
    }
  });
})





targetRight.forEach( targetRight =>{
observerRight.observe(targetRight);
})

//LEFT

const targetLeft = document.querySelectorAll(['#streaming-img-cont', '#calc-img-cont']);


let observerLeft = new IntersectionObserver(entries => {
  entries.forEach( entry => {
    
  
    if (entry.isIntersecting) {
      entry.target.classList.add('a-left')
      

    } else {
      entry.target.classList.remove('a-left')
    }
  });
})





targetLeft.forEach( targetLeft =>{
observerLeft.observe(targetLeft);
})




