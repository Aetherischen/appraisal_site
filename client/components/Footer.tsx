import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { BUSINESS_CONTACT } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Premier Appraisal</span>
            </div>
            <p className="text-gray-400">
              Professional real estate appraisal services throughout New Jersey.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Appraisals</li>
              <li>Commercial Appraisals</li>
              <li>Expert Witness</li>
              <li>Estate Planning</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{BUSINESS_CONTACT.address}</li>
              <li>{BUSINESS_CONTACT.phone}</li>
              <li>{BUSINESS_CONTACT.email}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Premier Appraisal Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
