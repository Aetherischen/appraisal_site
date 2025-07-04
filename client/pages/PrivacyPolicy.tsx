import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProtectedContact from "@/components/ProtectedContact";
import { BUSINESS_CONTACT } from "@/lib/constants";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHeader
        title="Privacy Policy"
        description="Your privacy is important to us. This policy explains how CSR Realty Appraisers collects, uses, and protects your personal information in accordance with USPAP confidentiality requirements."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              As a licensed New Jersey real estate appraisal company, we collect
              information necessary to provide professional property valuation
              services. We collect information you provide directly to us when
              you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Request a real estate appraisal quote or service</li>
              <li>Schedule a property inspection appointment</li>
              <li>Contact us through our website, phone, or email</li>
              <li>Engage our expert witness services</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Interact with our website or online forms</li>
            </ul>
            <p className="text-gray-600 mb-4">
              This may include your name, email address, phone number, property
              address, legal description, property ownership information,
              intended use of appraisal, loan information (if applicable), and
              other information relevant to providing USPAP-compliant appraisal
              services.
            </p>
            <p className="text-gray-600">
              We may also collect technical information such as IP address,
              browser type, device information, and website usage data through
              cookies and analytics tools to improve our website functionality.
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
              <li>
                Provide, maintain, and improve our real estate appraisal
                services
              </li>
              <li>Conduct property inspections and market analysis</li>
              <li>Prepare USPAP-compliant appraisal reports</li>
              <li>Process and complete your service requests</li>
              <li>Communicate with you about our services and appointments</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>
                Comply with legal obligations, professional standards, and
                regulatory requirements
              </li>
              <li>Provide expert witness testimony when authorized</li>
              <li>
                Maintain professional licensing and insurance requirements
              </li>
              <li>Protect against fraud and maintain data security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              USPAP Confidentiality Requirements
            </h2>
            <p className="text-gray-600 mb-4">
              As licensed real estate appraisers in New Jersey, we adhere to the
              Uniform Standards of Professional Appraisal Practice (USPAP)
              Confidentiality Rule, which requires that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>
                An appraiser must not disclose confidential information or
                assignment results to anyone other than the client, persons
                specifically authorized by the client, state appraiser
                regulatory agencies, third parties as may be authorized by due
                process of law, or a duly authorized professional peer review
                committee
              </li>
              <li>
                An appraiser must not disclose assignment results prepared for
                one client to another client
              </li>
              <li>
                An appraiser must not disclose the contents of appraisal reports
                to unauthorized parties
              </li>
              <li>
                Confidential information may include identity of the client or
                intended users, property owner, occupants, or information
                furnished by them
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information Sharing and Disclosure
            </h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties except in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>With your explicit written consent or authorization</li>
              <li>
                To comply with legal requirements, court orders, or subpoenas
              </li>
              <li>To state appraiser regulatory agencies as required by law</li>
              <li>To authorized professional peer review committees</li>
              <li>
                To protect our rights, property, or safety, or that of others
              </li>
              <li>
                With trusted service providers who assist in our operations
                under confidentiality agreements
              </li>
              <li>
                In connection with expert witness services when properly
                authorized
              </li>
              <li>
                To lenders or intended users specifically identified in the
                appraisal report
              </li>
              <li>As required by insurance companies for liability coverage</li>
            </ul>
            <p className="text-gray-600">
              Any disclosure of confidential information is done in strict
              accordance with USPAP requirements and New Jersey appraisal
              regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Security and Protection
            </h2>
            <p className="text-gray-600 mb-4">
              We implement comprehensive security measures to protect your
              personal and property information against unauthorized access,
              alteration, disclosure, or destruction, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Encrypted data transmission and storage</li>
              <li>Secure physical and digital file storage systems</li>
              <li>Access controls and authentication protocols</li>
              <li>Regular security audits and updates</li>
              <li>Employee training on confidentiality requirements</li>
              <li>Professional liability insurance coverage</li>
            </ul>
            <p className="text-gray-600">
              However, no method of transmission over the Internet or electronic
              storage is 100% secure. While we strive to protect your
              information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 mb-4">
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience, analyze website traffic, and
              improve our services. We may use:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand website usage</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies for relevant advertising (with consent)</li>
            </ul>
            <p className="text-gray-600">
              You can control cookie settings through your browser preferences.
              Disabling certain cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Rights and Choices
            </h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>
                Request deletion of your personal information (subject to legal
                and professional requirements)
              </li>
              <li>Opt-out of non-essential communications</li>
              <li>Request information about how your data is used</li>
              <li>File complaints with relevant regulatory authorities</li>
            </ul>
            <p className="text-gray-600">
              Please note that certain information must be retained to comply
              with professional standards, legal requirements, and licensing
              obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Retention
            </h2>
            <p className="text-gray-600 mb-4">
              We retain your information as long as necessary to provide
              services and comply with professional and legal obligations,
              including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>
                USPAP requirements for workfile retention (minimum 5 years from
                date of report or 2 years after final disposition of any
                judicial proceeding)
              </li>
              <li>New Jersey State appraisal board requirements</li>
              <li>Professional liability insurance requirements</li>
              <li>Tax and business record requirements</li>
              <li>Legal statute of limitations periods</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-600 mb-4">
              Our real estate appraisal services are not directed to children
              under 18. We do not knowingly collect personal information from
              minors. If we become aware of information collected from a child
              under 18, we will delete it promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Third-Party Links
            </h2>
            <p className="text-gray-600 mb-4">
              Our website may contain links to third-party websites for your
              convenience. We are not responsible for the privacy practices or
              content of these external sites. We encourage you to review their
              privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Posting the updated policy on our website</li>
              <li>Updating the "Last Updated" date</li>
              <li>Providing direct notice for significant changes</li>
            </ul>
            <p className="text-gray-600">
              Continued use of our services after changes constitutes acceptance
              of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy, need to exercise
              your rights, or have privacy concerns, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2">
                <strong>CSR Realty Appraisers</strong>
              </p>
              <p className="text-gray-600 mb-2">
                Albert Zaccone, Certified Appraiser
              </p>
              <p className="text-gray-600 mb-2">
                Address: {BUSINESS_CONTACT.address}
              </p>
              <p className="text-gray-600 mb-2">
                Email: <ProtectedContact type="email" />
              </p>
              <p className="text-gray-600 mb-2">
                Phone: <ProtectedContact type="phone" />
              </p>
              <p className="text-gray-600 mb-2">
                Secondary Phone: <ProtectedContact type="phone-secondary" />
              </p>
              <p className="text-gray-600">Hours: {BUSINESS_CONTACT.hours}</p>
            </div>
          </section>

          <div className="text-sm text-gray-500 border-t pt-6">
            <p className="mb-2">
              <strong>Effective Date:</strong> January 1, 2024
            </p>
            <p className="mb-2">
              <strong>Last Updated:</strong> January 1, 2025
            </p>
            <p>
              <strong>Governing Law:</strong> This Privacy Policy is governed by
              the laws of the State of New Jersey and applicable federal
              regulations.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
