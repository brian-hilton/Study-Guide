import { Link } from "react-router-dom"
import "../styles/navBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/study">Language Flashcards</Link></li>
                <li><Link to="/frameworks">Common Frameworks</Link></li>
                <li><Link to="/databases">Databases and SQL</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar

