import "../styles/frameworkCard.css";

interface FrameworkCardProps {
  title: string;
  frameworks: { [key: string]: string[] };
}

function FrameworkCard({ title, frameworks }: FrameworkCardProps) {
  return (
    <div className="framework-card">
      <h3 className="framework-title">{title}</h3>
      <div className="framework-list">
        {Object.entries(frameworks).map(([category, frameworkList]) => (
          <div key={category} className="framework-category">
            <h4>{category}</h4>
            <ul>
              {frameworkList.map((framework, index) => (
                <li key={index} className="framework-item">{framework}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrameworkCard;
