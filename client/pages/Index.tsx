import { useEffect, useState } from "react";
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
      title: "New Jersey Residential Property Appraisals",
      description:
        "Certified residential appraisals for single-family homes, condominiums, townhouses, duplexes, mobile homes, and vacant land throughout Bergen County, Passaic County, Essex County, and all New Jersey municipalities.",
    },
    {
      icon: Building,
      title: "Commercial Real Estate Appraisals NJ",
      description:
        "Professional commercial property valuations for retail buildings, hotels, motels, office complexes, and development lands using MAI-certified methodologies and specialized valuation approaches.",
    },
    {
      icon: Shield,
      title: "Legal Real Estate Appraisal Services",
      description:
        "Expert witness testimony, litigation support, divorce appraisals, estate valuations, tax assessment appeals, feasibility studies, and lease rate surveys for New Jersey courts and legal proceedings.",
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
      name: "Brandon Higgins",
      content:
        "Al is an expert in the appraisal field and provided such a detailed look into my property. I greatly appreciate his research and quick turnaround time.",
      rating: 5,
    },
    {
      name: "Gina Sarwari",
      content:
        "Al Zaccone has consistently demonstrated a high level of professionalism, dedication, and skill throughout. Would recommend 100%.",
      rating: 5,
    },
    {
      name: "Musbah Zakkour",
      content:
        "Very glad I chose this company for my appraisal. Al was very helpful; he got the work done quickly and explained everything.",
      rating: 5,
    },
    {
      name: "Alex Marie",
      content:
        "Al is one of the best in the business. He really cares about his clients. I highly recommend him for your appraisal needs!",
      rating: 5,
    },
    {
      name: "Danielle",
      content:
        "Amazing Experience! CSR Realty Appraisers were very friendly, professional and knowledgeable. They made the process very quick and easy.",
      rating: 5,
    },
    {
      name: "Cihan Unsal",
      content:
        "When it comes to property appraisals, you need someone who is knowledgeable and professional. Mr. Zaccone embodies all these qualities and more.",
      rating: 5,
    },
    {
      name: "Ralph Rossi",
      content:
        "Since 1982 I have been in Real Estate and find CSR very professional and fair in pricing. Report came in with much information and value was spot on.",
      rating: 5,
    },
    {
      name: "Anish Ari",
      content:
        "Working with Al from CSR Realty Appraisers was a fantastic experience! His technical knowledge and expertise stood out immediately.",
      rating: 5,
    },
    {
      name: "TJ Caleca",
      content:
        "Al was a pleasure to work with. He has a broad knowledge base and provides a 'family'-like experience to all of his clients.",
      rating: 5,
    },
    {
      name: "Marina Natovich",
      content:
        "I was very satisfied with the professionalism of his service. Al was able to schedule an appointment quickly and was very knowledgeable.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 3) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">
                New Jersey's Trusted Real Estate Appraisal Experts Since 2008
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Professional New Jersey{" "}
                <span className="text-primary">Real Estate Appraisals</span> &
                Property Valuations
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                CSR Realty Appraisers delivers certified, USPAP-compliant
                property appraisals throughout New Jersey including Bergen
                County, Passaic County, Essex County, and Morris County.
                Licensed real estate appraisers certified by the American
                Society of Appraisers, serving homeowners, real estate agents,
                attorneys, lenders, financial institutions, and government
                agencies across NJ.
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
              Professional New Jersey Real Estate Appraisal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive property valuation and real estate appraisal
              services for residential, commercial, and land properties
              throughout New Jersey. Licensed appraisers serving Bergen,
              Passaic, Essex, Morris, Hudson, and all NJ counties.
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
              Why Choose CSR Realty Appraisers for New Jersey Property
              Valuations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that ASA-certified expertise,
              USPAP-compliant standards, and local New Jersey market knowledge
              make for your real estate appraisal needs.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials
              .slice(currentTestimonial, currentTestimonial + 3)
              .map((testimonial, index) => (
                <div
                  key={currentTestimonial + index}
                  className="bg-white rounded-lg p-6 shadow-md"
                >
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                </div>
              ))}
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index * 3)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentTestimonial / 3) === index
                      ? "bg-primary"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ),
            )}
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
