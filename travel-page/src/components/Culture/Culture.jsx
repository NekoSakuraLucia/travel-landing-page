import { cultureCategories, cultureImages } from '../../data/items';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Autoplay,
    EffectCreative,
    Navigation,
    Pagination,
} from 'swiper/modules';
import { useState, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

const Culture = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('traditions');
    const swiperRef = useRef(null);
    const currentCulture = cultureImages[activeIndex];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="relative w-full min-h-[100svh] overflow-hidden bg-black">
            {/* Main Slider */}
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, EffectCreative, Navigation, Pagination]}
                effect="creative"
                creativeEffect={{
                    prev: {
                        translate: ['-100%', 0, 0],
                        opacity: 0,
                    },
                    next: {
                        translate: ['100%', 0, 0],
                        opacity: 0,
                    },
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                    bulletClass:
                        'inline-block w-2 h-2 rounded-full bg-white/30 cursor-pointer mx-1',
                    bulletActiveClass: 'bg-white',
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                loop={true}
                className="h-full w-full"
            >
                {cultureImages.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative">
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url(${slide.url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            initial={{ scale: 1.2, filter: 'blur(4px)' }}
                            animate={{ scale: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1.5 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Culture Content */}
            <AnimatePresence mode="wait">
                <div className="absolute inset-0 z-20 flex flex-col justify-between py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0"
                    >
                        <div className="flex items-center space-x-3">
                            <motion.div
                                className="h-8 sm:h-12 w-1 bg-white rounded-full"
                                initial={{ height: 0 }}
                                animate={{ height: [0, 32, 48] }}
                                transition={{ delay: 0.5 }}
                            />
                            <div className="text-xs sm:text-sm tracking-wider">
                                <p className="text-white/70">
                                    วัฒนธรรมและประเพณี
                                </p>
                                <p className="font-medium">
                                    {currentCulture.location}
                                </p>
                            </div>
                        </div>

                        {/* Navigation Bullets */}
                        <div className="custom-pagination flex items-center space-x-2 sm:space-x-4"></div>
                    </motion.div>

                    {/* Main Content Area */}
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mt-8 lg:mt-0">
                        {/* Left Column - Categories */}
                        <motion.div
                            className="lg:w-1/4 bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-white/90">
                                หมวดหมู่วัฒนธรรม
                            </h3>
                            <motion.ul
                                variants={staggerChildren}
                                initial="hidden"
                                animate="visible"
                                className="space-y-4"
                            >
                                {cultureCategories.map((category) => (
                                    <motion.li
                                        key={category.id}
                                        variants={fadeInUp}
                                        className="group"
                                    >
                                        <button
                                            onClick={() =>
                                                setActiveCategory(category.id)
                                            }
                                            className={`w-full text-left p-3 rounded-md transition-all flex items-center ${
                                                activeCategory === category.id
                                                    ? 'bg-white/20 text-white'
                                                    : 'hover:bg-white/10 text-white/70'
                                            }`}
                                        >
                                            <motion.span
                                                className={`w-1 h-6 rounded-full mr-3 ${
                                                    activeCategory ===
                                                    category.id
                                                        ? 'bg-white'
                                                        : 'bg-white/30'
                                                }`}
                                                animate={{
                                                    height:
                                                        activeCategory ===
                                                        category.id
                                                            ? 24
                                                            : 16,
                                                }}
                                            />
                                            {category.title}
                                        </button>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>

                        {/* Right Column - Main Content */}
                        <motion.div
                            className="lg:w-3/4 flex flex-col gap-8"
                            key={`${activeCategory}-${activeIndex}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Current Culture Display */}
                            <motion.div
                                className="bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <motion.h1
                                    className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {currentCulture.title}
                                </motion.h1>
                                <motion.p
                                    className="mt-4 text-lg sm:text-xl text-white/80 font-light"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {currentCulture.subtitle}
                                </motion.p>
                                <motion.div
                                    className="mt-6 text-base sm:text-lg text-white/70"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <p>{currentCulture.description}</p>
                                </motion.div>
                            </motion.div>

                            {/* Category Information */}
                            <motion.div
                                className="bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <motion.h2
                                    className="text-2xl sm:text-3xl font-semibold text-white/90 mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {
                                        cultureCategories.find(
                                            (cat) => cat.id === activeCategory
                                        )?.title
                                    }
                                </motion.h2>
                                <motion.p
                                    className="text-base sm:text-lg text-white/70"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    {
                                        cultureCategories.find(
                                            (cat) => cat.id === activeCategory
                                        )?.description
                                    }
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0 mt-8 lg:mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto">
                            <motion.button
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all text-sm sm:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ค้นหาเพิ่มเติม
                            </motion.button>
                            <motion.button
                                className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all text-sm sm:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ดูปฏิทินกิจกรรม
                            </motion.button>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="text-right">
                                <p className="text-2xl sm:text-4xl font-bold">
                                    {(activeIndex + 1)
                                        .toString()
                                        .padStart(2, '0')}
                                </p>
                                <p className="text-xs sm:text-sm text-white/70">
                                    จาก{' '}
                                    {cultureImages.length
                                        .toString()
                                        .padStart(2, '0')}
                                </p>
                            </div>
                            <motion.div
                                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 backdrop-blur-sm cursor-pointer"
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    if (
                                        swiperRef.current &&
                                        swiperRef.current.swiper
                                    ) {
                                        swiperRef.current.swiper.slideNext();
                                    }
                                }}
                            >
                                <span className="transform">→</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </AnimatePresence>
        </div>
    );
};

export default Culture;
