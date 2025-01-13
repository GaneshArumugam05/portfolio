// Contact Component (src/components/Contact.js)
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing the icons

function Contact() {
  return (
    <div className="bg-white py-16 px-12 sm:px-16 md:px-24" id="contact">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Contact</h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8 md:px-28">
        {/* Left Side - Contact Details with Icons */}
        <div className="flex-1 space-y-8 "> {/* Card Design for Left Side */}
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2 text-blue-600 text-3xl" /> {/* Phone Icon */}
            <div>
              <p className="text-lg font-semibold">Phone</p>
              <p className="text-lg text-blue-600">7092773840</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-blue-600 text-3xl" /> {/* Email Icon */}
            <div>
              <p className="text-lg font-semibold">Email</p>
              <p className="text-lg text-blue-600">ganesh050801@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-blue-600 text-3xl" /> {/* Location Icon */}
            <div>
              <p className="text-lg font-semibold">Location</p>
              <p className="text-lg text-blue-600">Chennai</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex-1 max-w-md mx-auto space-y-4 bg-gray-200 shadow-lg p-8 rounded-lg"> {/* Card Design for Right Side */}
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-3 border rounded-lg border-gray-800 bg-white placeholder-gray-500" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 border rounded-lg border-gray-800 bg-white placeholder-gray-500" 
            />
            <textarea 
              placeholder="Message" 
              className="w-full p-3 border rounded-lg h-32 border-gray-800 bg-white placeholder-gray-500" 
            ></textarea>
            <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
