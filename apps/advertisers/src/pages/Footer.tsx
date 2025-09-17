import { MapPin, Globe, Mail, Phone, Badge } from "lucide-react";
import { motion } from "motion/react";
import blookLogo from "../assets/icons/blookLogo.png";

const Footer = () => {
  const footerColumns = [
    {
      title: "About BLook",
      links: [
        "About BLook",
        "Terms & Conditions",
        "Privacy Policy",
        "MSME Registration",
      ],
    },
    {
      title: "Platform",
      links: [
        "For Space Owners",
        "For Advertisers",
        "Earn With Us",
        "Community Circle",
      ],
    },
    {
      title: "Support",
      links: [
        "Contact Us",
        "Press & Media",
        "Careers (Coming Soon)",
        "Help Center",
      ],
    },
  ];

  return (
    <footer className="bg-white text-gray-900 font-semibold">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-2xl text-white mb-4 tracking-tight"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src={blookLogo}
                alt="BLook Logo"
                className="min-w-[150px] max-w-[150px] min-h-[78px] max-h-[78px] rounded-full"
              />
            </motion.h3>
            <p className="text-gray-900 font-semibold leading-relaxed mb-6">
              Transforming everyday spaces into earning opportunities through
              curated hyperlocal partnerships.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-900">
              <Badge className="h-4 w-4" />
              <span>Beta Platform • New Modules Launching Soon</span>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerColumns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + linkIndex * 0.05,
                    }}
                  >
                    <motion.a
                      href="#"
                      className="text-gray-900 hover:text-white transition-colors duration-300 text-sm"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-900">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>

              <div className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <a
                  href="https://www.blook.space"
                  className="hover:text-white transition-colors duration-300"
                >
                  www.BLook.space
                </a>
              </div>

              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:hello@blook.space"
                  className="hover:text-white transition-colors duration-300"
                >
                  hello@blook.space
                </a>
              </div>

              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+918828034100"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91-88280-34100
                </a>
              </div>
            </div>

            {/* Copyright + MSME Registration */}
            <div className="text-sm text-gray-900 text-center lg:text-right space-y-1">
              <div>© 2025 BLook. All rights reserved.</div>
              <div className="flex items-center justify-center lg:justify-end space-x-2">
                <Badge className="h-4 w-4" />
                <span>MSME Udyam Reg. No: UDYAM-MH-18-0027864</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
