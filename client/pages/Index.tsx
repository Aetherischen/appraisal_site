import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteRequest from "@/components/QuoteRequest";
import ProtectedContact from "@/components/ProtectedContact";
import AppraisalCTA from "@/components/AppraisalCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BUSINESS_CONTACT } from "@/lib/constants";
import {
  Home,
  Building,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";

export default function Index() {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#quote-request") {
        setTimeout(() => {
          const element = document.getElementById("quote-request");
          if (element) {
            // Scroll to the quote request section
            element.scrollIntoView({ behavior: "smooth", block: "center" });

            // Add breathing effect class
            const container = element.querySelector(".quote-request-container");
            if (container) {
              // Remove any existing effect first
              container.classList.remove("breathing-effect");

              // Add the effect after a small delay to ensure it's visible
              setTimeout(() => {
                container.classList.add("breathing-effect");

                // Remove the effect after 15 seconds
                setTimeout(() => {
                  container.classList.remove("breathing-effect");
                }, 15000);
              }, 100);
            }
          }

          // Clean up the hash from URL after a delay
          setTimeout(() => {
            window.history.replaceState(null, "", window.location.pathname);
          }, 1000);
        }, 100);
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const services = [
    {
      icon: Home,
      title: "Residential Appraisals",
      description:
        "Single-family homes, condos, townhouses, duplexes, mobile homes, and vacant land throughout New Jersey.",
    },
    {
      icon: Building,
      title: "Commercial Properties",
      description:
        "Retail, hotels, motels, offices, and development lands with specialized valuation methods.",
    },
    {
      icon: Shield,
      title: "Legal & Advisory Services",
      description:
        "Expert witness services, litigation support, feasibility studies, and lease rate surveys.",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "USPAP Compliant",
      description:
        "Certified members of the American Society of Appraisers, fully insured and USPAP compliant.",
    },
    {
      icon: Clock,
      title: "Efficient Service",
      description:
        "Responsible and efficient delivery while maintaining the highest professional standards.",
    },
    {
      icon: Users,
      title: "Extensive Database",
      description:
        "Maintaining an extensive electronic database for accurate market analysis across New Jersey.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "CSR Realty Appraisers provided an accurate, professional appraisal for our refinancing. Albert was thorough and explained everything clearly.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Real Estate Attorney",
      content:
        "CSR is my go-to for all client appraisal needs. Their USPAP-compliant reports are always reliable and well-documented.",
      rating: 5,
    },
    {
      name: "Jennifer Davis",
      role: "Financial Institution",
      content:
        "Excellent service for our lending needs. CSR consistently delivers accurate valuations on time.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">
                New Jersey's Trusted Real Estate Appraisal Experts
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Responsible & Reliable{" "}
                <span className="text-primary">Real Estate Appraisals</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                CSR Realty Appraisers delivers professional, USPAP-compliant
                appraisals throughout New Jersey. Certified by the American
                Society of Appraisers, we serve homeowners, attorneys, financial
                institutions, and government agencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8"
                  asChild
                >
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative" id="quote-request">
              <div className="bg-primary/10 rounded-2xl p-8 backdrop-blur-sm quote-request-container">
                <QuoteRequest
                  variant="inline"
                  className="bg-white rounded-lg p-6 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Appraisal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate valuation services for all property
              types throughout New Jersey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CSR Realty Appraisers?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that certified expertise, professional
              standards, and responsible service make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by homeowners, agents, and attorneys across New Jersey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AppraisalCTA
        title="Ready to Get Started?"
        description="Contact us today for a free quote on your real estate appraisal needs."
      />

      <Footer />
    </div>
  );
}
