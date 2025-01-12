// Contact Component (src/components/Contact.js)
import React from 'react';

function Contact() {
  return (
    <div className="bg-white py-16 px-4 sm:px-8 md:px-12" id="contact">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Contact</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aut inventore amet, omnis vel cumque illum quidem repellat at id blanditiis architecto facere a provident magnam fugit rem, quo aliquid adipisci voluptates est veniam enim voluptas dolor. Ipsa, assumenda similique?
      </div>
      <form className="max-w-md mx-auto space-y-4 mt-8">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg border-black" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg border-black" />
        <textarea placeholder="Message" className="w-full p-3 border rounded-lg h-32 border-black"></textarea>
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;