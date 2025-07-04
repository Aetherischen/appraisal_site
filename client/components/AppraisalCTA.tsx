import { Link } from "react-router-dom";
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
            asChild
          >
            <Link to="/contact">
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 border-white text-primary bg-white hover:bg-gray-100 hover:text-primary"
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
