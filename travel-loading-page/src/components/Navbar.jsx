import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { IoAirplaneOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const menuItems = [
        { href: "/", label: "หน้าแรก" },
        { href: "/destinations", label: "จุดหมาย" },
        { href: "/culture", label: "วัฒนธรรม" },
        { href: "/booking", label: "จองเลย" },
        { href: "/contact", label: "ติดต่อเรา" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // สร้าง active style function
    const getActiveStyle = ({ isActive }) => {
        return `relative text-sm font-medium transition-colors duration-300 ${
            isActive 
            ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full' 
            : 'text-white/70 hover:text-white'
        }`;
    };

    const getMobileActiveStyle = ({ isActive }) => {
        return `block py-2 transition-colors duration-300 ${
            isActive 
            ? 'text-white font-medium' 
            : 'text-white/70 hover:text-white'
        }`;
    };

    return (
        <motion.nav 
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
                {/* Logo */}
                <NavLink 
                    to="/" 
                    className={({ isActive }) =>
                        `flex items-center space-x-2 ${isActive ? 'text-white' : 'text-white/90 hover:text-white'}`
                    }
                >
                    <IoAirplaneOutline className="text-2xl rotate-[-45deg]" />
                    <span className="text-xl font-semibold">เที่ยวไทย</span>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.href}
                            className={getActiveStyle}
                        >
                            <span className="relative">
                                {item.label}
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white/50 rounded-full"
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </span>
                        </NavLink>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
                    >
                        <BiSearch className="text-xl" />
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setNav(!nav)}
                    className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <motion.span
                            animate={{ rotate: nav ? 45 : 0, y: nav ? 8 : 0 }}
                            className="w-full h-[2px] bg-white rounded-full transform origin-left"
                        />
                        <motion.span
                            animate={{ opacity: nav ? 0 : 1 }}
                            className="w-full h-[2px] bg-white rounded-full"
                        />
                        <motion.span
                            animate={{ rotate: nav ? -45 : 0, y: nav ? -8 : 0 }}
                            className="w-full h-[2px] bg-white rounded-full transform origin-left"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {nav && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/50 backdrop-blur-lg"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <NavLink
                                        to={item.href}
                                        className={getMobileActiveStyle}
                                        onClick={() => setNav(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;