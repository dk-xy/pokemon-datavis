import * as d3 from 'd3';
import './css/index.css'
import './navigation'


console.log("hello")

function toggleSection(section){
  //on rajoute le -section du html
  section = "#section-"+section.split('#')[1];
  console.log(section)
  let section_query = document.querySelector(section)
  if (document.querySelector('section.active')) {
      document.querySelector('section.active').classList.remove('active')
  }
  if (!section_query.classList.contains('active')) {
      section_query.classList.add("active")
  }
}


function displaySection(){
  const section = window.location.hash || "#pokemon"
  //console.log(section)
  toggleSection(section)

  
}

window.addEventListener('hashchange', displaySection)




Promise.all([
    d3.csv('data/pokemon.csv', {
    }),
    d3.csv('smogon.csv')
  ])
//   .then([smogon, pkmn]) => {

//   }

