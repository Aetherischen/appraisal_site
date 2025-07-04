import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS_CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Format the email body
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

    // Create mailto link with real email (not the scrambled one)
    const realEmail = "al@csrappraisals.com";
    const mailtoLink = `mailto:${realEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

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
