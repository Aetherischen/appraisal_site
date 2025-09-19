import { NJ_COVERAGE } from "@/lib/constants";

interface CountyCoverageProps {
  title?: string;
  description?: string;
}

export default function CountyCoverage({
  title = "Areas We Cover: Central and Northern New Jersey",
  description = "Serving residential and commercial appraisal needs across the following New Jersey counties and their municipalities.",
}: CountyCoverageProps) {
  return (
    <section className="py-16 bg-white" id="coverage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">{description}</p>
        </div>

        <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
          {NJ_COVERAGE.map((county, idx) => {
            const slug = `${county.county.toLowerCase().replace(/\s+/g, "-")}-county`;
            return (
              <div
                key={county.county}
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 p-4 ${idx === 0 ? "" : "border-t"}`}
              >
                <div className="md:col-span-3 flex items-start">
                  <h3 id={slug} className="text-lg font-semibold text-gray-900">
                    {county.county} County
                  </h3>
                </div>
                <div className="md:col-span-9">
                  <ul className="columns-1 sm:columns-2 lg:columns-3 [column-gap:1.5rem]">
                    {county.municipalities.map((m) => (
                      <li key={m} className="break-inside-avoid list-disc ml-4 text-sm text-gray-700 mb-1">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
