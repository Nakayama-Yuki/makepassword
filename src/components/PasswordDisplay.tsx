import React from "react";

interface PasswordDisplayProps {
  password: string;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password }) => {
  return <div>{password}</div>;
};

export default PasswordDisplay;
