import { motion } from 'motion/react';
import { Card, CardContent } from '@blook/ui/card';
import { Briefcase, TrendingUp, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: 'Flexible Work Options',
    description: 'Choose from Freelance, Internship, or Full-time positions that fit your lifestyle and career goals.',
    gradient: 'from-[--brand-blue] to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Guaranteed Growth',
    description: 'Comprehensive training programs, clear targets, and performance incentives to accelerate your career.',
    gradient: 'from-[--brand-orange] to-orange-600',
  },
  {
    icon: DollarSign,
    title: 'Earn More, Faster',
    description: 'Daily/weekly payouts, competitive commissions, and bonus structures that reward your success.',
    gradient: 'from-purple-500 to-purple-700',
  },
];

export function ValueProposition() {
  return (
    <section className="py-20 bg-[--brand-gray]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Join <span className="text-[--brand-blue]">BLookForce</span>?
          </h2>
          <p className="text-xl text-[--brand-gray-dark] max-w-2xl mx-auto">
            We're not just another recruitment platform. We're your partner in building a successful career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[--brand-gray-dark] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Active Members' },
              { number: '500+', label: 'Companies Partnered' },
              { number: '₹50L+', label: 'Total Earnings Distributed' },
              { number: '95%', label: 'Success Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-[--brand-blue] mb-2">
                  {stat.number}
                </div>
                <div className="text-[--brand-gray-dark]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}