import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from '@blook/ui/card';
import { Badge } from "@blook/ui/badge";
import { Progress } from "@blook/ui/progress";
import { 
  BarChart3, 
  Target, 
  Calendar, 
  TrendingUp, 
  DollarSign, 
  Users,
  Clock,
  CheckCircle 
} from 'lucide-react';

export function DashboardPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <Card className="bg-gradient-to-br from-gray-50 to-white border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-[--brand-blue] to-blue-600 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Performance Dashboard</h3>
                      <p className="text-blue-100">Welcome back, Agent!</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-2xl"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <Badge className="bg-green-600 text-white">+12%</Badge>
                      </div>
                      <div className="text-2xl font-bold text-green-700">₹45,230</div>
                      <div className="text-sm text-green-600">Monthly Earnings</div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        <Badge className="bg-blue-600 text-white">+8</Badge>
                      </div>
                      <div className="text-2xl font-bold text-blue-700">127</div>
                      <div className="text-sm text-blue-600">Placements</div>
                    </motion.div>
                  </div>

                  {/* Progress Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-[--brand-orange]" />
                        <span className="font-semibold text-gray-700">Monthly Target</span>
                      </div>
                      <span className="text-sm text-gray-500">78/100</span>
                    </div>
                    <Progress value={78} className="h-3" />
                    <div className="text-sm text-gray-500 mt-2">22 more to reach your target</div>
                  </motion.div>

                  {/* Recent Activity */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Recent Activity
                    </h4>
                    <div className="space-y-3">
                      {[
                        { action: 'Placement Confirmed', client: 'Tech Corp', time: '2h ago', status: 'success' },
                        { action: 'Interview Scheduled', client: 'StartupXYZ', time: '4h ago', status: 'pending' },
                        { action: 'Client Meeting', client: 'BigCorp Inc', time: '6h ago', status: 'completed' },
                      ].map((activity, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                          <CheckCircle className={`w-4 h-4 ${activity.status === 'success' ? 'text-green-500' : activity.status === 'pending' ? 'text-yellow-500' : 'text-blue-500'}`} />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">{activity.action}</div>
                            <div className="text-xs text-gray-500">{activity.client}</div>
                          </div>
                          <div className="text-xs text-gray-400">{activity.time}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-[--brand-orange] rounded-2xl flex items-center justify-center z-20"
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center"
            >
              <DollarSign className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Track Your <span className="text-[--brand-blue]">Success</span> in Real-Time
              </h2>
              <p className="text-xl text-[--brand-gray-dark] leading-relaxed">
                Our comprehensive dashboard gives you complete visibility into your performance, 
                earnings, and growth trajectory.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Target,
                  title: 'Performance Tracking',
                  description: 'Monitor your targets, achievements, and progress with detailed analytics.',
                },
                {
                  icon: DollarSign,
                  title: 'Real-time Earnings',
                  description: 'See your earnings update instantly with transparent commission tracking.',
                },
                {
                  icon: Calendar,
                  title: 'Attendance Management',
                  description: 'Simple check-in/check-out system with automated attendance tracking.',
                },
                {
                  icon: Users,
                  title: 'Client Management',
                  description: 'Keep track of all your clients, placements, and ongoing opportunities.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[--brand-gray] transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[--brand-blue] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-[--brand-gray-dark] leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[--brand-orange] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                See Dashboard Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}