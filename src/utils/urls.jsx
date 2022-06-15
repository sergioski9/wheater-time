const api = 'b6e0303a09a7ecc96f179897955cfbac'
export const getWeatherUrl = ({ city, countryCode }) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${api}`
export const getForecastUrl = ({ city, countryCode }) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${api}`
