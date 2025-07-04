import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProtectedContact from "@/components/ProtectedContact";
import { BUSINESS_CONTACT } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

interface AppraisalCTAProps {
  title?: string;
  description?: string;
  showStats?: boolean;
}

const AppraisalCTA = ({
  title = "Ready for Your Professional Appraisal?",
  description = "Get started today with New Jersey's most trusted appraisal professionals. Free, confidential consultations available by appointment.",
  showStats = true,
}: AppraisalCTAProps) => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    // Navigate to home page with hash
    navigate("/#quote-request");

    // Add a small delay to ensure navigation completes before triggering effect
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
  };

  const handleCallClick = () => {
    // Create phone link with real number (not the scrambled one)
    const realPhone = "(201) 815-1000";
    const phoneNumber = realPhone.replace(/[^\d]/g, "");
    window.location.href = `tel:+1${phoneNumber}`;
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-600/90"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 bg-white text-primary hover:bg-gray-100 group"
            onClick={handleGetQuote}
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 border-white text-primary bg-white hover:bg-gray-100 hover:text-primary"
            onClick={handleCallClick}
          >
            Call <ProtectedContact type="phone" />
          </Button>
        </div>

        {showStats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-2">
                All Property Types
              </div>
              <div className="text-blue-100">Residential, Commercial, Land</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">
                {BUSINESS_CONTACT.hours.split(",")[0]}
              </div>
              <div className="text-blue-100">Available by Appointment</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">
                Statewide
              </div>
              <div className="text-blue-100">Serving All of New Jersey</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppraisalCTA;
