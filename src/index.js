import * as d3 from 'd3';
import './css/index.css';
import { displaySection } from './navigation';
import pokemon from "../data/pokemon.csv";
import smogon from "../data/smogon.csv";
import { renderTiersOnDom, renderPokemons, renderTierOnDomV2 } from './pokemon';
import { loadPkmnByName } from "./api"


//Préparation UI--------------------------------
console.log("hello")


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

function makeMatrice(array) {
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
  "#c72000", //fire
  "#7e311e", //fight
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




makeChordChart(svg, res)

function makeChordChart(svgTarget, resTarget) {
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
    .attr("id", (d)=>d.type1)
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
    .on("mouseover", onMouseOver)
    .on("mouseout", onMouseOut)


    let ribbons = innerBars
    .attr("d", d3.ribbon()
      .radius(200)
    )
    .style("fill", function (d) { return (colors[d.source.index]) }) // colors depend on the source group. Change to target otherwise.
    .style("stroke", function (d) { return (colors[d.source.index]) })


    function onMouseOver(selected) {
      console.log(this)
      const style = getComputedStyle(this)
       //this.getAttribute('style');
      let color = style.fill
      let colorFill = "fill:"+color;
     innerBars
        .style("opacity", 0.3);
      this.setAttribute('style', 'opacity:1')
      this.setAttribute('style', colorFill)


    }
    
    function onMouseOut(selected) {
      innerBars.style("opacity", 1);
      svg.selectAll(".chord")
        .style("opacity", 1);
    }
    
}





//ICI LE PROBLEME !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!----------



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
//1 - OU----------------------------------------------------------------


//creation tableau simplifié

//top 10

makeLegend(typeArray, colors)

const overUsed = smogon.filter(smgn => smgn.Tier == "OU")
let overName = "OU"
prepareAndRender(overName)
let overUsedTypes = makeTierTypes(overUsed)
let overUsedMatrix = makeMatrice(overUsedTypes)
makeMiniCharts(overUsedMatrix, overName);
// console.log(matrix)
//console.log(overUsedMatrix)


//CREATION DU GRAPHIQUE--------------------------------------------
//CADRE DE BASE





//2 - UU----------------------------------------------------------------
const underUsed = smogon.filter(smgn => smgn.Tier == "UU")
let underName = "UU"
prepareAndRender(underName)
let underUsedTypes = makeTierTypes(underUsed)
let underUsedMatrix = makeMatrice(underUsedTypes)
makeMiniCharts(underUsedMatrix, underName);
//a faire le chord chart


//3 - RU------------------------------------------------------------
let rarelyName = "RU"
const rarelyUsed = smogon.filter(smgn => smgn.Tier == rarelyName)
prepareAndRender(rarelyName)
let rarelyUsedTypes = makeTierTypes(rarelyUsed)
let rarelyUsedMatrix = makeMatrice(rarelyUsedTypes)
makeMiniCharts(rarelyUsedMatrix, rarelyName);


//4 - NU------------------------------------------------------------
let neverName = "NU"
const neverUsed = smogon.filter(smgn => smgn.Tier == neverName)
prepareAndRender(neverName)
let neverUsedTypes = makeTierTypes(neverUsed)
let neverUsedMatrix = makeMatrice(neverUsedTypes)
makeMiniCharts(neverUsedMatrix, neverName);


//Fonction de préparatione t d'affichage des listes des top10-----
function prepareAndRender(tierName) {
  let charizardCounter = 0;
  let tierSorted = smogon.filter(smgn => smgn.Tier == tierName)
  let topTen = tierSorted.filter(function (d, i) { return i < 10 })
  //console.log(tierName)
  let topTenNames = [];

  //renderTiersOnDom(topTenNames, tierName)
  renderTierOnDomV2(topTen, tierName)
}
//-----------------------------------------------------------------



//Fonction des mini charts-----------------------------------------

//préparation de liste des types-----------------------------------
function makeTierTypes(tier) {
  let tierTypes = [];
  tier.forEach(pkmn => {
    tierTypes.push({ "type1": pkmn["Type.1"], "type2": pkmn["Type.2"] })
  })
  //console.log(tierTypes)
  tierTypes.forEach(types => {
    if (types.type1 != null) {
      types.type1 = types.type1.toLowerCase()
    }
    if (types.type2 != null) {
      types.type2 = types.type2.toLowerCase()
    }
  })
  return tierTypes;
}

//-------------------------------------------------------
function makeMiniCharts(matrix, tierName) {
  let tierNode = "";
  switch (tierName) {
    case "OU":
      tierNode = "#overUsedChart"
      break;
    case "UU":
      tierNode = "#underUsedChart"
      break;
    case "RU":
      tierNode = "#rarelyUsedChart"
      break;
    case "NU":
      tierNode = "#neverUsedChart"
      break;
  }


  let svgTier= d3.select(tierNode)
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .append("g")
    .attr("transform", "translate(200,200) scale(0.5,0.5)")
  //calcul de la matrice
  let resTier = d3.chord()
    .padAngle(0.03)
    .sortSubgroups(d3.descending)
    .sortChords(d3.descending)
    (matrix)
  // Groupes dans la partie exterieur du cercle
  let outerGroups =
    svgTier
      .datum(resTier)
      .append("g")
      .selectAll("g")
      .data(function (d) { return d.groups; })
      .enter()
      .append("g");
  let outerBarsTier = outerGroups.attr('class', "groupTier")
    .attr('type', function (d) { return typeArray[d.index]; })
    .append("path")
    
    .style("fill", function (d, i) { return colors[i] })
    .style("stroke", function (d, i) { return colors[i] })
    .attr("d", d3.arc()
      .innerRadius(200)
      .outerRadius(210)
    ) //append  des elements g
  let outerTextTier = outerBarsTier.data(resTier.groups)
    .enter().append("svg:g")
    .attr("class", function (d) { return "groupTier " + typeArray[d.index]; })
    .append("svg:textPath")
    .text(function (d) { return typeArray[d.index]; })

  let textGroupsTier = d3.selectAll('g.groupTier')
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
  let innerBarsTier = svgTier
    .datum(resTier)
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
    .attr("id", function (d) { return ([d.type1]) })//ICIIIII 

    .style("fill", function (d) { return (colors[d.source.index]) }) // colors depend on the source group. Change to target otherwise.
    .style("stroke", function (d) { return (colors[d.source.index]) })
}

function makeLegend(typeArray, colors){

  let keys = typeArray;
  // create a list of keys
  let svg = d3.select('#legendBullets')
  var color = d3.scaleOrdinal()
  .domain(keys)
  .range(colors);

  svg.selectAll("mydots")
  .data(typeArray)
  .enter()
  .append("circle")
    .attr("cx", 100)
    .attr("cy", function(d,i){ return 100 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("r", 7)
    .style("fill", function(d){ return color(d)})
// Add one dot in the legend for each name.
svg.selectAll("mylabels")
  .data(keys)
  .enter()
  .append("text")
    .attr("x", 120)
    .attr("y", function(d,i){ return 100 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", function(d){ return color(d)})
    .text(function(d){ return d})
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
}





