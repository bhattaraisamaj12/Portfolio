import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <header className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center px-4">
            <div className="w-full max-w-6xl px-5 sm:px-6 py-3 md:py-4 flex items-center justify-between bg-[#001325]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_40px_rgba(139,92,246,0.15)] ">

                {/* Logo */}
                <a href="#"><h1 className="text-lg font-semibold tracking-wider">
                    Samaj.
                </h1></a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="text-[11px] tracking-[0.15em] uppercase text-[var(--text-secondary)] hover:text-[var(--accent)] transition duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <a
                    href="#contact"
                    className="hidden md:block bg-[var(--accent)] text-white px-5 py-2 rounded-xl
                     text-[11px] tracking-[0.15em] uppercase font-semibold 
                     hover:opacity-90 transition colo"
                >
                    Get in Touch
                </a>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-[var(--text-primary)] text-xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/*Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm 
                bg-[#001325]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-4 shadow-[0_20px_45px_rgba(0,0,0,0.35)]
  ">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="block text-sm text-gray-300 hover:text-white transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}

export default Navbar;
