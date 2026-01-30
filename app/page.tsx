"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Star, MapPin, Phone, Instagram, Play } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

const CrownLogo = ({ className = "h-8 w-8" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Crown base */}
      <rect x="20" y="75" width="60" height="8" fill="#3B82F6" />
      <rect x="25" y="83" width="50" height="4" fill="#3B82F6" />

      {/* Crown triangles */}
      <polygon points="30,75 45,45 60,75" fill="#3B82F6" />
      <polygon points="15,75 30,55 45,75" fill="#9CA3AF" />
      <polygon points="55,75 70,55 85,75" fill="#9CA3AF" />

      {/* Crown jewel */}
      <circle cx="50" cy="35" r="6" fill="#9CA3AF" />
    </svg>
  </div>
)

// Booksy booking URL provided by client
const BOOKSY_URL =
  "https://booksy.com/en-ca/17786_elevate-grooming-studio_barbershop_861853_brampton#ba_s=seo"

export default function Home() {
  const services = [
    {
      name: "Lineup",
      price: "$25",
      description: "Sharp edge-ups and precision detailing",
      popular: true,
      image: "/services/IMG_5574.png",
    },
    {
      name: "Haircut",
      price: "$40",
      description: "Clean, precise cut tailored to your style",
      popular: true,
      image: "/services/IMG_5575.png",
    },    {
      name: "Haircut & Beard",
      price: "$50",
      description: "Full haircut with detailed beard sculpting",
      popular: true,
      image: "/services/IMG_5577.png",
    },
  ]

  const testimonials = [
    {
      name: "Sarbpreet J",
      text:
        "Waleed is the kind of barber who instantly makes you feel at ease the moment you step into his chair. His welcoming attitude and respectful demeanor set him apart from the rest, creating an environment where you can relax and truly enjoy the experience. Whether it’s his warm greeting, attentive listening, or the genuine care he puts into every haircut, Waleed’s approach ensures you feel valued from start to finish. His positive attitude isn’t just about making you feel comfortable—it’s clear he takes pride in his craft, and that passion shines through in the way he treats every client.",
      rating: 5,
    },
    {
      name: "Izzy",
      text:
        "Waleedkutz is hands down the best barber in town! Waleed's attention to detail and precision is unmatched. Every visit is a great experience, and I always leave looking sharp and feeling confident. Highly recommend!",
      rating: 5,
    },
    {
      name: "pavitarsanghera",
      text:
        "My barber Waleed is one of one—best of the best. I had to get a cut for a party but he was all booked out; just for me he stayed overtime to make sure he gets me right. Bro’s not only a barber—he’s a therapist on the side. The conversations and advice I get from bro are top-tier. Underrated barber, highly recommend.",
      rating: 5,
    },
  ]

  const videos = [
    {
      title: "Signature Fade Transformation",
      src: "/videos/IMG_4360.MOV",
      description: "Watch Waleed create his signature fade technique",
    },
    {
      title: "Beard Sculpting Masterclass",
      src: "/videos/IMG_4612.MOV",
      description: "Professional beard shaping and styling",
    },
    {
      title: "Classic Taper Tutorial",
      src: "/videos/IMG_4647.MOV",
      description: "Step-by-step classic taper technique",
    },
    {
      title: "Client Transformation",
      src: "/videos/IMG_5554.MOV",
      description: "Complete makeover with Waleed's expertise",
    },
  ]

  const portfolioImages = [
    "/services/lineup.png",
    "/portfolio/IMG_5571.png",
    "/portfolio/IMG_5572.png",
    "/portfolio/IMG_5573.png",
  ]

  const addOns = [
    { name: "Hot Towel", price: "$10", description: "Relaxing hot towel treatment with straight razor finish." },
    { name: "Eyebrows", price: "$5", description: "Clean eyebrow shaping and detailing to sharpen your look and keep symmetry." },
    { name: "Enhancements", price: "$5", description: "Natural enhancements for a sharper, longer-lasting look." },
  ]

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-black backdrop-blur-sm z-50 border-b border-blue-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <CrownLogo className="h-10 w-10" />
              <div className="font-bold text-xl">
                <span className="text-white">XCLU</span>
                <span className="text-blue-500">SIV</span>
                <br />
                <span className="text-white text-sm tracking-wider">KUTZ</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="#services" className="text-white hover:text-blue-400 transition-colors">
                Services
              </a>
              <a href="#videos" className="text-white hover:text-blue-400 transition-colors">
                Videos
              </a>
              <a href="#gallery" className="text-white hover:text-blue-400 transition-colors">
                Gallery
              </a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open(BOOKSY_URL, "_blank")}
            >
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl md:text-8xl font-black text-black leading-none mb-4">
                  STAY
                  <br />
                  <span className="text-blue-600">XCLUSIV</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">PRECISION • STYLE • EXCELLENCE</h2>
              </div>

              <div className="space-y-4 text-black max-w-lg">
                <p className="text-lg leading-relaxed">
                  Master barber Waleed Adnan brings over a decade of precision craftsmanship to every cut. From
                  signature fades to classic tapers, experience the artistry that has made XclusivCutz the premier
                  destination for discerning gentlemen across the GTA.
                </p>

                <blockquote className="italic text-gray-700 border-l-4 border-blue-600 pl-4 my-6">
                  "Every client deserves more than just a haircut - they deserve an experience that elevates their
                  confidence and style. That's the XclusivCutz difference."
                </blockquote>

                <p className="text-right text-blue-600 font-bold">- WALEED ADNAN</p>
              </div>

              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                VIEW SERVICES
              </Button>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/portfolio/barber-portrait.png"
                  alt="Waleed Adnan - Master Barber"
                  className="w-full max-w-md mx-auto rounded-lg"
                />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-transparent transform rotate-45"></div>
              </div>
              <div className="absolute bottom-10 left-10 w-24 h-1 bg-blue-600"></div>
              <div className="absolute bottom-8 left-10 w-16 h-1 bg-blue-600"></div>
              <div className="absolute bottom-6 left-10 w-20 h-1 bg-blue-600"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Signature Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Crafted with precision, delivered with excellence. Each service reflects Waleed's commitment to
              perfection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`bg-white border-gray-200 hover:border-blue-600/50 transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-xl`}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      console.error(`Failed to load image: ${service.image}`);
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open(BOOKSY_URL, "_blank")}
                  >
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-black">Add-ons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {addOns.map((addon) => (
                <Card key={addon.name} className="bg-white border-gray-200 hover:border-blue-600/40 transition-all duration-300 shadow h-full">
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-black">{addon.name}</h4>
                      <span className="text-blue-600 font-bold">{addon.price}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{addon.description}</p>
                    <Button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.open(BOOKSY_URL, "_blank")}>
                      Book This Service
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="videos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Artist Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer bg-white border-gray-200 hover:border-blue-600/50 transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl">
                    <div className="relative">
                      <video src={video.src} playsInline muted className="w-full h-96 object-cover" />
                      <div className="absolute inset-0 pointer-events-none bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="bg-blue-600 rounded-full p-4 opacity-80">
                          <Play className="h-8 w-8 text-white fill-current" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="p-0 max-w-4xl">
                  <DialogTitle className="sr-only">{video.title}</DialogTitle>
                  <video src={video.src} controls autoPlay playsInline className="w-full h-auto max-h-[80vh]" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
          {/* Removed Instagram and TikTok buttons on main screen per request */}
        </div>
      </section>

      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Waleed's Portfolio</h2>
            <p className="text-xl text-gray-600">Witness the artistry and precision in every cut</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {portfolioImages.slice(0, 4).map((src, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg aspect-square shadow-lg">
                <img
                  src={src}
                  alt={`Waleed's Work ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What gentlemen say about Waleed's work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-blue-600/30 transition-colors shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold text-blue-600">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Book with Waleed</h2>
            <p className="text-xl text-gray-600">Ready for your transformation? Secure your appointment today.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <MapPin className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-black">Location</h3>
                  <p className="text-gray-600">146 Inspire Blvd Unit #2, Brampton, ON L6R 3X9</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-black">Direct Line</h3>
                  <a
                    href="tel:+14372672529"
                    className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-semibold"
                  >
                    (437) 267-2529
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-black">Waleed's Hours</h3>
                  <p className="text-gray-600">Tue-Sat: 10AM-7PM | Sun: 11AM-5PM</p>
                  <p className="text-gray-600 text-sm">Closed Mondays</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold mb-6 text-center text-black">Book Your Appointment</h3>
              <div className="space-y-4">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
                  onClick={() => window.open(BOOKSY_URL, "_blank")}
                >
                  Book on Booksy
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 text-lg bg-white"
                  onClick={() => (window.location.href = "tel:+14372672529")}
                >
                  Call (437) 267-2529
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 text-lg bg-white flex items-center justify-center space-x-2"
                  onClick={() => window.open("https://www.instagram.com/_xclusivkutz/", "_blank")}
                >
                  <Instagram className="h-5 w-5" />
                  <span>Check Instagram</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 text-lg bg-white flex items-center justify-center"
                  onClick={() => window.open("https://www.tiktok.com/@_xclusivkutz", "_blank")}
                >
                  TikTok @_xclusivkutz
                </Button>
              </div>
              <p className="text-center text-gray-600 text-sm mt-4">
                Book in advance - Waleed's schedule fills up quickly
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-blue-600/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <CrownLogo className="h-8 w-8" />
              <div className="font-bold text-lg">
                <span className="text-white">XCLU</span>
                <span className="text-blue-500">SIV</span>
                <span className="text-white"> KUTZ</span>
              </div>
            </div>
            <p className="text-gray-400">© 2025 XclusivCutz - Waleed Adnan, Master Barber. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
