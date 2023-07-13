import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex-col">
        <Navbar />
        <Card className="max-w-xl mx-auto mt-40 p-10">
          <h1>Faucet</h1>
        </Card>
      </div>
    </main>
  );
}
