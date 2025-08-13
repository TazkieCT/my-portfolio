import { HyperText } from "../components/magicui/hyper-text";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
      <HyperText className="text-4xl font-bold text-center text-gray-900">
        Hello 👋 I'm Tazkie
      </HyperText>
      <p className="text-lg text-gray-600 text-center mt-4">
        On my journey to grow as a mobile & web developer.
      </p>
    </main>
  );
}
