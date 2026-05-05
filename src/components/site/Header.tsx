import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <img src="/iconxg.png" alt="" className="h-7 w-7" />
          <span>XGBoard</span>
          <span className="ml-1 rounded-md border border-primary/20 bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
            v2.0
          </span>
        </a>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          <a
            href="#features"
            className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            Recursos
          </a>
          <a
            href="#demo"
            className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            Demo
          </a>
          <a
            href="#install"
            className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            Instalação
          </a>
        </nav>

        <Button asChild variant="outline" size="sm" className="gap-2">
          <a
            href="https://github.com/xulioguimaraes/XGBoard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </Button>
      </div>
    </header>
  )
}
