import { motion , useInView } from 'framer-motion';
import { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});
const ContactMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="py-12 bg-transparent"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <div id='contact' className="max-w-4xl mx-auto p-8 rounded-lg bg-white/30 backdrop-filter  backdrop-blur-lg shadow-md border-gray-100  sm:px-6 lg:px-8">
        <div className="text-center mb-7">
          <h2 className="text-base font-secondary text-indigo-600 font-semibold tracking-wide uppercase">
            Let&rsquo;s Get In Touch
          </h2>
          <p className="mt-2 font-heading text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            We&rsquo;d love to hear from you
          </p>
        </div>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white rounded-lg font-secondary shadow-lg p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </motion.section>
  );
};

export default ContactMe;