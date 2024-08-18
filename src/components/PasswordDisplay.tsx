interface PasswordDisplayProps {
  password: string;
}

export default function PasswordDisplay({ password }: PasswordDisplayProps) {
  return (
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
  );
}
