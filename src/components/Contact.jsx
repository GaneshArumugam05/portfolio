import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the transition once the component is mounted
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_v1kqenh', 
        'template_t5df5v4', 
        { name: formData.name, email: formData.email, message: formData.message },
        'pBJ9fSO2R_VtqN9Gt'
      )
      .then(() => {
        setStatus({ message: 'Message sent successfully!', type: 'success' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus({ message: '', type: '' }), 5000);
      })
      .catch(() => {
        setStatus({ message: 'Failed to send message. Please try again.', type: 'error' });
        setTimeout(() => setStatus({ message: '', type: '' }), 5000);
      });
  };

  return (
    <div className="bg-white py-16 px-12 sm:px-16 md:px-24" id="contact">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Contact</h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8 md:px-28">
        
        {/* Contact Info Section */}
        <div className={`contact-section ${isVisible ? 'visible' : ''} flex-1 space-y-8`}>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2 text-blue-600 text-3xl" />
            <div>
              <p className="text-lg font-semibold">Phone</p>
              <a href="tel:+917092773840" className="text-lg text-blue-600">7092773840</a>
            </div>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-blue-600 text-3xl" />
            <div>
              <p className="text-lg font-semibold">Email</p>
              <a href="mailto:ganesh050801@gmail.com" className="text-lg text-blue-600">ganesh050801@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-blue-600 text-3xl" />
            <div>
              <p className="text-lg font-semibold">Location</p>
              <p className="text-lg text-blue-600">Chennai</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className={`contact-section ${isVisible ? 'visible' : ''} flex-1 max-w-md mx-auto space-y-4 bg-gray-200 shadow-lg p-8 rounded-lg`}>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg border-gray-800 bg-white placeholder-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg border-gray-800 bg-white placeholder-gray-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg h-32 border-gray-800 bg-white placeholder-gray-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
          {status.message && (
            <div className={`fade-in ${status.message ? 'visible' : ''} mt-4 p-4 rounded-lg flex items-center justify-center ${
              status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {status.type === 'success' ? <FaCheckCircle className="mr-2" /> : <FaTimesCircle className="mr-2" />}
              <span>{status.message}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
