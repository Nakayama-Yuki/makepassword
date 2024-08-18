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
