import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProtectedContact from "@/components/ProtectedContact";
import { BUSINESS_CONTACT } from "@/lib/constants";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHeader
        title="Terms of Service"
        description="These terms govern your use of CSR Realty Appraisers' website and professional real estate appraisal services. Please read them carefully before engaging our services."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-4">
              By accessing and using the CSR Realty Appraisers website and
              services, you ("Client," "you," or "your") accept and agree to be
              bound by the terms and provisions of this agreement ("Terms").
              These Terms constitute a legal agreement between you and CSR
              Realty Appraisers, a licensed New Jersey real estate appraisal
              company owned and operated by Albert Zaccone, certified member of
              the American Society of Appraisers (ASA).
            </p>
            <p className="text-gray-600">
              If you do not agree to these Terms, please do not use our website
              or engage our services. Continued use of our services constitutes
              acceptance of any modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Services Description
            </h2>
            <p className="text-gray-600 mb-4">
              CSR Realty Appraisers provides professional real estate appraisal
              and valuation services throughout New Jersey, including but not
              limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>
                Residential property appraisals (single-family homes, condos,
                townhouses, multi-family properties)
              </li>
              <li>
                Commercial property appraisals (retail, office, industrial,
                hospitality, development land)
              </li>
              <li>Agricultural and vacant land appraisals</li>
              <li>Estate planning and probate valuations</li>
              <li>Divorce and legal separation appraisals</li>
              <li>Tax assessment appeal support</li>
              <li>Insurance replacement cost analysis</li>
              <li>Expert witness testimony and litigation support</li>
              <li>Pre-listing and pre-purchase consultations</li>
              <li>Feasibility studies and market analysis</li>
              <li>Lease rate surveys and rental analysis</li>
              <li>PMI removal appraisals</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Standards and Compliance
            </h2>
            <p className="text-gray-600 mb-4">
              All appraisals and services are conducted in strict accordance
              with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>
                Uniform Standards of Professional Appraisal Practice (USPAP) as
                promulgated by The Appraisal Foundation
              </li>
              <li>
                State of New Jersey Real Estate Appraiser Licensing and
                Certification Act
              </li>
              <li>
                American Society of Appraisers (ASA) professional standards and
                ethics
              </li>
              <li>
                Federal Financial Institutions Examination Council (FFIEC)
                guidelines
              </li>
              <li>
                Applicable federal regulations including Dodd-Frank Act
                requirements
              </li>
              <li>
                All other applicable federal, state, and local regulations
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Licensing and Certification
            </h2>
            <p className="text-gray-600 mb-4">
              CSR Realty Appraisers maintains all required professional
              credentials:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>New Jersey State Real Estate Appraiser License</li>
              <li>American Society of Appraisers (ASA) certification</li>
              <li>Professional liability insurance coverage</li>
              <li>Errors and omissions insurance</li>
              <li>Continuing education compliance</li>
              <li>Professional organization memberships in good standing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Client Responsibilities and Obligations
            </h2>
            <p className="text-gray-600 mb-4">As a client, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>
                Provide accurate, complete, and truthful information about the
                property and assignment
              </li>
              <li>
                Allow reasonable access to the property for inspection purposes
              </li>
              <li>
                Provide all relevant documents, surveys, plans, and records when
                requested
              </li>
              <li>Pay all fees and costs as agreed upon in writing</li>
              <li>
                Use appraisal reports only for their stated intended use and
                intended users
              </li>
              <li>
                Not distribute, copy, or share appraisal reports without proper
                authorization
              </li>
              <li>
                Notify us immediately of any material changes to the property or
                assignment
              </li>
              <li>
                Comply with all applicable laws and regulations regarding the
                use of appraisal services
              </li>
              <li>
                Understand that appraisal reports are opinions of value as of a
                specific date
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Engagement Process and Scope of Work
            </h2>
            <p className="text-gray-600 mb-4">
              Each appraisal engagement will include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Written engagement letter or contract</li>
              <li>Clear scope of work definition</li>
              <li>Intended use and intended user identification</li>
              <li>Property rights appraised specification</li>
              <li>Effective date of value</li>
              <li>Fee schedule and payment terms</li>
              <li>Estimated completion timeline</li>
              <li>Any extraordinary assumptions or limiting conditions</li>
            </ul>
            <p className="text-gray-600">
              Changes to the scope of work may require written modification to
              the engagement and may affect fees and timeline.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Payment Terms and Conditions
            </h2>
            <p className="text-gray-600 mb-4">
              Payment terms will be specified in each service agreement.
              Generally:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>
                Fees are due upon completion and delivery of the appraisal
                report
              </li>
              <li>
                Rush orders and expedited services may require additional fees
                and partial advance payment
              </li>
              <li>
                Expert witness services require retainer agreements and hourly
                billing
              </li>
              <li>
                Cancellation after inspection may incur charges for work
                performed
              </li>
              <li>
                Late payments may incur additional charges and interest as
                permitted by law
              </li>
              <li>
                Unpaid invoices may result in collection actions and additional
                costs
              </li>
              <li>
                Returned checks will incur processing fees and bank charges
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Appraisal Report Delivery and Use
            </h2>
            <p className="text-gray-600 mb-4">
              Appraisal reports are delivered subject to the following
              conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>
                Reports are valid only for the stated intended use and intended
                users
              </li>
              <li>
                Value opinions are effective only as of the specified date
              </li>
              <li>
                Reports may not be used for any purpose other than originally
                intended
              </li>
              <li>
                Clients may not alter, modify, or reproduce reports without
                written consent
              </li>
              <li>
                Digital copies are provided for convenience but printed signed
                copies govern
              </li>
              <li>
                Report distribution is subject to USPAP confidentiality
                requirements
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Limitation of Liability and Disclaimers
            </h2>
            <p className="text-gray-600 mb-4">
              CSR Realty Appraisers provides professional opinions based on
              available information, market data, and industry standards. Our
              liability is expressly limited as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>
                Total liability shall not exceed the fees paid for the specific
                appraisal services
              </li>
              <li>
                We are not responsible for market fluctuations after the
                effective date of value
              </li>
              <li>
                We are not responsible for hidden defects, environmental
                conditions, or structural issues not discoverable during
                standard inspection
              </li>
              <li>
                We are not responsible for legal or title matters unless
                specifically engaged for such services
              </li>
              <li>
                We disclaim responsibility for decisions made based on appraisal
                reports
              </li>
              <li>
                We are not liable for consequential, indirect, special, or
                punitive damages
              </li>
              <li>
                Our liability does not extend to parties other than the client
                and intended users
              </li>
            </ul>
            <p className="text-gray-600">
              Professional liability insurance is maintained to provide
              additional protection within policy limits.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Confidentiality and USPAP Compliance
            </h2>
            <p className="text-gray-600 mb-4">
              We maintain strict confidentiality regarding client information
              and property details in accordance with USPAP Confidentiality
              Rule:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>
                Appraisal reports and related information will not be shared
                with unauthorized parties
              </li>
              <li>
                Disclosure requires written client consent except as required by
                law
              </li>
              <li>
                Information may be disclosed to regulatory agencies, courts, or
                authorized peer review
              </li>
              <li>
                Client identity and assignment results are protected information
              </li>
              <li>Workfiles are maintained securely and confidentially</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Intellectual Property Rights
            </h2>
            <p className="text-gray-600 mb-4">
              All content on this website, including text, graphics, logos,
              images, software, and appraisal reports, is the property of CSR
              Realty Appraisers and is protected by copyright, trademark, and
              other intellectual property laws. Unauthorized use, reproduction,
              or distribution is strictly prohibited.
            </p>
            <p className="text-gray-600">
              Clients are granted limited rights to use appraisal reports solely
              for the stated intended use and may not reproduce, distribute, or
              create derivative works without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Website Use and Acceptable Use Policy
            </h2>
            <p className="text-gray-600 mb-4">
              You agree to use our website only for lawful purposes and in
              accordance with these Terms. Prohibited activities include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Attempting to gain unauthorized access to systems or data</li>
              <li>Interfering with website functionality or security</li>
              <li>Transmitting malicious code, viruses, or harmful content</li>
              <li>Violating any applicable laws or regulations</li>
              <li>Impersonating others or providing false information</li>
              <li>Using automated systems to access or scrape content</li>
              <li>Attempting to reverse engineer or hack website features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Force Majeure
            </h2>
            <p className="text-gray-600 mb-4">
              CSR Realty Appraisers shall not be liable for delays or failures
              in performance resulting from circumstances beyond our reasonable
              control, including but not limited to natural disasters, acts of
              government, labor disputes, equipment failures, or public health
              emergencies. We will make reasonable efforts to minimize delays
              and notify clients of any material impacts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Dispute Resolution and Governing Law
            </h2>
            <p className="text-gray-600 mb-4">
              These Terms and any disputes arising from our services will be
              resolved as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>
                Initial good faith negotiation between the parties within 30
                days
              </li>
              <li>
                Mediation through a qualified mediator if negotiation fails
              </li>
              <li>
                Binding arbitration in Bergen County, New Jersey, if mediation
                is unsuccessful
              </li>
              <li>New Jersey state law governs these Terms and any disputes</li>
              <li>
                Federal courts in New Jersey have jurisdiction for any matters
                not subject to arbitration
              </li>
            </ul>
            <p className="text-gray-600">
              The prevailing party in any dispute may be entitled to reasonable
              attorney fees and costs as determined by the arbitrator or court.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Standards and Ethics
            </h2>
            <p className="text-gray-600 mb-4">
              CSR Realty Appraisers is committed to maintaining the highest
              professional and ethical standards:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Independence and objectivity in all valuations</li>
              <li>Competency in accepted appraisal methods and techniques</li>
              <li>Diligence in research and analysis</li>
              <li>Reasonable care in report preparation</li>
              <li>Compliance with all applicable professional standards</li>
              <li>Continuing education and professional development</li>
              <li>Ethical conduct in all business relationships</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Modifications to Terms
            </h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these Terms at any time to reflect
              changes in our services, legal requirements, or professional
              standards. Changes will be effective immediately upon posting on
              our website. Material changes will be communicated to active
              clients when possible.
            </p>
            <p className="text-gray-600">
              Continued use of our services after modifications constitutes
              acceptance of the updated Terms. If you do not agree with
              modifications, you must discontinue use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Severability and Entire Agreement
            </h2>
            <p className="text-gray-600 mb-4">
              If any provision of these Terms is found to be unenforceable, the
              remaining provisions will continue in full force and effect. These
              Terms, together with any signed engagement letters or contracts,
              constitute the entire agreement between the parties and supersede
              all prior negotiations, representations, or agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, to report violations,
              or to discuss your appraisal needs, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2">
                <strong>CSR Realty Appraisers</strong>
              </p>
              <p className="text-gray-600 mb-2">
                Albert Zaccone, ASA-Certified Appraiser
              </p>
              <p className="text-gray-600 mb-2">
                Licensed New Jersey Real Estate Appraiser
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
            <p className="mb-2">
              <strong>Governing Law:</strong> State of New Jersey
            </p>
            <p>
              <strong>Professional License:</strong> New Jersey Real Estate
              Appraiser License #[License Number]
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
