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
