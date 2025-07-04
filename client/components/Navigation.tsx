import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Home,
  FileText,
  Briefcase,
  BookOpen,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: FileText },
    { path: "/services", label: "Services", icon: Briefcase },
    { path: "/faq", label: "FAQ", icon: BookOpen },
    { path: "/blog", label: "Blog", icon: BookOpen },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              CSR Realty Appraisers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-gray-600",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              size="sm"
              asChild
              onClick={(e) => {
                // If we're already on the homepage, trigger the effect immediately
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  const element = document.getElementById("quote-request");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                    const container = element.querySelector(
                      ".quote-request-container",
                    );
                    if (container) {
                      container.classList.remove("breathing-effect");
                      setTimeout(() => {
                        container.classList.add("breathing-effect");
                        setTimeout(() => {
                          container.classList.remove("breathing-effect");
                        }, 15000);
                      }, 100);
                    }
                  }
                }
              }}
            >
              <Link to="/#quote-request">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-gray-600",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <Button
                size="sm"
                className="w-fit"
                asChild
                onClick={(e) => {
                  // If we're already on the homepage, trigger the effect immediately
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    const element = document.getElementById("quote-request");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                      const container = element.querySelector(
                        ".quote-request-container",
                      );
                      if (container) {
                        container.classList.remove("breathing-effect");
                        setTimeout(() => {
                          container.classList.add("breathing-effect");
                          setTimeout(() => {
                            container.classList.remove("breathing-effect");
                          }, 15000);
                        }, 100);
                      }
                    }
                  }
                  // Close mobile menu
                  setMobileMenuOpen(false);
                }}
              >
                <Link to="/#quote-request">Get Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
