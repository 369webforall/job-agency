import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6"></p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <div className="mb-2">
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Further information
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
              >
                Terms and Conditions
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
              >
                Imprint
              </Link>
            </div>
          </div>
        </div>
        <div className="p-5">
          <p className="text-gray-800 font-bold text-2xl pb-4">
            Registered office and registrations
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              LD Personalvermittlungs GmbH <br /> Broessweg 29 <br /> 45897
              Gelsenkirchen
            </p>
            <p className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Phone: +49 1516 3528444 <br />{' '}
              <span className="pl-14">+49 1525 5312303</span>
            </p>

            <p className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              VAT No. DE 346 107 669 <br />
              HRB 16147 <br />
              District Court Gelsenkirchen
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          &copy;{new Date().getFullYear()} All rights reserved |
          LD-Personalvermittlungs
        </h1>
      </div>
    </>
  );
}

export default Footer;
