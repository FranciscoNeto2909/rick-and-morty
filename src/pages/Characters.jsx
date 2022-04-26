import { useState } from "react"

import { getCharacters } from "../api"
import Card from "../components/card/Card"
import "./pages.css"

export default function Characters(){
    const [characters, setCharacters] = useState([])
    const [show, setShow] = useState(false)

    async function showCharacters(e) {
        e.preventDefault()
        const characters = await getCharacters()
        setCharacters(characters)
        setShow(true)
        console.log(characters)
    }
    return(
        <div className="characters">
            <h1>Characters</h1>
            <p>Essa pagina mostra alguns personagens da serie</p>
            <button className="btnShowCharacters" 
            onClick={showCharacters}>Mostrar</button>
            <Card characters={characters}/>
        </div>
    )
}