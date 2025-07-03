import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHeader
        title="Terms of Service"
        description="These terms govern your use of our website and appraisal services. Please read them carefully."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-4">
              By accessing and using the Premier Appraisal Services website and
              services, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to these terms,
              please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Services Description
            </h2>
            <p className="text-gray-600 mb-4">
              Premier Appraisal Services provides professional real estate
              appraisal services throughout New Jersey, including but not
              limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Residential property appraisals</li>
              <li>Commercial property appraisals</li>
              <li>Expert witness services</li>
              <li>Estate and probate valuations</li>
              <li>Other specialized appraisal services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Standards
            </h2>
            <p className="text-gray-600 mb-4">
              All appraisals are conducted in accordance with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>
                Uniform Standards of Professional Appraisal Practice (USPAP)
              </li>
              <li>State of New Jersey licensing requirements</li>
              <li>Professional appraisal organization standards</li>
              <li>Applicable federal and state regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Client Responsibilities
            </h2>
            <p className="text-gray-600 mb-4">As a client, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Allow reasonable access to the property</li>
              <li>Pay fees as agreed upon</li>
              <li>Use appraisal reports only for their intended purpose</li>
              <li>Not distribute reports without proper authorization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Payment Terms
            </h2>
            <p className="text-gray-600 mb-4">
              Payment terms will be specified in each service agreement.
              Generally:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Payment is due upon completion of services</li>
              <li>Rush orders may require additional fees</li>
              <li>
                Cancellation policies apply as specified in individual
                agreements
              </li>
              <li>Late payments may incur additional charges</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-4">
              Premier Appraisal Services provides professional opinions based on
              available information and industry standards. Our liability is
              limited to the fees paid for services. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Market fluctuations after the appraisal date</li>
              <li>Hidden defects not discoverable during inspection</li>
              <li>Decisions made based on appraisal reports</li>
              <li>Consequential or indirect damages</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Confidentiality
            </h2>
            <p className="text-gray-600 mb-4">
              We maintain strict confidentiality regarding client information
              and property details. Appraisal reports and related information
              will not be shared with unauthorized parties without written
              consent or legal requirement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-600 mb-4">
              All content on this website, including text, graphics, logos, and
              software, is the property of Premier Appraisal Services and
              protected by intellectual property laws. Unauthorized use is
              prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Website Use
            </h2>
            <p className="text-gray-600 mb-4">
              You agree to use our website only for lawful purposes and in
              accordance with these terms. Prohibited activities include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Attempting to gain unauthorized access</li>
              <li>Interfering with website functionality</li>
              <li>Transmitting malicious code or content</li>
              <li>Violating any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Dispute Resolution
            </h2>
            <p className="text-gray-600 mb-4">
              Any disputes arising from these terms or our services will be
              resolved through:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Initial good faith negotiation</li>
              <li>Mediation if necessary</li>
              <li>Binding arbitration in New Jersey</li>
              <li>New Jersey state law governs these terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting. Continued use of our
              services constitutes acceptance of modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us:
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
