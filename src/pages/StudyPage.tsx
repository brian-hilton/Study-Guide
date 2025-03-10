import StudyCard from "../components/StudyCard"
import "../styles/studyPage.css"
import { studyCardsData } from "../data/studyCardsData";

function StudyPage() {
    return (<div className="study-page">
        {studyCardsData.map((card, index) => (
          <StudyCard
            key={index}
            title={card.title}
            description={card.description}
            typing={card.typing}
            applications={card.applications}
            image={card.image}
            syntax={card.syntax}
          />
        ))}
      </div>)
}

export default StudyPage