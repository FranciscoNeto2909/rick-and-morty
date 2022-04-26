import axios from "axios";
const charactersUrl = "https://rickandmortyapi.com/api/character"
const episodesUrl = "https://rickandmortyapi.com/api/episode"

export async function getCharacters(){
    const data = await axios.get(charactersUrl)
    const json = await data.data.results
    return json 
}
export async function getEpisodes(){
    const data = await axios.get(episodesUrl)
    const json = data.data
    return json 
}