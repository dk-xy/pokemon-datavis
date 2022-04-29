import { getPokemonRange, loadPkmn, loadJsonUrls, loadPkmnByName } from './api'


const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'


const pokeArray = []

export async function renderPokemons(pokemons, tier) {
  //pokemonList.replaceChildren() //vidage de liste !! important
  for (const pkmn of pokemons) {
    makePokemon(pkmn, tier)

  }
}



function getPkmnImage(id) {
  let getImgLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  getImgLink += id + '.png'
  return getImgLink;
}


export function renderTierOnDomV2(tier, tierName){
  console.log(tier)
  let node;
  switch (tierName) {
    case "OU":
     node = document.querySelector('.overUsed')
      break;
    case "UU":
      node = document.querySelector('.underUsed')
      break;
    case "RU":
      node = document.querySelector('.rarelyUsed')
      break;
    case "NU":
      node = document.querySelector('.neverUsed')
      break;

    default:
      break;
  }
tier.forEach(pokemon=>{
  let pokemonList = node.querySelector('.pkmn-list')
  let pokemonTemplate = node.querySelector('.tmpl-pkmn')
  console.log(pokemon)
  let tmpl = pokemonTemplate.cloneNode(true)
  let pokemonID = pokemon["X."]
  console.log(pokemonID)
  tmpl.querySelector('.pkmn-no').textContent += " " + pokemonID;
  tmpl.querySelector('.pkmn-name').textContent = pokemon.Name.charAt(0).toUpperCase() + pokemon.Name.slice(1);//char 1 en maj et le reste en min
  tmpl.querySelector('.pkmn-sprite').src = getPkmnImage(pokemonID)
  //getImgLink += pokemon.id + '.png'
  tmpl.querySelector('.pkmn-sprite').setAttribute('src', getPkmnImage(pokemonID))
  pokemonList.appendChild(tmpl)
})
}



//OLD------------------------------------------------------

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

