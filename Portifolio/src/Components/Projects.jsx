import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    title: 'Restaurant Branding',
    description: 'We offer professional branding services for an Al Nawras restaurant in Johor Bahru.',
    imageUrl: 'https://scontent.fdxb3-4.fna.fbcdn.net/v/t39.30808-6/338169916_1532895763900804_1710474050685943466_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IoBVO01W9xsQ7kNvgHqqMmZ&_nc_ht=scontent.fdxb3-4.fna&_nc_gid=AeC0xY8TqNJzef-GR8tp6E-&oh=00_AYApqyOcVoeemkbAXYksD8WKeEePmDNkN9C1FmwT1AFuQw&oe=66D3E22B',
    link: 'https://www.facebook.com/p/Al-Nawras-Yaman-Restaurant-%D9%85%D8%B7%D8%B9%D9%85-%D8%A7%D9%84%D9%86%D9%88%D8%B1%D8%B3-100089925248141/',
  },
  {
    title: 'Social Media educational content',
    description: 'Professional video production of educational content for social media platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww',
    link: 'https://www.instagram.com/lazimvisuals/',
  },
  {
    title: 'ISS Sudan UTM Event Coverage',
    description: 'We offer professional event coverage services for the International Student Society of Sudan.',
    imageUrl: 'https://ugc.production.linktr.ee/740fa0f7-4d5c-40a9-b7d2-bb8f42d65710_DAF-r0eZpbA.png?io=true&size=avatar-v3_0',
    link: 'https://www.instagram.com/sudaniss_utm/',
  },
];

const Projects = () => {
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
      <div id='projects' className="py-12 max-w-7xl mx-auto rounded-lg bg-white/30 backdrop-filter backdrop-blur-lg shadow-md border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-secondary font-semibold tracking-wide uppercase">Projects</h2>
            <p className="mt-2 font-heading text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Latest Work
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    className="mt-4 inline-block px-5 py-2 font-secondary  text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:-translate-y-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;