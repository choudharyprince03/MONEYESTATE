import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png"; // Ensure this path is correct
import { navItems } from "../constants";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    // initialize theme from localStorage or system preference
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    // add brief transition helper to animate colors/backgrounds
    document.documentElement.classList.add('theme-transition');
    window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 300);

    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg border-b border-gray-200 dark:border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm text-gray-800 dark:text-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <NavLink to={'/'} className={'flex items-center'}>
                <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
                <span className="text-xl tracking-tight">Moneyestates</span>
            </NavLink>
            
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-4">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800">
              {isDark ? <Sun /> : <Moon />}
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <div className="flex items-center gap-3">
              <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-800">
                {isDark ? <Sun /> : <Moon />}
              </button>
              <button onClick={toggleNavbar} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-800">
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white dark:bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
