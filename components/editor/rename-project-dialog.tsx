"use client"

import { EditorDialog } from "@/components/editor/editor-dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/mock-projects"

interface RenameProjectDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  project: Project | null
  name: string
  loading: boolean
  onNameChange: (name: string) => void
  onSubmit: () => void
}

export function RenameProjectDialog({
  open,
  onOpenChange,
  project,
  name,
  loading,
  onNameChange,
  onSubmit,
}: RenameProjectDialogProps) {
  return (
    <EditorDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Rename Project"
      description={project ? `Renaming "${project.name}"` : undefined}
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={onSubmit} disabled={loading || !name.trim()}>
            Rename
          </Button>
        </>
      }
    >
      <Input
        placeholder="Project name"
        value={name}
        onChange={e => onNameChange(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") onSubmit()
        }}
        autoFocus
        style={{ color: "var(--text-primary)" }}
      />
    </EditorDialog>
  )
}
