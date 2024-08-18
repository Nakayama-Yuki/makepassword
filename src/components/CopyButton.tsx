import React, { useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copySuccess, setCopySuccess] = useState<string>("");

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess("コピーに成功した!");
    } catch (err) {
      setCopySuccess("コピーに失敗した!");
    }
  };

  return (
    <div>
      <button
        className="w-full p-2 mt-2 bg-green-500 text-white rounded disabled:bg-green-300 disabled:cursor-not-allowed"
        onClick={handleCopyToClipboard}>
        クリップボードにコピーする
      </button>
      {copySuccess && <p className="mt-2 text-green-600">{copySuccess}</p>}
    </div>
  );
};

export default CopyButton;
