// src/components/ThemeToggleButton.tsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-200 rounded">
      {theme === "light" ? "ダークテーマに切り替え" : "ライトテーマに切り替え"}
    </button>
  );
};

export default ThemeToggleButton;
