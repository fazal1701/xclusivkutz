export const BOOKSY_URL = "http://xclusivkutz.booksy.com/a/"
export const PHONE = "(437) 267-2529"
export const PHONE_HREF = "tel:+14372672529"
export const ADDRESS = "32 Bowsfield Dr, Brampton, ON"
export const HOURS = "9AM – 9PM Daily"
export const INSTAGRAM = "https://www.instagram.com/_xclusivkutz/"
export const TIKTOK = "https://www.tiktok.com/@_xclusivkutz"

export type GoogleReview = {
  id: string
  name: string
  text: string
  rating: number
  date: string
}

/** Extracted from Google review screenshots in /Reviews */
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "1",
    name: "Arjanpal Hundal",
    text: "I've been to many different barbers but this experience was very high quality. I will definitely be coming back! Best in the business.",
    rating: 5,
    date: "4 days ago",
  },
  {
    id: "2",
    name: "Himmat",
    text: "I've been to so many different barbers in my lifetime yet none of them have done as good of a job as Waleed. He's so professional and makes sure before any client leaves he does his best work.",
    rating: 5,
    date: "4 days ago",
  },
  {
    id: "3",
    name: "Savir A",
    text: "One of the most knowledgeable barbers I have ever been to and the best scissor work I've ever gotten. 10/10 definitely recommend!",
    rating: 5,
    date: "1 week ago",
  },
  {
    id: "4",
    name: "Shaginan Murugathasan",
    text: "Amazing experience from start to finish! They really took the time to understand exactly how I wanted my haircut. The attention to detail was excellent, and the final result exceeded my expectations.",
    rating: 5,
    date: "1 week ago",
  },
  {
    id: "5",
    name: "Darya Pithawala",
    text: "XclusivKutz always provides an amazing haircut and experience. From the environment to professionalism, the quality never fails to impress me each time. By far the best barber!",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    id: "6",
    name: "Ali Butt",
    text: "I had one of the best experiences with Waleed. He gave me the cleanest middle part I have ever had and took the time to properly even out both sides. Super clean from every angle.",
    rating: 5,
    date: "4 months ago",
  },
  {
    id: "7",
    name: "Uday Brar",
    text: "Great cut every time with real attention to detail. Listens to what you want, and makes sure you leave looking clean and confident.",
    rating: 5,
    date: "5 months ago",
  },
  {
    id: "8",
    name: "Akash Khalon",
    text: "Waleed took my beard care to another level — pristine, sharp, and sublime. You wouldn't believe a young man like Waleed would have the experience of a prestige barber. Absolute masterclass.",
    rating: 5,
    date: "5 months ago",
  },
  {
    id: "9",
    name: "Ali Bhatti",
    text: "Excellent service and great haircut. I would definitely recommend to anyone. A lot of barbers mess up my hair but he gets it perfect every time.",
    rating: 5,
    date: "5 months ago",
  },
  {
    id: "10",
    name: "Yash Vashisht",
    text: "Waleed kicked things off well with great music and a welcoming atmosphere. The haircut was flawless and really boosted my confidence. I will for sure be coming back!",
    rating: 5,
    date: "5 months ago",
  },
]

export const SERVICES = [
  {
    name: "Lineup",
    price: "$25",
    duration: "20 MIN",
    description: "Sharp edge-ups and precision detailing for a clean, defined look.",
    image: "/services/IMG_5574.png",
  },
  {
    name: "Haircut",
    price: "$40",
    duration: "45 MIN",
    description: "Fades, tapers, and scissor cuts tailored to your style and hair type.",
    image: "/services/IMG_5575.png",
  },
  {
    name: "Haircut & Beard",
    price: "$50",
    duration: "60 MIN",
    description: "Complete grooming — precision cut and detailed beard sculpting.",
    image: "/services/IMG_5577.png",
  },
]

export const ADDONS = [
  { name: "Hot Towel", price: "$10", description: "Relaxing hot towel treatment with straight razor finish." },
  { name: "Eyebrows", price: "$5", description: "Clean eyebrow shaping to sharpen your look." },
  { name: "Enhancements", price: "$5", description: "Natural enhancements for a sharper, longer-lasting finish." },
]

export const PORTFOLIO = [
  "/portfolio/client/IMG_0454.jpg",
  "/portfolio/client/IMG_0455.jpg",
  "/portfolio/client/IMG_0456.jpg",
  "/portfolio/client/IMG_0457.jpg",
  "/portfolio/client/IMG_0458.jpg",
  "/portfolio/client/IMG_0459.jpg",
  "/portfolio/client/IMG_0460.jpg",
  "/portfolio/client/IMG_0461.jpg",
  "/portfolio/client/IMG_0462.jpg",
]

export const PILLARS = [
  {
    number: "01",
    title: "Craft",
    description:
      "Precision cutting built around your hair texture, growth pattern, and lifestyle — never a one-size-fits-all approach.",
  },
  {
    number: "02",
    title: "Detail",
    description:
      "Clean lines, balanced fades, and finishes you can actually maintain at home. Nothing rushed, nothing left to chance.",
  },
  {
    number: "03",
    title: "Experience",
    description:
      "A welcoming chair, great energy, and a barber who listens first. You come for the cut and leave with confidence.",
  },
]

export const FAQS = [
  {
    question: "How do I book an appointment?",
    answer:
      "Book online through Booksy — it's the fastest way to secure your spot. Walk-ins may be accepted when available, but booking ahead is recommended.",
  },
  {
    question: "What are your hours?",
    answer: "We're open 9AM to 9PM daily. Check Booksy for real-time availability.",
  },
  {
    question: "Where are you located?",
    answer: "32 Bowsfield Dr, Brampton, ON. Easy to find with parking nearby.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Lineups, haircuts, haircut & beard combos, plus add-ons like hot towel treatments, eyebrow shaping, and enhancements.",
  },
  {
    question: "What makes XclusivKutz different?",
    answer:
      "Real attention to detail, consistent quality, and a barber who takes the time to understand what you want before a single clipper touches your hair.",
  },
]

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]
