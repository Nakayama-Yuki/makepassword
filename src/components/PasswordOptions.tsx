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
