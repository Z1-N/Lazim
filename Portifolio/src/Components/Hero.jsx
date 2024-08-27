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
      <div id='home' className="flex-1 mb-8 md:mb-0">
        <h1 className="md:text-5xl text-4xl font-heading font-bold mb-4">
          Hi there, I&rsquo;m <span className="text-indigo-600">Mohammed Abdelrauf</span>👋
        </h1>
        <p className="md:text-xl font-secondary text-lg">
        <Typical
            steps={['I am an enthusiastic Content editor with a strong passion 🎥 ', 2000, 'Here to Create Amazing Experiences', 2000 ]}
            loop={Infinity}
            wrapper="span"
          />
        </p>
      </div>
      <div className="flex-1">
        <img
          src="https://cdn.dribbble.com/userupload/8427886/file/original-71336542737b0362088db9b6ec548beb.png?resize=1024x768"
          alt="Hero"
          className="rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default Hero;