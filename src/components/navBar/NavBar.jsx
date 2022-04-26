import { Link } from "react-router-dom"
import "./style.css"

export default function NavBar() {
    return(
        <nav className="nav">
            <img src="https://th.bing.com/th/id/OIP.9iHipZ7EntgmE7ls9-0SZQHaHa?pid=ImgDet&w=512&h=512&rs=1" alt="" className="nav-img" />
            <ul className="list">
                <li className="list-item">
                    <Link to="/" className="list-link">Home</Link>
                </li>
                <li className="list-item">
                    <Link to="/characters" className="list-link">Characters</Link>
                </li>
                <li className="list-item">
                    <Link to="/episodes" className="list-link">Episodes</Link>
                </li>
            </ul>
        </nav>
    )
}