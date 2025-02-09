import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Navigation } from 'swiper/modules';
import { heroImages } from '../../data/heroImages';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-creative';

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const currentSlide = heroImages[activeIndex];

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black font-['Noto_Sans_Thai']">
            {/* Main Slider */}
            <Swiper
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
                <div className="absolute inset-0 z-20 flex flex-col justify-between py-20 px-8 lg:px-16">
                    {/* Top Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-between items-start"
                    >
                        <div className="flex items-center space-x-3">
                            <motion.div 
                                className="h-12 w-1 bg-white rounded-full"
                                initial={{ height: 0 }}
                                animate={{ height: 48 }}
                                transition={{ delay: 0.5 }}
                            />
                            <div className="text-sm tracking-wider">
                                <p className="text-white/70">ค้นพบประสบการณ์ใหม่</p>
                                <p className="font-medium">{currentSlide.location}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            {heroImages.map((_, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`w-14 h-1 rounded-full cursor-pointer
                                        ${idx === activeIndex ? 'bg-white' : 'bg-white/20'}`}
                                    whileHover={{ scale: 1.2 }}
                                    onClick={() => setActiveIndex(idx)}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Center Content */}
                    <motion.div 
                        className="max-w-4xl"
                        key={activeIndex}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                    >
                        <motion.h1 
                            className="text-7xl font-bold leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            {currentSlide.title}
                        </motion.h1>
                        <motion.p 
                            className="mt-6 text-2xl text-white/80 font-light max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            {currentSlide.subtitle}
                        </motion.p>
                    </motion.div>

                    {/* Bottom Section */}
                    <motion.div 
                        className="flex justify-between items-end"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="flex gap-6">
                            <motion.button
                                className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                สำรวจสถานที่
                            </motion.button>
                            <motion.button
                                className="px-8 py-4 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ดูแกลเลอรี
                            </motion.button>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="text-right">
                                <p className="text-4xl font-bold">{(activeIndex + 1).toString().padStart(2, '0')}</p>
                                <p className="text-sm text-white/70">จาก {heroImages.length.toString().padStart(2, '0')}</p>
                            </div>
                            <motion.div 
                                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 backdrop-blur-sm cursor-pointer"
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