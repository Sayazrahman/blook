import { DashboardPreview } from "./dashboard-preview";
import { EarningsSection } from "./earnings-section";
import { FinalCTA } from "./final-cta";
import { Footer } from "./footer";
import { Header } from "./header";
import { HeroSection } from "./hero-section";
import { RolesSection } from "./roles-section";
import { Testimonials } from "./testimonials";
import { ValueProposition } from "./value-proposition";


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
              <Header />
        
              {/* Hero Section */}
              <HeroSection />
        
              {/* Value Proposition Section */}
              <ValueProposition />
        
              {/* Roles Section */}
              <RolesSection />
        
              {/* Earnings & Benefits Section */}
              <EarningsSection />
        
              {/* Dashboard Preview Section */}
              <DashboardPreview />
        
              {/* Testimonials Section */}
              <Testimonials />
        
              {/* Final Call-to-Action Section */}
              <FinalCTA />
        
              {/* Footer */}
              <Footer />
      </main>
    </div>
  );
}
