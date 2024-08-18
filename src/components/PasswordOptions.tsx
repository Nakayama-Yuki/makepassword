<<<<<<< HEAD
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
=======
interface PasswordOptionsProps {
  length: number;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  setLength: (length: number) => void;
  setIncludeUppercase: (include: boolean) => void;
  setIncludeNumbers: (include: boolean) => void;
  setIncludeSymbols: (include: boolean) => void;
}

export default function PasswordOptions({
  length,
  includeUppercase,
  includeNumbers,
  includeSymbols,
  setLength,
  setIncludeUppercase,
  setIncludeNumbers,
  setIncludeSymbols,
}: PasswordOptionsProps) {
  return (
    <div>
      <label>
        長さ:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          min="8"
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
        大文字を含む
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        数字を含む
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
        記号を含む
      </label>
    </div>
  );
}
>>>>>>> 0977db896b6f2cf308d17a4c71165f643e960fef
