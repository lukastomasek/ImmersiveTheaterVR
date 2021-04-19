const animateLogo = () => gsap.to(".logo", {duration: 1.5, x: 50, ease: 'sine'})

const animateMainLogo = () => {
  gsap.from("#main-logo",{
    opacity: 0, 
    y: 100, 
    duration: 4,
    ease:'elastic'
  })
}
const animateMainP = () => {
  gsap.from("#main-p",{
    opacity: 0,  
    duration: 6,
    ease:'sine'
  })
}


// animateLogo()

// animateMainLogo()

// animateMainP()