import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLiteMode } from "../context/LiteModeContext";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Awards", href: "#awards" },
  { name: "Certificates", href: "#certificates" },
  { name: "Papers", href: "#papers" },
  { name: "Contact", href: "#contact" },
];

function Navigation({ onClick }) {
  return (
    <ul className="flex flex-col gap-4 sm:flex-row sm:gap-8 sm:items-center">
      {NAV_LINKS.map((link) => (
        <li key={link.name} className="list-none">
          <a
            className="text-base font-medium transition-all duration-300 text-neutral-400 hover:text-white hover:tracking-wide"
            href={link.href}
            onClick={onClick}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { liteMode, setLiteMode } = useLiteMode();

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 backdrop-blur-md bg-black/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-black tracking-tighter transition-colors text-white hover:opacity-80"
          >
            TRISHA<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLiteMode(!liteMode)}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:border-white/30 transition-colors"
              aria-pressed={liteMode}
            >
              Lite Mode
              <span className="text-xs text-neutral-400">
                {liteMode ? "On" : "Off"}
              </span>
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex p-2 transition-colors rounded-md text-neutral-400 hover:text-white focus:outline-none sm:hidden"
              aria-label="Toggle Menu"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                className="w-6 h-6"
                alt="toggle"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-black/90 sm:hidden border-t border-white/5"
          >
            <nav className="p-8">
              <Navigation onClick={() => setIsOpen(false)} />
              <button
                onClick={() => setLiteMode(!liteMode)}
                className="mt-6 w-full rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300 hover:text-white hover:border-white/30 transition-colors"
                aria-pressed={liteMode}
              >
                Lite Mode: {liteMode ? "On" : "Off"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
