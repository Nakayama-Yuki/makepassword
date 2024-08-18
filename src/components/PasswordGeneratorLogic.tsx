import React from "react";

interface PasswordGeneratorLogicProps {
  length: number;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  setPassword: (password: string) => void;
}

const PasswordGeneratorLogic: React.FC<PasswordGeneratorLogicProps> = ({
  length,
  includeUppercase,
  includeNumbers,
  includeSymbols,
  setPassword,
}) => {
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
  };

  return (
    <button
      onClick={generatePassword}
      disabled={length <= 7}
      className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-blue-300 disabled:cursor-not-allowed">
      パスワードを生成する
    </button>
  );
};

export default PasswordGeneratorLogic;
