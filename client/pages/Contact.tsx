import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import QuoteRequest from "@/components/QuoteRequest";
import ProtectedContact from "@/components/ProtectedContact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BUSINESS_CONTACT } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHeader
        badge="Get in Touch"
        title="Contact"
        subtitle="CSR Realty Appraisers"
        description="Ready to get started? Contact Albert Zaccone and our team of certified appraisers for professional real estate valuation services. Free, confidential consultations available by appointment."
        variant="gradient"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <QuoteRequest title="Get in Touch" />

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Office Location</h3>
                    <p className="text-gray-600">{BUSINESS_CONTACT.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">
                      <ProtectedContact type="phone" />
                    </p>
                    <p className="text-gray-600">
                      <ProtectedContact type="phone-secondary" />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">
                      <ProtectedContact type="email" />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">{BUSINESS_CONTACT.hours}</p>
                    <p className="text-gray-500 text-sm mt-1">By appointment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-xl text-gray-600">
              Serving all of New Jersey from our Wallington office
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12045.123456789!2d-74.1126!3d40.8537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f9c1e1234567%3A0x1234567890abcdef!2sWallington%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CSR Realty Appraisers Location - Wallington, NJ"
                ></iframe>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Wallington, New Jersey 07057
                    </h3>
                    <p className="text-gray-600">
                      Centrally located to serve all of New Jersey with
                      professional real estate appraisal services.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/?q=Wallington,NJ",
                        "_blank",
                      )
                    }
                    className="ml-4"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
