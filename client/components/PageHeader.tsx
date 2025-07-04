import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  variant?: "default" | "gradient";
}

const PageHeader = ({
  badge,
  title,
  subtitle,
  description,
  variant = "default",
}: PageHeaderProps) => {
  const bgClass =
    variant === "gradient"
      ? "bg-gradient-to-br from-primary/10 via-blue-50 to-white"
      : "bg-gray-50";

  return (
    <section
      className={`relative ${bgClass} py-20`}
      style={{
        backgroundImage: "url('/header.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgb(86, 105, 114) 0%, rgba(86, 105, 114, 0.8) 40%, rgba(86, 105, 114, 0.4) 65%, rgba(86, 105, 114, 0) 75%)",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, rgba(249, 250, 251, 0) 0%, rgba(249, 250, 251, 0.3) 25%, rgba(249, 250, 251, 0.6) 50%, rgba(249, 250, 251, 0.8) 75%, rgb(249, 250, 251) 100%)",
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {badge && (
            <Badge className="mb-4" variant="secondary">
              {badge}
            </Badge>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {subtitle ? (
              <>
                {title} <span className="text-primary">{subtitle}</span>
              </>
            ) : (
              title
            )}
          </h1>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
