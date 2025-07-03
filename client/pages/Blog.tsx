import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  const placeholderPosts = [
    {
      id: 1,
      title: "Understanding Home Appraisal Process in New Jersey",
      excerpt:
        "A comprehensive guide to what homeowners can expect during the appraisal process.",
      date: "March 15, 2024",
      category: "Education",
    },
    {
      id: 2,
      title: "Market Trends in New Jersey Real Estate",
      excerpt:
        "Current market analysis and trends affecting property values across the state.",
      date: "March 10, 2024",
      category: "Market Analysis",
    },
    {
      id: 3,
      title: "Preparing Your Home for an Appraisal",
      excerpt:
        "Tips and best practices to ensure your property shows its true value.",
      date: "March 5, 2024",
      category: "Tips",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights, market trends, and expert
            advice from our team of certified appraisers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderPosts.map((post) => (
            <Card
              key={post.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">More blog posts coming soon...</p>
        </div>
      </div>
    </div>
  );
}
