import { useState } from "react";
import "../styles/studyCard.css";

interface StudyCardProps {
  title: string;
  description: string;
  typing: string;
  applications: string[];
  image: string;
  syntax: string;
}

function StudyCard({
  title,
  description,
  typing,
  applications,
  image,
  syntax,
}: StudyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <div
        className={`study-card ${isFlipped ? "flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-inner">
          <div className="card-front">
            <img
              src={image}
              alt={`${title} logo`}
              className={"language-logo"}
            />
            <h2>{title}</h2>
            <p>
              <strong>{description}</strong>
            </p>
            <p>
              <strong>{typing}</strong>
            </p>
            <ul>
              {applications.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
          </div>

          <div className="card-back">
            <img
              src={image}
              alt={`${title} logo`}
              className={"language-logo-back"}
            />
            <h2>{title}</h2>
            <pre>
              <code>{syntax}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudyCard;
