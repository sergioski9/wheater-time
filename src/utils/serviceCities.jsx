const cities = [
  { city: 'Santa Cruz', country: 'Bolivia', countryCode: 'BO' },
  { city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR' },
  { city: 'Brasil', country: 'Sao Paulo', countryCode: 'BR' },
  { city: 'Ciudad de Mexico', country: 'Mexico', countryCode: 'MX' }
]

export const getCities = () => cities

export const getCountryNameByCountryCode = countryCode => (
  cities.filter(c => c.countryCode === countryCode)[0].country
)
