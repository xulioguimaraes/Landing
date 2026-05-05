import { Terminal, Download, KeyRound } from "lucide-react"
import { Card } from "@/components/ui/card"

const steps = [
  {
    icon: Download,
    title: "Baixar",
    description:
      "Baixe o instalador da última release. O build é gerado a partir do código deste repositório.",
    code: `# DMG
XGBoard-v2.0-Installer.dmg

# ou ZIP
XGBoard-v2.0-macOS.zip`,
  },
  {
    icon: Terminal,
    title: "Instalar",
    description:
      "Abra o DMG, arraste para Applications, ejete. Ou extraia o ZIP e mova para Applications.",
    code: `open ~/Downloads/XGBoard-v2.0-Installer.dmg
# arraste XGBoard.app para Applications`,
  },
  {
    icon: KeyRound,
    title: "Usar",
    description:
      "Pressione o atalho global em qualquer app. Configure a combinação em Configurações.",
    code: `Cmd+Shift+V  →  picker abre no cursor`,
  },
]

export function Install() {
  return (
    <section id="install" className="border-t border-border/40 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Em três passos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sem instaladores misteriosos, sem permissões obscuras. Você compila
            do código.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="relative overflow-hidden border-border/60 p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-medium text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mb-1 text-base font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              <pre className="overflow-x-auto rounded-lg border border-border/60 bg-muted/40 p-3 font-mono text-[11px] leading-relaxed text-foreground">
                <code>{step.code}</code>
              </pre>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground">
          Builds não assinados podem mostrar aviso de "app de desenvolvedor não
          identificado" na primeira execução. Para abrir mesmo assim:
          Configurações do Sistema → Privacidade e Segurança → Abrir mesmo
          assim.
        </p>
      </div>
    </section>
  )
}
