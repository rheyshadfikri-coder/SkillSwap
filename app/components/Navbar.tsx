'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Skills', href: '#skills' },
    { label: 'How It Works', href: '#how' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="glass-dark border-b border-white/10">
        <div className="container-max container-fluid">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white text-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                S
              </motion.div>
              <span className="text-xl font-bold text-white hidden sm:inline">
                SkillSwap
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <motion.span
                  className="w-full h-0.5 bg-white"
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white"
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className="md:hidden overflow-hidden"
            animate={{ height: isOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-blue-400 font-medium"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                className="w-full btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
