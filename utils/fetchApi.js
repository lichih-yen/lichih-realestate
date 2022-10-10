import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': 'b547606becmsh3b4e55ca7d60d4dp13dc52jsnb38ad2638b29',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  })

  return data
}
