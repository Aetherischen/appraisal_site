import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Michael Thompson",
      role: "Lead Certified Appraiser",
      credentials: "MAI, SRA",
      experience: "20+ years",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description:
        "Specializes in residential and commercial properties with extensive experience in complex valuations.",
    },
    {
      name: "Sarah Mitchell",
      role: "Senior Residential Appraiser",
      credentials: "SRA, AI-RRS",
      experience: "15+ years",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
      description:
        "Expert in residential appraisals with deep knowledge of New Jersey housing markets.",
    },
    {
      name: "David Rodriguez",
      role: "Commercial Property Specialist",
      credentials: "MAI, CCIM",
      experience: "18+ years",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description:
        "Focuses on commercial real estate valuations and investment property analysis.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Accuracy",
      description:
        "We strive for precision in every appraisal, using the latest market data and proven methodologies.",
    },
    {
      icon: Clock,
      title: "Timeliness",
      description:
        "We understand the importance of deadlines and deliver comprehensive reports on schedule.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Our appraisals are unbiased, ethical, and adhere to the highest professional standards.",
    },
    {
      icon: Users,
      title: "Service",
      description:
        "We prioritize clear communication and exceptional customer service throughout the process.",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Certified Excellence",
      description:
        "All appraisers hold state licenses and professional certifications",
      stat: "100%",
    },
    {
      icon: TrendingUp,
      title: "Market Experience",
      description: "Combined decades of experience in New Jersey real estate",
      stat: "50+ Years",
    },
    {
      icon: Shield,
      title: "Professional Standards",
      description: "Fully insured and bonded for your protection",
      stat: "E&O Insured",
    },
    {
      icon: Star,
      title: "Client Satisfaction",
      description:
        "Consistently high ratings from clients and industry partners",
      stat: "98%",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHeader
        badge="About Premier Appraisal"
        title="New Jersey's Trusted"
        subtitle="Appraisal Experts"
        description="With decades of combined experience, we provide accurate, reliable real estate valuations throughout New Jersey. Our certified team delivers professional service with integrity and precision."
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
                Founded in 2008, Premier Appraisal Services has been serving New
                Jersey with professional real estate valuations for over 15
                years. What started as a small team of dedicated appraisers has
                grown into one of the state's most trusted appraisal firms.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our success is built on a foundation of accuracy, integrity, and
                exceptional customer service. We've completed thousands of
                appraisals across residential, commercial, and specialty
                properties, earning the trust of homeowners, real estate
                professionals, lenders, and legal professionals throughout New
                Jersey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Licensed & Certified
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Fully Insured
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Award className="w-4 h-4 mr-2" />
                  Professional Standards
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified appraisers bring decades of combined experience and
              deep knowledge of New Jersey real estate markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      {member.credentials}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {member.experience}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
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

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with New Jersey's Best?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the Premier Appraisal difference. Contact us today to
            discuss your real estate appraisal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-white text-primary hover:bg-gray-100"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
