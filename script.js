// axios
//     .get('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((res) => {
//         const pokemon = res.data;
//     }
// )


const poke_container = document.querySelector("#poke_container");
const poke_number = 100;

const fetchPokemon = async () => {
    for(let i=1;i<=poke_number; i++){
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}

fetchPokemon();

function createPokemonCard(pokemon){
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    
    const poke_types = pokemon.types.map(el => el.type.name);
    const poke_stats = pokemon.stats.map(el => el.stat);
    const stats_num = pokemon.stats.map(el => el.base_stat);
    const type = poke_types.find(type => poke_types.indexOf(type) > -1);

    // stat 1
    const stat_1 = poke_stats.find(stat => poke_stats.indexOf(stat) > -1);
    const stat_ovr_1 = stats_num.find(el => stats_num.indexOf(el) > -1);

    // stat 2
    const stat_2 = poke_stats.find(stat => poke_stats.indexOf(stat));
    const stat_ovr_2 = stats_num.find(el => stats_num.indexOf(el));

    // stat 3
    const stat_3 = poke_stats.find(stat => poke_stats.indexOf(stat) > 1);
    const stat_ovr_3 = stats_num.find(el => stats_num.indexOf(el) > 1);

    // stat 4
    const stat_4 = poke_stats.find(stat => poke_stats.indexOf(stat) > 2);
    const stat_ovr_4 = stats_num.find(el => stats_num.indexOf(el) > 2);

    
    
    const pokeInnerHTML = `
        <div class='block'>
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png' width='60px' />
            <p>${pokemon.name}</p>
            <p>type : ${type}</p>
            <p>stats : 
            
            <br /> ${stat_1.name} : ${stat_ovr_1}
            <br /> ${stat_2.name} : ${stat_ovr_2}
            <br /> ${stat_3.name} : ${stat_ovr_3}
            <br /> ${stat_4.name} : ${stat_ovr_4}
            
            </p>
        </div>
    `;

    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
    console.log(pokemon);
}