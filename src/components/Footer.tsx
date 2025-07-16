
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const supportLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms and Conditions', href: '#' },
    { label: 'Knowledge Base', href: '#' },
    { label: 'Contact Support', href: '#' },
    { label: 'Career', href: '#' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-peach hover:bg-gold text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <ArrowUp className="h-4 w-4" />
      </button>

      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-peach fill-current" />
              <div>
                <h3 className="font-dancing text-2xl font-bold">
                  Starindia Production
                </h3>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              With over 15+ years of experience, we specialize in capturing beautiful wedding moments that you'll treasure forever. From intimate ceremonies to grand celebrations, we're here to make your special day unforgettable.
            </p>
            
            <div className="space-y-2 text-gray-300">
              <p>📍 14th Street, Caltech, New Jersey, Alabama</p>
              <p>🕒 Mon–Fri, 8 AM–5 PM</p>
              <p>📧 email@example.com</p>
              <p>📞 +1 (012) 345-6780</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-peach transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-peach transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-playfair text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Subscribe to our newsletter for wedding tips and latest offers</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-peach"
              />
              <button className="px-6 py-2 bg-peach hover:bg-gold text-white rounded-lg transition-colors duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <p>© 2023 Starindia Production. All rights reserved.</p>
          <p>Made with ❤️ for beautiful love stories</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
