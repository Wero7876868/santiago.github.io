const fadeObserver = new IntersectionObserver(
  (elsToFade) => {
    elsToFade.forEach((el) =>{
      if(el.isIntersecting) {
        setTimeout(() => {
          el.target.classList.add("faded");
        }, +el.target.getAttribute("data-delay") || 0);
        fadeObserver.unobserve(el.target);
        el.target.addEventListener("transitionend", () => {
          el.target.classList.remove("fade-up", "fade-left", "fade-right", "fade-down", "faded")
        },
          {once: true}
        )
      }
    })
  }, { threshold: 0.1 }
)

const fadeEls = [
  ...document.querySelectorAll(".fade-up"),
  ...document.querySelectorAll(".fade-down"),
  ...document.querySelectorAll(".fade-right"),
  ...document.querySelectorAll(".fade-left"),
];

fadeEls.forEach((el) => {
  fadeObserver.observe(el);
})


function animateCallback(els){
  els.forEach((el) => {
    if(el.isIntersecting){
      setTimeout(() => {
        el.target.setAttribute("data-animate", "animate");
      }, +el.target.getAttribute("data-delay") || 0);
      animateObserver.unobserve(el.target);
    }
  })
}

const animateOptions = {
  threshold: 0.25
}

const animateObserver = new IntersectionObserver(animateCallback, animateOptions)

const animateEls = [...document.querySelectorAll("[data-animate]")];

animateEls.forEach((el) => {
  animateObserver.observe(el);
})