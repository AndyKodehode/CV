


let imgCont = document.querySelectorAll(".img-cont")
let slides = document.querySelectorAll(".single-img-div")
let img = document.querySelector(".img-circle");
let arrow = document.querySelector(".arrow")
let dots = document.getElementsByClassName("small-circle");
let textCont = document.querySelectorAll(".text-cont")
let text = document.querySelectorAll(".link")

let slidePosition = 1
const totalSlides = slides.length;

imgCont.forEach(function(){
  arrow.addEventListener("click", function()
   {
   for( let i=0; i< slides.length; i++)

   slides.forEach(function()
   {
   slides[i].classList.remove("active")
   slides[slidePosition].classList.add("active")
  
  
  }
   
   )
   

   if (slidePosition === totalSlides - 1) {
    slidePosition = 0
   } else {
    slidePosition++;
   }

  
   console.log(slides)
  }
   
  
  
  )

})

let textPosition = 1
const textSlides = text.length;

textCont.forEach(function(){
  arrow.addEventListener("click", function()
   {
   for( let i=0; i< text.length; i++)

   text.forEach(function()
   {
   text[i].classList.remove("active")
   text[textPosition].classList.add("active")
  
  
  }
   
   )
   

   if (textPosition === textSlides - 1) {
    textPosition = 0
   } else {
    textPosition++;
   }

  
   console.log(text)
  }
   
  
  
  )

})