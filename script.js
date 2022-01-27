//IMAGE SLIDER FRONT-PAGE
let body = document.querySelector("body")

let titleCont = document.querySelectorAll(".title-cont")
let kahootImg = document.querySelector("#kahoot-img-cont")
let streamingImg = document.querySelector("#streaming-img-cont")
let fromRight = document.querySelectorAll(".from-right")
let fromLeft = document.querySelectorAll(".from-left")
let designCont = document.querySelectorAll(".design-cont")



//variabel med div som du skal få til å slide

const target = document.querySelector('#kahoot-img-cont')


//RIGHT
// Next we want to create a function that will be called when that element is intersected
function handleIntersection(entries) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('a-right')//classen som du vil aktivere animasjonen
      

    } else {
      entry.target.classList.remove('a-right')
      
    }

    
  });
}

let observer = new IntersectionObserver(handleIntersection);

// Finally start observing the target element
observer.observe(target);

console.log(typeof target)



//LEFT

const targetLeft = document.querySelector('#streaming-img-cont');


function handleIntersectionLeft(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('a-left')
      

    } else {
      entry.target.classList.remove('a-left')
    }
  });
}



let observerLeft = new IntersectionObserver(handleIntersectionLeft);


observerLeft.observe(targetLeft);


//TITLE

const titleTarget = document.querySelectorAll('.title-cont')

function handleIntersectionTitle(entries) {
  entries.forEach(element => {
    
  });( element => {
    
  });((entry) => {
    if (entry.isIntersecting) {
      entry.titleTarget.classList.add('a-left')
      

    } else {
      entry.titleTarget.classList.remove('a-left')
    }
  });
}



let observerTitle = new IntersectionObserver(handleIntersectionTitle);


observerLeft.observe(titleTarget);

console.log(titleTarget)
