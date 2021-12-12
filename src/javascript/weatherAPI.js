let text = document.querySelector('.temperature');

console.log(text);

function fetchWeather() {
	//use the values from latitude and longitude to fetch the weather
	let key = 'dd47af45cbc9862e2129c021a8f27e21';
	let city = 'Kyiv';
	let url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
	//fetch the weather
	fetch(url)
		.then(res => {
			if (!res.ok) throw new Error(res.statusText);
			return res.json();
		})
		.then(data => {
			console.log(data);
		})
		.catch(console.err);
}
fetchWeather();
