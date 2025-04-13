"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

function Gallery() {
  const images = [
    "/Cake1.png",
    "/Cake2.png",
    "/Cake3.png",
    "/Cake4.png",
    "/Cake5.png",
    "/Cake6.png",
    "/Cake7.png",
    "/Cake8.png",
  ]

  return (
    <div className="w-full flex flex-col items-center justify-center py-16 bg-[#f0f9f4]" id="gallery">
      {/* Title Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#4a7c55]">
        Our Delicious Gallery
      </h2>

      {/* Carousel Section */}
      <div className="w-full max-w-6xl px-4 relative">
        <Carousel>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="p-2 sm:p-3">
                  <Card className="bg-white border border-[#d1e7e1] shadow-lg hover:shadow-2xl transition-all duration-300">
                    <CardContent className="relative w-full h-40 sm:h-48">
                      <Image
                        src={image}
                        alt={`Image ${index}`}
                        width={250}
                        height={250}
                        className="object-contain w-full h-full rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </div>
  )
}

export default Gallery
