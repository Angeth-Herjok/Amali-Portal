"use client"
import React, { useState, useEffect } from 'react';
import { FaThLarge, FaHandshake, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';


const SideBar = () => {
  const [activeLink, setActiveLink] = useState('/');
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  return (
    <div className="flex flex-col w-1/6 h-screen bg-green-700 text-white p-4 font-merriweather">
      <div className="ml-12 mt-2 flex items-center">
      <div>
      <Image src="/Images/Amalilogo.png" alt="amali" width={300} height={200} />
     </div>
      </div>
      <div className="mb-[129px]">
        <div className="mr-6 mb-16 ml-[-11px]">
          <a
            href="/dashboard"
            className={`flex ${
              activeLink === '/dashboard'
                ? 'bg-white hover:bg-white text-black'
                : ''
            } w-72 p-8 rounded-lg text-2xl font-merriweather`}
          >
            <span>
              <FaThLarge className="text-3xl mr-8 font-merriweather" />
            </span>
            <span>Dashboard</span>
          </a>
        </div>
        <hr className="w-37 ml-20 mr-16 mb-10" />
        <div className="mr-6 mb-16 ml-[-11px]">
          <a
            href="/athlete/sponsorship"
            className={`flex ${
              activeLink === '/athlete/sponsorship'
                ? 'bg-white hover:bg-white text-black'
                : ''
            } w-72 p-8 rounded-lg text-2xl font-merriweather`}
          >
            <span>
              <FaHandshake className="text-3xl mr-8 font-merriweather" />
            </span>
            <span>Sponsorship</span>
          </a>
        </div>
        <hr className="w-37 ml-20 mr-12 mb-16" />
        <div className="mr-6 mb-16 ml-[-11px]">
          <a
            href="/contact"
            className={`flex ${
              activeLink === '/contact'
                ? 'bg-white hover:bg-white text-black'
                : ''
            } w-72 p-8 rounded-lg text-2xl font-merriweather`}
          >
            <span>
              <FaEnvelope className="text-3xl mr-8 font-merriweather" />
            </span>
            <span>Message</span>
          </a>
        </div>
        <hr className="w-37 ml-20 mr-12 mb-16" />
      </div>
    </div>
  );
};

export default SideBar;


