import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLine } from "react-icons/si";

export const socialIcons = [
  { icon: <FaFacebookF size={18} />, link: "#facebook" },
  { icon: <FaTwitter size={18} />, link: "#twitter" },
  { icon: <FaInstagram size={18} />, link: "#instagram" },
  { icon: <SiLine size={18} />, link: "#line" },
];

export const menuItems = [
  { href: "/", label: "หน้าแรก" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/culture", label: "วัฒนธรรม" },
  { href: "/destinations", label: "จุดหมาย" },
  { href: "/contact", label: "ติดต่อเรา" },
];

export const heroImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a", // ภาพเกาะพีพี
    title: "เกาะสวรรค์แดนใต้",
    subtitle: "สัมผัสความงามของทะเลอันดามัน",
    location: "เกาะพีพี, กระบี่",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1508009603885-50cf7c579365", // ภาพวัดไทย
    title: "มนต์เสน่ห์ล้านนา",
    subtitle: "ดินแดนแห่งวัฒนธรรมอันเก่าแก่",
    location: "เชียงใหม่",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b", // ภาพตลาดน้ำ
    title: "วิถีชีวิตริมน้ำ",
    subtitle: "ย้อนรอยตลาดน้ำดั้งเดิม",
    location: "อัมพวา, สมุทรสงคราม",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1528181304800-259b08848526", // ภาพถนนคนเดิน
    title: "สีสันยามราตรี",
    subtitle: "ตระการตากับวัฒนธรรมร่วมสมัย",
    location: "ถนนคนเดินเชียงใหม่",
  },
];
