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
      className={`relative ${bgClass} pt-2 pb-20`}
      style={{
        backgroundImage: "url('/section.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(86, 105, 114, 0.5) 0%, rgba(86, 105, 114, 0.5) 60%, rgba(86, 105, 114, 0.25) 63%, rgba(86, 105, 114, 0) 65%)",
        }}
      ></div>
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to right, rgba(86, 105, 114, 0.5) 0%, rgba(86, 105, 114, 0.5) 85%, rgba(86, 105, 114, 0.25) 90%, rgba(86, 105, 114, 0) 95%)",
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered brokerage message at top */}
        <div className="text-center mb-8">
          <p className="text-xs text-white/70 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm inline-block">
            Real estate brokerage services available, contact for additional
            details
          </p>
        </div>
        <div className="text-center">
          {badge && (
            <Badge className="mb-4" variant="secondary">
              {badge}
            </Badge>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {subtitle ? (
              <>
                {title} <span className="text-white">{subtitle}</span>
              </>
            ) : (
              title
            )}
          </h1>
          {description && (
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
