import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react'; 

export const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xkgzezlv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Get In Touch</h2>
        <div className="w-20 h-1 bg-gray-300 dark:bg-gray-700 mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I am actively seeking internship and full-time opportunities in software development. 
              I'm passionate about building innovative solutions and I'm eager to bring my skills in 
              full-stack development, AI, and IoT to a forward-thinking team. 
              If you believe I'd be a good fit, I'd love to connect.
            </p>
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="flex items-start">
                <div className="text-gray-500 dark:text-gray-400 mr-4"><Mail size={24} /></div>
                <div>
                  <h4 className="text-lg font-medium mb-1 dark:text-white">Email</h4>
                  <a href="mailto:shivkush512@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors">
                    shivkush512@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-gray-500 dark:text-gray-400 mr-4"><Phone size={24} /></div>
                <div>
                  <h4 className="text-lg font-medium mb-1 dark:text-white">Phone</h4>
                  <a href="tel:+919555971850" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors">
                    +91 9555971850
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-gray-500 dark:text-gray-400 mr-4"><MapPin size={24} /></div>
                <div>
                  <h4 className="text-lg font-medium mb-1 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Prayagraj, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 dark:text-white">Send me a message</h3>
            {status === 'success' ? (
              <div className="text-center p-8 bg-green-50 dark:bg-green-900/50 rounded-md">
                <CheckCircle className="mx-auto text-green-500" size={48} />
                <p className="mt-4 font-semibold text-green-700 dark:text-green-300">Message sent successfully!</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 dark:text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 dark:text-white"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 dark:text-white"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={18} className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
                {status === 'error' && <p className="text-red-500 mt-4">Something went wrong. Please try again later.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
