import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import ThemeToggle from "@/components/ThemeToogle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", path: "#hero" },
    { name: "Experience", path: "#workexperience" },
    { name: "Projects", path: "#projects" },
    { name: "Journey", path: "#journey" },
  ];

  return (
    <header className="fixed w-full dark:bg-neutral-900 bg-neutral-100 border-b-2 border-neutral-400 z-50">
      {/* Progress bar */}
      <motion.div className="h-1 bg-brand-600 origin-left" style={{ scaleX }} />

      <nav className="container mx-auto p-4 lg:px-16 flex justify-between items-center">
        <div className="flex flex-row items-center space-x-0 md:space-x-10 lg:space-x-20">
          <h1 className="text-2xl font-bold text-brand-500 z-[60]">Deren T.</h1>
          <div className="hidden md:flex space-x-5 lg:space-x-12">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-base font-bold dark:text-neutral-100 text-neutral-900 dark:hover:text-brand-500 hover:text-brand-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Theme Toggle Button */}
        <div className="hidden md:block">
          <ThemeToggle iconSize={32} />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toogleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 dark:bg-neutral-100 bg-neutral-900"
          />
          <motion.span
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 dark:bg-neutral-100 bg-neutral-900"
          />
          <motion.span
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -6 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 dark:bg-neutral-100 bg-neutral-900"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden dark:bg-neutral-900 bg-neutral-100"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center space-y-4 pt-4 pb-2"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href={item.path}
                    className="text-base font-bold dark:text-neutral-100 text-neutral-900 dark:hover:text-brand-500 hover:text-brand-500 transition-colors block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}

              {/* Mobile Theme Toggle Button */}
              <ThemeToggle
                iconSize={32}
                animated={true}
                animationDelay={0.1 + menuItems.length * 0.05}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
