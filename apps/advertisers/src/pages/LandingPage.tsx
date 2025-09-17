import React from "react";
import { motion } from "framer-motion";
import { Button } from "@blook/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@blook/ui/card";
import { Badge } from "@blook/ui/badge";
import {
  MapPin,
  Search,
  Calendar,
  BarChart3,
  Zap,
  Brain,
  TrendingUp,
  Presentation,
  Building2,
  Coffee,
  Dumbbell,
  QrCode,
  Monitor,
  Megaphone,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import blookLogo from "../assets/icons/blookLogo.png";
import Footer from "./Footer";
import { Header } from "./Header";

interface LandingPageProps {
  onNavigate: (page: "landing" | "login" | "register" | "dashboard") => void;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen mt-5">
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20 ">
        <div className="container mx-auto px-6 text-center mt-5 pt-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Discover & Book Hyperlocal Spaces Instantly
            </h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Find societies, gyms, cafés, clinics & more with footfall insights
              and real-time availability. Create campaigns that connect with
              your target audience where they live, work, and play.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="text-lg px-8"
                onClick={() => onNavigate("register")}
              >
                Explore Spaces Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Request a Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            className="mt-16 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Building2, label: "Societies", status: "Live" },
                  { icon: Dumbbell, label: "Gyms", status: "Available" },
                  { icon: Coffee, label: "Cafés", status: "Booked" },
                  { icon: QrCode, label: "QR Codes", status: "Active" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    custom={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-4 rounded-lg bg-muted/30"
                  >
                    <item.icon className="h-8 w-8 text-primary mb-2" />
                    <span className="font-medium">{item.label}</span>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      {item.status}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white px-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Get your campaigns live in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Search & Filter",
                icon: Search,
                text: "Find perfect locations by city, pincode, demographics, interests, and footfall data.",
              },
              {
                title: "Evaluate & Book",
                icon: Calendar,
                text: "Review photos, rates, and availability calendar. Book instantly with real-time confirmation.",
              },
              {
                title: "Track & Optimise",
                icon: BarChart3,
                text: "Monitor scan data, campaign ROI, and detailed reports. Optimize for better results.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center border-2 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Formats */}
      <section className="py-20 bg-muted/30 px-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advertising Formats</h2>
            <p className="text-xl text-muted-foreground">
              Choose from multiple formats to reach your audience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                icon: Building2,
                name: "Wall Branding",
                desc: "High visibility outdoor walls",
              },
              {
                icon: ArrowRight,
                name: "Lift Posters",
                desc: "Captive audience engagement",
              },
              {
                icon: Megaphone,
                name: "Standees",
                desc: "Portable display solutions",
              },
              {
                icon: QrCode,
                name: "QR Codes",
                desc: "Interactive digital experiences",
              },
              {
                icon: Monitor,
                name: "Digital Screens",
                desc: "Dynamic content display",
              },
              {
                icon: Star,
                name: "Kiosks",
                desc: "Interactive information centers",
              },
            ].map((format, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={i}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <format.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{format.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {format.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Tools */}
      <section className="py-20 bg-white px-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI-Powered Smart Tools</h2>
            <p className="text-xl text-muted-foreground">
              Advanced AI tools to maximize your campaign effectiveness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "BLookMatch AI™",
                icon: Brain,
                color: "from-blue-500 to-purple-600",
                desc: "Smart space recommendations based on your campaign objectives and target audience.",
              },
              {
                title: "BLookIntel AI™",
                icon: TrendingUp,
                color: "from-green-500 to-teal-600",
                desc: "ROI optimization suggestions and predictive analytics for better campaign performance.",
              },
              {
                title: "BLookHeat™",
                icon: Zap,
                color: "from-red-500 to-orange-600",
                desc: "Heatmap analytics showing real-time engagement patterns and high-traffic zones.",
              },
              {
                title: "BLookPitch AI™",
                icon: Presentation,
                color: "from-purple-500 to-pink-600",
                desc: "Automated pitch generation and proposal creation for faster campaign approvals.",
              },
            ].map((tool, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="group hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-primary">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tool.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Proof */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 px-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Flexible Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Choose the pricing model that works best for your campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Pay-as-you-go</CardTitle>
                  <CardDescription>
                    Perfect for testing and small campaigns
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>No minimum commitment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Instant activation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Real-time analytics</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="border-2 border-secondary hover:border-secondary/80 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Bulk Packages</CardTitle>
                  <CardDescription>
                    Best value for large-scale campaigns
                  </CardDescription>
                  <Badge className="bg-secondary text-white">Recommended</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Volume discounts up to 30%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Priority support</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Case Study */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-4">Success Story</h3>
            <div className="text-4xl font-bold text-primary mb-2">3,000+</div>
            <p className="text-xl mb-4">QR code scans in just 9 days</p>
            <p className="text-muted-foreground">
              A leading FMCG brand achieved exceptional engagement with their
              hyperlocal campaign in Pune, targeting tech professionals in
              premium societies.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
