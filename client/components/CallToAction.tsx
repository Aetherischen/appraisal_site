import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProtectedContact from "@/components/ProtectedContact";

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  showPhoneButton?: boolean;
  backgroundColor?: "primary" | "secondary" | "gray";
  className?: string;
}

export default function CallToAction({
  title = "Ready to Get Started?",
  subtitle = "Contact us today for a free quote on your real estate appraisal needs.",
  primaryButtonText = "Get Free Quote",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Call",
  showPhoneButton = true,
  backgroundColor = "primary",
  className = "",
}: CallToActionProps) {
  const bgClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    gray: "bg-gray-900",
  };

  const textClasses = {
    primary: "text-white",
    secondary: "text-gray-900",
    gray: "text-white",
  };

  const subtitleClasses = {
    primary: "text-blue-100",
    secondary: "text-gray-600",
    gray: "text-gray-300",
  };

  return (
    <section className={`py-20 ${bgClasses[backgroundColor]} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold ${textClasses[backgroundColor]} mb-6`}
        >
          {title}
        </h2>
        <p className={`text-xl ${subtitleClasses[backgroundColor]} mb-8`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8"
            asChild
          >
            <Link to={primaryButtonLink}>
              {primaryButtonText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          {showPhoneButton && (
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-white text-primary hover:bg-gray-100"
              onClick={handleCallClick}
            >
              {secondaryButtonText} <ProtectedContact type="phone" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
