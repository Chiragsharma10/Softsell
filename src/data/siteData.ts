import { Feature, ProcessStep, Testimonial, FAQ } from '../types';

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Upload License',
    description: 'Submit your software license details through our secure portal. We accept licenses from 200+ software vendors.',
    icon: 'Upload',
  },
  {
    id: 2,
    title: 'Get Valuation',
    description: 'Our proprietary algorithm determines the best market value for your license within 24 hours.',
    icon: 'LineChart',
  },
  {
    id: 3,
    title: 'Get Paid',
    description: 'Choose your payment method and receive funds within 2-3 business days after accepting the offer.',
    icon: 'Wallet',
  },
];

export const features: Feature[] = [
  {
    id: 1,
    title: 'Fast Payouts',
    description: 'Get paid in as little as 48 hours after accepting our offer.',
    icon: 'Zap',
  },
  {
    id: 2,
    title: 'Trusted by 1000+ Customers',
    description: 'Join thousands of satisfied customers who have successfully sold their licenses.',
    icon: 'Shield',
  },
  {
    id: 3,
    title: 'Transparent Pricing',
    description: 'No hidden fees or commissions. Get a fair market value for your licenses.',
    icon: 'IndianRupee',
  },
  {
    id: 4,
    title: 'Secure Transactions',
    description: 'Bank-level encryption and secure data handling protocols protect your information.',
    icon: 'Lock',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'CTO',
    company: 'TechStart Inc.',
    content: 'SoftSell made it incredibly easy to recover costs from our unused Adobe licenses after downsizing. The process was smooth, and we received payment within 48 hours. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'IT Director',
    company: 'Global Solutions Ltd.',
    content: 'After switching our team to a different productivity suite, we had 50+ unused Microsoft licenses. SoftSell offered us 70% of the original value, which was much better than letting them expire unused.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How do I sell my license?',
    answer: 'Simply fill out our form with your license details, and we\'ll provide a valuation within 24 hours. Once you accept our offer, you\'ll receive payment within 2-3 business days.',
  },
  {
    question: 'What types of licenses do you accept?',
    answer: 'We accept licenses from over 200 software vendors, including Microsoft, Adobe, Autodesk, Oracle, SAP, and many more. Both perpetual and subscription licenses can be eligible.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level encryption and follow strict data protection protocols. Your information is never shared with third parties without your explicit consent.',
  },
  {
    question: 'How much can I get for my licenses?',
    answer: 'Values vary based on license type, remaining term, and market demand. Typically, you can expect between 40-75% of the original purchase price for valid licenses.',
  },
];