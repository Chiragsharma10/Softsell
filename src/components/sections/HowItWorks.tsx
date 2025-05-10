import React from 'react';
import { motion } from 'framer-motion';
import { Upload, LineChart, Wallet } from 'lucide-react';
import { processSteps } from '../../data/siteData';

const HowItWorks: React.FC = () => {
  const iconComponents: Record<string, React.ReactNode> = {
    Upload: <Upload size={28} className="text-white" />,
    LineChart: <LineChart size={28} className="text-white" />,
    Wallet: <Wallet size={28} className="text-white" />
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
    <section id="how-it-works" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary-800 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/30 rounded-full">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Turn your unused software licenses into cash with our simple 3-step process.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {processSteps.map((step) => (
            <motion.div 
              key={step.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-8">
                <div className="w-16 h-16 flex items-center justify-center bg-primary-600 dark:bg-primary-500 rounded-full mb-4 shadow-lg">
                  {iconComponents[step.icon]}
                </div>
                {step.id < processSteps.length && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10 transform -translate-y-1/2">
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-primary-600 dark:bg-primary-500"></div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;