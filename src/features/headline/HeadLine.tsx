"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaShoppingCart } from "react-icons/fa"

function HeadLine() {
  return (
    <div id="home" className="w-full min-h-screen md:h-[80vh] bg-gradient-to-t from-purple-200 to-orange-100 flex flex-col md:flex-row items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Sparkling Stars Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent z-0 sparkle-background"></div>

      {/* Image Section */}
      <motion.div
        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] mb-10 md:mb-0 z-10 hidden sm:block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/Cake1.png"
          alt="Headline"
          width={450}
          height={450}
          priority
          className="object-contain w-full h-full"
        />
      </motion.div>

      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 z-10 max-w-md">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="sparkle-effect block">SHAMIM</span>
          <span className="block text-lg font-medium text-gray-600 mt-2">Custom made cakes</span>
          <span className="block text-md font-light text-gray-500">and sweets for all occasions</span>
        </motion.h1>

        <motion.div
          className="w-full md:w-auto flex justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button className="w-full sm:w-auto h-14 text-xl bg-gradient-to-r from-pink-600 to-orange-400 hover:from-pink-500 hover:to-orange-300 text-white flex items-center justify-center gap-3">
            <FaShoppingCart className="text-lg" />
            Order Now
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default HeadLine
