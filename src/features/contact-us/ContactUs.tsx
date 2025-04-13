"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React, { useState } from "react"

function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string
    const file = formData.get("file") as File

    // Create a data object to send in the POST request
    const data = {
      name,
      email,
      phone,
      message,
      file: file ? file.name : null, // Simplified; you can expand this to handle files if needed
    }

    // Send the data to the Google Apps Script Web App
    const response = await fetch('https://script.google.com/macros/s/AKfycbxy7BOnw9zEUFZmy6S0pYf-lXvgDuggTuylF4EDOtjPHY0wT1CrZCWpiV5NCNPX9oh78w/exec', {
      method: 'POST',
      body: new URLSearchParams({
        ...data,
        file: file ? file.name : "", // Ensure file is always a string
      }),
    })

    const result = await response.json()

    if (result.result === 'success') {
      alert("Form submitted successfully")
    } else {
      alert("Failed to submit the form")
    }

    setIsSubmitting(false)
  }

  return (
    <div id="contact" className="w-full flex justify-center items-center p-6 sm:p-10 bg-[#f0f9f4]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-lg bg-white border border-[#d1e7e1] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <h1 className="text-3xl font-bold text-center text-[#4a7c55] mb-6">Contact Us</h1>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border-2 border-[#d1e7e1] focus:ring-2 focus:ring-[#a1d6a7] rounded-md p-4 text-[#4a7c55]" 
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border-2 border-[#d1e7e1] focus:ring-2 focus:ring-[#a1d6a7] rounded-md text-[#4a7c55]"
        />
        <Input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="border-2 border-[#d1e7e1] focus:ring-2 focus:ring-[#a1d6a7] rounded-md text-[#4a7c55]"
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          required
          className="border-2 border-[#d1e7e1] focus:ring-2 focus:ring-[#a1d6a7] rounded-md text-[#4a7c55]"
        />
        {/* <Input
          type="file"
          name="file"
          accept="image/*"
          className="border-2 border-[#d1e7e1] focus:ring-2 focus:ring-[#a1d6a7] rounded-md text-[#4a7c55]"
        /> */}
        <Button
          type="submit"
          className="bg-[#e47a8f] text-white p-4 text-xl font-semibold rounded-lg hover:bg-[#d56a7a] transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  )
}

export default ContactUs
