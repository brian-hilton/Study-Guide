import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Programming Languages</h1>
            <p>Select a page:</p>
            <ul>
                <li><Link to="/study">Go to flashcard page</Link></li>
            </ul>
        </div>
    )
}

export default Dashboard