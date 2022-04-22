import * as d3 from 'd3';
import './css/index.css';
import './navigation';
import pokemon from "../data/pokemon.csv";
import smogon from "../data/smogon.csv";


//Préparation UI--------------------------------
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



//PREPARATION DATA----------------------------------

const typeArray =[
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fire",
  "fighting",
  "flying",
  "grass",
  "ghost",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
]

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
      case pkmn.type2 == "psychic":
        lineMatrice[14]++
        break;
      case pkmn.type2 == "rock":
        lineMatrice[15]++
        break;
      case pkmn.type2 == "steel":
        lineMatrice[16]++
        break;
      case pkmn.type2 == "water":
        lineMatrice[17]++
        break;
      case pkmn.type2 == null:
        let typeIndex = typeArray.indexOf(pkmn.type1)
        lineMatrice[typeIndex]++
        break;
      default:
        break;
    }
  });
  return lineMatrice;
}


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
const waterArray = pokemon.filter(pkmn => pkmn.type1 == "psychic")
let water_matrice_done = sortTypes(waterArray)
//16 - psychic
const psyArray = pokemon.filter(pkmn => pkmn.type1 == "rock")
let psychic_matrice_done = sortTypes(psyArray)
//17 - steel
const steelArray = pokemon.filter(pkmn => pkmn.type1 == "steel")
let steel_matrice_done = sortTypes(steelArray)
//18 - rock
const rockArray = pokemon.filter(pkmn => pkmn.type1 == "water")
let rock_matrice_done = sortTypes(rockArray)
//19 - none


console.log(waterArray)
console.log(bugArray)
console.log(water_matrice_done)
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




//CREATION DU GRAPHIQUE--------------------------------

var margin = {left:90, top:90, right:90, bottom:90},
    width =  1000 - margin.left - margin.right, // more flexibility: Math.min(window.innerWidth, 1000)
    height =  1000 - margin.top - margin.bottom, // same: Math.min(window.innerWidth, 1000)
    innerRadius = Math.min(width, height) * .39,
    outerRadius = innerRadius * 1.1;/*www .de  m o2  s .c om*/



//CADRE DE BASE
var svg = d3.select("#section-types")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 1000)
  .append("g")
  .attr("transform", "translate(420,320)")

//calcul de la matrice
var res = d3.chord()
  .padAngle(0.03)
  .sortSubgroups(d3.descending) /*sort the chords inside an arc from high to low*/
  .sortChords(d3.descending) 
  (matrix)



  
// Groupes dans la partie exterieur du cercle
let outerGroups =
svg
  .datum(res)
  .append("g")
  .selectAll("g")
  .data(function (d) { return d.groups; })
  .enter()
  .append("g");

let outerBars = outerGroups.attr('class', function(d) {return "group " + typeArray[d.index];})
.append("path")
.on("mouseover", onMouseOver)
.on("mouseout", onMouseOut)
.style("fill", function (d, i) { return colors[i] })
.style("stroke", function (d, i) { return colors[i]})
.attr("d", d3.arc()
  .innerRadius(200)
  .outerRadius(210)
) //append  des elements g

let outerText = outerBars.data(res.groups)
.enter().append("svg:g")
.attr("class", function(d) {return "group " + typeArray[d.index];})
.append("svg:textPath")
.text(function(d) {return typeArray[d.index];})



let textGroups = d3.selectAll('g.group')
  .append("text")
  .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
  .attr("dy", ".05em")
  .attr("class", "titles")
  .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
  .attr("transform", function(d) {
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
    + "translate(" + (outerRadius-100) + ")"
    + (d.angle > Math.PI ? "rotate(180)" : "");
  })
  .text(function(d,i) { return typeArray[i]; })


	

// Ajout des liens entre les groupes-------
let innerBars = svg
  .datum(res)
  .append("g")
  .selectAll("path")
  .data(function (d) { return d; })
  .enter()
  .append("path")
  .attr('class', 'innerArcs')
  .on("mouseover", d => onMouseOver(d.source))
  .on("mouseout", d => onMouseOut(d))

  // .on("mouseout", onMouseOut)
  .attr("d", d3.ribbon()
    .radius(200)
  )
  .style("fill", function (d) { return (colors[d.source.index]) }) // colors depend on the source group. Change to target otherwise.
  .style("stroke", function (d) { return (colors[d.source.index]) })






//animation
function onMouseOver(selected) {

  //console.log(selected.target)
  let arcs = svg.selectAll(".innerArcs")
  let filteredArcs = arcs.filter( d => d == selected)
  filteredArcs
  .style("opacity", 1.0);

  arcs
  .style("opacity", 0.3);

}



function onMouseOut() {
  outerBars.style("opacity", 1);
  svg.selectAll("path")
    .style("opacity", 1);
}

