import { useState } from "react";
import "../data/frameworkCardData";
import "../styles/frameworkCard.css";

interface frameworkCardProps {
  title: string;
  frameworks: { [key: string]: string };
}

function FrameworkCard({ title, frameworks }: frameworkCardProps) {
  return (
    <>
      <div className="framework-card"></div>
    </>
  );
}

export default FrameworkCard;
