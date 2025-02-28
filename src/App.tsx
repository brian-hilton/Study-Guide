import { useState } from "react";
import StudyCard from "./components/StudyCard";
import "./styles/studyPage.css";
import { studyCardsData } from "./data/studyCardsData";
import "./App.css";

function App() {
  return (
    <div className="study-page">
      {studyCardsData.map((card, index) => (
        <StudyCard
          key={index}
          title={card.title}
          description={card.description}
          typing={card.typing}
          applications={card.applications}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default App;
