import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProtectedContact from "@/components/ProtectedContact";
import AppraisalCTA from "@/components/AppraisalCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BUSINESS_CONTACT } from "@/lib/constants";
import {
  Award,
  Users,
  Clock,
  Shield,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Star,
  TrendingUp,
  Target,
  Heart,
  FileText,
  Building,
  Scale,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Accuracy",
      description:
        "We strive for precision in every appraisal, using the latest market data and proven methodologies adhering to USPAP standards.",
    },
    {
      icon: Clock,
      title: "Efficiency",
      description:
        "We understand the importance of deadlines and deliver comprehensive reports responsibly and on schedule.",
    },
    {
      icon: Heart,
      title: "Ethics",
      description:
        "Our appraisals are unbiased, ethical, and adhere to the highest professional standards with strict confidentiality.",
    },
    {
      icon: Users,
      title: "Service",
      description:
        "We act in good faith to meet client needs with exceptional customer service and clear communication throughout the process.",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Certified members of the American Society of Appraisers",
      stat: "ASA Certified",
    },
    {
      icon: Shield,
      title: "USPAP Compliant",
      description:
        "Adheres to Uniform Standards of Professional Appraisal Practice",
      stat: "Fully Compliant",
    },
    {
      icon: TrendingUp,
      title: "Professional Standards",
      description: "Fully insured against all liability for your protection",
      stat: "Fully Insured",
    },
    {
      icon: Star,
      title: "Statewide Service",
      description:
        "Serving all of New Jersey with extensive electronic database",
      stat: "All NJ Counties",
    },
  ];

  const services = [
    {
      icon: FileText,
      title: "Residential Appraisals",
      description:
        "Single-family homes, condos, townhouses, duplexes, triplexes, mobile homes, cottages, co-ops, and vacant land",
    },
    {
      icon: Building,
      title: "Commercial Appraisals",
      description:
        "Retail properties, hotels, motels, offices, and development lands with specialized valuation approaches",
    },
    {
      icon: Scale,
      title: "Legal & Advisory Services",
      description:
        "Expert witness testimony, litigation support, feasibility studies, lease rate surveys, and assessment appeals",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHeader
        badge="About CSR Realty Appraisers"
        title="New Jersey's Trusted"
        subtitle="Real Estate Appraisal Experts"
        description="Founded and operated by Albert Zaccone, CSR Realty Appraisers delivers responsible, efficient, and reliable real estate appraisals throughout New Jersey, adhering to the highest standards of professionalism and ethics."
        variant="gradient"
      />

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CSR Realty Appraisers was founded and is operated by Albert
                Zaccone, a certified appraiser with a proven track record of
                providing accurate, USPAP-compliant appraisals across New
                Jersey. Our mission is to deliver responsible, efficient, and
                reliable real estate appraisals and advisory services.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team consists of licensed professionals experienced in
                residential, commercial, and land appraisals. We serve a diverse
                client base including homeowners, real estate buyers and
                sellers, attorneys, accountants, financial institutions, and
                government agencies throughout New Jersey.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We maintain an extensive electronic database for accurate market
                analysis, supporting all types of real estate transactions while
                adhering to strict confidentiality standards and protecting
                client data.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  ASA Certified
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Fully Insured
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Award className="w-4 h-4 mr-2" />
                  USPAP Compliant
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                  alt="Professional appraisal team at work"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every appraisal we complete and every
              interaction we have with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Led by certified expertise and deep knowledge of New Jersey real
              estate markets.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-primary">AZ</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Albert Zaccone</CardTitle>
                <p className="text-primary font-semibold text-lg">
                  Certified Appraiser & Owner
                </p>
                <div className="flex justify-center gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">
                    ASA Certified
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    USPAP Compliant
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Albert Zaccone is the founder and owner of CSR Realty
                  Appraisers, bringing extensive experience in residential,
                  commercial, and land appraisals throughout New Jersey. As a
                  certified member of the American Society of Appraisers, Albert
                  specializes in expert witness testimony, market feasibility
                  studies, assessment appeals, and lease disputes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive appraisal services for all property types throughout
              New Jersey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized for excellence in appraisal services and professional
              standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {achievement.stat}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppraisalCTA
        title="Ready to Work with New Jersey's Best?"
        description="Experience the CSR Realty Appraisers difference. Contact us today for a free, confidential consultation about your real estate appraisal needs."
      />

      <Footer />
    </div>
  );
}
