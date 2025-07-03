import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHeader
        title="Privacy Policy"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Request an appraisal quote or service</li>
              <li>Contact us through our website or phone</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Interact with our website</li>
            </ul>
            <p className="text-gray-600">
              This may include your name, email address, phone number, property
              address, and other information relevant to providing appraisal
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Provide, maintain, and improve our appraisal services</li>
              <li>Process and complete your service requests</li>
              <li>Communicate with you about our services</li>
              <li>Send you technical notices and support messages</li>
              <li>Comply with legal obligations and professional standards</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information Sharing
            </h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties except in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>
                With trusted service providers who assist in our operations
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-gray-600 mb-4">
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience. You can control cookie settings
              through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of certain communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-600 mb-4">
              Our services are not directed to children under 13. We do not
              knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              with an updated effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">
                <strong>Premier Appraisal Services</strong>
                <br />
                Email: info@premierappraisalnj.com
                <br />
                Phone: (555) 123-4567
                <br />
                Address: New Jersey (Serving Statewide)
              </p>
            </div>
          </section>

          <div className="text-sm text-gray-500 border-t pt-4">
            <p>Effective Date: January 1, 2024</p>
            <p>Last Updated: January 1, 2024</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
