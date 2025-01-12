// 10. Contact Component (src/components/Contact.js)
import React from 'react';

function Contact() {
  return (
    <div className="bg-white py-16 px-8" id="contact">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, odit eveniet? Quos aut voluptatem qui atque, sed nisi nihil vel voluptatibus commodi ipsum reprehenderit quia amet officia magnam odit, fugit, quaerat explicabo aspernatur. Dignissimos molestiae earum iusto aliquid at quidem, ab quibusdam eius ut sint, esse labore assumenda incidunt optio.
      </div>

      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Message" className="w-full p-3 border rounded-lg h-32"></textarea>
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;