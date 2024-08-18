"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";
import PasswordGeneratorLogic from "@/components/PasswordGeneratorLogic";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  return (
    <div className="p-4 border rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="passWordLength" className="block mb-2">
          パスワードの長さ(8-32)
        </label>
        <input
          type="number"
          value={length}
          max={32}
          min={8}
          id="passWordLength"
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          大文字を含む
        </label>
        <label className="block">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          数字を含む
        </label>
        <label className="block">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          記号を含む
        </label>
      </div>
      <PasswordGeneratorLogic
        length={length}
        includeUppercase={includeUppercase}
        includeNumbers={includeNumbers}
        includeSymbols={includeSymbols}
        setPassword={setPassword}
      />
      <div className="mt-4">
        <label htmlFor="generatedPassWord" className="block mb-2">
          生成されたパスワード:
        </label>
        <input
          type="text"
          value={password}
          readOnly
          id="generatedPassWord"
          className="w-full p-2 border rounded"
        />
      </div>
      <CopyButton textToCopy={password} />
    </div>
  );
}
