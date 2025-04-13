"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="w-full shadow-md flex relative h-24 items-center justify-between p-4 bg-[#f0f9f4] z-[100]">
      {/* Logo Section */}
      <a href="#home" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          priority
          className="rounded-full"
        />
        <h1 className="text-2xl italic text-[#4a7c55]">
          Shamim Sweets <span>& Cakes</span>
        </h1>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Button asChild variant="ghost">
          <a href="#home" className="text-[#4a7c55] hover:text-[#ffcc00]">Home</a>
        </Button>
        <Button asChild variant="ghost">
          <a href="#gallery" className="text-[#4a7c55] hover:text-[#ffcc00]">Gallery</a>
        </Button>
        <Button asChild variant="ghost">
          <a href="#about" className="text-[#4a7c55] hover:text-[#ffcc00]">About us</a>
        </Button>
        <Button asChild variant="ghost">
          <a href="#contact" className="text-[#4a7c55] hover:text-[#ffcc00]">Contact us</a>
        </Button>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Button asChild variant="destructive">
          <Link href="/order" className="text-white bg-[#4a7c55] hover:bg-[#3f673f]">
            Order now
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/login" className="text-[#4a7c55] hover:text-[#ffcc00]">
            Login
          </Link>
        </Button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden z-[110] flex items-center" onClick={toggleMenu}>
        {menuOpen ? (
          <FaTimes className="text-[#4a7c55] text-3xl" />
        ) : (
          <FaBars className="text-[#4a7c55] text-3xl" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#f0f9f4] flex justify-center items-center transition-transform duration-300 z-[105] ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <Button asChild variant="ghost">
            <a href="#home" className="text-[#4a7c55] hover:text-[#ffcc00]" onClick={closeMenu}>
              Home
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#gallery" className="text-[#4a7c55] hover:text-[#ffcc00]" onClick={closeMenu}>
              Gallery
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#about" className="text-[#4a7c55] hover:text-[#ffcc00]" onClick={closeMenu}>
              About us
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#contact" className="text-[#4a7c55] hover:text-[#ffcc00]" onClick={closeMenu}>
              Contact us
            </a>
          </Button>

          <Button asChild variant="destructive">
            <Link href="#contact" className="text-white bg-[#4a7c55] hover:bg-[#3f673f]" onClick={closeMenu}>
              Order now
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/" className="text-[#4a7c55] hover:text-[#ffcc00]" onClick={closeMenu}>
              Login
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
