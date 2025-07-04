import { Link } from "react-router-dom";
import QuoteRequest from "@/components/QuoteRequest";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative py-20 bg-gradient-to-br from-blue-50 to-white"
      style={{
        backgroundImage: "url('/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgb(248, 250, 252) 0%, rgba(248, 250, 252, 0.8) 40%, rgba(248, 250, 252, 0.4) 65%, rgba(248, 250, 252, 0) 75%)",
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              CSR Realty Appraisers delivers certified, USPAP-compliant property
              appraisals throughout New Jersey including Bergen County, Passaic
              County, Essex County, and Morris County. Licensed real estate
              appraisers certified by the American Society of Appraisers,
              serving homeowners, real estate agents, attorneys, lenders,
              financial institutions, and government agencies across NJ.
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
  );
};

export default Hero;
