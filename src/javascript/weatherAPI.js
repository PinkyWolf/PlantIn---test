let text = document.querySelector('.temperature');

console.log(text);

async function fetchWeather() {
	let key = 'dd47af45cbc9862e2129c021a8f27e21';
	let city = 'Kyiv';
	let url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
	//fetch the weather
	const response = await fetch(url)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
		});
	return await response.json();
}

fetchWeather();
