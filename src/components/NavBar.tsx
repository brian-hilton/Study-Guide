import { Link } from "react-router-dom"
import "../styles/navBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/study">Flashcards</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar

