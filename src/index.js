import * as d3 from 'd3';
import './css/index.css';
import { displaySection, toggleSection } from './navigation';
import pokemon from "../data/pokemon.csv";
import smogon from "../data/smogon.csv";
import { renderTiersOnDom, renderPokemons, renderTierOnDomV2, getTypeColor } from './pokemon';
import { loadPkmnByName } from "./api"
import { domOn, domForEach } from './domManipulator';

//Préparation UI--------------------------------
//console.log("hello")
console.log(pokemon)

window.addEventListener('hashchange', displaySection)
window.onload = displaySection;


//PREPARATION DATA--------------------------------------------

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
//Préparation data matricielles ^o^--------------------------------
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
        let typeIndex = (typeArray.indexOf(pkmn.type1)) 
        lineMatrice[typeIndex]++
        break;
      default:
        break;
    }
  });
  return lineMatrice;
}


console.log(typeArray.indexOf("bug"))

function makeMatrice(array) {
  //1 - bug----------------------------------------
  const bugArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "bug")
  //console.log(bugArray)
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




function makeStatsByType(array) {
  let hp = array.map(function (d) { return d.hp });
  let atk = array.map(function (d) { return d.attack; })
  let def = array.map(function (d) { return d.defense; });
  let sp_atk = array.map(function (d) { return d.sp_attack; });
  let sp_def = array.map(function (d) { return d.sp_defense; });
  let spd = array.map(function (d) { return d.speed; });

  const statsForType = {
    "HP": hp,
    "ATK": atk,
    "DEF": def,
    "SP_ATK": sp_atk,
    "SP_DEF": sp_def,
    "SPD": spd
  }
  return statsForType
}

//préparation data des violons
//Note: j'aurais pu faire une boucle for mais je m'en suis rendu compte trop tard :S )
let stats = makeStatsArray(pokemon)
function makeStatsArray(array) {
  //1 - bug----------------------------------------
  const bugArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "bug")
  let itemBug = makeStatsByType(bugArray)
  //2 - dark
  const darkArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "dark")
  let itemDark = makeStatsByType(darkArray)
  //3 - dragon
  const dragonArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "dragon")
  let itemDragon = makeStatsByType(dragonArray)
  //4 - electric
  const electricArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "electric")
  let itemElectric = makeStatsByType(electricArray)
  //5 - fairy
  const fairyArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "fairy")
  let itemFairy = makeStatsByType(fairyArray)
  //6 - fire
  const fireArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "fire")
  let itemFire = makeStatsByType(fireArray)
  //7 - fighting
  const fightArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "fighting")
  let itemFight = makeStatsByType(fightArray)
  //8 - flying
  const flyArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "flying")
  let itemFly = makeStatsByType(flyArray)
  //9 - grass
  const grassArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "grass")
  let itemGrass = makeStatsByType(grassArray)
  //10 - ghost
  const ghostArray = array.filter(pkmn => pkmn.type1.toLowerCase() == "ghost")
  let itemGhost = makeStatsByType(ghostArray)
  //11 - ground
  const groundArray = array.filter(pkmn => pkmn.type1 == "ground")
  let itemGround = makeStatsByType(groundArray)
  //12 - ice
  const iceArray = array.filter(pkmn => pkmn.type1 == "ice")
  let itemIce = makeStatsByType(iceArray)
  //13 - normal
  const normalArray = array.filter(pkmn => pkmn.type1 == "normal")
  let itemNormal = makeStatsByType(iceArray)
  //14 - poison
  const poisonArray = array.filter(pkmn => pkmn.type1 == "poison")
  let itemPoison = makeStatsByType(poisonArray)
  //15 - water
  const waterArray = array.filter(pkmn => pkmn.type1 == "psychic")
  let itemWater = makeStatsByType(waterArray)
  //16 - psychic
  const psyArray = array.filter(pkmn => pkmn.type1 == "rock")
  let itemPsychic = makeStatsByType(psyArray)
  //17 - steel
  const steelArray = array.filter(pkmn => pkmn.type1 == "steel")
  let itemSteel = makeStatsByType(steelArray)
  //18 - rock
  const rockArray = array.filter(pkmn => pkmn.type1 == "water")
  let itemRock = makeStatsByType(rockArray)


  let itemStats =
  {
    bug: itemBug,
    dark: itemDark,
    dragon: itemDragon,
    electric: itemElectric,
    fairy: itemFairy,
    fire: itemFire,
    fight: itemFight,
    flying: itemFly,
    grass: itemGrass,
    ghost: itemGhost,
    ground: itemGround,
    ice: itemIce,
    normal: itemNormal,
    poison: itemPoison,
    water: itemWater,
    psychic: itemPsychic,
    steel: itemSteel,
    rock: itemRock
  }


  // //19 - none
  return itemStats;
}

//margin de base du projet

let margin = { left: 90, top: 90, right: 90, bottom: 90 },
  width = 1000 - margin.left - margin.right, // more flexibility: Math.min(window.innerWidth, 1000)
  height = 1000 - margin.top - margin.bottom, // same: Math.min(window.innerWidth, 1000)
  innerRadius = Math.min(width, height) * .39,
  outerRadius = innerRadius * 1.1;

//--------------------------------------------------------------------------------

//CHORD CHART SECTION-----------------------------------------------------------------------------------------

//CREATION DU GRAPHIQUE-------------------------------
//CADRE DE BASE
let svg = d3.select("#types-chart")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 800)
  .append("g")
  .attr("transform", "translate(600,400) scale(1.2,1.2)")

//calcul de la matrice
let res = d3.chord()
  .padAngle(0.03)
  .sortSubgroups(d3.descending)
  .sortChords(d3.descending)
  (matrix)

//console.log(smogon)


makeChordChart(svg, res, typeArray, matrix)

function makeChordChart(svgTarget, resTarget, typeArray, matrix) {
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
    .attr("id", (d) => d.type1)
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
    .attr('class', function (d) { return typeArray[d.source.index] + "Arc " + typeArray[d.target.index] + "Sec" + ' innerArcs' })
    .on("mouseover", onMouseOver)
    .on("mouseout", onMouseOut)


  let ribbons = innerBars
    .attr("d", d3.ribbon()
      .radius(200)
    )
    .style("fill", function (d) { return (colors[d.source.index]) }) // colors depend on the source group. Change to target otherwise.
    .style("stroke", function (d) { return (colors[d.source.index]) })


  function onMouseOver(selected) {
    //console.log(this)
    //console.log(selected)
    //recup style
    const style = getComputedStyle(this)
    let color = style.fill
    let colorFill = "fill:" + color;
    //set des bars a opacité diff sur hover
    innerBars
      .style("opacity", 0.1);
    this.setAttribute('style', 'opacity:1')
    this.setAttribute('style', colorFill)
    domForEach('.innerArcs', evt => {
      if (evt.classList.contains(this.classList[0])) {
        evt.setAttribute('style', 'opacity:0.7; ' + colorFill + ";")
        // evt.setAttribute('style', colorFill)
      }
      this.setAttribute('style', 'opacity:1')
      this.setAttribute('style', colorFill)
    })
    //toolTip
    //recup de la class Principale
    document.querySelector('#toolTip').classList.remove('hidden')
    let firstType = this.classList[0].split('Arc')[0]
    //marchait pas du coup j'ai fait un forEach
    let firstTypeIndex = typeArray.indexOf(firstType)
    let secondaryType;
    console.log(firstTypeIndex)
    document.querySelector('.toolTipTypeOne').textContent = firstType
    let typeNumber;
    //console.log(matrix[1])
    //si y a un type secondaire
    if (this.classList[1] != "innerArcs") {
      secondaryType = this.classList[1].split('Sec')[0]
      let secTypeIndex = typeArray.indexOf(secondaryType)
      document.querySelector('.toolTipTypeTwo').textContent = secondaryType
      typeNumber = matrix[firstTypeIndex][secTypeIndex]
    } else {
      typeNumber = matrix[firstTypeIndex].reduce(function(a, b){
        return a + b;
    }, 0);
    }
    
    document.querySelector('.toolTipNumber').textContent = typeNumber
    document.querySelector('#toolTip').style= "background-color:"+ getTypeColor(firstType) +"66" //66 pour la Transpa

    //check si il a un type secondaire, on va chercher l'index
    //si pas, on prend le nom a la case [0]

  }

  function onMouseOut(selected) {
    innerBars.style("opacity", 1);
    svg.selectAll(".chord")
      .style("opacity", 1);
  }

}



//SECTION GRAPHIQUES DES STATS------------------------------------------------ !!
//j'aurais pu faire mieux mais je commence à fatiguer... j'arrivais pas à faire un foreach sur uun objet

//j'ai trouvé le foreach mais pour une raison ou une autre ça casse tout si je l'active donc je laisse :)
//note je sais que c'est a cause du .fight et la classe fighting....
// for (const [key, value] of Object.entries(stats)) {
//   makeStatsMiniBoxPlot(value, key)
// }


makeStatsMiniBoxPlot(stats.bug, 'bug')
makeStatsMiniBoxPlot(stats.dark, 'dark')
makeStatsMiniBoxPlot(stats.dragon, 'dragon')
makeStatsMiniBoxPlot(stats.electric, 'electric')
makeStatsMiniBoxPlot(stats.fairy, 'fairy')
makeStatsMiniBoxPlot(stats.fire, 'fire')
makeStatsMiniBoxPlot(stats.fight, 'fighting')
makeStatsMiniBoxPlot(stats.flying, 'flying')
makeStatsMiniBoxPlot(stats.grass, 'grass')
makeStatsMiniBoxPlot(stats.ghost, 'ghost')
makeStatsMiniBoxPlot(stats.ground, 'ground')
makeStatsMiniBoxPlot(stats.ice, 'ice')
makeStatsMiniBoxPlot(stats.normal, 'normal')
makeStatsMiniBoxPlot(stats.poison, 'poison')
makeStatsMiniBoxPlot(stats.psychic, 'psychic')
makeStatsMiniBoxPlot(stats.steel, 'steel')
makeStatsMiniBoxPlot(stats.water, 'water')
// creation tableau simplifié


//top 10
//mise en place légendes
makeLegend(typeArray, colors)
domOn('.legendButton', 'click', evt => {
  let legend = document.querySelector('#legendBullets')

  if (legend.style.display == 'block') {
    legend.style.display = 'none'
  } else {
    legend.style.display = 'block'
  }

})



//0 - Uber--------------------------------------------------------------
const uberUsed = smogon.filter(smgn => smgn.Tier == "Uber")
let uberName = "Uber"
prepareAndRender(uberName)
//ChordCharts
let uberUsedTypes = makeTierTypes(uberUsed)
let uberUsedMatrix = makeMatrice(uberUsedTypes)
makeMiniCharts(uberUsedMatrix, uberName);
//BoxPlots
let uberUsedStats = makeStatsByTier(uberUsed)
makeStatsMiniBoxPlot(uberUsedStats, uberName)




//1 - OU----------------------------------------------------------------
const overUsed = smogon.filter(smgn => smgn.Tier == "OU")
let overName = "OU"
prepareAndRender(overName)
//ChordCharts
let overUsedTypes = makeTierTypes(overUsed)
let overUsedMatrix = makeMatrice(overUsedTypes)
makeMiniCharts(overUsedMatrix, overName);
//BoxPlots
let overUsedStats = makeStatsByTier(overUsed)
makeStatsMiniBoxPlot(overUsedStats, overName)
//console.log(overUsedStats)
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
let underUsedStats = makeStatsByTier(underUsed)
makeStatsMiniBoxPlot(underUsedStats, underName)

//3 - RU------------------------------------------------------------
let rarelyName = "RU"
const rarelyUsed = smogon.filter(smgn => smgn.Tier == rarelyName)
prepareAndRender(rarelyName)
let rarelyUsedTypes = makeTierTypes(rarelyUsed)
let rarelyUsedMatrix = makeMatrice(rarelyUsedTypes)
makeMiniCharts(rarelyUsedMatrix, rarelyName);
let rarelyUsedStats = makeStatsByTier(rarelyUsed)
makeStatsMiniBoxPlot(rarelyUsedStats, rarelyName)

//4 - NU------------------------------------------------------------
let neverName = "NU"
const neverUsed = smogon.filter(smgn => smgn.Tier == neverName)
prepareAndRender(neverName)
let neverUsedTypes = makeTierTypes(neverUsed)
let neverUsedMatrix = makeMatrice(neverUsedTypes)
makeMiniCharts(neverUsedMatrix, neverName);
let neverUsedStats = makeStatsByTier(neverUsed)
makeStatsMiniBoxPlot(neverUsedStats, neverName)

//AFFICHAGE TOP10 ON DOM-------------------------A AMELIORER-------
function prepareAndRender(tierName) {
  let charizardCounter = 0;
  let tierSorted = smogon.filter(smgn => smgn.Tier == tierName)
  let topTen = tierSorted.filter(function (d, i) { return i < 10 })
  //console.log(tierName)
  let topTenNames = [];

  //renderTiersOnDom(topTenNames, tierName)
  renderTierOnDomV2(topTen, tierName)
}
//-------------------------------------------------------------------
function makeStatsByTier(array) {
  let hp = array.map(function (d) { return d["HP"] });
  let atk = array.map(function (d) { return d["Attack"]; })
  let def = array.map(function (d) { return d["Defense"]; });
  let sp_atk = array.map(function (d) { return d["Sp..Atk"]; }); // y a un dataset qui est mieux que l'autre dans son organisation des donnée quand même...
  let sp_def = array.map(function (d) { return d["Sp..Def"]; }); //et c'est pas celui là ><
  let spd = array.map(function (d) { return d["Speed"]; });

  const statsForType = {
    "HP": hp,
    "ATK": atk,
    "DEF": def,
    "SP_ATK": sp_atk,
    "SP_DEF": sp_def,
    "SPD": spd
  }
  return statsForType
}



//MINI VOODOO BOX PLOT POUR LES STATS------------------------------------------
function makeStatsMiniBoxPlot(data, tierName) {
  var center = 45
  let tierNode = "";
  let isType = false;
  switch (tierName) {
    case "Uber":
      tierNode = "#uberUsedStats"
      break;
    case "OU":
      tierNode = "#overUsedStats"
      break;
    case "UU":
      tierNode = "#underUsedStats"
      break;
    case "RU":
      tierNode = "#rarelyUsedStats"
      break;
    case "NU":
      tierNode = "#neverUsedStats"
      break;
    default:
      break;

  }
  if (tierNode == "") {
    tierNode = "." + tierName
    isType = true;
  }
  let colorCode
  let colorNumber
  if (isType) {
    colorCode = getTypeColor(tierName)
    colorNumber = colorCode.split('#');
    document.querySelector(tierNode).setAttribute("Style", "background-color: #" + colorNumber[1] + "73") //73 pour la transparence
    let typeName = document.querySelector(tierNode).appendChild(document.createElement('div'))
    typeName.classList.add('stats-title')
    typeName.setAttribute("Style", " -webkit-text-stroke: 0.5px " + " #c5c5c5 " + ";")
    typeName.textContent = tierName.toUpperCase();
  } else {
    colorCode = "#a6a6a6"
    colorNumber = "a6a6a6"
  }

  // set the dimensions and margins of the graph
  var margin2 = { top: 10, right: 30, bottom: 30, left: 40 },
    width2 = 600 - margin2.left - margin2.right,
    height2 = 300 - margin2.top - margin2.bottom;
  var center = 45
  var widthBox = 20



  let svgStats = d3.select(tierNode)
    .append("svg")
    .attr("width", 400)
    .attr("height", 300)
    .append("g")
    .attr("transform",
      "translate(" + 25 + "," + 25 + ") scale(0.7,0.7)");

  //chartes des stats sur les tiers 
  // Build and Show the Y scale
  let y = d3.scaleLinear()
    .domain([0, 160])          // Note that here the Y scale is set manually
    .range([height2, 0])
  svgStats.append("g")
    //.attr("transform", "translate("+ width2 +" 0)")
    .call(d3.axisLeft(y).tickValues(["20", "40", "60", "80", "100", "120", "140", "160"]))
    .attr("class", "graphLines")

  domForEach(".graphLines .tick line", evt => {
    evt.setAttribute("x2", "600")
    evt.setAttribute("fill-opacity", "0.5")
    evt.setAttribute("stroke-opacity", "0.35")
  })

  domForEach(".tick text", evt => {
    evt.setAttribute("font-size", "1.5em")
  })


  // Build and Show the X scale. It is a band scale like for a boxplot: each group has an dedicated RANGE on the axis. This range has a length of x.bandwidth
  let x = d3.scaleBand()
    .range([0, width2])
    .domain(["HP", "ATK", "DEF", "SP.ATK", "SP.DEF", "SPD"])
    .padding(0.05)     // This is important: it is the space between 2 groups. 0 means no padding. 1 is the maximum.

  svgStats.append("g")
    .attr("transform", "translate(0," + height2 + ")")
    .call(d3.axisBottom(x))


  let hpData = data["HP"];
  let atkData = data["ATK"]
  let defData = data["ATK"]
  let spAtkData = data["SP_ATK"];
  let spDef = data["SP_DEF"]
  let spdData = data["SPD"]

  let allStatsData = [
    hpData,
    atkData,
    defData,
    spAtkData,
    spDef,
    spdData
  ]

  allStatsData.forEach(stat => {
    makeBars(stat, svgStats, colorCode)
    center = center + 87;
  });

  //fonction interne à la fonction pour garder les variables
  function makeBars(data, svgStats, colorCode) {

    // Compute summary statistics used for the box:
    let data_sorted = data.sort(d3.ascending)
    // console.log(data_sorted)
    let q1 = d3.quantile(data_sorted, 0.25)
    let median = d3.quantile(data_sorted, 0.50)
    let q3 = d3.quantile(data_sorted, 0.75)
    let interQuantileRange = q3 - q1
    let min = q1 - 1.5 * interQuantileRange
    let max = q1 + 1.5 * interQuantileRange

    // svgStats
    // .append("line")
    //   .attr("x1", center)
    //   .attr("x2", center)
    //   .attr("y1", y(min) )
    //   .attr("y2", y(max) )
    //   .attr("stroke", "black")

    // Show the box
    svgStats
      .append("rect")
      .attr("x", center - widthBox / 2)
      .attr("y", y(q3))
      .attr("height", (y(q1) - y(q3)))
      .attr("width", widthBox)
      .attr("stroke", "white")
      .attr("rx", "5")
      .style("fill", () => { if (colorCode != null) { return colorCode } else { return "#a6a6a6" } })

    // show median, min and max horizontal lines
    svgStats
      .selectAll("lines")
      .data([median])
      .enter()
      .append("line")
      .attr("x1", center - widthBox / 2)
      .attr("x2", center + widthBox / 2)
      .attr("y1", function (d) { return (y(d)) })
      .attr("y2", function (d) { return (y(d)) })
      .attr("stroke", "red")//ligne verte
  }

}


// append the svg object to the body of the page


let barsIndex = 0

//fonctionne mais wonky... et les fait toutes a la meme place vu que var de





//MINI CHORD CHART DES TYPES POUR LES TIERS------------------------------------

//préparation de liste des types-----------------------------------
function makeTierTypes(tier) {
  let tierTypes = [];
  tier.forEach(pkmn => {
    tierTypes.push({ "type1": pkmn["Type.1"], "type2": pkmn["Type.2"] })
  })
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
    case "Uber":
      tierNode = "#uberUsedChart"
      break;
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


  let svgTier = d3.select(tierNode)
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .append("g")
    .attr("transform", "translate(200,150) scale(0.7,0.7)")
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


  // Ajout des liens entre les groupes-------
  let innerBarsTier = svgTier
    .datum(resTier)
    .append("g")
    .selectAll("path")
    .data(function (d) { return d; })
    .enter()
    .append("path")

    .attr('class', 'innerArcs')
    .on("mouseover", onMouseOver)
    .on("mouseout", onMouseOut)
    // .on("mouseout", onMouseOut)
    .attr("d", d3.ribbon()
      .radius(200)
    )
    .attr("id", function (d) { return ([d.type1]) })//ICIIIII 

    .style("fill", function (d) { return (colors[d.source.index]) }) // colors depend on the source group. Change to target otherwise.
    .style("stroke", function (d) { return (colors[d.source.index]) })

  function onMouseOver(selected) {
    // console.log(this)
    const style = getComputedStyle(this)
    //this.getAttribute('style');
    let color = style.fill
    let colorFill = "fill:" + color;
    innerBarsTier
      .style("opacity", 0.1);
    this.setAttribute('style', 'opacity:1')
    this.setAttribute('style', colorFill)


  }

  function onMouseOut(selected) {
    innerBarsTier.style("opacity", 1);
    svg.selectAll(".chord")
      .style("opacity", 1);
  }


}

function makeLegend(typeArray, colors) {

  let keys = typeArray;
  let legendIndex = 0;
  let preventFirst = 0;
  let legendIndexLabel = 0;
  let preventFirstLabel = 0;
  // create a list of keys
  let svg = d3.select('#legendBullets')
  let color = d3.scaleOrdinal()
    .domain(keys)
    .range(colors);

  svg.selectAll("mydots")
    .data(typeArray)
    .enter()
    .append("circle")
    .attr("cx", function (d, i) {
      //console.log(i)
      let position = 50;
      switch (true) {
        case i <= 6:
          position = 100;
          break;
        case i <= 12:
          position = 200;
          break;
        case i > 12:
          position = 300;
          break;
      }
      return position
    })
    //was 100
    .attr("cy", function (d, i) {
      switch (true) {
        case (i == 7 || i == 13):
          legendIndex = 0;
          preventFirst = 0;
          break;

        default:
          break;
      }
      if (preventFirst != 0) {
        legendIndex++;
      } else {
        preventFirst++
      }

      return 20 + legendIndex * 25
    })
    .attr("r", 7)
    .style("fill", function (d) { return color(d) })

  // Add one dot in the legend for each name.
  svg.selectAll("mylabels")
    .data(keys)
    .enter()
    .append("text")
    .attr("x", function (d, i) {
      //console.log(i)
      let position = 120;
      switch (true) {
        case i <= 6:
          position = 120;
          break;
        case i <= 12:
          position = 220;
          break;
        case i > 12:
          position = 320;
          break;
      }
      return position
    })//was 100)
    .attr("y", function (d, i) {
      switch (true) {
        case (i == 7 || i == 13):
          legendIndexLabel = 0;
          preventFirstLabel = 0;
          break;

        default:
          break;
      }
      if (preventFirstLabel != 0) {
        legendIndexLabel++;
      } else {
        preventFirstLabel++
      }

      return 22 + legendIndexLabel * 25
    }) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", function (d) { return color(d) })
    .text(function (d) { return d })
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
}




//Fonctions pour les boutons de la homepage

//Affichage background des panels site
domOn('.homeElement', 'mouseover', evt => {

  evt.currentTarget.classList.add('selected');
})

//Affichage background des panels site
domOn('.homeElement', 'mouseout', evt => {

  evt.currentTarget.classList.remove('selected');
})


//Affichage background des panels site
domOn('.homeElement', 'click', evt => {

  let selection
  switch (true) {
    case evt.currentTarget.classList.contains('types'):
      window.location.hash = 'types'
      break;
    case evt.currentTarget.classList.contains('stats'):
      window.location.hash = 'stats'
      break;
    case evt.currentTarget.classList.contains('competitive'):
      window.location.hash = 'competitive'
      break;
    default:
      break;
  }

  toggleSection(selection)
})

//Affichage background des panels site
domOn('.homeElement', 'mouseout', evt => {

  evt.currentTarget.classList.remove('selected');
})
