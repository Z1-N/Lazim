import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types'; // Import PropTypes

const generateRandomImageUrl = (gender) => {
  const genderParam = gender.toLowerCase() === 'male' ? 'male' : 'female'; // Ensure gender is either 'male' or 'female'
  const uniqueId = Math.floor(Math.random() * 10000); // Generate a unique identifier
  return `https://xsgames.co/randomusers/avatar.php?g=${genderParam}&id=${uniqueId}`;
};
      
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const initialTestimonials = [
      {
        name: 'John Doe',
        gender: 'Male',
        feedback: 'This company provided excellent  and I am very satisfied with the results!',
        imageUrl: generateRandomImageUrl('Male'),
        rating: 4.5,
      },
      {
        name: 'Jane Smith',
        gender: 'Female',
        feedback: 'Highly professional and great quality work. Highly recommend!',
        imageUrl: generateRandomImageUrl('Female'),
        rating: 4,
      },
      {
        name: 'Michael Johnson',
        gender: 'Male',
        feedback: 'Amazing experience! The team was very responsive and delivered on time.',
        imageUrl: generateRandomImageUrl('Male'),
        rating: 5,
      },
      {
        name: 'Emily Davis',
        gender: 'Female',
        feedback: 'The quality of work was outstanding and the team was very professional.',
        imageUrl: generateRandomImageUrl('Female'),
        rating: 4.5,
      },
      {
        name: 'David Brown',
        gender: 'Male',
        feedback: 'I am extremely happy with the results and would recommend to anyone.',
        imageUrl: generateRandomImageUrl('Male'),
        rating: 5,
      },
    ];
    setTestimonials(initialTestimonials);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });



  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array.from({ length: fullStars }, (_, index) => (
          <span key={`full-${index}`} className="text-yellow-500">
            ★
          </span>
        ))}
        {halfStar && (
          <span key="half" className="text-yellow-500">
            ☆
          </span>
        )}
        {Array.from({ length: emptyStars }, (_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">
            ★
          </span>
        ))}
      </>
    );
  };


  // Custom Next Arrow Component
  const CustomNextArrow = ({  style, onClick }) => {
    return (
      <button
        className={`absolute top-1/2 transform -translate-y-1/2 -right-7 bg-black text-white rounded-full p-0.5 shadow-lg hover:bg-gray-800 focus:outline-none`}
        style={{ ...style, zIndex: 1 }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );
  };
  
  CustomNextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
  };
  
  // Custom Prev Arrow Component
  const CustomPrevArrow = ({ style, onClick }) => {
    return (
      <button
        className={`absolute top-1/2 transform -translate-y-1/2 -left-7 bg-black text-white rounded-full p-0.5 shadow-lg hover:bg-gray-800 focus:outline-none`}
        style={{ ...style, zIndex: 1 }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    );
  };
  
  CustomPrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <motion.div
      ref={ref}
      className="py-12 bg-transparent"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="py-12 max-w-7xl mx-auto rounded-lg bg-white/30 backdrop-filter backdrop-blur-lg shadow-md border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-secondary font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 font-heading text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </p>
          </div>
          <div className="mt-10">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <motion.div
                    className="bg-white rounded-lg shadow-lg p-6 mx-4"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <img src={testimonial.imageUrl} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                      <div>
                        <h3 className="text-lg font-secondary font-semibold text-gray-900">{testimonial.name}</h3>
                        <div className="flex">{renderStars(testimonial.rating)}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 font-body">{testimonial.feedback}</p>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;