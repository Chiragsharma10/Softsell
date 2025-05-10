import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pointer-events-none" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-3 rounded-full bg-primary-100 dark:bg-primary-900/30 px-4 py-1.5"
            >
              <span className="text-sm font-medium text-primary-800 dark:text-primary-300">
                #1 License Reseller Platform
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Turn Unused Software Licenses Into <span className="text-primary-600 dark:text-primary-400">Cash</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
            >
              SoftSell helps businesses and individuals sell their unused or excess software licenses for the best possible price. Fast, secure, and hassle-free.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#contact" 
                className="btn btn-primary"
              >
                Sell My Licenses
                <ArrowRight size={18} className="ml-2" />
              </a>
              
              <a 
                href="#how-it-works" 
                className="btn bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              >
                How It Works
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 flex items-center text-gray-500 dark:text-gray-400"
            >
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                1000+ Customers
              </p>
              <span className="mx-3 text-gray-300 dark:text-gray-600">|</span>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                200+ Software Vendors
              </p>
              <span className="mx-3 text-gray-300 dark:text-gray-600">|</span>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                48hr Payouts
              </p>
            </motion.div>
          </motion.div>
          
          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                        <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="30" height="30" rx="6" className="fill-primary-600 dark:fill-primary-500" />
                          <path d="M8 9.5H22M8 15H22M8 20.5H16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white">SoftSell</h3>
                    </div>
                    <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium rounded-full">
                      Valuation Complete
                    </div>
                  </div>
                  
                  <div className="p-4 mb-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Adobe Creative Cloud (All Apps)</h4>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">License Type:</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">Enterprise</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-500 dark:text-gray-400">Seats:</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">10</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-500 dark:text-gray-400">Expiration:</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">Dec 2023 (8 months)</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end mb-3">
                    <div>
                      <span className="block text-sm text-gray-500 dark:text-gray-400">Estimated Value</span>
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">₹4,250</span>
                    </div>
                    <div>
                      <span className="block text-right text-sm text-gray-500 dark:text-gray-400">Original Price</span>
                      <span className="block text-right text-xl font-semibold text-gray-400 dark:text-gray-500 line-through">₹6,790</span>
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden h-2 bg-gray-200 dark:bg-gray-600">
                    <div className="h-full bg-green-500 dark:bg-green-400" style={{ width: '63%' }}></div>
                  </div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-right">
                    63% of original value
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button className="btn bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600">
                      Decline
                    </button>
                    <button className="btn btn-primary">
                      Accept Offer
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary-400 dark:bg-secondary-600 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-400 dark:bg-accent-600 rounded-full opacity-20 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;