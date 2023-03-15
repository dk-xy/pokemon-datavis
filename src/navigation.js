const navButton = document.querySelector('.toggle-menu')
const state = document.querySelector('nav').getAttribute('status')
const navIcon = navButton.querySelector('span')
let actualState = false;

let w = window.innerWidth;
let h = window.innerHeight; 
console.log("width: "+w+" and height: "+h)

export function toggleSection(section) {
    //on rajoute le -section du html
    section = "#section-" + section.split('#')[1];
    //console.log(section)
    let section_query = document.querySelector(section)
    if (document.querySelector('section.active')) {
        document.querySelector('section.active').classList.add('hidden')
      document.querySelector('section.active').classList.remove('active')

    }
    if (!section_query.classList.contains('active')) {
      section_query.classList.add("active")
      section_query.classList.remove("hidden")
    }
   
  }
  
  
  export function displaySection() {
    const section = window.location.hash || "#home"
    //console.log(section)
    toggleSection(section)
  
  
  }
  

/* Set the width of the side navigation to 250px */
function openNav() {
    // document.querySelector("header").style.width = "250px";
    // document.querySelector("body").style.marginLeft = "250px";
    // document.querySelector(".fixedLegend").style.marginLeft = "250px"
    // actualState = true;
    document.querySelector("header").style.position = "fixed";
    document.querySelector("header").style.top = "0";
    document.querySelector("header").style.width = "100%";
    // document.querySelector("body").style.marginTop = "100px";
    actualState = true;
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.querySelectorAll(".header-item").forEach(elm => {
        elm.classList.add('hidden')
    })
    document.querySelector("header").style.width = "0";
    document.querySelector("body").style.marginLeft = "0";
    document.querySelector(".fixedLegend").style.marginLeft = "0"
    actualState = false;
}


function toggleState() {
    if (!actualState) {
        openNav()
        toggleMenuItem()
        actualState = true;
        navIcon.textContent = 'close'


    } else {
        closeNav()
        
        actualState = false;
        navIcon.textContent = 'menu'
    }
}


function toggleMenuItem(){
    document.querySelectorAll(".header-item").forEach(elm => {
        if(elm.classList.contains('hidden')){
            elm.classList.remove('hidden')
        } else{
            elm.classList.add('hidden')
        }
    })
}

navButton.addEventListener('click', toggleState)
