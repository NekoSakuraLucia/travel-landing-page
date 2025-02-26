import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { heroImages } from '../../data/items';

const Contact = () => {
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        message: '',
        error: false,
    });
    const [activeTab, setActiveTab] = useState('form');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const formRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                submitted: true,
                message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                error: true,
            });
            return;
        }

        // Mock form submission
        setTimeout(() => {
            setFormStatus({
                submitted: true,
                message:
                    'ขอบคุณสำหรับข้อความของคุณ เราจะติดต่อกลับโดยเร็วที่สุด',
                error: false,
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            // Clear status after 5 seconds
            setTimeout(() => {
                setFormStatus({
                    submitted: false,
                    message: '',
                    error: false,
                });
            }, 5000);
        }, 1000);
    };

    const contactInfo = [
        {
            id: 'address',
            icon: '📍',
            title: 'ที่อยู่',
            content:
                '123 ถนนสุขุมวิท แขวงคลองตัน เขตวัฒนา กรุงเทพฯ 10110 (ตัวอย่าง)',
        },
        {
            id: 'phone',
            icon: '📞',
            title: 'โทรศัพท์',
            content: '+66 2 123 4567, +66 99 123 4567',
        },
        {
            id: 'email',
            icon: '✉️',
            title: 'อีเมล',
            content: 'info@example.com, support@example.com (ตัวอย่าง)',
        },
        {
            id: 'hours',
            icon: '🕒',
            title: 'เวลาทำการ',
            content: 'จันทร์ - ศุกร์: 9:00 - 18:00 น., เสาร์: 10:00 - 16:00 น.',
        },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const tabVariants = {
        inactive: {
            opacity: 0.7,
            scale: 0.95,
            y: 0,
        },
        active: {
            opacity: 1,
            scale: 1,
            y: 0,
        },
    };

    return (
        <div className="relative w-full min-h-[100svh] overflow-hidden bg-black">
            {/* Background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${heroImages[2].url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                initial={{ scale: 1.2, filter: 'blur(8px)' }}
                animate={{ scale: 1, filter: 'blur(4px)' }}
                transition={{ duration: 1.5 }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-12"
                >
                    <div className="flex items-center space-x-3">
                        <motion.div
                            className="h-8 sm:h-12 w-1 bg-white rounded-full"
                            initial={{ height: 0 }}
                            animate={{ height: [0, 32, 48] }}
                            transition={{ delay: 0.5 }}
                        />
                        <div className="text-xs sm:text-sm tracking-wider">
                            <p className="text-white/70">ติดต่อเรา</p>
                            <p className="font-medium">Thai Journey</p>
                        </div>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    ติดต่อเรา
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl text-white/80 font-light max-w-3xl mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    เรายินดีที่จะได้ยินจากคุณ ไม่ว่าจะเป็นคำถาม ข้อเสนอแนะ
                    หรือการร่วมมือต่างๆ
                    กรุณากรอกแบบฟอร์มด้านล่างหรือติดต่อเราโดยตรงผ่านช่องทางที่ให้ไว้
                </motion.p>

                {/* Tab Navigation */}
                <motion.div
                    className="flex space-x-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.button
                        variants={tabVariants}
                        initial="inactive"
                        animate={activeTab === 'form' ? 'active' : 'inactive'}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-lg font-medium text-sm sm:text-base transition-all
              ${
                  activeTab === 'form'
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white border border-white/20'
              }`}
                        onClick={() => setActiveTab('form')}
                    >
                        ส่งข้อความ
                    </motion.button>
                    <motion.button
                        variants={tabVariants}
                        initial="inactive"
                        animate={activeTab === 'info' ? 'active' : 'inactive'}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-lg font-medium text-sm sm:text-base transition-all
              ${
                  activeTab === 'info'
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white border border-white/20'
              }`}
                        onClick={() => setActiveTab('info')}
                    >
                        ข้อมูลติดต่อ
                    </motion.button>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Contact Form / Info Section */}
                    <AnimatePresence mode="wait">
                        {activeTab === 'form' ? (
                            <motion.div
                                key="contact-form"
                                className="lg:col-span-8 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl font-semibold mb-6">
                                    ส่งข้อความถึงเรา
                                </h2>

                                {formStatus.submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-4 rounded-lg mb-6 ${
                                            formStatus.error
                                                ? 'bg-red-500/20 border border-red-500/50'
                                                : 'bg-green-500/20 border border-green-500/50'
                                        }`}
                                    >
                                        <p
                                            className={
                                                formStatus.error
                                                    ? 'text-red-200'
                                                    : 'text-green-200'
                                            }
                                        >
                                            {formStatus.message}
                                        </p>
                                    </motion.div>
                                )}

                                <form ref={formRef} onSubmit={handleSubmit}>
                                    <motion.div
                                        variants={staggerContainer}
                                        initial="hidden"
                                        animate="visible"
                                        className="space-y-6"
                                    >
                                        <motion.div variants={fadeInUp}>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-white/80 mb-2"
                                            >
                                                ชื่อ-นามสกุล*
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                                                placeholder="กรุณาระบุชื่อของคุณ"
                                            />
                                        </motion.div>

                                        <motion.div variants={fadeInUp}>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-white/80 mb-2"
                                            >
                                                อีเมล*
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                                                placeholder="example@email.com"
                                            />
                                        </motion.div>

                                        <motion.div variants={fadeInUp}>
                                            <label
                                                htmlFor="subject"
                                                className="block text-sm font-medium text-white/80 mb-2"
                                            >
                                                หัวข้อ
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                                                placeholder="หัวข้อของข้อความ"
                                            />
                                        </motion.div>

                                        <motion.div variants={fadeInUp}>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium text-white/80 mb-2"
                                            >
                                                ข้อความ*
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows="5"
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white resize-none"
                                                placeholder="รายละเอียดข้อความของคุณ"
                                            ></textarea>
                                        </motion.div>

                                        <motion.div
                                            variants={fadeInUp}
                                            className="pt-2"
                                        >
                                            <motion.button
                                                type="submit"
                                                className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                ส่งข้อความ
                                            </motion.button>
                                        </motion.div>
                                    </motion.div>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="contact-info"
                                className="lg:col-span-8 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl font-semibold mb-6">
                                    ข้อมูลการติดต่อ
                                </h2>

                                <motion.div
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    {contactInfo.map((info) => (
                                        <motion.div
                                            key={info.id}
                                            variants={fadeInUp}
                                            className="p-5 border border-white/20 rounded-lg hover:border-white/40 transition-all"
                                        >
                                            <div className="flex items-start space-x-4">
                                                <span className="text-2xl">
                                                    {info.icon}
                                                </span>
                                                <div>
                                                    <h3 className="text-lg font-medium mb-2">
                                                        {info.title}
                                                    </h3>
                                                    <p className="text-white/70">
                                                        {info.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div
                                    variants={fadeInUp}
                                    className="mt-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <h3 className="text-xl font-medium mb-4">
                                        ติดตามเรา
                                    </h3>
                                    <div className="flex space-x-4">
                                        {[
                                            'Facebook',
                                            'Twitter',
                                            'Instagram',
                                            'YouTube',
                                            'LINE',
                                        ].map((social) => (
                                            <motion.a
                                                key={social}
                                                href="#"
                                                className="w-12 h-12 rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-all"
                                                whileHover={{
                                                    scale: 1.1,
                                                    borderColor:
                                                        'rgba(255,255,255,0.5)',
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {social.charAt(0)}
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Map or Additional Info */}
                    <motion.div
                        className="lg:col-span-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8 flex flex-col"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold mb-6">แผนที่</h2>
                        <div className="flex-grow relative rounded-lg overflow-hidden border border-white/20">
                            {/* Replace with actual map component or embed */}
                            <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                                <p className="text-white/50 text-center px-4">
                                    แผนที่บริเวณสำนักงาน
                                    <br />
                                    <span className="text-sm">
                                        (แทนที่ด้วย Google Maps หรือ component
                                        แผนที่จริง)
                                    </span>
                                </p>
                            </div>
                        </div>

                        <motion.div
                            className="mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <h3 className="text-lg font-medium mb-3">
                                วิธีการเดินทาง
                            </h3>
                            <ul className="space-y-2 text-white/70">
                                <li className="flex items-start space-x-2">
                                    <span>🚇</span>
                                    <span>
                                        BTS: สถานีอโศก, ทางออก 3 เดิน 5 นาที
                                        (ตัวอย่าง)
                                    </span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span>🚋</span>
                                    <span>
                                        MRT: สถานีสุขุมวิท, ทางออก 1 เดิน 7 นาที
                                        (ตัวอย่าง)
                                    </span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span>🚕</span>
                                    <span>
                                        แท็กซี่: บอกคนขับว่า ไปสุขุมวิท
                                        (ตัวอย่าง)
                                    </span>
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                        คำถามที่พบบ่อย
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                q: 'ชั่วโมงการทำงานของคุณคืออะไร?',
                                a: 'เราเปิดทำการในวันจันทร์ถึงศุกร์ตั้งแต่ 9:00 น. ถึง 18:00 น. และวันเสาร์ตั้งแต่ 10:00 น. ถึง 16:00 น.',
                            },
                            {
                                q: 'ฉันจะได้รับการตอบกลับเมื่อไหร่?',
                                a: 'เรามุ่งมั่นที่จะตอบกลับทุกข้อความภายใน 24-48 ชั่วโมงทำการ',
                            },
                            {
                                q: 'คุณมีบริการพิเศษสำหรับกรุ๊ปทัวร์หรือไม่?',
                                a: 'ใช่ เรามีโปรแกรมพิเศษสำหรับกลุ่มนักท่องเที่ยวและองค์กร กรุณาติดต่อเราโดยตรงเพื่อรับข้อมูลเพิ่มเติม',
                            },
                            {
                                q: 'ฉันจะร่วมงานกับคุณได้อย่างไร?',
                                a: 'เรายินดีที่จะร่วมมือกับธุรกิจท้องถิ่นและครีเอเตอร์ กรุณาส่งรายละเอียดข้อเสนอของคุณผ่านแบบฟอร์มการติดต่อของเรา',
                            },
                        ].map((faq, idx) => (
                            <motion.div
                                key={idx}
                                className="p-5 border border-white/20 rounded-lg hover:border-white/40 transition-all"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 + idx * 0.1 }}
                            >
                                <h3 className="text-lg font-medium mb-2">
                                    {faq.q}
                                </h3>
                                <p className="text-white/70">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Navigation */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-0 mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <motion.button
                        className="px-8 py-4 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        กลับสู่หน้าหลัก
                    </motion.button>

                    <div className="flex items-center space-x-3">
                        <p className="text-white/70">
                            ชั้น 10, โลตัส (ตัวอย่าง)
                        </p>
                        <motion.div
                            className="h-8 w-1 bg-white rounded-full"
                            initial={{ height: 0 }}
                            animate={{ height: 32 }}
                            transition={{ delay: 1.1 }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
