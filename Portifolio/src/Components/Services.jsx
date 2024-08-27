import { motion , useInView } from 'framer-motion';
import { useRef } from 'react';
const services = [
  {
    title: 'Educative Content for Students',
    description:'We created an educative video series for university students, covering a wide range of subjects and topics.',
    imageUrl: 'https://cdn.dribbble.com/userupload/11922720/file/original-ebc6ee95ee4a558ddd4e792f17e5904c.png?resize=1024x768&vertical=center',
  },
  {
    title: 'Commercial Content creation',
    description: 'We created a commercial video for a local business, showcasing their products and services.',
    imageUrl: 'https://cdn.dribbble.com/userupload/8771425/file/original-f8c9eb4b3cfa90e7584071bf8085c5e0.png?resize=1024x768',
  },
  {
    title: 'Professional Photography',
    description: 'We provided professional photography services for a University graduation event, capturing the best moments.',
    imageUrl: 'https://images.unsplash.com/photo-1536584754829-12214d404f32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="py-12 bg-transparent"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
 <div id='services' className="py-12 max-w-7xl mx-auto rounded-lg bg-white/30 backdrop-filter  backdrop-blur-lg shadow-md border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-secondary text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 font-heading text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img className="h-48 w-full object-cover" src={service.imageUrl} alt={service.title} />
              <div className="p-6">
                <h3 className="font-secondary text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className=" font-body mt-2 text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Services;