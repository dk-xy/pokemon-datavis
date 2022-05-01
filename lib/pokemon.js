import { getPokemonRange, loadPkmn, loadJsonUrls, loadPkmnByName } from './api';
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const pokeArray = [];
export async function renderPokemons(pokemons, tier) {
  //pokemonList.replaceChildren() //vidage de liste !! important
  for (const pkmn of pokemons) {
    makePokemon(pkmn, tier);
  }
}

function getPkmnImage(id) {
  let getImgLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  getImgLink += id + '.png';
  return getImgLink;
} //Fonction de préparatione t d'affichage des listes des top10-----


export function prepareAndRender(tierName) {
  let charizardCounter = 0;
  let tierSorted = smogon.filter(smgn => smgn.Tier == tierName);
  let topTen = tierSorted.filter(function (d, i) {
    return i < 10;
  }); //console.log(tierName)

  let topTenNames = [];
  topTen.forEach(pkmn => {
    //console.log(pkmn)
    //gestion des noms "mega" pour envoi de requete à l'api
    let name = "";

    if (pkmn.Name.split(' ').length > 1) {
      if (pkmn.Name.split(' ')[1] == "Charizard") {
        if (charizardCounter == 0) {
          name = pkmn.Name.split(' ')[1] + "-" + pkmn.Name.split(' ')[0] + "-x";
          charizardCounter++;
        } else {
          name = pkmn.Name.split(' ')[1] + "-" + pkmn.Name.split(' ')[0] + "-y";
        }
      } else {
        name = pkmn.Name.split(' ')[1] + "-" + pkmn.Name.split(' ')[0];
      }
    } else {
      name = pkmn.Name;
    }

    topTenNames.push(name.toLowerCase());
  }); //renderTiersOnDom(topTenNames, tierName)

  renderTierOnDomV2(topTen, tierName);
}
export function renderTierOnDomV2(tier, tierName) {
  //console.log(tier)
  let node;

  switch (tierName) {
    case "Uber":
      node = document.querySelector('.uberUsed');
      break;

    case "OU":
      node = document.querySelector('.overUsed');
      break;

    case "UU":
      node = document.querySelector('.underUsed');
      break;

    case "RU":
      node = document.querySelector('.rarelyUsed');
      break;

    case "NU":
      node = document.querySelector('.neverUsed');
      break;

    default:
      break;
  }

  tier.forEach(pokemon => {
    //console.log(pokemon)
    let pokemonList = node.querySelector('.pkmn-list');
    let pokemonTemplate = node.querySelector('.tmpl-pkmn'); //console.log(pokemon)

    let tmpl = pokemonTemplate.cloneNode(true);
    let pokemonID = pokemon["X."]; //console.log(pokemonID)

    tmpl.classList.remove('hidden');
    tmpl.querySelector('.pkmn-no').textContent += " " + pokemonID;
    tmpl.querySelector('.pkmn-name').textContent = pokemon.Name.charAt(0).toUpperCase() + pokemon.Name.slice(1); //char 1 en maj et le reste en min
    // tmpl.querySelector('.pkmn-sprite').src = getPkmnImage(pokemonID)
    //getImgLink += pokemon.id + '.png'

    tmpl.querySelector('.pkmn-sprite').setAttribute('src', getPkmnImage(pokemonID));
    tmpl.querySelector('.pkmn-type1').textContent += " " + pokemon["Type.1"];
    tmpl.querySelector('.pkmn-type1').setAttribute("Style", "background-color:" + getTypeColor(pokemon["Type.1"]));

    if (pokemon["Type.2"] != null) {
      tmpl.querySelector('.pkmn-type2').textContent += " " + pokemon["Type.2"];
      tmpl.querySelector('.pkmn-type2').setAttribute("Style", "background-color:" + getTypeColor(pokemon["Type.2"]));
    } else {
      tmpl.querySelector('.pkmn-type2').classList.remove('pkmn-type2');
    }

    pokemonList.appendChild(tmpl);
  });
}
export function getTypeColor(pokemonType) {
  //j aurais pu envoyer en parametre mais......
  const typeArray = ["bug", "dark", "dragon", "electric", "fairy", "fire", "fighting", "flying", "grass", "ghost", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];
  var colors = ["#9cae18", //bug 
  "#4e3d2c", //dark
  "#725ddd", //dragon
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
  ];
  let indexColor;
  let color;

  if (pokemonType != null) {
    let type_sorted = pokemonType.toLowerCase();
    indexColor = typeArray.indexOf(type_sorted); //console.log(color)

    color = colors[indexColor]; //console.log(color)
  }

  return color;
} //OLD------------------------------------------------------
// // Charge les pokemon et itère dessus
// export async function renderTiersOnDom(names, tier) {
//   //const pokemons = await getPokemonRange(limit, offset)
//   //let arrayPkmn = pokemons.results;
//   let linksToLoad = []
//   names.forEach(name => {
//     linksToLoad.push(BASE_URL + "/" + name + "/")
//   })
//   //console.log(linksToLoad)
//   let tabPkmnLoaded = await loadJsonUrls(linksToLoad);
//   //console.log(tabPkmnLoaded)
//   renderPokemons(tabPkmnLoaded, tier)
// }
// function makePokemon(pokemon, tier) {
//   let node;
//     switch (tier) {
//       case "OU":
//        node = document.querySelector('.overUsed')
//         break;
//       case "UU":
//         node = document.querySelector('.underUsed')
//         break;
//       case "RU":
//         node = document.querySelector('.rarelyUsed')
//         break;
//       case "NU":
//         node = document.querySelector('.neverUsed')
//         break;
//       default:
//         break;
//     }
//     let pokemonList = node.querySelector('.pkmn-list')
//     let pokemonTemplate = node.querySelector('.tmpl-pkmn')
//     console.log(pokemon)
//     let tmpl = pokemonTemplate.cloneNode(true)
//     tmpl.querySelector('.pkmn-no').textContent += " " + pokemon.order;
//     tmpl.querySelector('.pkmn-name').textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);//char 1 en maj et le reste en min
//     tmpl.querySelector('.pkmn-sprite').src = getPkmnImage(pokemon.id)
//     //getImgLink += pokemon.id + '.png'
//     tmpl.querySelector('.pkmn-sprite').setAttribute('src', getPkmnImage(pokemon.id))
//     pokemonList.appendChild(tmpl)
//   }