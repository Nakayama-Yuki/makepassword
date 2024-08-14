import PasswordGenerator from "@/components/PasswordGenerator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
      <PasswordGenerator />
    </main>
  );
}

