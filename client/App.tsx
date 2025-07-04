import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

// Blog Posts
import NJRealEstateMarketTrends2024 from "./pages/blog/nj-real-estate-market-trends-2024";
import PreparingYourNJHomeForAppraisal from "./pages/blog/preparing-your-nj-home-for-appraisal";
import UnderstandingUSPAPGuidelinesNJ from "./pages/blog/understanding-uspap-guidelines-nj";
import CommercialPropertyValuationsNJ from "./pages/blog/commercial-property-valuations-nj";
import InterestRatesPropertyValuesNJ from "./pages/blog/interest-rates-property-values-nj";
import EstateAppraisalsProbateNJ from "./pages/blog/estate-appraisals-probate-nj";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/nj-real-estate-market-trends-2024"
            element={<NJRealEstateMarketTrends2024 />}
          />
          <Route
            path="/blog/preparing-your-nj-home-for-appraisal"
            element={<PreparingYourNJHomeForAppraisal />}
          />
          <Route
            path="/blog/understanding-uspap-guidelines-nj"
            element={<UnderstandingUSPAPGuidelinesNJ />}
          />
          <Route
            path="/blog/commercial-property-valuations-nj"
            element={<CommercialPropertyValuationsNJ />}
          />
          <Route
            path="/blog/interest-rates-property-values-nj"
            element={<InterestRatesPropertyValuesNJ />}
          />
          <Route
            path="/blog/estate-appraisals-probate-nj"
            element={<EstateAppraisalsProbateNJ />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
