import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS_CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ProtectedContact from "@/components/ProtectedContact";
import { Phone, Mail } from "lucide-react";

interface QuoteRequestProps {
  className?: string;
  title?: string;
  variant?: "card" | "inline";
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyAddress: string;
  comments: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  propertyAddress?: string;
}

const QuoteRequest = ({
  className,
  title = "Quote Request",
  variant = "card",
}: QuoteRequestProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    comments: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Email validation - must contain @ and a domain
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation - must be numeric (allows spaces, dashes, parentheses)
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    const hasDigits = /\d{10,}/;
    return phoneRegex.test(phone) && hasDigits.test(phone.replace(/\D/g, ""));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.propertyAddress.trim()) {
      newErrors.propertyAddress = "Property address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("🚀 FORM SUBMISSION STARTED");
    console.log("Form data:", formData);

    if (!validateForm()) {
      console.log("❌ Form validation failed");
      return;
    }

    setIsSubmitting(true);

    // Add visual debugging
    const debugElement = document.createElement("div");
    debugElement.id = "email-debug";
    debugElement.style.cssText = `
      position: fixed; top: 10px; right: 10px;
      background: #000; color: #fff; padding: 10px;
      border-radius: 5px; z-index: 9999; max-width: 300px;
      font-family: monospace; font-size: 12px;
    `;
    debugElement.innerHTML = "Attempting SMTP send...";
    document.body.appendChild(debugElement);

    try {
      console.log("🔄 Attempting to send via SMTP...");
      debugElement.innerHTML = "Sending via SMTP...";

      const requestData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        propertyAddress: formData.propertyAddress,
        comments: formData.comments,
      };

      console.log(
        "📤 Sending request to /api/send-email with data:",
        requestData,
      );

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      console.log("📥 Response received:", {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        url: response.url,
      });

      if (response.ok) {
        console.log("✅ SMTP send successful!");
        debugElement.innerHTML = "SMTP Success! ✅";
        debugElement.style.background = "#00aa00";

        setTimeout(() => {
          if (document.body.contains(debugElement)) {
            document.body.removeChild(debugElement);
          }
        }, 3000);

        setIsSubmitted(true);
        setIsSubmitting(false);
        return;
      } else {
        console.error("❌ SMTP failed with status:", response.status);
        debugElement.innerHTML = `SMTP Failed: ${response.status}`;
        debugElement.style.background = "#aa0000";

        try {
          const errorData = await response.json();
          console.error("Error details:", errorData);
        } catch (parseError) {
          console.error("Could not parse error response:", parseError);
        }

        console.log("🔄 Falling back to mailto...");
      }
    } catch (error) {
      console.error("💥 SMTP request failed with exception:", error);
      debugElement.innerHTML = `SMTP Error: ${error.message}`;
      debugElement.style.background = "#aa0000";
      console.log("🔄 Falling back to mailto...");
    }

    // Update debug for mailto fallback
    debugElement.innerHTML = "Falling back to mailto...";
    debugElement.style.background = "#ff6600";
    setTimeout(() => {
      if (document.body.contains(debugElement)) {
        document.body.removeChild(debugElement);
      }
    }, 3000);

    // Fallback to mailto if SMTP fails
    console.log("📧 Initiating mailto fallback...");

    const emailBody = `
New Quote Request from ${formData.name}

Contact Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Property Details:
Address: ${formData.propertyAddress}

Additional Comments:
${formData.comments || "No additional comments provided."}

---
This request was submitted through the CSR Realty Appraisers website.
    `.trim();

    const subject = `[INQUIRY] Quote Request - ${formData.propertyAddress}`;
    const realEmail = "al@csrappraisals.com";
    const mailtoLink = `mailto:${realEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    console.log("📧 Opening email client with:", {
      to: realEmail,
      subject: subject,
      bodyLength: emailBody.length,
    });

    // Open email client
    window.location.href = mailtoLink;

    setIsSubmitting(false);
  };

  const handleInputChange = useCallback(
    (field: keyof FormData, value: string) => {
      // Filter phone input to only allow numeric characters and common formatting
      if (field === "phone") {
        // Only allow digits, spaces, dashes, parentheses
        const filteredValue = value.replace(/[^\d\s\-\(\)]/g, "");
        setFormData((prev) => ({ ...prev, [field]: filteredValue }));
      } else {
        setFormData((prev) => ({ ...prev, [field]: value }));
      }

      // Clear error when user starts typing
      setErrors((prev) => {
        if (prev[field as keyof FormErrors]) {
          const newErrors = { ...prev };
          delete newErrors[field as keyof FormErrors];
          return newErrors;
        }
        return prev;
      });
    },
    [],
  );

  // Thank you message component
  const thankYouContent = (
    <div className="text-center space-y-4 py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
      <p className="text-gray-600 leading-relaxed">
        Your quote request has been sent successfully. We'll contact you within
        24 hours.
      </p>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Need immediate assistance? Contact us directly:
        </p>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Phone className="w-4 h-4" />
            <ProtectedContact type="phone" className="hover:underline" />
          </div>
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Mail className="w-4 h-4" />
            <ProtectedContact type="email" className="hover:underline" />
          </div>
        </div>
      </div>
    </div>
  );

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className={cn(errors.name && "border-red-500")}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className={cn(errors.email && "border-red-500")}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className={cn(errors.phone && "border-red-500")}
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <Label htmlFor="propertyAddress">Property Address *</Label>
        <Input
          id="propertyAddress"
          type="text"
          value={formData.propertyAddress}
          onChange={(e) => handleInputChange("propertyAddress", e.target.value)}
          className={cn(errors.propertyAddress && "border-red-500")}
          placeholder="123 Main St, City, NJ 12345"
        />
        {errors.propertyAddress && (
          <p className="text-sm text-red-500 mt-1">{errors.propertyAddress}</p>
        )}
      </div>

      <div>
        <Label htmlFor="comments">Comments</Label>
        <Textarea
          id="comments"
          value={formData.comments}
          onChange={(e) => handleInputChange("comments", e.target.value)}
          placeholder="Additional details about your appraisal needs..."
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request Quote"}
      </Button>

      {/* Contact Information */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-3 text-center">
          Need immediate assistance? Contact us directly:
        </p>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Phone className="w-4 h-4" />
            <ProtectedContact type="phone" className="hover:underline" />
          </div>
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Mail className="w-4 h-4" />
            <ProtectedContact type="email" className="hover:underline" />
          </div>
        </div>
      </div>
    </form>
  );

  if (variant === "inline") {
    return (
      <div className={className}>
        {!isSubmitted && (
          <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
        )}
        {isSubmitted ? thankYouContent : formContent}
      </div>
    );
  }

  return (
    <Card className={className}>
      {!isSubmitted && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{isSubmitted ? thankYouContent : formContent}</CardContent>
    </Card>
  );
};

export default QuoteRequest;
