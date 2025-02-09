import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Navigation } from 'swiper/modules';
import { heroImages } from '../../data/items';
import { useState, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-creative';

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const currentSlide = heroImages[activeIndex];

    const handleSlideClick = (idx) => {
        setActiveIndex(idx);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(idx);
        }
    };

    return (
        <div className="relative w-full h-[100svh] overflow-hidden bg-black">
            {/* Main Slider */}
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, EffectCreative, Navigation]}
                effect="creative"
                creativeEffect={{
                    prev: {
                        translate: [0, 0, -400],
                        rotate: [0, 0, -25],
                        opacity: 0
                    },
                    next: {
                        translate: [0, 0, -400],
                        rotate: [0, 0, 25],
                        opacity: 0
                    }
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                loop={true}
                className="h-full w-full"
            >
                {heroImages.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative">
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url(${slide.url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Main Content */}
            <AnimatePresence mode="wait">
                <div className="absolute inset-0 z-20 flex flex-col justify-between py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
                    {/* Top Section */}
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
                                <p className="text-white/70">ค้นพบประสบการณ์ใหม่</p>
                                <p className="font-medium">{currentSlide.location}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-4">
                            {heroImages.map((_, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`w-8 sm:w-14 h-1 rounded-full cursor-pointer
                                        ${idx === activeIndex ? 'bg-white' : 'bg-white/20'}`}
                                    whileHover={{ scale: 1.2 }}
                                    onClick={() => handleSlideClick(idx)}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 mt-8 lg:mt-0">
                        {/* Text Content */}
                        <motion.div
                            className="max-w-2xl"
                            key={`text-${activeIndex}`}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                        >
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {currentSlide.title}
                            </motion.h1>
                            <motion.p
                                className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-white/80 font-light"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                {currentSlide.subtitle}
                            </motion.p>
                        </motion.div>

                        {/* Preview Images */}
                        <motion.div
                            className="hidden lg:flex items-center gap-4 overflow-x-auto scrollbar-hide"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            {heroImages.map((image, idx) => (
                                <motion.div
                                    key={image.id}
                                    className={`relative rounded-lg overflow-hidden cursor-pointer flex-shrink-0
                                        ${idx === activeIndex ? 'w-36 sm:w-48 h-56 sm:h-72' : 'w-20 sm:w-24 h-56 sm:h-72 opacity-50'}
                                    `}
                                    whileHover={{ opacity: 1 }}
                                    onClick={() => handleSlideClick(idx)}
                                    layoutId={`preview-${idx}`}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${image.url})` }}
                                    />
                                    {idx === activeIndex && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <p className="text-sm font-medium">{image.location}</p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0 mt-8 lg:mt-0"
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
                                สำรวจสถานที่
                            </motion.button>
                            <motion.button
                                className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all text-sm sm:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ดูแกลเลอรี
                            </motion.button>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="text-right">
                                <p className="text-2xl sm:text-4xl font-bold">{(activeIndex + 1).toString().padStart(2, '0')}</p>
                                <p className="text-xs sm:text-sm text-white/70">จาก {heroImages.length.toString().padStart(2, '0')}</p>
                            </div>
                            <motion.div
                                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 backdrop-blur-sm cursor-pointer"
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="transform rotate-90">↓</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </AnimatePresence>
        </div>
    );
};

export default Hero;