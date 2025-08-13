import { HyperText } from "../components/magicui/hyper-text";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
      {/* <div className="absolute inset-0 z-1 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"></div> */}
      <HyperText className="text-4xl font-bold text-center text-gray-900 dark:text-white">
        Hello 👋 I'm Tazkie
      </HyperText>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mt-4">
        On my journey to grow as a mobile & web developer.
      </p>
    </main>
  );
}
