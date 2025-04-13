import Link from "next/link"
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-[#f0f9f4] text-[#4a7c55] py-10 px-6 md:px-20 border-t border-[#d1e7e1]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Left - About & Logo */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-bold italic">Shamim Sweets & Cakes</h2>
          <p className="max-w-sm text-sm">
            Custom made cakes and sweets for all occasions. We bake with love and deliver with care.
          </p>
        </div>

        {/* Middle - Navigation Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="#home" className="hover:text-[#ffcc00]">Home</Link></li>
            <li><Link href="#gallery" className="hover:text-[#ffcc00]">Gallery</Link></li>
            <li><Link href="#about" className="hover:text-[#ffcc00]">About Us</Link></li>
            <li><Link href="#contact" className="hover:text-[#ffcc00]">Contact Us</Link></li>
            <li><Link href="/order" className="hover:text-[#ffcc00]">Order Now</Link></li>
          </ul>
        </div>

        {/* Right - Contact & Socials */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Get in Touch</h3>
          <div className="flex items-center gap-2 text-sm">
            <FaPhoneAlt /> <span>+1 (234) 567-890</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaMapMarkerAlt /> <span>123 Sweet St, Vancouver, BC</span>
          </div>

          <div className="flex gap-4 mt-4 text-lg">
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="hover:text-[#ffcc00]" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="hover:text-[#ffcc00]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-[#7a9b82]">
        &copy; {new Date().getFullYear()} Shamim Sweets & Cakes. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
