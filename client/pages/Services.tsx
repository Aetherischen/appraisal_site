import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate appraisal services throughout New Jersey
            for residential, commercial, and specialty properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Residential Appraisals",
              description:
                "Professional valuations for single-family homes, condominiums, townhouses, and multi-family properties. Our certified appraisers provide accurate market value assessments for purchases, refinancing, and lending purposes.",
            },
            {
              title: "Commercial Appraisals",
              description:
                "Comprehensive valuations for office buildings, retail centers, industrial properties, warehouses, and mixed-use developments. We serve investors, lenders, and property owners throughout New Jersey.",
            },
            {
              title: "Estate Planning & Probate",
              description:
                "Accurate property valuations for estate settlements, inheritance tax purposes, and probate proceedings. We provide detailed reports that meet all legal requirements and court standards.",
            },
            {
              title: "Divorce & Legal Proceedings",
              description:
                "Impartial property valuations for divorce settlements, legal disputes, and court proceedings. Our appraisals help ensure fair distribution of real estate assets during legal proceedings.",
            },
            {
              title: "Tax Appeals & Assessment",
              description:
                "Property valuations to support tax assessment appeals and challenges. We help property owners reduce their tax burden with accurate market value assessments that demonstrate fair taxation.",
            },
            {
              title: "Expert Witness Services",
              description:
                "Professional testimony and expert witness services for legal proceedings, insurance claims, and court cases. Our certified appraisers provide credible testimony based on thorough analysis.",
            },
            {
              title: "PMI Removal Appraisals",
              description:
                "Home valuations to eliminate private mortgage insurance (PMI) when your property value has increased sufficiently to meet loan-to-value requirements for PMI removal.",
            },
            {
              title: "Pre-Listing Appraisals",
              description:
                "Strategic property valuations to help sellers price their homes competitively. Get an accurate market value before listing to maximize your sale price and minimize time on market.",
            },
            {
              title: "Investment Property Analysis",
              description:
                "Detailed valuations for rental properties, investment portfolios, and income-producing real estate. We provide income approach analysis and market comparisons for informed investment decisions.",
            },
            {
              title: "Relocation Appraisals",
              description:
                "Corporate relocation appraisals for employees transferring to new locations. We work with relocation companies and HR departments to provide timely, accurate valuations.",
            },
            {
              title: "Insurance Claim Appraisals",
              description:
                "Property damage assessments and replacement cost valuations for insurance claims. We help determine pre-loss value and reconstruction costs for fire, flood, and other property damage claims.",
            },
            {
              title: "Specialty Property Appraisals",
              description:
                "Unique property valuations including historic homes, luxury estates, waterfront properties, farms, and other specialty real estate requiring specialized knowledge and experience.",
            },
          ].map((service) => (
            <Card
              key={service.title}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-lg leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Button variant="outline" size="sm">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
