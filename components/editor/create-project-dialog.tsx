"use client"

import { EditorDialog } from "@/components/editor/editor-dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface CreateProjectDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  name: string
  slug: string
  loading: boolean
  onNameChange: (name: string) => void
  onSubmit: () => void
}

export function CreateProjectDialog({
  open,
  onOpenChange,
  name,
  slug,
  loading,
  onNameChange,
  onSubmit,
}: CreateProjectDialogProps) {
  return (
    <EditorDialog
      open={open}
      onOpenChange={onOpenChange}
      title="New Project"
      description="Give your architecture workspace a name."
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={onSubmit} disabled={loading || !name.trim()}>
            Create
          </Button>
        </>
      }
    >
      <div className="space-y-3">
        <Input
          placeholder="Project name"
          value={name}
          onChange={e => onNameChange(e.target.value)}
          autoFocus
          style={{ color: "var(--text-primary)" }}
        />
        {slug && (
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Slug:{" "}
            <span style={{ color: "var(--text-primary)", fontFamily: "var(--font-geist-mono)" }}>
              {slug}
            </span>
          </p>
        )}
      </div>
    </EditorDialog>
  )
}
