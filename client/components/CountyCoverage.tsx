import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="py-20 bg-white" id="coverage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NJ_COVERAGE.map((county) => (
            <Card key={county.county} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{county.county} County</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {county.municipalities.map((m) => (
                    <li key={m} className="list-disc list-inside">{m}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
