import "./pages.css"

export default function Home() {
    return(
        <div className="home">
            <h1>Home</h1>
        <p className="purpose">
            Essa aplicação foi desenvolvida por <a href="">mim</a> para praticar requisições a api. Essa em questão,<br/> como podem ver, faz requisição a uma api da serie Rick and Morty, a qual me <br />disponibilizou os personagens e episodios.
        </p>
        </div>
    )
}