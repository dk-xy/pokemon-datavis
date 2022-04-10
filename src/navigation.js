const navButton = document.querySelector('.toggle-menu')
const state = document.querySelector('nav').getAttribute('status')
const navIcon = navButton.querySelector('span')
let actualState = false;

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
