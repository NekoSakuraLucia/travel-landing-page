import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCreative,
  Navigation,
  EffectFade,
} from "swiper/modules";
import { heroImages } from "../../data/items";
import { useState, useRef } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("history");
  const swiperRef = useRef(null);
  const currentSlide = heroImages[activeIndex];

  const handleSlideClick = (idx) => {
    setActiveIndex(idx);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(idx);
    }
  };

  const aboutTabs = [
    { id: "history", label: "ประวัติ" },
    { id: "attractions", label: "สถานที่ท่องเที่ยว" },
    { id: "culture", label: "วัฒนธรรม" },
    { id: "gallery", label: "แกลเลอรี" },
  ];

  const locationDetails = {
    history: {
      title: "ประวัติอันยาวนาน",
      description:
        "เส้นทางประวัติศาสตร์ของสถานที่ท่องเที่ยวในประเทศไทยมีความหลากหลายและมีเรื่องราวที่น่าสนใจมานับพันปี ตั้งแต่ยุคอาณาจักรโบราณอย่างสุโขทัย อยุธยา จนถึงรัตนโกสินทร์ แต่ละพื้นที่มีเอกลักษณ์และวัฒนธรรมที่แตกต่างกันไป ทำให้นักท่องเที่ยวได้สัมผัสมนต์เสน่ห์ของประวัติศาสตร์ไทยในแต่ละภูมิภาค",
      facts: [
        "ก่อตั้งเมื่อกว่า 700 ปีที่แล้ว",
        "ได้รับการขึ้นทะเบียนเป็นมรดกโลกในปี พ.ศ. 2534",
        "เป็นเมืองศูนย์กลางทางวัฒนธรรมแห่งภูมิภาค",
      ],
    },
    attractions: {
      title: "สถานที่ท่องเที่ยวชั้นนำ",
      description:
        "ประเทศไทยมีสถานที่ท่องเที่ยวที่หลากหลาย ทั้งทะเล ภูเขา และวัดวาอาราม ในภาคใต้มีหาดทรายขาวละเอียดและน้ำทะเลใสสะอาด ทางภาคเหนือมีภูเขาและธรรมชาติที่งดงาม ภาคกลางมีวัดและพระราชวังที่ทรงคุณค่าทางประวัติศาสตร์ ทำให้นักท่องเที่ยวสามารถเลือกเที่ยวได้ตามความชอบและฤดูกาล",
      highlights: [
        "เกาะพีพี - สวรรค์แห่งท้องทะเลอันดามัน",
        "เชียงใหม่ - มนต์เสน่ห์แห่งล้านนา",
        "อัมพวา - วิถีชีวิตริมน้ำแบบดั้งเดิม",
        "ถนนคนเดิน - สีสันยามราตรีที่น่าค้นหา",
      ],
    },
    culture: {
      title: "วัฒนธรรมอันงดงาม",
      description:
        "วัฒนธรรมไทยมีความโดดเด่นด้วยความอ่อนช้อยและละเอียดอ่อน ทั้งในด้านอาหาร การแต่งกาย ศิลปะการแสดง และประเพณีต่างๆ ประเพณีลอยกระทง สงกรานต์ และการแสดงโขน-ละครไทย เป็นเพียงส่วนหนึ่งของวัฒนธรรมอันหลากหลายที่ได้รับการสืบทอดมาอย่างยาวนาน ทำให้ประเทศไทยเป็นจุดหมายปลายทางที่น่าสนใจสำหรับนักท่องเที่ยวที่ต้องการสัมผัสวัฒนธรรมที่แท้จริง",
      traditions: [
        "ลอยกระทง - ประเพณีแห่งสายน้ำ",
        "สงกรานต์ - ปีใหม่ไทยแห่งความสนุกสนาน",
        "การละเล่นพื้นบ้าน - มรดกทางวัฒนธรรมที่น่าหลงใหล",
      ],
    },
    gallery: {
      title: "ภาพความทรงจำ",
      description:
        "ภาพถ่ายบอกเล่าเรื่องราวได้มากกว่าคำพูดนับพันคำ แกลเลอรีของเรารวบรวมภาพความประทับใจจากทั่วประเทศไทย ตั้งแต่พระอาทิตย์ตกที่เกาะพีพี ความวุ่นวายในตลาดน้ำอัมพวา วิถีชีวิตในภาคเหนือ ไปจนถึงสถาปัตยกรรมอันวิจิตรของวัดวาอาราม ทุกภาพล้วนถ่ายทอดความงดงามและเสน่ห์ของประเทศไทยได้อย่างไม่มีที่สิ้นสุด",
    },
  };

  // Additional images for gallery
  const galleryImages = [
    {
      id: 101,
      url: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a",
      caption: "วัดพระธาตุดอยสุเทพ",
      location: "เชียงใหม่",
    },
    {
      id: 102,
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      caption: "หาดพัทยา",
      location: "ชลบุรี",
    },
    {
      id: 103,
      url: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5",
      caption: "วัดอรุณราชวรารามราชวรมหาวิหาร",
      location: "กรุงเทพฯ",
    },
    {
      id: 104,
      url: "https://images.unsplash.com/photo-1583321500900-82807e458f3c",
      caption: "อุทยานประวัติศาสตร์สุโขทัย",
      location: "สุโขทัย",
    },
    {
      id: 105,
      url: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa",
      caption: "ภูชี้ฟ้า",
      location: "เชียงราย",
    },
    {
      id: 106,
      url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
      caption: "เกาะพีพี",
      location: "กระบี่",
    },
  ];

  return (
    <div className="relative w-full min-h-[100svh] overflow-hidden bg-black">
      {/* Background Slider */}
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectCreative, Navigation]}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
            rotate: [0, 0, -25],
            opacity: 0,
          },
          next: {
            translate: [0, 0, -400],
            rotate: [0, 0, 25],
            opacity: 0,
          },
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
        className="h-full w-full absolute inset-0"
      >
        {heroImages.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <div className="relative z-20 container mx-auto px-4 md:px-8 py-16 md:py-24 min-h-[100svh] flex flex-col">
          {/* Page Title */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                className="h-12 w-1 bg-white rounded-full"
                initial={{ height: 0 }}
                animate={{ height: 48 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                เกี่ยวกับเรา
              </h1>
            </div>
            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              ค้นพบความงดงามและเสน่ห์ของสถานที่ท่องเที่ยวในประเทศไทย
              ที่เต็มไปด้วยประวัติศาสตร์ วัฒนธรรม และธรรมชาติอันน่าทึ่ง
            </motion.p>
          </motion.div>

          {/* Tabs Navigation */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 md:gap-4">
              {aboutTabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-black font-medium"
                      : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Left Column - Text Content */}
              <div className="flex flex-col justify-center">
                {activeTab !== "gallery" ? (
                  <>
                    <motion.h2
                      className="text-2xl md:text-4xl font-bold mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {locationDetails[activeTab].title}
                    </motion.h2>
                    <motion.p
                      className="text-base md:text-lg text-white/80 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {locationDetails[activeTab].description}
                    </motion.p>

                    {/* List Items */}
                    {(activeTab === "history" ||
                      activeTab === "attractions" ||
                      activeTab === "culture") && (
                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-lg md:text-xl font-medium mb-4">
                          {activeTab === "history"
                            ? "ข้อมูลน่าสนใจ"
                            : activeTab === "attractions"
                            ? "ไฮไลท์"
                            : "ประเพณีสำคัญ"}
                        </h3>
                        <ul className="space-y-3">
                          {(activeTab === "history"
                            ? locationDetails.history.facts
                            : activeTab === "attractions"
                            ? locationDetails.attractions.highlights
                            : locationDetails.culture.traditions
                          ).map((item, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + idx * 0.1 }}
                            >
                              <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mt-2.5"></span>
                              <span className="text-white/90">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* CTA Buttons */}
                    <motion.div
                      className="flex gap-4 mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.button
                        className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {activeTab === "history"
                          ? "ดูประวัติเพิ่มเติม"
                          : activeTab === "attractions"
                          ? "ค้นหาสถานที่"
                          : "สัมผัสวัฒนธรรม"}
                      </motion.button>
                      <motion.button
                        className="px-6 py-3 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ดูวิดีโอ
                      </motion.button>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.h2
                      className="text-2xl md:text-4xl font-bold mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {locationDetails.gallery.title}
                    </motion.h2>
                    <motion.p
                      className="text-base md:text-lg text-white/80 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {locationDetails.gallery.description}
                    </motion.p>

                    {/* Small Gallery Preview */}
                    <motion.div
                      className="grid grid-cols-3 gap-2 md:gap-3 mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {galleryImages.slice(0, 3).map((image, idx) => (
                        <motion.div
                          key={image.id}
                          className="relative aspect-square rounded-lg overflow-hidden"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${image.url})` }}
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      className="flex gap-4 mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.button
                        className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ดูภาพทั้งหมด
                      </motion.button>
                    </motion.div>
                  </>
                )}
              </div>

              {/* Right Column - Visual Content */}
              <div className="flex items-center justify-center">
                {activeTab !== "gallery" ? (
                  <motion.div
                    className="relative w-full h-full max-h-[500px] rounded-xl overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <Swiper
                      modules={[Autoplay, EffectFade, Navigation]}
                      effect="fade"
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      className="h-full w-full rounded-xl"
                    >
                      {[...heroImages, ...galleryImages.slice(0, 3)].map(
                        (slide) => (
                          <SwiperSlide
                            key={`feature-${slide.id}`}
                            className="relative rounded-xl overflow-hidden"
                          >
                            <motion.div
                              className="absolute inset-0"
                              style={{
                                backgroundImage: `url(${slide.url})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                              initial={{ scale: 1.1 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 1.2 }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-sm text-white/70">
                                  {slide.location}
                                </p>
                                <p className="text-xl font-medium">
                                  {slide.title || slide.caption}
                                </p>
                              </div>
                            </motion.div>
                          </SwiperSlide>
                        )
                      )}
                    </Swiper>
                  </motion.div>
                ) : (
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {galleryImages.map((image, idx) => (
                      <motion.div
                        key={image.id}
                        className="relative aspect-square rounded-lg overflow-hidden group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${image.url})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <p className="text-xs text-white/80">
                              {image.location}
                            </p>
                            <p className="text-sm font-medium">
                              {image.caption}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Section - Location Indicator */}
          <motion.div
            className="mt-12 md:mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
              <div className="text-sm md:text-base">
                <p className="text-white/70">ขณะนี้คุณกำลังดู</p>
                <p className="font-medium text-lg">{currentSlide.location}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              {heroImages.map((_, idx) => (
                <motion.div
                  key={idx}
                  className={`w-10 sm:w-14 h-1 rounded-full cursor-pointer
                                    ${
                                      idx === activeIndex
                                        ? "bg-white"
                                        : "bg-white/20"
                                    }`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => handleSlideClick(idx)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default About;
