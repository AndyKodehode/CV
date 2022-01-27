






/*
let cssPosition = 1
let cssSlides = cssText.length

textMain.forEach(function(){
cssText.addEventListener("scroll", function(){
  for( let i=0; i< cssText.length; i++)

  cssText.forEach(function()
  {
  cssText[i].classList.remove("active")
  cssText[cssPosition].classList.add("active")

  if (cssPosition === cssSlides - 1) {
    cssPosition = 0
   } else {
    cssPosition++;
   }

  console.log(cssText)

}
)
}
)
}
)*/

let cssText = document.querySelectorAll(".css-text")
let textMain = document.querySelectorAll(".text-main")
let img = document.querySelectorAll(".img-cont")
let imgCont = document.querySelectorAll(".main-img-cont")
const targetCSS = document.querySelector('.css-text');
const options = {
  threshold: 0.7,
}

let slidePosition = 0
const totalSlides = cssText.length;


function handleIntersectionCSS(entries) {
  
  
  entries.map((cssText) => {
    if(img[slidePosition]=== 0){
      slidePosition++
    }
    
    img[slidePosition].classList.remove('active', 'fade-in')
    img[slidePosition++].classList.add('active', 'fade-in')
    
    
    if (cssText.isIntersecting) {
     //img[slidePosition].classList.remove('active', 'fade-in')
      
      
    } else{
     
    }
    
    
    
  
  });


  if (slidePosition === totalSlides-1 ) {
    slidePosition=0
   } else {
    slidePosition;
   }

  
  console.log(img)
}
console.log(slidePosition)
console.log(cssText.isIntersecting)


let observerCSS = new IntersectionObserver(handleIntersectionCSS, options);


observerCSS.observe(targetCSS);
