import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, IndianRupee, Lock } from 'lucide-react';
import { features } from '../../data/siteData';

const WhyChooseUs: React.FC = () => {
  const iconComponents: Record<string, React.ReactNode> = {
    Zap: <Zap size={24} />,
    Shield: <Shield size={24} />,
    IndianRupee: <IndianRupee size={24} />,
    Lock: <Lock size={24} />
  };

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
    <section id="why-choose-us" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-secondary-800 dark:text-secondary-300 bg-secondary-100 dark:bg-secondary-900/30 rounded-full">
            Why SoftSell
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Benefits of Choosing Us
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            We offer the most secure, transparent, and valuable way to resell your unused software licenses.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              className="card group hover:border-primary-400 transition-all"
              variants={itemVariants}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-5 group-hover:bg-primary-600 dark:group-hover:bg-primary-500 group-hover:text-white transition-all">
                {iconComponents[feature.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;