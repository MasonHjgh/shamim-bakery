"use client"

import Image from "next/image"
import React from "react"
import { aboutUsData } from "./aboutUsContent"
import { motion } from "framer-motion"
import { FaSmile } from "react-icons/fa"  // Importing a smiley icon

function AboutUs() {
  return (
    <div className="w-full flex flex-col justify-center items-center pb-10 px-4 gap-8 bg-[#f0f9f4]" id="about">
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-[#4a7c55]" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Shamim Sweets & Cakes
      </motion.h2>

      {/* Dynamic Content Section */}
      {aboutUsData.map((section, index) => (
        <motion.div
          key={index}
          className={`flex flex-col ${
            section.reverseOnDesktop ? "md:flex-row-reverse" : "md:flex-row"
          } items-center md:items-start gap-6 max-w-5xl w-full p-6`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.3 }}
        >
          {/* Image Section with Parallax Effect */}
          <motion.div
            className="shrink-0 w-full md:w-[400px] h-[300px] md:h-[500px] overflow-hidden flex items-center justify-center bg-white shadow-lg rounded-lg"
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={section.imageSrc}
                alt={section.alt}
                width={400}
                height={500}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="text-justify text-base leading-relaxed max-w-3xl md:max-w-full min-h-[500px] flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            {section.text.map((para, i) => (
              <p
                key={i}
                className="mb-4 transition-all duration-300 text-gray-700 hover:text-[#4a7c55]"  
              >
                {/* Adding smiley icon before text for visual appeal */}
                {i === 0 && <FaSmile className="inline mr-2 text-yellow-400" />} {/* Updated icon color */}
                {para}
              </p>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default AboutUs
