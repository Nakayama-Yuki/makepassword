"use client";

import React, { useState } from "react";
import PasswordOptions from "./PasswordOptions";
import PasswordDisplay from "./PasswordDisplay";
import CopyButton from "./CopyButton";

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  const generatePassword = () => {
    // パスワード生成ロジックをここに追加
  };

  const handleCopyToClipboard = () => {
    // クリップボードにコピーするロジックをここに追加
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
};

export default PasswordGenerator;
