export default function Navbar() {
  const currentPath = window.location.pathname;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Project", href: "/project" },
    { name: "Experience", href: "/contact" },
  ];

  return (
    <nav className="w-full py-6 px-4 z-4">
      <div className="max-w-4xl mx-auto">
        <ul className="flex items-center justify-center gap-12">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-lg font-medium transition-colors duration-200 relative group ${
                    isActive
                      ? "text-black dark:text-white"
                      : "text-gray-500 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-black dark:bg-white transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
