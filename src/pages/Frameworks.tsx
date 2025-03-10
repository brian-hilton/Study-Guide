import FrameworkCard from "../components/FrameworkCard"
import { frameworkCardData } from "../data/frameworkCardData"
import "../styles/frameworkCard.css"

function Frameworks() {
    return (<div className="framework-page">{
        frameworkCardData.map((card, index) => (
            <FrameworkCard key={index} title={card.title} frameworks={card.frameworks} />
        ))}</div>)
}

export default Frameworks