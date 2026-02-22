import React from "react";
import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-zinc-900 to-black text-gray-300 px-4 sm:px-8 py-16">
      <div
        className=" max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center sm:text-left ">
        {/* Brand */}
        <div>
          <h2 className="text-yellow-400 text-4xl font-extrabold mb-3"> DRAMATIC</h2>
          <p className="text-gray-400 text-base">Enjoy your Movie time</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-gray-400 text-sm mb-5 tracking-widest font-extrabold">NAVIGATION</h4>
          <ul className="space-y-3 text-white text-base">
            <li className="hover:text-yellow-400 cursor-pointer">HOME</li>
            <li className="hover:text-yellow-400 cursor-pointer">TV SHOW</li>
            <li className="hover:text-yellow-400 cursor-pointer">MOVIES</li>
            <li className="hover:text-yellow-400 cursor-pointer">NEW</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-gray-400 text-sm mb-5 tracking-widest font-extrabold">LEGAL</h4>
          <ul className="space-y-3 text-white text-base">
            <li className="hover:text-yellow-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-yellow-400 cursor-pointer">Terms of Service</li>
            <li className="hover:text-yellow-400 cursor-pointer">Cookie Preferences</li>
            <li className="hover:text-yellow-400 cursor-pointer">Corporate Information</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gray-400 text-sm mb-5 tracking-widest font-extrabold"> TALK TO US</h4>
          <p className="text-white text-base mb-3">support@ercom.com</p>
          <p className="text-white text-base">+66 2399 1145</p>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-gray-400 text-sm mb-5 tracking-widest font-extrabold">FOLLOW US</h4>
          <div className="flex justify-center sm:justify-start gap-5 text-xl">
            <a href="" target="blank"><FaTwitter className=" text-gray-400 hover:text-[#1DA1F2] text-3xl transition-colors duration-300 cursor-pointer" /></a>
            <a href="" target="blank"><FaYoutube className=" text-gray-400 hover:text-[#FF0000] text-3xl transition-colors duration-300 cursor-pointer" /></a>
            <a href="https://www.facebook.com/robinkhan.robinkhan.946179"  target="blank"><FaFacebookF className=" text-gray-400 hover:text-[#1877F2] text-3xl transition-colors duration-300 cursor-pointer"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;