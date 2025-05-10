import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Testimonials from './components/sections/Testimonials';
import ContactForm from './components/sections/ContactForm';
import Footer from './components/layout/Footer';
import ChatWidget from './components/chat/ChatWidget';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;