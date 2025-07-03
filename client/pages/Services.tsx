import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Appraisals",
      description: "Professional valuations for single-family homes, condominiums, townhouses, and multi-family properties. Our certified appraisers provide accurate market value assessments for purchases, refinancing, and lending purposes.",
      color: "bg-blue-500",
      gradient: "from-blue-50 to-blue-100"
    },
    {
      icon: Building2,
      title: "Commercial Appraisals",
      description: "Comprehensive valuations for office buildings, retail centers, industrial properties, warehouses, and mixed-use developments. We serve investors, lenders, and property owners throughout New Jersey.",
      color: "bg-green-500",
      gradient: "from-green-50 to-green-100"
    },
    {
      icon: FileCheck,
      title: "Estate Planning & Probate",
      description: "Accurate property valuations for estate settlements, inheritance tax purposes, and probate proceedings. We provide detailed reports that meet all legal requirements and court standards.",
      color: "bg-purple-500",
      gradient: "from-purple-50 to-purple-100"
    },
    {
      icon: Scale,
      title: "Divorce & Legal Proceedings",
      description: "Impartial property valuations for divorce settlements, legal disputes, and court proceedings. Our appraisals help ensure fair distribution of real estate assets during legal proceedings.",
      color: "bg-orange-500",
      gradient: "from-orange-50 to-orange-100"
    },
    {
      icon: Receipt,
      title: "Tax Appeals & Assessment",
      description: "Property valuations to support tax assessment appeals and challenges. We help property owners reduce their tax burden with accurate market value assessments that demonstrate fair taxation.",
      color: "bg-red-500",
      gradient: "from-red-50 to-red-100"
    },
    {
      icon: Users,
      title: "Expert Witness Services",
      description: "Professional testimony and expert witness services for legal proceedings, insurance claims, and court cases. Our certified appraisers provide credible testimony based on thorough analysis.",
      color: "bg-indigo-500",
      gradient: "from-indigo-50 to-indigo-100"
    },
    {
      icon: Shield,
      title: "PMI Removal Appraisals",
      description: "Home valuations to eliminate private mortgage insurance (PMI) when your property value has increased sufficiently to meet loan-to-value requirements for PMI removal.",
      color: "bg-teal-500",
      gradient: "from-teal-50 to-teal-100"
    },
    {
      icon: TrendingUp,
      title: "Pre-Listing Appraisals",
      description: "Strategic property valuations to help sellers price their homes competitively. Get an accurate market value before listing to maximize your sale price and minimize time on market.",
      color: "bg-pink-500",
      gradient: "from-pink-50 to-pink-100"
    },
    {
      icon: Briefcase,
      title: "Investment Property Analysis",
      description: "Detailed valuations for rental properties, investment portfolios, and income-producing real estate. We provide income approach analysis and market comparisons for informed investment decisions.",
      color: "bg-yellow-500",
      gradient: "from-yellow-50 to-yellow-100"
    },
    {
      icon: MapPin,
      title: "Relocation Appraisals",
      description: "Corporate relocation appraisals for employees transferring to new locations. We work with relocation companies and HR departments to provide timely, accurate valuations.",
      color: "bg-cyan-500",
      gradient: "from-cyan-50 to-cyan-100"
    },
    {
      icon: AlertTriangle,
      title: "Insurance Claim Appraisals",
      description: "Property damage assessments and replacement cost valuations for insurance claims. We help determine pre-loss value and reconstruction costs for fire, flood, and other property damage claims.",
      color: "bg-amber-500",
      gradient: "from-amber-50 to-amber-100"
    },
    {
      icon: Gem,
      title: "Specialty Property Appraisals",
      description: "Unique property valuations including historic homes, luxury estates, waterfront properties, farms, and other specialty real estate requiring specialized knowledge and experience.",
      color: "bg-violet-500",
      gradient: "from-violet-50 to-violet-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              Professional Appraisal Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive <span className="text-primary">Real Estate</span> Appraisal Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From residential homes to commercial properties, we provide accurate,
              certified appraisals for every real estate need throughout New Jersey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br ${service.gradient} overflow-hidden`}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg leading-tight text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
}