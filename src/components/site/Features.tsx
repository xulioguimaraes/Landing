import {
  Zap,
  Keyboard,
  Search,
  ImageIcon,
  Lock,
  Settings2,
} from "lucide-react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    icon: Keyboard,
    title: "Atalho global confiável",
    description:
      "Cmd+Shift+V (configurável) implementado com Carbon RegisterEventHotKey. Funciona desde o login, sem permissão de Acessibilidade.",
  },
  {
    icon: Zap,
    title: "Visual nativo",
    description:
      "NSPanel com vibrancy material .popover (mesmo do Spotlight). Abre no cursor, fecha ao perder foco, sem chrome desnecessário.",
  },
  {
    icon: Search,
    title: "Busca em tempo real",
    description:
      "Filtra o histórico conforme você digita. Navegue por ↑/↓, copie e cole com ↩. Comportamento de picker, sem distrações.",
  },
  {
    icon: ImageIcon,
    title: "Texto, imagens, RTF e arquivos",
    description:
      "Detecta automaticamente o tipo, exibe thumbnail inline para imagens. Deduplicação por SHA-256, sem entradas repetidas.",
  },
  {
    icon: Lock,
    title: "100% local",
    description:
      "Histórico em ~/Library/Application Support/XGBoard. Sem servidor, sem telemetria, sem rede. Limite de 200 MB com LRU.",
  },
  {
    icon: Settings2,
    title: "Configurável",
    description:
      "Atalho personalizável, intervalo de monitoramento, número de itens (10–2000), tema claro/escuro, login automático.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border/40 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Pensado para o uso diário
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sem permissões esquisitas, sem servidor remoto, sem dependências
            externas. Apenas Swift e os frameworks do macOS.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border-border/60 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
