import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Home,
  FileText,
  DollarSign,
  AlertCircle,
  BookOpen,
  Star,
} from "lucide-react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const featuredPost = {
    id: 1,
    slug: "nj-real-estate-market-trends-2024",
    title:
      "New Jersey Real Estate Market Report: Q4 2024 Trends & Predictions for 2025",
    excerpt:
      "Our comprehensive analysis of the New Jersey real estate market reveals key trends, pricing patterns, and what property owners should expect in the coming year. Based on thousands of appraisals completed across the state.",
    content:
      "The New Jersey real estate market has shown remarkable resilience throughout 2024, with notable variations across different regions and property types...",
    date: "December 15, 2024",
    readTime: "12 min read",
    category: "Market Analysis",
    author: "Michael Thompson, MAI",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      slug: "understanding-uspap-guidelines-nj",
      title:
        "Understanding USPAP Guidelines: What Every New Jersey Property Owner Should Know",
      excerpt:
        "Learn about the Uniform Standards of Professional Appraisal Practice and how they protect property owners during the appraisal process.",
      date: "December 12, 2024",
      readTime: "10 min read",
      category: "Education",
      author: "Michael Thompson, MAI",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
      tags: ["USPAP", "Standards", "Professional Practice"],
    },
    {
      id: 3,
      slug: "commercial-property-valuations-nj",
      title:
        "Commercial Property Valuations in New Jersey: Key Factors That Drive Value",
      excerpt:
        "Discover the unique considerations that go into commercial real estate appraisals and how they differ from residential properties.",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "Commercial",
      author: "David Rodriguez, MAI, CCIM",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      tags: ["Commercial", "Valuation", "Investment"],
    },
    {
      id: 4,
      slug: "interest-rates-property-values-nj",
      title:
        "How Rising Interest Rates Are Affecting New Jersey Property Values",
      excerpt:
        "An in-depth look at the correlation between interest rates and property values, with specific data from New Jersey markets.",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "Market Analysis",
      author: "Michael Thompson, MAI",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop",
      tags: ["Interest Rates", "Market Trends", "Economics"],
    },
    {
      id: 5,
      slug: "preparing-your-nj-home-for-appraisal",
      title:
        "Preparing Your New Jersey Home for Maximum Appraisal Value: A Complete Guide",
      excerpt:
        "Practical tips and strategies to ensure your property shows its best value during an appraisal inspection.",
      date: "December 5, 2024",
      readTime: "8 min read",
      category: "Tips",
      author: "Sarah Mitchell, SRA",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=250&fit=crop",
      tags: ["Home Preparation", "Value Maximization", "Tips"],
    },
    {
      id: 6,
      slug: "estate-appraisals-probate-nj",
      title:
        "Estate Appraisals and Probate in New Jersey: A Comprehensive Guide",
      excerpt:
        "Understanding the unique requirements and challenges involved in estate and probate property appraisals.",
      date: "December 3, 2024",
      readTime: "11 min read",
      category: "Legal",
      author: "David Rodriguez, MAI",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      tags: ["Estate Planning", "Probate", "Legal"],
    },
  ];

  // Combine featured post and blog posts for counting
  const allPosts = [featuredPost, ...blogPosts];

  // Dynamically count posts by category
  const getCategoryCount = (categoryName: string): number => {
    return allPosts.filter((post) => post.category === categoryName).length;
  };

  const categories = [
    {
      name: "Market Analysis",
      icon: TrendingUp,
      count: getCategoryCount("Market Analysis"),
    },
    { name: "Education", icon: BookOpen, count: getCategoryCount("Education") },
    { name: "Tips", icon: Star, count: getCategoryCount("Tips") },
    { name: "Commercial", icon: Home, count: getCategoryCount("Commercial") },
    { name: "Legal", icon: FileText, count: getCategoryCount("Legal") },
  ].filter((category) => category.count > 0); // Only show categories that have posts

  // Filter posts based on selected category
  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  // Check if featured post should be shown (when no filter or matches filter)
  const showFeaturedPost =
    !selectedCategory || featuredPost.category === selectedCategory;

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Market Analysis": "bg-blue-100 text-blue-800",
      Education: "bg-green-100 text-green-800",
      Tips: "bg-yellow-100 text-yellow-800",
      Commercial: "bg-purple-100 text-purple-800",
      Legal: "bg-red-100 text-red-800",
      Technology: "bg-indigo-100 text-indigo-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHeader
        badge="Insights & Expertise"
        title="Appraisal"
        subtitle="Blog"
        description="Stay informed with the latest insights, market trends, and expert advice from our team of certified appraisers."
        variant="gradient"
      />

      {/* Featured Post */}
      {showFeaturedPost && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
            </div>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className={getCategoryColor(featuredPost.category)}>
                      {featuredPost.category}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">
                        {featuredPost.author}
                      </span>
                    </div>
                    <Button variant="outline" className="group" asChild>
                      <Link to={`/blog/${featuredPost.slug}`}>
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedCategory
                    ? `${selectedCategory} Articles`
                    : "Latest Articles"}
                </h2>
                <p className="text-gray-600">
                  {selectedCategory
                    ? `Articles focused on ${selectedCategory.toLowerCase()} topics`
                    : "Expert insights and practical advice from our certified appraisal team."}
                </p>
                {selectedCategory && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedCategory(null)}
                    className="mt-4"
                  >
                    ← Show All Articles
                  </Button>
                )}
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                        <div className="relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className={getCategoryColor(post.category)}>
                              {post.category}
                            </Badge>
                          </div>
                        </div>

                        <CardHeader>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {post.date}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </span>
                          </div>
                          <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="group"
                              asChild
                            >
                              <span>
                                Read More
                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </span>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg mb-4">
                    No articles found in the {selectedCategory} category.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedCategory(null)}
                  >
                    View All Articles
                  </Button>
                </div>
              )}

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors group ${
                        !selectedCategory
                          ? "bg-primary text-white"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center">
                        <BookOpen
                          className={`w-4 h-4 mr-3 ${!selectedCategory ? "text-white" : "text-primary"}`}
                        />
                        <span
                          className={`${!selectedCategory ? "text-white" : "text-gray-700 group-hover:text-primary"}`}
                        >
                          All Articles
                        </span>
                      </div>
                      <span
                        className={`text-sm ${!selectedCategory ? "text-blue-100" : "text-gray-500"}`}
                      >
                        {allPosts.length}
                      </span>
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors group ${
                          selectedCategory === category.name
                            ? "bg-primary text-white"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center">
                          <category.icon
                            className={`w-4 h-4 mr-3 ${
                              selectedCategory === category.name
                                ? "text-white"
                                : "text-primary"
                            }`}
                          />
                          <span
                            className={`${
                              selectedCategory === category.name
                                ? "text-white"
                                : "text-gray-700 group-hover:text-primary"
                            }`}
                          >
                            {category.name}
                          </span>
                        </div>
                        <span
                          className={`text-sm ${
                            selectedCategory === category.name
                              ? "text-blue-100"
                              : "text-gray-500"
                          }`}
                        >
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "USPAP",
                      "Market Trends",
                      "Home Values",
                      "Commercial",
                      "Investment",
                      "Legal",
                      "Technology",
                      "Tips",
                    ].map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
