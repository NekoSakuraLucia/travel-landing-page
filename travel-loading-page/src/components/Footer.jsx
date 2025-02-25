import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { socialIcons, menuItems } from "../data/items";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* เนื้อหาส่วนท้ายหลัก */}
        <div className="flex flex-col items-center text-center">
          {/* ส่วนแบรนด์ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <h3 className="text-2xl font-bold mb-4">Travel Landing Page</h3>
            <p className="text-gray-400 mb-6">
              ค้นพบประสบการณ์การท่องเที่ยวที่แตกต่าง
              กับเราที่พร้อมพาคุณไปในทุกที่
            </p>
            <div className="flex justify-center space-x-4">
              {socialIcons.map(({ icon, link }) => (
                <motion.a
                  key={link}
                  href={link}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white/80 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h4 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h4>
            <ul className="flex flex-wrap justify-center gap-6">
              {menuItems.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ y: -2 }}
                  className="cursor-pointer"
                >
                  <NavLink
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* แถบด้านล่าง */}
          <motion.div
            className="w-full pt-8 border-t border-white/10 text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p>
              © {new Date().getFullYear()} NekoSakuraLucia. All rights reserved.
            </p>
            <p className="my-2">
              เป็นเพียงเว็บไซต์ demo เท่านั้นสนใจซื้อ source code เว็บนี้ติดต่อ{" "}
              <NavLink
                to={"https://www.facebook.com/cxllme.neko"}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 decoration-blue-400"
              >
                Cxllme Neko (NekoSakuraLucia)
              </NavLink>
            </p>
            <p>
              Template Made by:{" "}
              <NavLink
                to={"https://github.com/NekoSakuraLucia"}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 decoration-blue-400"
              >
                NekoSakuraLucia
              </NavLink>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
