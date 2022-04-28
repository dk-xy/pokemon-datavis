import{ getPokemonRange, loadPkmn , loadJsonUrls, loadPkmnByName} from './api'


const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const pokemonList = document.querySelector('.pkmn-list')
//const selection = document.querySelector('.buttonSelection')
const pokemonTemplate = document.querySelector('.tmpl-pkmn')
const pokeArray = []

export async function renderPokemons(pokemons){
    //pokemonList.replaceChildren() //vidage de liste !! important
    console.log(pokemons.results)
    for(const pkmn of pokemons) {
      makePokemon(pkmn)
      
    }
}

function makePokemon(pokemon){
    console.log(pokemon)
    const tmpl = pokemonTemplate.cloneNode(true)
    tmpl.querySelector('.pkmn-no').textContent += " " + pokemon.order;
    tmpl.querySelector('.pkmn-name').textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);//char 1 en maj et le reste en min
    tmpl.querySelector('.pkmn-sprite').src = getPkmnImage(pokemon.id)
    //getImgLink += pokemon.id + '.png'
    tmpl.querySelector('.pkmn-sprite').setAttribute('src', getPkmnImage(pokemon.id))
    pokemonList.appendChild(tmpl)
}

function getPkmnImage(id){
  let getImgLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  getImgLink += id + '.png'
  return getImgLink;
}

// Charge les pokemon et itère dessus
 async function renderPkmnOnDom(limit, offset) {
    const pokemons = await getPokemonRange(limit, offset)
    let arrayPkmn = pokemons.results;
    let linksToLoad = []
    arrayPkmn.forEach(pkmn => {
        linksToLoad.push(pkmn.url)
    })
        //console.log(linksToLoad)
        let tabPkmnLoaded = await loadJsonUrls(linksToLoad);
        //console.log(tabPkmnLoaded)
    
    renderPokemons(tabPkmnLoaded)
    
  }

  // Charge les pokemon et itère dessus
export  async function renderTiersOnDom(names) {
    //const pokemons = await getPokemonRange(limit, offset)
    //let arrayPkmn = pokemons.results;
    let linksToLoad = []
    names.forEach(name => {
        linksToLoad.push(BASE_URL+"/"+name+"/")
    })
        //console.log(linksToLoad)
        let tabPkmnLoaded = await loadJsonUrls(linksToLoad);
        //console.log(tabPkmnLoaded)
        console.log(tabPkmnLoaded)
    renderPokemons(tabPkmnLoaded)
    
  }

// selection.addEventListener('click', evt=>{
//     console.log(evt.target)
//     let limit = parseInt(evt.target.getAttribute('pkmn-max-id')) - parseInt(evt.target.getAttribute('pkmn-min-id'))
//     let offset = evt.target.getAttribute('pkmn-min-id')
//     renderPkmnOnDom(limit, offset)
// })


  