import "../styles/studyCard.css";

interface StudyCardProps {
  title: string;
  description: string;
  typing: string;
  applications: string[];
  image: string;
}

function StudyCard({
  title,
  description,
  typing,
  applications,
  image,
}: StudyCardProps) {
  return (
    <>
      <div className="study-card">
        <img src={image} alt={`${title} logo`} className={"language-logo"} />
        <h2>{title}</h2>
        <p>
          <strong>{description}</strong>
        </p>
        <p>
          <strong>Typing:{typing}</strong>
        </p>
        <h4>Common Applications:</h4>
        <ul>
          {applications.map((app, index) => (
            <li key={index}>{app}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StudyCard;
