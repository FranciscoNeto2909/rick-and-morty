import { useState } from "react"
import {getEpisodes} from "../api/index"
import "./pages.css"

export default function Episodes() {
    const [episodes, setEpisodes] = useState([])

    async function handleShowEpisodes() {
        const episodes = await getEpisodes()
        setEpisodes(episodes)
        console.log(episodes)
    }

    return(
        <div className="episodes">
            <h1>Episodes</h1>
            <button className="btnShowCharacters" onClick={handleShowEpisodes}>Mostrar</button>
        </div>
    )
}