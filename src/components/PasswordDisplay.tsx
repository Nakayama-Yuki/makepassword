<<<<<<< HEAD
import React from "react";

=======
>>>>>>> 0977db896b6f2cf308d17a4c71165f643e960fef
interface PasswordDisplayProps {
  password: string;
}

<<<<<<< HEAD
const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password }) => {
  return <div>{password}</div>;
};

export default PasswordDisplay;
=======
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
>>>>>>> 0977db896b6f2cf308d17a4c71165f643e960fef
