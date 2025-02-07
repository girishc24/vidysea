import React from "react";
import { footer_logo, subscribe_bg } from "@/assets/images";
import { EnvelopeSimple, PhoneCall } from "@/assets/icons";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer 
      className="max-container bg-[#033864] text-white rounded-2xl p-10 md:p-16 max-sm:rounded-none"
      style={{ backgroundImage: `url(${subscribe_bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col items-start max-w-[18rem]">
          <a href="/">
            <img src={footer_logo} alt="logo" width={150} height={46} className="m-0" />
          </a>
          <p className="mt-4 text-sm leading-6 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit.  
          </p>
          <div className="flex items-center gap-4 mt-6">
            {socialMedia.map((icon) => (
              <a href="#" key={icon.alt} className="w-10 h-10 flex justify-center items-center">
                <img src={icon.src} alt={icon.alt} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Services & Quick Links */}
        <div className="flex flex-1 justify-end gap-16 md:gap-24 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title} className="text-right">
              <h4 className="text-lg font-semibold mb-4 text-left">{section.title}</h4>
              <ul className="text-left">
                {section.links.map((link) => (
                  <li key={link.name} className="text-sm text-gray-300 hover:text-white mb-2">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info - Aligned Right */}
        <div className="text-sm text-right">
          <h4 className="text-lg font-semibold mb-4 text-left">Contact Info</h4>
          <p className="text-gray-300 flex items-center gap-2">
            <img src={PhoneCall} alt="Phone" width={20} height={20} /> +7685-4555-22
          </p>
          <p className="text-gray-300 flex items-center gap-2 mt-2">
            <img src={EnvelopeSimple} alt="Email" width={20} height={20} /> contactus@vidysea.com
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 pt-6 border-t border-white flex justify-between text-sm text-white flex-wrap">
        <p>Copyright @Vidysea</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;