let text = document.querySelector('.temperature');

console.log(text);

async function fetchWeather() {
	let key = 'dd47af45cbc9862e2129c021a8f27e21';
	let city = 'Kyiv';
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
	//fetch the weather
	fetch(url)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
			text.innerHTML = `Current temperature is: ${data.main.temp}°C`;
		});
}

fetchWeather();
