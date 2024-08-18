<<<<<<< HEAD
import React from "react";

interface CopyButtonProps {
  password: string;
  copySuccess: boolean;
  handleCopyToClipboard: () => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  password,
  copySuccess,
  handleCopyToClipboard,
}) => {
  return (
    <button onClick={handleCopyToClipboard}>
      {copySuccess ? "コピー成功" : "クリップボードにコピー"}
    </button>
  );
};

export default CopyButton;
=======
interface CopyButtonProps {
  password: string;
  copySuccess: string;
  handleCopyToClipboard: () => void;
}

export default function CopyButton({
  password,
  copySuccess,
  handleCopyToClipboard,
}: CopyButtonProps) {
  return (
    <div>
      <button
        onClick={handleCopyToClipboard}
        className="w-full p-2 mt-2 bg-green-500 text-white rounded disabled:bg-green-300 disabled:cursor-not-allowed"
        disabled={!password}>
        クリップボードにコピー
      </button>
      {copySuccess && <p className="mt-2 text-green-600">{copySuccess}</p>}
    </div>
  );
}
>>>>>>> 0977db896b6f2cf308d17a4c71165f643e960fef
