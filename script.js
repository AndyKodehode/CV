//IMAGE SLIDER FRONT-PAGE
let body = document.querySelector("body")
let titleCont = document.querySelectorAll(".title-cont")
let kahootImg = document.querySelector("#kahoot-img-cont")
let streamingImg = document.querySelector("#streaming-img-cont")
let fromRight = document.querySelectorAll(".from-right")
let fromLeft = document.querySelectorAll(".from-left")



//APPEAR OPTIONS, threshold
const appearOptions = {
    threshold: 0,
    rootMargin: "-200px 0px 0px 0px",
    root: null
  }





//INTERSECTION OBSERVER, for each entry
const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("from-left") &&
        entry.target.classList.add("from-right");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions)

  

 

  fromRight.forEach(fromRight => {
    appearOnScroll.observe(fromRight);
  });

  fromLeft.forEach(fromLeft => {
    appearOnScroll.observe(fromLeft);
  });

  console.log(appearOnScroll)


//DESIGN-PAGE

let smallCircle = document.querySelector(".small-circle")
let imgCont = document.querySelectorAll(".img-cont")



let currentPage = imgCont[0] 

imgCont.forEach(item => {
  item.addEventListener("click", function(){
  currentPage++;
  if(imgCont< currentPage){imgCont.classList.remove("active")}
  else{
    imgCont.classList.add("active")
  }
   
})

})