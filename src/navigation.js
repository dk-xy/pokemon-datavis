const navButton = document.querySelector('.toggle-menu')
const state = document.querySelector('nav').getAttribute('status')
const navIcon = navButton.querySelector('span')
let actualState = false;


function toggleSection(section) {
    //on rajoute le -section du html
    section = "#section-" + section.split('#')[1];
    //console.log(section)
    let section_query = document.querySelector(section)
    if (document.querySelector('section.active')) {
      document.querySelector('section.active').classList.remove('active')
    }
    if (!section_query.classList.contains('active')) {
      section_query.classList.add("active")
    }
  }
  
  
  export function displaySection() {
    const section = window.location.hash || "#pokemon"
    //console.log(section)
    toggleSection(section)
  
  
  }
  

/* Set the width of the side navigation to 250px */
function openNav() {
    document.querySelector("header").style.width = "250px";
    document.querySelector("body").style.marginLeft = "250px";
    actualState = true;
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.querySelectorAll(".header-item").forEach(elm => {
        elm.classList.add('hidden')
    })
    document.querySelector("header").style.width = "0";
    document.querySelector("body").style.marginLeft = "0";
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
