import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/siteData';

const Testimonials: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="testimonials" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-accent-800 dark:text-accent-300 bg-accent-100 dark:bg-accent-900/30 rounded-full">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Don't just take our word for it. Hear from businesses that have successfully sold their licenses with us.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={itemVariants}
              className="card relative"
            >
              <div className="mb-5 text-accent-500 dark:text-accent-400">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="inline-block w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="mb-6 text-gray-600 dark:text-gray-400 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                {testimonial.avatar && (
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                )}
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="absolute top-6 right-6 text-accent-100 dark:text-accent-900/20">
                <svg width="40" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.952 0c-5.04 0-7.68 3.72-7.68 8.16 0 5.376 3.744 8.544 8.208 8.544 2.304 0 4.392-1.2 4.392-1.2-.528 2.112-2.688 4.032-5.496 4.848L14.256 32C25.488 27.12 31.968 17.64 31.968 8.4 31.968 3.432 29.184 0 23.4 0h-11.448z"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a 
            href="#contact" 
            className="btn btn-primary inline-flex items-center px-8"
          >
            Join Our Satisfied Customers
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;