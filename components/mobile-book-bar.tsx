"use client"

import { Button } from "@/components/ui/button"
import { BOOKSY_URL } from "@/lib/site-data"

export function MobileBookBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-800 bg-black p-3 md:hidden">
      <Button
        className="w-full rounded-none bg-white py-6 text-base font-semibold text-black hover:bg-neutral-200"
        onClick={() => window.open(BOOKSY_URL, "_blank")}
      >
        Book Appointment
      </Button>
    </div>
  )
}
