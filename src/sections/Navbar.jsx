import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;