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

  const createMailtoFallback = () => {
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
    return `mailto:${realEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Set timeout for the API request (10 seconds)
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Request timeout")), 10000);
    });

    try {
      const fetchPromise = fetch("/api/send-quote-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          propertyAddress: formData.propertyAddress,
          comments: formData.comments,
          subject: `[INQUIRY] Quote Request - ${formData.propertyAddress}`,
          timestamp: new Date().toISOString(),
        }),
      });

      // Race between fetch and timeout
      const response = (await Promise.race([
        fetchPromise,
        timeoutPromise,
      ])) as Response;

      if (response.ok) {
        const result = await response.json();

        // Success - clear form and show success message
        setFormData({
          name: "",
          email: "",
          phone: "",
          propertyAddress: "",
          comments: "",
        });

        alert(
          "Thank you! Your quote request has been sent successfully. We'll contact you within 24 hours.",
        );
        return;
      } else {
        // Server returned an error status
        const errorData = await response
          .json()
          .catch(() => ({ message: "Server error" }));
        throw new Error(
          errorData.message || `Server error: ${response.status}`,
        );
      }
    } catch (error) {
      console.error("Error sending quote request:", error);

      let errorMessage =
        "There was an issue sending your request via our system.";

      // Determine specific error type
      if (error instanceof TypeError && error.message.includes("fetch")) {
        errorMessage = "Unable to connect to our email service.";
      } else if (
        error instanceof Error &&
        error.message === "Request timeout"
      ) {
        errorMessage = "The request took too long to process.";
      } else if (
        error instanceof Error &&
        error.message.includes("Server error")
      ) {
        errorMessage = "Our email service is temporarily unavailable.";
      }

      // Always fallback to mailto with user confirmation
      const userConfirmed = confirm(
        `${errorMessage}\n\nWould you like to open your email client to send the request manually?\n\n(This will pre-fill all your information)`,
      );

      if (userConfirmed) {
        try {
          const mailtoLink = createMailtoFallback();
          window.location.href = mailtoLink;

          // Show instructions for manual sending
          setTimeout(() => {
            alert(
              "Your email client should now be open with your request pre-filled.\n\nIf it doesn't work, please email us directly at al@csrappraisals.com or call (201) 815-1000.",
            );
          }, 1000);
        } catch (mailtoError) {
          console.error("Mailto fallback failed:", mailtoError);
          alert(
            "Unable to open email client automatically.\n\nPlease contact us directly:\n• Email: al@csrappraisals.com\n• Phone: (201) 815-1000\n• Phone: (973) 591-9990",
          );
        }
      } else {
        alert(
          "You can contact us directly:\n• Email: al@csrappraisals.com\n• Phone: (201) 815-1000\n• Phone: (973) 591-9990",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
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
        <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
        {formContent}
      </div>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{formContent}</CardContent>
    </Card>
  );
};

export default QuoteRequest;
