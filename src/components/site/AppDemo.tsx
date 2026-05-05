import { useState } from "react"
import {
  X,
  Search,
  AlignLeft,
  Image as ImageIcon,
  FileText,
  Heart,
} from "lucide-react"
import { cn } from "@/lib/utils"

type ItemType = "text" | "image" | "rtf" | "file"

type DemoItem = {
  id: number
  content: string
  type: ItemType
  time: string
  favorite?: boolean
}

const items: DemoItem[] = [
  { id: 1, content: "Imagem 1280×800 (482 KB)", type: "image", time: "16:02" },
  { id: 2, content: "https://github.com/xulioguimaraes/XGBoard", type: "text", time: "15:58" },
  { id: 3, content: "9f77a36a", type: "text", time: "15:58", favorite: true },
  { id: 4, content: "import { Button } from \"@/components/ui/button\"", type: "text", time: "15:57" },
  { id: 5, content: "complete_registration", type: "text", time: "15:55" },
  { id: 6, content: "deposit_counted", type: "text", time: "15:53" },
  { id: 7, content: "Imagem 2694×2108 (867 KB)", type: "image", time: "15:51" },
  { id: 8, content: "documento_final.pdf", type: "file", time: "15:48" },
  { id: 9, content: "useEffect(() => { ... }, [])", type: "text", time: "15:42" },
]

const iconFor: Record<ItemType, typeof AlignLeft> = {
  text: AlignLeft,
  image: ImageIcon,
  rtf: FileText,
  file: FileText,
}

export function AppDemo() {
  const [selected, setSelected] = useState(4)
  const [query, setQuery] = useState("")

  const filtered = query
    ? items.filter((i) =>
        i.content.toLowerCase().includes(query.toLowerCase())
      )
    : items

  return (
    <section id="demo" className="relative py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Visual nativo, comportamento previsível
          </h2>
          <p className="mt-4 text-muted-foreground">
            O picker abre exatamente onde está seu cursor, com vibrancy do
            macOS, navegação por teclado e fechamento automático.
          </p>
        </div>

        <div className="relative mx-auto max-w-xl">
          <div
            className="absolute -inset-x-12 -top-8 -bottom-8 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/15 to-primary/0 blur-3xl"
            aria-hidden
          />

          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/90 shadow-2xl shadow-primary/10 backdrop-blur supports-[backdrop-filter]:bg-card/70">
            {/* Search header */}
            <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar no histórico…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                aria-label="Fechar"
                className="group flex h-4 w-4 items-center justify-center rounded-full bg-muted-foreground/20 transition-colors hover:bg-destructive"
              >
                <X className="h-2.5 w-2.5 text-muted-foreground group-hover:text-white" strokeWidth={3} />
              </button>
            </div>

            {/* List */}
            <div className="max-h-[360px] overflow-hidden py-1">
              {filtered.map((item) => {
                const Icon = iconFor[item.type]
                const isSelected = item.id === selected
                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setSelected(item.id)}
                    className={cn(
                      "mx-1.5 flex w-[calc(100%-12px)] items-center gap-2 rounded-md px-2 py-1.5 text-left transition-colors",
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted/60"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-3.5 w-3.5 shrink-0",
                        isSelected ? "text-primary-foreground" : "text-muted-foreground"
                      )}
                    />
                    {item.favorite && (
                      <Heart
                        className={cn(
                          "h-3 w-3 shrink-0 fill-current",
                          isSelected ? "text-primary-foreground" : "text-pink-500"
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        "flex-1 truncate font-mono text-[12px]",
                        isSelected ? "text-primary-foreground" : "text-foreground"
                      )}
                    >
                      {item.content}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 text-[10px]",
                        isSelected
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.time}
                    </span>
                  </button>
                )
              })}
              {filtered.length === 0 && (
                <div className="flex flex-col items-center justify-center gap-2 px-4 py-12 text-center">
                  <Search className="h-6 w-6 text-muted-foreground/50" />
                  <p className="text-xs text-muted-foreground">Nada encontrado</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center gap-3 border-t border-border/60 px-4 py-2 text-[10px] text-muted-foreground">
              <span>{filtered.length} itens</span>
              <span className="ml-auto inline-flex items-center gap-1">
                <Kbd>↩</Kbd>
                Copiar
              </span>
              <span className="inline-flex items-center gap-1">
                <Kbd>⎋</Kbd>
                Fechar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex h-4 min-w-4 items-center justify-center rounded border border-border bg-muted px-1 font-mono text-[10px] font-medium text-foreground">
      {children}
    </kbd>
  )
}
