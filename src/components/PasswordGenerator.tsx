"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";
import PasswordGeneratorLogic from "@/components/PasswordGeneratorLogic";
import PasswordLengthInput from "@/components/PasswordLengthInput";
import CheckboxOption from "@/components/CheckboxOption";
import PasswordDisplay from "@/components/PasswordDisplay";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  return (
    <div className="p-4 border rounded shadow-md">
      <PasswordLengthInput length={length} setLength={setLength} />
      <div>
        <CheckboxOption
          label="大文字を含む"
          checked={includeUppercase}
          onChange={setIncludeUppercase}
        />
        <CheckboxOption
          label="数字を含む"
          checked={includeNumbers}
          onChange={setIncludeNumbers}
        />
        <CheckboxOption
          label="記号を含む"
          checked={includeSymbols}
          onChange={setIncludeSymbols}
        />
      </div>
      <PasswordGeneratorLogic
        length={length}
        includeUppercase={includeUppercase}
        includeNumbers={includeNumbers}
        includeSymbols={includeSymbols}
        setPassword={setPassword}
      />
      <PasswordDisplay password={password} />
      <CopyButton textToCopy={password} />
    </div>
  );
}
