//const apiURL = ;
const apiChave = '6b754e23fe158f87a4fd15c392fcbba9';
var cidade = 'Londres' ;

function obterTemperatura () {
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=${apiChave}&units=metric `)
    .then (response => response.json())
    .then (data => {
        const temperatura = data.main.temp;
        const cidade = data.name;
        const descricao = data.weather[0].description;
        const tempElement = document.getElementById('temp');
        const cidadeElement = document.getElementById('city');
        const descricaoElement = document.getElementById('description');
        tempElement.innerHTML = ` ${temperatura} °C`;
        cidadeElement.innerHTML = ` ${cidade}`;
        descricaoElement.innerHTML = ` ${descricao}`;
    })
    .catch (error => {
        console.error('Erro ao buscar temperatura',error);
    });
    
}

//const apiURL = 'https://api.themoviedb.org/3/discover/movie?' + 'api_key=' + apiChave + '&language=pt-BR';

//document.querySelector('#citySearch')