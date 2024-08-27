import { useState } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  return (
    <nav  className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 justify-center">
            <span className="text-white text-2xl inline font-bold">Lazim Visuals</span>
            <img className="h-8 inline mb-3 ml-2 w-8" src="./vite.svg" alt="Logo" />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <AnimatedHamburgerButton  isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item === "Home" ? "#"  :`#${item.toLowerCase()}`.replace(' ', '-')}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <motion.div
          className="sm:hidden"
          initial="hidden"
          animate="visible"
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const AnimatedHamburgerButton = ({ isMenuOpen, setIsMenuOpen }) => {
  // Add prop validation
  AnimatedHamburgerButton.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    setIsMenuOpen: PropTypes.func.isRequired,
  };

  // Rest of the component code...
  return (
    <MotionConfig
    transition={{
      duration: 0.5,
        ease: 'easeInOut',
      }}
      >
      <motion.button
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="relative h-6 w-6 rounded-full bg-transparent"
        >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-0.5 w-full bg-white"
          style={{ y: '-50%', left: '-50%', x: '50%', top: '25%' }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-0.5 w-full bg-white"
          style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
          />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-0.5 w-full bg-white"
          style={{ x: '-50%', y: '50%', bottom: '25%', left: '50%' }}
        />
      </motion.button>
    </MotionConfig>
  );
};


const VARIANTS = {
  top: {
    open: {
      rotate: 45,
      y: 4,
      backgroundColor: 'white',
      fontWeight: 'extrabold',
    },
    closed: {
      rotate: 0,
      y: 0,
    },
  },
  middle: {
    open: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  },
  bottom: {
    open: {
      rotate: -50,
      y: -6,
      backgroundColor: 'white',
      fontWeight: 'extrabold',
    },
    closed: {
      rotate: 0,
      y: 0,
    },
  },
};

export default Navbar;