const API_TOKEN = "c42a6c4b1b6577167cdfb952eaca224e"
const API_HOST = "imdb8.p.rapidapi.com"

export function getFilmsWithIMDB(text){
    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN + "&language=fr&query=" + text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}