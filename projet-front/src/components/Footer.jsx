import { Link } from "react-router-dom";
import { Store, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 border-t border-blue-200">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Store className="h-10 w-10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <div className="absolute -inset-2 rounded-full bg-blue-400/20 blur-xl group-hover:bg-blue-400/30 transition-all" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  TuniCart
                </span>
                <p className="text-xs text-blue-300/80 font-medium tracking-widest uppercase">Connect</p>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your premier destination for luxury products and exclusive deals from trusted vendors across Tunisia.
            </p>
            {/* Social Media */}
            <div className="flex gap-3 pt-2">
              <a 
                href="#" 
                className="p-2 bg-blue-700/50 hover:bg-blue-600 border border-blue-600/50 hover:border-blue-500 rounded-lg transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-blue-300" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-blue-700/50 hover:bg-blue-600 border border-blue-600/50 hover:border-blue-500 rounded-lg transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-blue-300" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-blue-700/50 hover:bg-blue-600 border border-blue-600/50 hover:border-blue-500 rounded-lg transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-blue-300" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-blue-700/50 hover:bg-blue-600 border border-blue-600/50 hover:border-blue-500 rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-blue-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-blue-300 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-300 hover:text-blue-300 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-slate-300 hover:text-blue-300 transition-colors text-sm">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-slate-300 hover:text-blue-300 transition-colors text-sm">
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-blue-300 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-blue-300 font-bold text-lg mb-4">Account</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/login" className="text-slate-300 hover:text-blue-300 transition-colors text-sm">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-slate-300 hover:text-blue-300 transition-colors text-sm">
                  Register
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-300 transition-colors text-sm">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-300 transition-colors text-sm">
                  Order History
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-blue-300 font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">support@tunicart.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">
                  123 Luxury Avenue<br />Tunis, Tunisia 1000
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} TuniCart Connect. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-300 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;