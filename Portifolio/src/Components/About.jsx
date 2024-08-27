import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id='about' ref={ref} className="rounded-lg mx-auto max-w-7xl bg-white/30 backdrop-filter  backdrop-blur-lg shadow-md border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-base text-indigo-600 font-secondary font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold font-heading tracking-tight text-gray-900 sm:text-4xl">
              Best services to extend your <span className="text-indigo-600">REACH</span>
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-secondary  font-medium md:text-xl text-base first-letter:text-5xl first-letter:text-indigo-600">
            Our team of experts is passionately dedicated to delivering innovative and tailored solutions that meet your unique needs. Specializing in video editing and content creation, we harness the latest technologies to bring your vision to life. We believe in the power of collaboration, working closely with you to craft compelling narratives and visually stunning content that resonates with your audience. Our mission is to empower businesses to achieve their goals through cutting-edge technology, creativity, and exceptional service. With a focus on building long-lasting relationships, we are committed to helping you stand out in a crowded digital landscape, turning your ideas into impactful stories that drive results.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://cdn.dribbble.com/userupload/4047057/file/original-1c32bd6bb1ce8a943dec9f3acf8955b6.png?resize=1024x768"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;