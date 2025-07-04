import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProtectedContact from "@/components/ProtectedContact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, DollarSign, FileText, Home, Phone } from "lucide-react";
import { BUSINESS_CONTACT } from "@/lib/constants";

export default function FAQ() {
  const faqCategories = [
    {
      title: "General Appraisal Questions",
      icon: Home,
      color: "bg-blue-500",
      questions: [
        {
          question: "What is a real estate appraisal?",
          answer:
            "A real estate appraisal is an unbiased professional opinion of a property's fair market value conducted by a licensed New Jersey real estate appraiser. The certified appraiser evaluates the property's condition, location, neighborhood characteristics, and recent sales of comparable properties in Bergen County, Passaic County, Essex County, or your specific NJ area to determine an accurate market value following USPAP guidelines.",
        },
        {
          question: "Why do I need an appraisal?",
          answer:
            "New Jersey property appraisals are commonly needed for mortgage loans, home refinancing, property sales and purchases, estate planning and probate, divorce proceedings, property tax appeals, insurance claims, PMI removal, and legal disputes. New Jersey lenders and courts require certified appraisals to ensure the property value supports the loan amount or legal proceedings. Licensed NJ appraisers provide USPAP-compliant valuations for all residential, commercial, and land properties.",
        },
        {
          question: "How long does an appraisal take?",
          answer:
            "The inspection typically takes 30 minutes to 2 hours depending on the property size and complexity. The complete appraisal report is usually delivered within 2-5 business days after the inspection.",
        },
        {
          question: "What factors affect property value?",
          answer:
            "Key factors include location, property size, condition, age, recent renovations, comparable sales, market trends, neighborhood amenities, school districts, and local economic conditions.",
        },
        {
          question: "When should I hire an appraiser?",
          answer:
            "You should hire an appraiser for mortgages, loans, tax assessments, estate settlements, property sales and purchases, legal disputes, divorce proceedings, insurance claims, and PMI removal. An appraisal provides an unbiased professional opinion of your property's value.",
        },
        {
          question: "What's included in an appraisal report?",
          answer:
            "An appraisal report includes the purpose of the appraisal, property value determination, effective date, detailed property characteristics (location, features, defects, legal attributes), economic factors affecting value, and the methodology used to determine the value.",
        },
        {
          question:
            "What's the difference between an appraisal and a home inspection?",
          answer:
            "An appraisal determines the fair market value of a property for financing, legal, or transaction purposes. A home inspection assesses the structural condition, safety, and mechanical systems of a property. Both serve different but complementary purposes in real estate transactions.",
        },
      ],
    },
    {
      title: "Appraisal Process",
      icon: FileText,
      color: "bg-green-500",
      questions: [
        {
          question: "What happens during the appraisal inspection?",
          answer:
            "The appraiser will measure the property, photograph the interior and exterior, note the condition and features, verify property details, and assess the neighborhood. They may ask questions about recent improvements or issues.",
        },
        {
          question: "Do I need to be present during the inspection?",
          answer:
            "While not always required, it's helpful if you or a representative can provide access and answer questions about the property. You can point out recent improvements, upgrades, or any unique features.",
        },
        {
          question: "What should I do to prepare for an appraisal?",
          answer:
            "Ensure all areas are accessible, compile a list of recent improvements with costs, gather any relevant documents (surveys, permits, warranties), and make minor repairs if possible. A clean, well-presented property helps create a positive impression.",
        },
        {
          question: "Can I provide information to the appraiser?",
          answer:
            "Yes, you can provide information about recent improvements, comparable sales you're aware of, or unique features. However, the appraiser must independently verify all information and form their own professional opinion.",
        },
        {
          question: "What data sources do appraisers use?",
          answer:
            "CSR Realty Appraisers uses MLS data, tax records, public documents, our extensive electronic database, professional associations, and comparative market studies. We maintain comprehensive data to ensure accurate market analysis for all property types throughout New Jersey.",
        },
        {
          question: "Who can see my appraisal report?",
          answer:
            "The confidentiality of your appraisal report depends on who commissioned it (lender, homeowner, attorney, etc.). CSR Realty Appraisers adheres to strict confidentiality standards and only discloses information with proper client authorization, protecting your data and privacy.",
        },
      ],
    },
    {
      title: "Costs and Timeline",
      icon: DollarSign,
      color: "bg-purple-500",
      questions: [
        {
          question: "How much does an appraisal cost?",
          answer:
            "Residential appraisals typically range from $300-$600, while commercial appraisals vary widely based on complexity. Factors affecting cost include property type, size, location, intended use, and timeline requirements.",
        },
        {
          question: "Who pays for the appraisal?",
          answer:
            "For purchase transactions, the buyer typically pays. For refinancing, the homeowner pays. In some cases, the seller may pay as part of negotiations. The party ordering the appraisal is responsible for payment.",
        },
        {
          question: "Can I get a rush appraisal?",
          answer:
            "Yes, rush services are available for an additional fee. Depending on our schedule and property complexity, we can often complete rush appraisals within 24-48 hours.",
        },
        {
          question: "When will I receive the appraisal report?",
          answer:
            "Standard turnaround time is 2-5 business days after the inspection. Rush orders can be completed in 24-48 hours. We'll provide an estimated delivery date when you place your order.",
        },
        {
          question: "What property types can CSR appraise?",
          answer:
            "CSR Realty Appraisers handles all property types including residential (single-family homes, condos, townhouses, multi-family), commercial (retail, hotels, offices), land and agricultural properties, new construction, mobile homes, and specialty properties. We serve all of New Jersey with expertise in each property category.",
        },
      ],
    },
    {
      title: "Appraisal Results",
      icon: Clock,
      color: "bg-orange-500",
      questions: [
        {
          question: "What if the appraisal comes in low?",
          answer:
            "If the appraised value is lower than expected, you can request a reconsideration of value with additional comparable sales, get a second opinion, or renegotiate the purchase price. Your lender will base the loan on the appraised value.",
        },
        {
          question: "Can I challenge an appraisal?",
          answer:
            "Yes, you can request a reconsideration of value if you believe there are errors or overlooked factors. Provide additional comparable sales, correct any factual errors, or highlight unique features that may have been missed.",
        },
        {
          question: "How long is an appraisal valid?",
          answer:
            "Most lenders accept appraisals for 90-120 days from the inspection date. For some loan types or in rapidly changing markets, a shorter validity period may apply. After expiration, a new appraisal or update may be required.",
        },
        {
          question: "Will the appraisal match the purchase price?",
          answer:
            "Not necessarily. The appraiser provides an independent opinion of value based on market data and property condition. The appraisal may be higher, lower, or equal to the purchase price depending on various factors.",
        },
      ],
    },
  ];

  const quickFacts = [
    {
      icon: Clock,
      title: "24-48 Hour",
      subtitle: "Rush Service Available",
    },
    {
      icon: FileText,
      title: "Licensed",
      subtitle: "Certified Appraisers",
    },
    {
      icon: Phone,
      title: "Free",
      subtitle: "Consultation Available",
    },
    {
      icon: Home,
      title: "All Property",
      subtitle: "Types Covered",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHeader
        badge="Frequently Asked Questions"
        title="Real Estate Appraisal"
        subtitle="FAQ"
        description="Get answers to the most common questions about real estate appraisals, our process, and what to expect."
        variant="gradient"
      />

      {/* Quick Facts Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickFacts.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <fact.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-lg font-bold text-gray-900">
                  {fact.title}
                </div>
                <div className="text-sm text-gray-600">{fact.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <div
                    className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center mr-4`}
                  >
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                >
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-gray-200 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our experienced team is here to help. Contact us for personalized
            answers to your specific appraisal needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Speak directly with our appraisal experts
                </p>
                <Badge variant="secondary">
                  <ProtectedContact type="phone" />
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Get a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Request a free appraisal quote online
                </p>
                <Badge variant="secondary">Free Consultation</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Quick Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We respond to all inquiries promptly
                </p>
                <Badge variant="secondary">Same Day Response</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
