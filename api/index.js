const conectaAPI = document.getElementById('card');
const API = 'https://rickandmortyapi.com/api/character/';
const count = 1;
const characters = [];

const getDataRickAndMorty = async () => {
    try {
        const { results } = await fetchData(`${API}`)
        results.map(character => {
            const datos = cardGenerator(character);
            conectaAPI.appendChild(datos);
        });
    } catch (error) {
        console.error(error);
    }
}

(function() { 
    for (let i = 1; i <= count; i++) { 
        getDataRickAndMorty(i); 
    } 
})();