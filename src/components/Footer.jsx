// import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaGlobe,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-3 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">E_Train.</h1>
        <p className="py-4 ">An Online training institute.</p>
        <div className="flex justify-between md:w-[50%]  my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaGithub size={30} />
          <FaGlobe size={30} />
          <FaWhatsapp size={30} />
          <FaPhoneAlt size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-2 ">
        <div>
          <h6 className="font-medium text-gray-400">Roadmaps</h6>
          <ul>
            <li className="py-2 text-sm">Beginner</li>
            <li className="py-2 text-sm">Front-end</li>
            <li className="py-2 text-sm">Backend</li>
            <li className="py-2 text-sm">Full-Stack</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Cheetsheets</li>
            <li className="py-2 text-sm">Blogs</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">Home</li>
            <li className="py-2 text-sm">Features</li>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">About</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
