import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProtectedContact from "@/components/ProtectedContact";
import AppraisalCTA from "@/components/AppraisalCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BUSINESS_CONTACT } from "@/lib/constants";
import {
  Home,
  Building2,
  FileCheck,
  Scale,
  Receipt,
  Users,
  Shield,
  TrendingUp,
  Briefcase,
  MapPin,
  AlertTriangle,
  Gem,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  TreePine,
  Calculator,
  Gavel,
  FileText,
  Search,
  Award,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "New Jersey Residential Property Appraisals",
      description:
        "Comprehensive residential real estate valuations for single-family homes, condominiums, townhouses, duplexes, triplexes, mobile homes, cottages, co-ops, high/low-rise units, and vacant land throughout Bergen County, Passaic County, Essex County, and all NJ counties. Licensed appraisal services include home buying/selling, mortgage refinancing, divorce settlements, estate planning, property tax appeals, pre-listing valuations, insurance assessments, and foreclosure appraisals.",
      color: "bg-blue-500",
      gradient: "from-blue-50 to-blue-100",
      features: [
        "Detailed property sketch with room delineation",
        "Square footage calculations and feature descriptions",
        "Disclosure of defects and assets",
        "Market value determination using sales comparison approach",
      ],
    },
    {
      icon: Building2,
      title: "Commercial Real Estate Appraisals NJ",
      description:
        "Professional commercial property valuations for retail buildings, hotels, motels, office complexes, warehouses, and development lands throughout New Jersey using MAI-certified methodologies. Our certified commercial appraisals support investment analysis, bank financing, SBA loans, litigation support, and lease disputes with comprehensive New Jersey market analysis and income approach valuations.",
      color: "bg-green-500",
      gradient: "from-green-50 to-green-100",
      features: [
        "Sales Comparison Approach: Analyzes similar surrounding properties",
        "Cost Approach: Evaluates land value, improvements, and depreciation",
        "Income Capitalization: Assesses potential earning power for investments",
        "Tailored for investors and lenders focusing on profit potential",
      ],
    },
    {
      icon: TreePine,
      title: "New Jersey Land & Agricultural Property Appraisals",
      description:
        "Specialized land valuations for vacant lots, agricultural farmland, rural acreages, and developable parcels throughout New Jersey including Bergen County, Passaic County, Sussex County, Warren County, and Morris County. Our certified land appraisals support property purchase/sales, development feasibility studies, zoning variance applications, litigation support, eminent domain proceedings, and condemned property assessments with detailed highest and best use analysis for New Jersey properties.",
      color: "bg-emerald-500",
      gradient: "from-emerald-50 to-emerald-100",
      features: [
        "Zoning analysis and highest and best use determination",
        "Price per square foot or buildable square foot calculations",
        "Development costs and adjacent property impact analysis",
        "New construction trends and competitor analysis",
      ],
    },
    {
      icon: FileCheck,
      title: "Estate Planning & Probate",
      description:
        "Accurate property valuations for estate settlements, inheritance purposes, and probate proceedings. We provide detailed reports that meet all legal requirements and court standards for fair asset distribution.",
      color: "bg-purple-500",
      gradient: "from-purple-50 to-purple-100",
      features: [
        "USPAP-compliant estate valuations",
        "Court-acceptable detailed reports",
        "Fair market value determinations",
        "Confidential handling of sensitive matters",
      ],
    },
    {
      icon: Scale,
      title: "Divorce & Legal Proceedings",
      description:
        "Impartial property valuations for divorce settlements, legal disputes, and court proceedings. Our certified appraisers serve as expert witnesses providing credible testimony based on thorough analysis and professional standards.",
      color: "bg-orange-500",
      gradient: "from-orange-50 to-orange-100",
      features: [
        "Unbiased professional valuations",
        "Expert witness testimony",
        "Court-defensible reports",
        "Litigation support services",
      ],
    },
    {
      icon: Receipt,
      title: "Tax Appeals & Assessment",
      description:
        "Property valuations to support tax assessment appeals and challenges. We help property owners reduce their tax burden with accurate market value assessments that demonstrate fair taxation and support reassessment proceedings.",
      color: "bg-red-500",
      gradient: "from-red-50 to-red-100",
      features: [
        "Assessment appeal support",
        "Market value vs. assessed value analysis",
        "Tax reduction strategies",
        "Municipal assessment review",
      ],
    },
    {
      icon: DollarSign,
      title: "Financing & Refinancing",
      description:
        "Essential appraisals for mortgage approvals, refinancing, and lending purposes. Our valuations protect both lenders and borrowers by establishing accurate property values that support loan decisions and terms.",
      color: "bg-indigo-500",
      gradient: "from-indigo-50 to-indigo-100",
      features: [
        "Primary and secondary financing support",
        "Lender-required valuations",
        "PMI removal appraisals",
        "Investment property analysis",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Insurance & Replacement Cost",
      description:
        "Replacement cost analysis for insurance purposes and property damage assessments. We determine pre-loss values and reconstruction costs for fire, flood, and other property damage claims to ensure adequate coverage.",
      color: "bg-amber-500",
      gradient: "from-amber-50 to-amber-100",
      features: [
        "Replacement cost calculations",
        "Insurance claim support",
        "Pre-loss value determination",
        "Damage assessment reports",
      ],
    },
    {
      icon: Search,
      title: "Feasibility Studies",
      description:
        "Comprehensive market feasibility studies for development projects, investment analysis, and strategic planning. Our studies include market trends analysis, development potential assessment, and cash flow evaluations.",
      color: "bg-cyan-500",
      gradient: "from-cyan-50 to-cyan-100",
      features: [
        "Market feasibility analysis",
        "Development potential assessment",
        "Cash flow projections",
        "Competitor and trend analysis",
      ],
    },
    {
      icon: FileText,
      title: "Lease Rate Surveys",
      description:
        "Professional lease rate surveys and rental market analysis for commercial and residential properties. Supporting lease negotiations, rent reviews, and market positioning with comprehensive data analysis.",
      color: "bg-violet-500",
      gradient: "from-violet-50 to-violet-100",
      features: [
        "Rental market analysis",
        "Lease rate comparisons",
        "Market positioning studies",
        "Rent review support",
      ],
    },
  ];

  const appraisalProcess = [
    {
      step: "1",
      title: "Onsite Inspection",
      description:
        "Comprehensive assessment of property condition, layout, features, and any defects or improvements.",
    },
    {
      step: "2",
      title: "Data Research",
      description:
        "Extensive research using public records, MLS data, professional associations, and our electronic database.",
    },
    {
      step: "3",
      title: "Analysis",
      description:
        "Application of appropriate valuation approaches: sales comparison, cost, and/or income methods.",
    },
    {
      step: "4",
      title: "Report Delivery",
      description:
        "Standardized or narrative format reports tailored to client needs and delivered timely.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHeader
        badge="Professional Appraisal Services"
        title="Comprehensive"
        subtitle="Real Estate Appraisal Services"
        description="CSR Realty Appraisers provides accurate, USPAP-compliant appraisals for residential, commercial, and specialty properties throughout New Jersey. Our services streamline real estate transactions and support financing, legal, and advisory needs."
        variant="gradient"
      />

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Appraisal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional appraisals that establish fair market value and
              support all your real estate needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br ${service.gradient} overflow-hidden`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg leading-tight text-gray-900 group-hover:text-primary transition-colors mb-2">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-gray-600"
                      >
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appraisal Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Appraisal Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring accuracy, compliance, and timely
              delivery of professional appraisal reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appraisalProcess.map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CSR Realty Appraisers?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that certified expertise, professional
              standards, and responsible service make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Award,
                title: "ASA Certified",
                description:
                  "Certified members of the American Society of Appraisers with proven expertise.",
                stat: "Certified",
              },
              {
                icon: Shield,
                title: "USPAP Compliant",
                description:
                  "Adheres to Uniform Standards of Professional Appraisal Practice and fully insured.",
                stat: "Compliant",
              },
              {
                icon: MapPin,
                title: "Statewide Service",
                description:
                  "Serving all of New Jersey with extensive electronic database and local expertise.",
                stat: "All NJ",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {feature.stat}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppraisalCTA />

      <Footer />
    </div>
  );
}
