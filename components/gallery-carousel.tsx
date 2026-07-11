"use client"

import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { PORTFOLIO } from "@/lib/site-data"

export function GalleryCarousel() {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="relative w-screen max-w-[100vw] -translate-x-1/2 left-1/2 md:left-0 md:w-full md:max-w-none md:translate-x-0">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full md:px-12">
        <CarouselContent className="ml-0 md:-ml-4">
          {PORTFOLIO.map((src, idx) => (
            <CarouselItem key={idx} className="basis-full pl-0 md:basis-1/3 md:pl-4">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={src}
                  alt={`XclusivKutz haircut ${idx + 1}`}
                  className="site-photo h-full w-full object-cover object-center"
                  draggable={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden border-neutral-600 bg-black text-white hover:bg-white hover:text-black md:flex" />
        <CarouselNext className="hidden border-neutral-600 bg-black text-white hover:bg-white hover:text-black md:flex" />
      </Carousel>
    </div>
  )
}
