"use client"

import { EditorDialog } from "@/components/editor/editor-dialog"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/mock-projects"

interface DeleteProjectDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  project: Project | null
  loading: boolean
  onConfirm: () => void
}

export function DeleteProjectDialog({
  open,
  onOpenChange,
  project,
  loading,
  onConfirm,
}: DeleteProjectDialogProps) {
  return (
    <EditorDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Delete Project"
      description={
        project
          ? `Are you sure you want to delete "${project.name}"? This action cannot be undone.`
          : undefined
      }
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)} disabled={loading}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm} disabled={loading}>
            Delete
          </Button>
        </>
      }
    />
  )
}
