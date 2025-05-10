import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormState]?: string;
};

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formState.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-primary-50 dark:bg-gray-800">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary-800 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/30 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Sell Your Licenses?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Fill out the form below and our team will get back to you with a valuation within 24 hours.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto mt-16">
          {submitted ? (
            <motion.div 
              className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-200 dark:bg-green-800 text-green-600 dark:text-green-300 mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thank you for reaching out. Our team will get back to you with a valuation within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-soft dark:shadow-none p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name 
                        ? 'border-red-300 dark:border-red-700 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-500 dark:focus:ring-primary-500'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email
                        ? 'border-red-300 dark:border-red-700 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-500 dark:focus:ring-primary-500'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2`}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Company*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.company
                        ? 'border-red-300 dark:border-red-700 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-500 dark:focus:ring-primary-500'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2`}
                    placeholder="Your company name"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.company}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="licenseType" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    License Type*
                  </label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formState.licenseType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.licenseType
                        ? 'border-red-300 dark:border-red-700 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-500 dark:focus:ring-primary-500'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2`}
                  >
                    <option value="">Select license type</option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="Adobe">Adobe</option>
                    <option value="Autodesk">Autodesk</option>
                    <option value="Oracle">Oracle</option>
                    <option value="SAP">SAP</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.licenseType && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.licenseType}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message
                      ? 'border-red-300 dark:border-red-700 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-500 dark:focus:ring-primary-500'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2`}
                  placeholder="Describe the software licenses you want to sell (type, quantity, expiration, etc.)"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className={`btn btn-primary min-w-[150px] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : 'Get in Touch'}
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;