import { useState } from "react";
import "../data/frameworkCardData";
import "../styles/frameworkCard.css";

interface frameworkCardProps {
  title: string;
  frameworks: { [key: string]: string[] };
}

function FrameworkCard({ title, frameworks }: frameworkCardProps) {
  return (
    <>
      <div className="framework-card"></div>
      <h3>{title}</h3>
      <ul>
        {Object.entries(frameworks).map(([category, list]) => (
          <li key={category}>
            <strong>{category}:</strong> {list.join(", ")}
          </li>
        ))}
      </ul>
    </>
  );
}

export default FrameworkCard;
