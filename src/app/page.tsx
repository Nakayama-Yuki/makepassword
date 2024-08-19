"use client";

import PasswordGenerator from "@/components/PasswordGenerator";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}>
      <h1 className="text-2xl font-bold mb-4">パスワード生成ツール</h1>
      <PasswordGenerator />
      <ThemeToggleButton />
    </main>
  );
}
