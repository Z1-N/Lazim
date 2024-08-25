import { useRef } from 'react';
import { motion ,useInView } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'We build responsive and modern web applications.',
    icon: '🌐',
  },
  {
    title: 'Mobile Development',
    description: 'We create mobile applications for both Android and iOS platforms.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'We design user-friendly and aesthetic interfaces.',
    icon: '🎨',
  },
];

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="py-12 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >

  

    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.3, ease: 'easeOut' }}
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Services;