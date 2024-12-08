import React from "react";

interface TagProps {
  text: string;
  color: "green" | "blue";
  className?: string;
}

const Tag: React.FC<TagProps> = ({ text, color, className = "" }) => {
  const baseStyles = "inline-block px-3 py-1 rounded-full text-sm font-medium w-max h-max";
  const colorStyles =
    color === "green"
      ? "bg-green-100 text-green-800"
      : "bg-blue-100 text-blue-800";

  return (
    <span className={`${baseStyles} ${colorStyles} ${className}`}>
      {text}
    </span>
  );
};

export default Tag;
