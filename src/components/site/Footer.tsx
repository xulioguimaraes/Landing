import { Github } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container py-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <img src="/iconxg.png" alt="" className="h-6 w-6" />
            <span className="text-sm font-medium">XGBoard</span>
            <Separator orientation="vertical" className="mx-1 h-4" />
            <span className="text-xs text-muted-foreground">v2.0 · MIT</span>
          </div>

          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a
              href="https://github.com/xulioguimaraes/XGBoard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" />
              Repositório
            </a>
            <a
              href="https://github.com/xulioguimaraes/XGBoard/blob/main/CHANGELOG.md"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Changelog
            </a>
            <a
              href="https://github.com/xulioguimaraes/XGBoard/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Suporte
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} Júlio Carvalho Guimarães · Open source sob a licença MIT
        </p>
      </div>
    </footer>
  )
}
