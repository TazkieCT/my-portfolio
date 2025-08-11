import { HyperText } from "../components/magicui/hyper-text";

export default function Home() {
  return (
    <>
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/80 bg-clip-text text-center text-8xl font-serif font-bold leading-none text-transparent">
          <HyperText>Hover me</HyperText>
        </span>
        <p className="mt-4 text-lg text-gray-400 font-sans">Welcome to my portfolio</p>
      </div>
    </>
  );
}
