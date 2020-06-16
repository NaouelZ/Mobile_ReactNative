export function getMusicWithItunes(text){
    const url = "https://itunes.apple.com/search?media=music&term=" + text + "&limit=15"
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}