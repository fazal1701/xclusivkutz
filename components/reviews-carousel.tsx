"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { BOOKSY_URL, GOOGLE_REVIEWS, type GoogleReview } from "@/lib/site-data"

function ReviewCard({ review }: { review: GoogleReview }) {
  const initials = review.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="flex h-full flex-col rounded-none border border-neutral-800 bg-neutral-950 p-6 text-white">
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-200 line-clamp-6">{review.text}</p>
      <div className="flex items-center gap-3">
        <Avatar className="size-9 border border-neutral-700">
          <AvatarFallback className="bg-neutral-800 text-xs font-semibold text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-white">{review.name}</p>
          <p className="text-xs text-neutral-500">{review.date}</p>
        </div>
      </div>
    </div>
  )
}

export function ReviewsCarousel({ reviews = GOOGLE_REVIEWS }: { reviews?: GoogleReview[] }) {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <section id="reviews" className="border-t border-neutral-200 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-neutral-300" />
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              The Word on the Chair
            </p>
            <span className="h-px w-12 bg-neutral-300" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-5xl">
            A 5-star experience, start to finish.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600">
            Real reviews from clients across the GTA. Consistent quality, every visit.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="mx-auto w-full max-w-6xl px-10 md:px-12"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <ReviewCard review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-neutral-300 bg-white text-black hover:bg-black hover:text-white" />
          <CarouselNext className="border-neutral-300 bg-white text-black hover:bg-black hover:text-white" />
        </Carousel>

        <div className="mt-12 text-center">
          <Button
            className="rounded-none bg-black px-8 py-6 font-semibold text-white hover:bg-neutral-800"
            onClick={() => window.open(BOOKSY_URL, "_blank")}
          >
            Book Your Chair
          </Button>
        </div>
      </div>
    </section>
  )
}
