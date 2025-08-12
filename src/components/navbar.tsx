export default function Navbar() {
  return (
    <nav className="w-full py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <ul className="flex items-center justify-center gap-12">
          <li>
            <a
              href="/"
              className="text-lg font-medium text-gray-500 hover:text-black transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="/project"
              className="text-lg font-medium text-gray-500 hover:text-black transition-colors duration-200 relative group"
            >
              Project
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-lg font-medium text-gray-500 hover:text-black transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
