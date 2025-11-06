import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="flex items-center">
      {/* Horizontal on MD/LG */}
      <ul className="hidden md:flex space-x-8">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-neutral-dark hover:text-accent font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger on SM */}
      <button
        className="md:hidden text-primary"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Dropdown on SM */}
      {isOpen && (
        <ul className="absolute top-full right-0 mt-2 bg-neutral-light shadow-lg rounded-lg py-2 w-48 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-4 py-2 text-neutral-dark hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;