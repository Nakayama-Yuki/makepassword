"use client";

import { useState } from "react";
import PasswordOptions from "./PasswordOptions";
import PasswordDisplay from "./PasswordDisplay";
import CopyButton from "./CopyButton";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copySuccess, setCopySuccess] = useState("");

  const generatePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characters = lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }

    setPassword(newPassword);
    setCopySuccess(""); // Reset the copy success message
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(password).then(
      () => setCopySuccess("コピーしました！"),
      () => setCopySuccess("コピーに失敗しました。")
    );
  };

  return (
    <div>
      <PasswordOptions
        length={length}
        includeUppercase={includeUppercase}
        includeNumbers={includeNumbers}
        includeSymbols={includeSymbols}
        setLength={setLength}
        setIncludeUppercase={setIncludeUppercase}
        setIncludeNumbers={setIncludeNumbers}
        setIncludeSymbols={setIncludeSymbols}
      />
      <button
        onClick={generatePassword}
        disabled={length <= 7}
        className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-blue-300 disabled:cursor-not-allowed">
        パスワードを生成する
      </button>
      <PasswordDisplay password={password} />
      <CopyButton
        password={password}
        copySuccess={copySuccess}
        handleCopyToClipboard={handleCopyToClipboard}
      />
    </div>
  );
}
