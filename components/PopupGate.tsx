"use client"

import { useEffect, useState } from "react"

export default function PopupGate({ children }: { children: React.ReactNode }) {
  const [accepted, setAccepted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("popupAccepted")
    if (hasAccepted === "true") {
      setAccepted(true)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!accepted) {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = "auto"
      }
    }
  }, [accepted])

  const handleAccept = () => {
    localStorage.setItem("popupAccepted", "true")
    setAccepted(true)
  }

  if (loading) return null

  if (!accepted) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="max-w-xl w-full bg-white rounded-lg shadow-xl p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
          <p className="text-sm text-muted-foreground mb-6 max-h-[400px] overflow-y-auto text-left">
            The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner.
            By accessing this website, www.vistalegalfirm.com, you acknowledge and confirm that you are seeking
            information relating to Vista Legal of your own accord and that there has been no form of solicitation,
            advertisement, or inducement by Vista Legal or its members. The content of this website is for
            informational purposes only and should not be interpreted as soliciting or advertisement. No material/information
            provided on this website should be construed as legal advice. Vista Legal shall not be liable for the
            consequences of any action taken by relying on the material/information provided on this website. The contents
            of this website are the intellectual property of Vista Legal.
          </p>
          <button
            onClick={handleAccept}
            className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Accept
          </button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
