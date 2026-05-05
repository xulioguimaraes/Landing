import { ArrowRight, Download, Github, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-radial absolute inset-x-0 top-0 -z-10 h-[600px]" />
      <div className="gradient-grid absolute inset-x-0 top-0 -z-10 h-[600px] opacity-60" />

      <div className="container flex flex-col items-center pt-20 pb-16 text-center sm:pt-28 sm:pb-24">
        <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          v2.0 — atalho global agora 100% confiável
        </Badge>

        <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Seu clipboard,{" "}
          <span className="bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
            ao alcance de um atalho
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Gerenciador de área de transferência nativo para macOS no estilo
          Spotlight. Pressione <Kbd>⌘</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>V</Kbd> em qualquer app — picker abre no cursor com seu histórico
          completo.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <a
              href="https://github.com/xulioguimaraes/XGBoard/releases/latest/download/XGBoard-v2.0-Installer.dmg"
            >
              <Download className="h-5 w-5" />
              Baixar DMG (574 KB)
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a
              href="https://github.com/xulioguimaraes/XGBoard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              Código no GitHub
            </a>
          </Button>
        </div>

        <div className="mt-3 text-xs text-muted-foreground">
          Prefere ZIP?{" "}
          <a
            href="https://github.com/xulioguimaraes/XGBoard/releases/latest/download/XGBoard-v2.0-macOS.zip"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Baixar XGBoard-v2.0-macOS.zip
          </a>
        </div>

        <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Apple className="h-3.5 w-3.5" />
            macOS 13.0+
          </span>
          <span aria-hidden>•</span>
          <span>Open source · MIT</span>
          <span aria-hidden>•</span>
          <span>Sem permissão de Acessibilidade</span>
        </div>
      </div>
    </section>
  )
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="mx-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded-md border border-border bg-muted px-1.5 font-mono text-xs font-medium text-foreground shadow-sm">
      {children}
    </kbd>
  )
}
