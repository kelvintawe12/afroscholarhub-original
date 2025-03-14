import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-[#2B463C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-[#FFD700]">Afro</span>ScholarHub
            </h2>
            <p className="mb-4 text-gray-300">
              Bridging the gap in African education through equitable access to
              scholarships and support.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<FacebookIcon size={20} />} href="https://facebook.com" />
              <SocialIcon icon={<TwitterIcon size={20} />} href="https://twitter.com" />
              <SocialIcon icon={<InstagramIcon size={20} />} href="https://instagram.com" />
              <SocialIcon icon={<LinkedinIcon size={20} />} href="https://linkedin.com" />
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/impact">Our Impact</FooterLink>
              <FooterLink to="/partnerships">Partnerships</FooterLink>
              <FooterLink to="/countries">Country Hubs</FooterLink>
              <FooterLink to="/blog">Success Stories</FooterLink>
              <FooterLink to="/proposals">Submit Proposals</FooterLink>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon size={20} className="mr-2 flex-shrink-0 mt-1 text-[#FFD700]" />
                <span>HQ: Lagos, Nigeria | New York, USA | Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={20} className="mr-2 flex-shrink-0 text-[#FFD700]" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={20} className="mr-2 flex-shrink-0 text-[#FFD700]" />
                <span>contact@afroscholarhub.org</span>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">
              Stay Updated
            </h3>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for updates on our impact and
              opportunities.
            </p>
            <form className="flex flex-col space-y-3">
              <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-md focus:outline-none text-gray-800" />
              <button type="submit" className="px-4 py-2 bg-[#FFD700] text-[#2B463C] font-semibold rounded-md hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AfroScholarHub. All rights
            reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-[#FFD700]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#FFD700]">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-[#FFD700]">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
const SocialIcon = ({
  icon,
  href
}) => <a href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-[#FFD700] hover:text-[#2B463C] transition-all">
    {icon}
  </a>;
const FooterLink = ({
  to,
  children
}) => <li>
    <Link to={to} className="hover:text-[#FFD700] transition-colors">
      {children}
    </Link>
  </li>;
export default Footer;