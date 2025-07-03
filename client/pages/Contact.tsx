import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Contact our team of certified appraisers for
            professional real estate valuation services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Contact form coming soon. For now, please reach out using the
                information provided.
              </p>
              <Button>Request Quote</Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Office Location</h3>
                    <p className="text-gray-600">
                      New Jersey (Serving Statewide)
                    </p>
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
                    <p className="text-gray-600">(555) 123-4567</p>
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
                    <p className="text-gray-600">info@premierappraisalnj.com</p>
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
                    <p className="text-gray-600">Mon-Fri: 9AM-5PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
