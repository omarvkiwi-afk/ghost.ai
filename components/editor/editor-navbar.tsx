"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

interface EditorNavbarProps {
  isOpen: boolean
  onToggle: () => void
}

export function EditorNavbar({ isOpen, onToggle }: EditorNavbarProps) {
  return (
    <header className="h-14 flex items-center px-4 bg-surface border-b border-surface-border shrink-0">
      <div className="flex items-center" style={{ width: "12rem" }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="text-copy-muted hover:text-copy-primary hover:bg-[var(--bg-subtle)]"
        >
          {isOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>
      <div className="flex-1" />
      <div className="flex items-center justify-end" style={{ width: "12rem" }}>
          <UserButton />
        </div>
    </header>
  )
}
