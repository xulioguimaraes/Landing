import { useEffect } from "react"

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined

export function Analytics() {
  useEffect(() => {
    if (!GA_ID) return
    if (typeof window === "undefined") return
    if ((window as unknown as { __gaLoaded?: boolean }).__gaLoaded) return

    const script = document.createElement("script")
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)

    const w = window as unknown as {
      dataLayer: unknown[]
      gtag: (...args: unknown[]) => void
      __gaLoaded?: boolean
    }
    w.dataLayer = w.dataLayer || []
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments)
    }
    w.gtag("js", new Date())
    w.gtag("config", GA_ID, { anonymize_ip: true })
    w.__gaLoaded = true
  }, [])

  return null
}
