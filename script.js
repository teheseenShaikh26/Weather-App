const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c647c2e97mshbc74314f5a17d13p1823f4jsn5869eb120a3e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => 
{
cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		temp.innerHTML = response.temp
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		feels_like.innerHTML = response.feels_like
		//wind_Speed.innerHTML = response.wind_speed
		humidity.innerHTML = response.humidity	
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

}	

submit.addEventListener ("click",(e)=>
{
	e.preventDefault()
	getWeather(city.value)

})
getWeather("Pune")
