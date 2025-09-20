import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  UserPlus,
  LogIn,
  Building,
  Megaphone,
  Shield,
  User2,
  Users2,
  LandPlot,
  Home,
} from "lucide-react";
import { Button } from "@blook/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@blook/ui/dropdown-menu";
import blookLogo from "../assets/icons/blookLogo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Campaigns", path: "/for-spaces", icon: LandPlot },
    { label: "About Us", path: "/for-advertisers", icon: Megaphone },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="w-full max-w-8xl mx-auto px-10 sm:px-6 lg:px-8">
        <div className="flex items-center  justify-between  sm:justify-evenly md:justify-evenly h-20 p-3">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => navigate("/")}
          >
            <img
              src={blookLogo}
              alt="BLook Logo"
              className="min-w-[130px] max-w-[130px] min-h-[72px] max-h-[72px] rounded-full"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.path}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium relative group"
                whileHover={{ y: -2 }}
              >
                <item.icon size={18} />
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1c90fc] to-[#ff8731] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-[#ff8731] text-white !rounded-md hover:bg-[#1c90fc] transition-colors px-6 py-2  flex items-center">
                  <User2 size={18} />
                  <span className="ml-2">Get Started</span>
                  <ChevronDown size={16} className="ml-2" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-56 p-2 border-none bg-white shadow-lg"
                align="end"
              >
                <div className="space-y-1">
                  <Link to="/register">
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#ff8731] hover:text-white transition-colors">
                      <UserPlus size={18} className="mr-2" /> Register
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/login">
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#ff8731] hover:text-white transition-colors">
                      <LogIn size={18} className="mr-2" /> Login
                    </DropdownMenuItem>
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-blue-600 p-2 relative z-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </motion.button>
          </div> */}
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-gray-100 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="px-4 pt-4 pb-3 space-y-2">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.path}
                    className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </motion.a>
                ))}

                {/* Mobile Auth Buttons */}
                <div className="flex flex-col space-y-2 pt-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="bg-[#ff8731] text-white hover:bg-[#1c90fc] transition-colors px-6 py-2 font-semibold flex items-center">
                        <User2 size={18} />
                        <span className="ml-2">Get Started</span>
                        <ChevronDown size={16} className="ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-68 p-4 border-none bg-white shadow-lg"
                      align="end"
                    >
                      {/* Toggle Switch */}
                      <div className="relative flex items-center bg-gray-100 rounded-full p-1 mb-4">
                        <motion.div
                          className="absolute top-1 bottom-1 bg-white rounded-full shadow-sm"
                          animate={{
                            left: isLoginMode ? "50%" : "4px",
                            width: "calc(50% - 4px)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                        <button
                          className={`relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                            !isLoginMode ? "text-[#ff8731]" : "text-gray-600"
                          }`}
                          onClick={() => setIsLoginMode(false)}
                        >
                          <UserPlus size={16} /> Register
                        </button>
                        <button
                          className={`relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                            isLoginMode ? "text-[#1c90fc]" : "text-gray-600"
                          }`}
                          onClick={() => setIsLoginMode(true)}
                        >
                          <LogIn size={16} /> Sign In
                        </button>
                      </div>

                      {/* Dynamic Options */}
                      <div className="space-y-1">
                        {!isLoginMode ? (
                          <>
                            <Link to="/registration/SpaceOwnerRegistration">
                              <DropdownMenuItem className="cursor-pointer hover:bg-[#ff8731] hover:text-white transition-colors">
                                <Building size={18} className="mr-2" /> Register
                                as Space Owner
                              </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem className="cursor-pointer hover:bg-[#ff8731] hover:text-white transition-colors">
                              <Megaphone size={18} className="mr-2" /> Register
                              as Advertiser
                            </DropdownMenuItem>
                          </>
                        ) : (
                          <>
                            <Link to="/login/spaceOwnerLogin">
                              <DropdownMenuItem className="cursor-pointer hover:bg-[#ff8731] hover:text-white transition-colors">
                                <Building size={18} className="mr-2" /> Sign In
                                as Space Owner
                              </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem className="cursor-pointer hover:bg-[#ff8731] hover:text-white transition-colors">
                              <Megaphone size={18} className="mr-2" /> Sign In
                              as Advertiser
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer hover:bg-[#ff8731] hover:text-white transition-colors">
                              <Shield size={18} className="mr-2" /> Sign In as
                              Admin
                            </DropdownMenuItem>
                          </>
                        )}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
