import { Cpu, Users, FileText } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "AI Architecture Generation",
    description:
      "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description:
      "Export a complete Markdown technical spec directly from the canvas graph.",
  },
]

export function AuthLeftPanel() {
  return (
    <div
      className="hidden lg:flex lg:w-1/2 flex-col border-r border-surface-border"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      {/* Logo */}
      <div className="p-10">
        <div className="flex items-center gap-2.5">
          <div
            className="h-6 w-6 rounded-md shrink-0"
            style={{ backgroundColor: "var(--accent-primary)" }}
          />
          <span className="text-base font-semibold text-copy-primary tracking-tight">
            Ghost AI
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-16">
        <h1 className="text-4xl font-bold text-copy-primary leading-tight tracking-tight">
          Design systems at the
          <br />
          speed of thought.
        </h1>
        <p className="mt-4 text-sm text-copy-secondary leading-relaxed">
          Describe your architecture in plain English. Ghost AI maps it to a
          shared canvas your whole team can refine in real time.
        </p>

        <div className="mt-10 space-y-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-4">
              <div
                className="flex items-center justify-center h-9 w-9 rounded-lg shrink-0"
                style={{ backgroundColor: "var(--accent-primary-dim)" }}
              >
                <Icon
                  className="h-4 w-4"
                  style={{ color: "var(--accent-primary)" }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-copy-primary">
                  {title}
                </p>
                <p className="mt-0.5 text-xs text-copy-muted leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-10">
        <p className="text-xs text-copy-muted">
          © 2026 Ghost AI. All rights reserved.
        </p>
      </div>
    </div>
  )
}
