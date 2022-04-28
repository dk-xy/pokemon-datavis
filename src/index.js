import * as d3 from 'd3';
import './css/index.css';
import './navigation';
import pokemon from "../data/pokemon.csv";
import smogon from "../data/smogon.csv";
import { renderTiersOnDom, renderPokemons } from './pokemon';
import { loadPkmnByName } from "./api"


//Préparation UI--------------------------------
console.log("hello")

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


function displaySection() {
  const section = window.location.hash || "#pokemon"
  //console.log(section)
  toggleSection(section)


}

window.addEventListener('hashchange', displaySection)



//PREPARATION DATA----------------------------------

const typeArray = [
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

//creation de la matrice des types avec value à 0
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
        let typeIndex = (typeArray.indexOf(pkmn.type1)) - 1
        lineMatrice[typeIndex]++
        break;
      default:
        break;
    }
  });
  return lineMatrice;
}

function makeMatrice(array){
  //1 - bug----------------------------------------
const bugArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "bug")
let bug_matrice_done = sortTypes(bugArray)
//2 - dark
const darkArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "dark")
let dark_matrice_done = sortTypes(darkArray)
//3 - dragon
const dragonArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "dragon")
let dragon_matrice_done = sortTypes(dragonArray)
//4 - electric
const electricArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "electric")
let electric_matrice_done = sortTypes(electricArray)
//5 - fairy
const fairyArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "fairy")
let fairy_matrice_done = sortTypes(fairyArray)
//6 - fire
const fireArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "fire")
let fire_matrice_done = sortTypes(fireArray)
//7 - fighting
const fightArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "fighting")
let fight_matrice_done = sortTypes(fightArray)
//8 - flying
const flyArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "flying")
let fly_matrice_done = sortTypes(flyArray)
//9 - grass
const grassArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "grass")
let grass_matrice_done = sortTypes(grassArray)
//10 - ghost
const ghostArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "ghost")
let ghost_matrice_done = sortTypes(ghostArray)
//11 - ground
const groundArray = array.filter(pkmn => pkmn.type1 == "ground")
let ground_matrice_done = sortTypes(groundArray)
//12 - ice
const iceArray = array.filter(pkmn => pkmn.type1 == "ice")
let ice_matrice_done = sortTypes(iceArray)
//13 - normal
const normalArray = array.filter(pkmn => pkmn.type1 == "normal")
let normal_matrice_done = sortTypes(iceArray)
//14 - poison
const poisonArray = array.filter(pkmn => pkmn.type1 == "poison")
let poison_matrice_done = sortTypes(poisonArray)
//15 - water
const waterArray = array.filter(pkmn => pkmn.type1 == "psychic")
let water_matrice_done = sortTypes(waterArray)
//16 - psychic
const psyArray = array.filter(pkmn => pkmn.type1 == "rock")
let psychic_matrice_done = sortTypes(psyArray)
//17 - steel
const steelArray = array.filter(pkmn => pkmn.type1 == "steel")
let steel_matrice_done = sortTypes(steelArray)
//18 - rock
const rockArray = array.filter(pkmn => pkmn.type1 == "water")
let rock_matrice_done = sortTypes(rockArray)
//19 - none


//console.log(waterArray)
//console.log(bugArray)
//console.log(water_matrice_done)
let matrix = [
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
return matrix;
}

let matrix = makeMatrice(pokemon);

//console.log(matrix)



var colors = [
  "#9cae18",//bug 
  "#4e3d2c",//dark
  "#725ddd",//dragon
  "#fabd22", //electric
  "#f0b2f0", //fairy
  "#7e311e", //fighting
  "#ec400b", //fire
  "#90a6f0", //flying
  "#76c136", //grass
  "#5f60af", //ghost
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

var margin = { left: 90, top: 90, right: 90, bottom: 90 },
  width = 1000 - margin.left - margin.right, // more flexibility: Math.min(window.innerWidth, 1000)
  height = 1000 - margin.top - margin.bottom, // same: Math.min(window.innerWidth, 1000)
  innerRadius = Math.min(width, height) * .39,
  outerRadius = innerRadius * 1.1;/*www .de  m o2  s .c om*/



//FONCTIONS D ANIMATION-------------------------------


//CADRE DE BASE
let svg = d3.select("#section-types")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 1000)
  .append("g")
  .attr("transform", "translate(420,320)")

//calcul de la matrice
let res = d3.chord()
  .padAngle(0.03)
  .sortSubgroups(d3.descending)
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

let outerBars = outerGroups.attr('class', "group")
  .attr('type', function (d) { return typeArray[d.index]; })
  .append("path")
  .on("mouseover", onMouseOver)
  .on("mouseout", onMouseOut)
  .style("fill", function (d, i) { return colors[i] })
  .style("stroke", function (d, i) { return colors[i] })
  .attr("d", d3.arc()
    .innerRadius(200)
    .outerRadius(210)
  ) //append  des elements g

let outerText = outerBars.data(res.groups)
  .enter().append("svg:g")
  .attr("class", function (d) { return "group " + typeArray[d.index]; })
  .append("svg:textPath")
  .text(function (d) { return typeArray[d.index]; })



let textGroups = d3.selectAll('g.group')
  .append("text")
  .each(function (d) { d.angle = (d.startAngle + d.endAngle) / 2; })
  .attr("dy", ".05em")
  .attr("class", "titles")
  .attr("text-anchor", function (d) { return d.angle > Math.PI ? "end" : null; })
  .attr("transform", function (d) {
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
      + "translate(" + (outerRadius - 100) + ")"
      + (d.angle > Math.PI ? "rotate(180)" : "");
  })
  .text(function (d, i) { return typeArray[i]; })




// Ajout des liens entre les groupes-------
let innerBars = svg
  .datum(res)
  .append("g")
  .selectAll("path")
  .data(function (d) { return d; })
  .enter()
  .append("path")
  .attr('class', 'innerArcs')

  .on("mouseover", d => onMouseOver(d))
  .on("mouseout", d => onMouseOut(d))

  // .on("mouseout", onMouseOut)
  .attr("d", d3.ribbon()
    .radius(200)
  )
  .attr("id", function (d) { return ([d.type1]) })

  .style("fill", function (d) { return (colors[d.source.index]) }) // colors depend on the source group. Change to target otherwise.
  .style("stroke", function (d) { return (colors[d.source.index]) })








function onMouseOver(selected) {
  //console.log(selected)
  innerBars
    // .filter(function(d) { console.log(d); return d })
    .filter(d => d !== selected)
    .style("opacity", 0.3);
  // selected
  //   .style("opacity", 1)
  // innerBars.selectAll(".group")
  //   .filter( d => d !== selected.index)
  //   .style("opacity", 0.3);
}

function onMouseOut() {
  innerBars.style("opacity", 1);
  svg.selectAll(".chord")
    .style("opacity", 1);
}



// function onMouseOver(selected) {

//   console.log(selected)
//   let arcs = svg.selectAll(".innerArcs")
//   let filteredArcs = arcs.filter( d => d == selected)
//   filteredArcs
//   .style("opacity", 1.0);

//   arcs
//   .style("opacity", 0.3);

// }



// function onMouseOut() {
//   outerBars.style("opacity", 1);
//   svg.selectAll("path")
//     .style("opacity", 1);
// }



//COMPETITIVE ANALYSIS--------------------------------------------------
//
//console.log(smogon)
//1 - OU-------------------------------------------------------
const overUsed = smogon.filter(smgn => smgn.Tier == "OU")

//creation tableau simplifié

//top 10
let topTenOU = overUsed.filter(function (d, i) { return i < 10 })
//console.log(topTenOU)
let topTenOuNames = [];
let topTenPkmn = [];
topTenOU.forEach(pkmn => {
  //console.log(pkmn)
  //gestion des noms "mega" pour envoi de requete à l'api
  let charizardCounter = 0;
  let name = ""
  if (pkmn.Name.split(' ').length > 1) {
    if (pkmn.Name.split(' ')[1] == "Charizard") {
      if (charizardCounter == 0) {
        name = pkmn.Name.split(' ')[1] + "-" + pkmn.Name.split(' ')[0] + "-x"
        charizardCounter++;
      } else {name = pkmn.Name.split(' ')[1] + "-" + pkmn.Name.split(' ')[0] + "-y"}
    } else{name = pkmn.Name.split(' ')[1] + "-" + pkmn.Name.split(' ')[0]}
    
  } 


  else {
    name = pkmn.Name
  }
  topTenOuNames.push(name.toLowerCase())

})


renderTiersOnDom(topTenOuNames)


console.log(overUsed)

let tierTypes = [];
overUsed.forEach(pkmn=>{
 tierTypes.push({"type1": pkmn["Type.1"] ,"type2":  pkmn["Type.2"]})
})
console.log(tierTypes)
tierTypes.forEach(types=>{
  if (types.type1 != null) {
    types.type1 = types.type1.toLowerCase()
  }
  if (types.type2 != null) {
    types.type2 = types.type2.toLowerCase()
  }
})
let overUsedMatrix = makeMatrice(tierTypes)
// console.log(matrix)
console.log(overUsedMatrix)


//CREATION DU GRAPHIQUE--------------------------------





//FONCTIONS D ANIMATION-------------------------------


//CADRE DE BASE
let svgOu = d3.select("#overUsedChart")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400)
  .append("g")
  .attr("transform", "translate(200,200) scale(0.5,0.5)")



//calcul de la matrice
let resOu = d3.chord()
  .padAngle(0.03)
  .sortSubgroups(d3.descending)
  .sortChords(d3.descending)
  (overUsedMatrix)





// Groupes dans la partie exterieur du cercle
let outerGroupsOu =
  svgOu
    .datum(resOu)
    .append("g")
    .selectAll("g")
    .data(function (d) { return d.groups; })
    .enter()
    .append("g");

let outerBarsOu = outerGroupsOu.attr('class', "groupOu")
  .attr('type', function (d) { return typeArray[d.index]; })
  .append("path")
  .style("fill", function (d, i) { return colors[i] })
  .style("stroke", function (d, i) { return colors[i] })
  .attr("d", d3.arc()
    .innerRadius(200)
    .outerRadius(210)
  ) //append  des elements g

let outerTextOu = outerBarsOu.data(resOu.groups)
  .enter().append("svg:g")
  .attr("class", function (d) { return "groupOu " + typeArray[d.index]; })
  .append("svg:textPath")
  .text(function (d) { return typeArray[d.index]; })



let textGroupsOu = d3.selectAll('g.groupOu')
  .append("text")
  .each(function (d) { d.angle = (d.startAngle + d.endAngle) / 2; })
  .attr("dy", ".05em")
  .attr("class", "titles")
  .attr("text-anchor", function (d) { return d.angle > Math.PI ? "end" : null; })
  .attr("transform", function (d) {
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
      + "translate(" + (outerRadius - 100) + ")"
      + (d.angle > Math.PI ? "rotate(180)" : "");
  })
  .text(function (d, i) { return typeArray[i]; })




// Ajout des liens entre les groupes-------
let innerBarsOu = svgOu
  .datum(resOu)
  .append("g")
  .selectAll("path")
  .data(function (d) { return d; })
  .enter()
  .append("path")
  .attr('class', 'innerArcs')

  // .on("mouseout", onMouseOut)
  .attr("d", d3.ribbon()
    .radius(200)
  )
  .attr("id", function (d) { return ([d.type1]) })

  .style("fill", function (d) { return (colors[d.source.index]) }) // colors depend on the source group. Change to target otherwise.
  .style("stroke", function (d) { return (colors[d.source.index]) })






//2. UNDER USED-------------------------------------------------

