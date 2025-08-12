import { HyperText } from "../components/magicui/hyper-text";
import Navbar from "../components/navbar";
import SocialMedia from "../components/social-media";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
      <SocialMedia />
      <main className="max-w-4xl mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
        <HyperText  className="text-4xl font-bold text-center text-gray-900">Hello 👋 I'm Tazkie</HyperText>
        <p className="text-lg text-gray-600 text-center mt-4">On my journey to grow as a mobile & web developer.</p>
        {/* <p className="text-lg text-gray-600 text-center mt-4">
          A curious coder turning <span className="text-emerald-600">tea 🍵</span> into <span className="text-indigo-600">code 💻</span> (and learning along the way)
        </p> */}
      </main>
    </div>
  )
}
