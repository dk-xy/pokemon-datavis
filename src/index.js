import * as d3 from 'd3';
import './css/index.css';
import './navigation';
import pokemon from "../data/pokemon.csv";
import smogon from "../data/smogon.csv";

console.log("hello")

function toggleSection(section) {
  //on rajoute le -section du html
  section = "#section-" + section.split('#')[1];
  console.log(section)
  let section_query = document.querySelector(section)
  if (document.querySelector('section.active')) {
    document.querySelector('section.active').classList.remove('active')
  }
  if (!section_query.classList.contains('active')) {
    section_query.classList.add("active")
  }
}


function displaySection() {
  const section = window.location.hash || "#pokemon"
  //console.log(section)
  toggleSection(section)


}

window.addEventListener('hashchange', displaySection)


//Partie
// console.log(smogon)

// console.log(pokemon)



function sortTypes(theArray) {
  let lineMatrice = new Array(18);
  //console.log(theArray)

  for (let i = 0; i < 18; i++) {
    lineMatrice[i] = 0;

  }

  //console.log(lineMatrice)
  theArray.forEach(pkmn => {
    switch (true) {
      case pkmn.type2 == "bug":
        lineMatrice[0]++
        break;
      case pkmn.type2 == "dark":
        lineMatrice[1]++
        break;
      case pkmn.type2 == "dragon":
        lineMatrice[2]++
        break;
      case pkmn.type2 == "electric":
        lineMatrice[3]++
        break;
      case pkmn.type2 == "fairy":
        lineMatrice[4]++
        break;
      case pkmn.type2 == "fire":
        lineMatrice[5]++
        break;
      case pkmn.type2 == "fighting":
        lineMatrice[6]++
        break;
      case pkmn.type2 == "flying":
        lineMatrice[7]++
        break;
      case pkmn.type2 == "grass":
        lineMatrice[8]++
        break;
      case pkmn.type2 == "ghost":
        lineMatrice[9]++
        break;
      case pkmn.type2 == "ground":
        lineMatrice[10]++
        break;
      case pkmn.type2 == "ice":
        lineMatrice[11]++
        break;
      case pkmn.type2 == "normal":
        lineMatrice[12]++
        break;
      case pkmn.type2 == "poison":
        lineMatrice[13]++
        break;
      case pkmn.type2 == "water":
        lineMatrice[14]++
        break;
      case pkmn.type2 == "psychic":
        lineMatrice[15]++
        break;
      case pkmn.type2 == "steel":
        lineMatrice[16]++
        break;
      case pkmn.type2 == "rock":
        lineMatrice[17]++
        break;
      case pkmn.type2 == "":
        lineMatrice[18]++
        break;
      default:
        break;
    }
  });
  return lineMatrice;
}

// const tierUber = smogon.filter(pkmn => pkmn.Tier == "Uber");
// console.log(tierUber)

//1 - bug----------------------------------------
const bugArray = pokemon.filter(pkmn => pkmn.type1 == "bug")
let bug_matrice_done = sortTypes(bugArray)
//2 - dark
const darkArray = pokemon.filter(pkmn => pkmn.type1 == "dark")
let dark_matrice_done = sortTypes(darkArray)
//3 - dragon
const dragonArray = pokemon.filter(pkmn => pkmn.type1 == "dragon")
let dragon_matrice_done = sortTypes(dragonArray)
//4 - electric
const electricArray = pokemon.filter(pkmn => pkmn.type1 == "electric")
let electric_matrice_done = sortTypes(electricArray)
//5 - fairy
const fairyArray = pokemon.filter(pkmn => pkmn.type1 == "fairy")
let fairy_matrice_done = sortTypes(fairyArray)
//6 - fire
const fireArray = pokemon.filter(pkmn => pkmn.type1 == "fire")
let fire_matrice_done = sortTypes(fireArray)
//7 - fighting
const fightArray = pokemon.filter(pkmn => pkmn.type1 == "fighting")
let fight_matrice_done = sortTypes(fightArray)
//8 - flying
const flyArray = pokemon.filter(pkmn => pkmn.type1 == "flying")
let fly_matrice_done = sortTypes(flyArray)
//9 - grass
const grassArray = pokemon.filter(pkmn => pkmn.type1 == "grass")
let grass_matrice_done = sortTypes(grassArray)
//10 - ghost
const ghostArray = pokemon.filter(pkmn => pkmn.type1 == "ghost")
let ghost_matrice_done = sortTypes(ghostArray)
//11 - ground
const groundArray = pokemon.filter(pkmn => pkmn.type1 == "ground")
let ground_matrice_done = sortTypes(groundArray)
//12 - ice
const iceArray = pokemon.filter(pkmn => pkmn.type1 == "ice")
let ice_matrice_done = sortTypes(iceArray)
//13 - normal
const normalArray = pokemon.filter(pkmn => pkmn.type1 == "normal")
let normal_matrice_done = sortTypes(iceArray)
//14 - poison
const poisonArray = pokemon.filter(pkmn => pkmn.type1 == "poison")
let poison_matrice_done = sortTypes(poisonArray)
//15 - water
const waterArray = pokemon.filter(pkmn => pkmn.type1 == "water")
let water_matrice_done = sortTypes(waterArray)
//16 - psychic
const psyArray = pokemon.filter(pkmn => pkmn.type1 == "psychic")
let psychic_matrice_done = sortTypes(psyArray)
//17 - steel
const steelArray = pokemon.filter(pkmn => pkmn.type1 == "steel")
let steel_matrice_done = sortTypes(steelArray)
//18 - rock
const rockArray = pokemon.filter(pkmn => pkmn.type1 == "steel")
let rock_matrice_done = sortTypes(rockArray)
//19 - none

const matrix = [
  [...bug_matrice_done],
  [...dark_matrice_done],
  [...dragon_matrice_done],
  [...electric_matrice_done],
  [...fairy_matrice_done],
  [...fire_matrice_done],
  [...fight_matrice_done],
  [...fly_matrice_done],
  [...grass_matrice_done],
  [...ghost_matrice_done],
  [...ground_matrice_done],
  [...ice_matrice_done],
  [...normal_matrice_done],
  [...poison_matrice_done],
  [...water_matrice_done],
  [...psychic_matrice_done],
  [...steel_matrice_done],
  [...rock_matrice_done],
];

console.log(matrix)

var svg = d3.select("#section-types")
  .append("svg")
  .attr("width", 440)
  .attr("height", 440)
  .append("g")
  .attr("transform", "translate(220,220)")



var colors = [
  "#9cae18",//bug 
  "#4e3d2c",//dark
  "#725ddd",//dragon
  "#fabd22", //electric
  "#f0b2f0", //fairy
  "#7e311e", //fighting
  "#ec400b", //fire
  "#90a6f0", //flying
  "#5f60af", //ghost
  "#76c136", //grass
  "#d4b156", //ground
  "#a4e7fb", //ice
  "#c8c3ba", //normal
  "#914493", //poison
  "#ed4681", //psychic
  "#b8a45b", //rock
  "#b6b7c0", //steel
  "#3096ee" //water
]
// give this matrix to d3.chord(): it will calculates all the info we need to draw arc and ribbon
var res = d3.chord()
  .padAngle(0.05)
  .sortSubgroups(d3.descending)
  (matrix)

// add the groups on the outer part of the circle
svg
  .datum(res)
  .append("g")
  .selectAll("g")
  .data(function (d) { return d.groups; })
  .enter()
  .append("g")
  .append("path")
  .style("fill", function (d, i) { return colors[i] })
  .style("stroke", "black")
  .attr("d", d3.arc()
    .innerRadius(200)
    .outerRadius(210)
  )

// Add the links between groups
svg
  .datum(res)
  .append("g")
  .selectAll("path")
  .data(function (d) { return d; })
  .enter()
  .append("path")
  .attr("d", d3.ribbon()
    .radius(200)
  )
  .style("fill", function (d) { return (colors[d.source.index]) }) // colors depend on the source group. Change to target otherwise.
  .style("stroke", "black");



  var tooltip = d3.select("#my_dataviz")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("border-width", "1px")
  .style("border-radius", "5px")
  .style("padding", "10px")

