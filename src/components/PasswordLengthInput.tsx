import React from "react";

interface PasswordLengthInputProps {
  length: number;
  setLength: (length: number) => void;
}

const PasswordLengthInput: React.FC<PasswordLengthInputProps> = ({
  length,
  setLength,
}) => {
  return (
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
  );
};

export default PasswordLengthInput;
