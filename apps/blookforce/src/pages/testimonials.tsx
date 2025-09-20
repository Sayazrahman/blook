import { motion } from 'motion/react';
import { Avatar, AvatarFallback, AvatarImage } from '@blook/ui/avatar';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@blook/ui/card';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Senior Sales Agent',
    company: 'Mumbai Branch',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'BLookForce changed my life! I went from struggling to find clients to earning ₹80,000+ monthly. The training and support are incredible.',
    achievement: '₹80K+ Monthly',
  },
  {
    name: 'Rahul Patel',
    role: 'Freelancer',
    company: 'Gujarat',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'The flexibility is amazing. I work part-time while studying and still make ₹25,000 monthly. Fast payouts every 3 days!',
    achievement: 'Financial Independence',
  },
  {
    name: 'Sneha Gupta',
    role: 'Team Leader',
    company: 'Delhi NCR',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Started as an intern, now I lead a team of 15 agents. BLookForce provides clear growth paths and excellent mentorship.',
    achievement: 'Career Growth',
  },
  {
    name: 'Amit Kumar',
    role: 'Franchisee',
    company: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Managing my own BLookForce franchise has been the best business decision. 15% commission on team performance is fantastic!',
    achievement: 'Business Owner',
  },
  {
    name: 'Kavya Reddy',
    role: 'Marketing Intern',
    company: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'The internship program is outstanding. ₹8,000 stipend plus commissions and I got a job offer before completing!',
    achievement: 'Skill Development',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

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
            Success <span className="text-[--brand-orange]">Stories</span>
          </h2>
          <p className="text-xl text-[--brand-gray-dark] max-w-3xl mx-auto">
            Hear from our community of successful agents, freelancers, and entrepreneurs 
            who transformed their careers with BLookForce.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative mb-12">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Quote Section */}
                  <div className="md:col-span-2">
                    <Quote className="w-12 h-12 text-[--brand-blue] mb-6" />
                    <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                      "{testimonials[currentIndex].text}"
                    </blockquote>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Achievement Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[--brand-blue] to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      {testimonials[currentIndex].achievement}
                    </div>
                  </div>

                  {/* Profile Section */}
                  <div className="text-center md:text-left">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative mb-4"
                    >
                      <Avatar className="w-24 h-24 mx-auto md:mx-0 ring-4 ring-[--brand-orange]/20">
                        <AvatarImage src={testimonials[currentIndex].image} />
                        <AvatarFallback className="bg-[--brand-blue] text-white text-xl">
                          {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[--brand-orange] rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white fill-white" />
                      </div>
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-[--brand-blue] font-semibold mb-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-[--brand-gray-dark] text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[--brand-blue] hover:text-white transition-colors duration-300 z-10"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[--brand-blue] hover:text-white transition-colors duration-300 z-10"
          >
            →
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlay(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[--brand-blue] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlay(false);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[--brand-blue] text-white shadow-lg'
                  : 'bg-white hover:bg-gray-50 hover:shadow-md'
              }`}
            >
              <Avatar className="w-12 h-12 mx-auto mb-2">
                <AvatarImage src={testimonial.image} />
                <AvatarFallback className="bg-[--brand-orange] text-white">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className={`text-sm font-semibold ${index === currentIndex ? 'text-white' : 'text-gray-900'}`}>
                {testimonial.name.split(' ')[0]}
              </div>
              <div className={`text-xs ${index === currentIndex ? 'text-blue-100' : 'text-[--brand-gray-dark]'}`}>
                {testimonial.role}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}