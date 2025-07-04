import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { BUSINESS_CONTACT } from "@/lib/constants";
import ProtectedContact from "./ProtectedContact";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                CSR Realty Appraisers
              </span>
            </div>
            <p className="text-gray-600">
              New Jersey's trusted real estate appraisal experts delivering
              responsible, efficient, and reliable appraisal services.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Residential Appraisals</li>
              <li>Commercial Appraisals</li>
              <li>Expert Witness</li>
              <li>Estate Planning</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>{BUSINESS_CONTACT.address}</li>
              <li>
                <ProtectedContact type="phone" />
              </li>
              <li>
                <ProtectedContact type="email" />
              </li>
              <li>{BUSINESS_CONTACT.hours}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p>© 2024 CSR Realty Appraisers. All rights reserved.</p>
            <div className="flex gap-4 text-sm">
              <Link
                to="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                to="/terms-of-service"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
