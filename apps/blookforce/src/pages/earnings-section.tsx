import { motion, useInView } from 'motion/react';
import { Card, CardContent } from '@blook/ui/card';
import { TrendingUp, Clock, Trophy, Zap } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '' 
}: { 
  end: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string; 
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-[--brand-blue]">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

const benefits = [
  {
    icon: TrendingUp,
    title: 'High Commission Rates',
    description: 'Earn 10-15% commission on every successful placement with transparent tracking.',
    stat: '15',
    statLabel: '% Max Commission',
  },
  {
    icon: Clock,
    title: 'Fast Payouts',
    description: 'Get paid every 3 days for freelancers, weekly for others. No more waiting.',
    stat: '3',
    statLabel: 'Days Payout',
  },
  {
    icon: Trophy,
    title: 'Performance Bonuses',
    description: 'Earn ₹1000 bonus for every 5000 customers you bring. Sky is the limit!',
    stat: '1000',
    statLabel: '₹ Bonus/5K customers',
  },
  {
    icon: Zap,
    title: 'Intern Stipends',
    description: 'Get ₹8000/month stipend plus targets and certificates for skill development.',
    stat: '8000',
    statLabel: '₹ Monthly Stipend',
  },
];

export function EarningsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[--brand-gray] to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Maximize Your <span className="text-[--brand-orange]">Earnings</span> Potential
            </h2>
            <p className="text-xl text-[--brand-gray-dark] mb-8 leading-relaxed">
              We believe in rewarding performance. Our comprehensive benefits package ensures 
              you're compensated fairly for your hard work and dedication.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white rounded-2xl shadow-lg"
              >
                <AnimatedCounter end={50000} prefix="₹" suffix="+" />
                <div className="text-[--brand-gray-dark] mt-2">Average Monthly Earnings</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white rounded-2xl shadow-lg"
              >
                <AnimatedCounter end={95} suffix="%" />
                <div className="text-[--brand-gray-dark] mt-2">On-time Payment Rate</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[--brand-blue] to-blue-600 text-white p-6 rounded-2xl"
            >
              <h3 className="font-bold text-lg mb-2">💡 Pro Tip</h3>
              <p className="text-white/90">
                Top performers earn 3x more by leveraging our training programs and referral bonuses.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-[--brand-orange] to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 10 }}
                    >
                      <benefit.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-[--brand-gray-dark] text-sm mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    
                    <div className="mt-auto">
                      <AnimatedCounter 
                        end={parseInt(benefit.stat)} 
                        prefix={benefit.statLabel.includes('₹') ? '₹' : ''}
                        suffix={benefit.statLabel.includes('%') ? '%' : ''}
                      />
                      <div className="text-xs text-[--brand-gray-dark] mt-1">
                        {benefit.statLabel.replace('₹', '').replace('%', '')}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Earning?
            </h3>
            <p className="text-[--brand-gray-dark] mb-6 max-w-2xl mx-auto">
              Join our community of high-earning professionals and take control of your financial future.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[--brand-blue] to-[--brand-orange] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Calculate My Potential Earnings
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}