import { motion } from 'framer-motion';
import Typical from 'react-typical';

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex-1 mb-8 md:mb-0">
        <h1 className="md:text-5xl text-3xl font-bold mb-4">
          <Typical
            steps={['Welcome to Our Website', 2000, 'We Create Amazing Experiences', 2000]}
            loop={Infinity}
            wrapper="span"
          />
        </h1>
        <p className="md:text-xl text-lg">
          We provide the best solutions to help you grow your business.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="https://via.placeholder.com/400"
          alt="Hero"
          className="rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default Hero;