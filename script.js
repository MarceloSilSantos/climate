const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}s&lang=pt_br&appid=${apiChave}&units=metric `;
const apiChave = '6b754e23fe158f87a4fd15c392fcbba9';
var cidade = document.querySelector('#citySearch');

function obterTemperatura () {
    fetch (apiURL)
    .then (response => response.json())
    .then (data => {
        const temperatura = data.main.temp;
        const cidade = data.name;
        const tempElement = document.getElementById('temp');
        tempElement.innerHTML = ` A temperatura em ${cidade} é ${temperatura} °C`;
    })
    .catch (error => {
        console.error('Erro ao buscar temperatura',error);
    });
    
}

//const apiURL = 'https://api.themoviedb.org/3/discover/movie?' + 'api_key=' + apiChave + '&language=pt-BR';