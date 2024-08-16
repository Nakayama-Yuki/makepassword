import PasswordGenerator from "@/components/PasswordGenerator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">パスワード生成ツール</h1>
      <PasswordGenerator />
    </main>
  );
}

