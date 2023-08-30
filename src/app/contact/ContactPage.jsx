import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          Feel free to reach out to us if you have any questions or inquiries:
        </p>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Address:</h4>
          <p>LD Personalvermittlungs GmbH</p>
          <p>Broessweg 29</p>
          <p>45897 Gelsenkirchen</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Email:</h4>
          <p>kontat@ld-personalvermittlung.de</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Phone:</h4>
          <p>+49 1516 3528444</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
