import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from '@blook/ui/card';
import { Badge } from '@blook/ui/badge';
import { Button } from '@blook/ui/button';
import { Users, GraduationCap, Building2, User } from 'lucide-react';

const roles = [
  {
    icon: Users,
    title: 'Freelancers',
    description: 'Work on your own schedule with flexible project-based assignments.',
    highlights: ['Commission-based earnings', 'Payouts every 3 days', 'Work from anywhere'],
    commission: '10-15%',
    bgGradient: 'from-[--brand-blue]/10 to-blue-100',
    iconBg: 'bg-[--brand-blue]',
  },
  {
    icon: GraduationCap,
    title: 'Interns',
    description: 'Gain valuable experience while earning and building your professional network.',
    highlights: ['₹8000/month stipend', 'Performance targets', 'Completion certificates'],
    commission: '₹8K+',
    bgGradient: 'from-[--brand-orange]/10 to-orange-100',
    iconBg: 'bg-[--brand-orange]',
  },
  {
    icon: Building2,
    title: 'Franchisees',
    description: 'Lead your own team and build a thriving business with our proven model.',
    highlights: ['15% commissions', 'Team management dashboard', 'Business support'],
    commission: '15%',
    bgGradient: 'from-purple-100 to-purple-200',
    iconBg: 'bg-purple-600',
  },
  {
    icon: User,
    title: 'Full-Time Employees',
    description: 'Secure employment with growth opportunities and comprehensive benefits.',
    highlights: ['Fixed monthly salary', 'Performance incentives', 'Career advancement'],
    commission: 'Salary+',
    bgGradient: 'from-green-100 to-emerald-200',
    iconBg: 'bg-green-600',
  },
];

export function RolesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-[--brand-orange]">Career Path</span>
          </h2>
          <p className="text-xl text-[--brand-gray-dark] max-w-3xl mx-auto">
            Whether you're starting fresh or looking to advance, we have the perfect opportunity for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
              className="group cursor-pointer"
            >
              <Card className={`h-full border-0 rounded-2xl overflow-hidden bg-gradient-to-br ${role.bgGradient} hover:shadow-2xl transition-all duration-300`}>
                <CardHeader className="pb-4">
                  <motion.div
                    className={`w-12 h-12 ${role.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    <role.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                    <Badge 
                      variant="secondary" 
                      className="bg-white/80 text-gray-800 font-semibold"
                    >
                      {role.commission}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-[--brand-gray-dark] mb-4 leading-relaxed">
                    {role.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {role.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-[--brand-blue] rounded-full mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-300 hover:border-[--brand-blue] hover:text-[--brand-blue] transition-colors duration-300"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Application Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[--brand-blue] to-[--brand-orange] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have already transformed their careers with BLookForce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  className="bg-white text-[--brand-blue] hover:bg-gray-100 border-0 px-8 py-3 font-semibold rounded-xl"
                >
                  Apply Now
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[--brand-blue] px-8 py-3 font-semibold rounded-xl"
                >
                  Schedule a Call
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}