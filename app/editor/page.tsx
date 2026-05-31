"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useProjectDialogContext } from "@/components/editor/project-dialog-context"

export default function EditorPage() {
  const { openCreate } = useProjectDialogContext()

  return (
    <div className="h-full bg-base flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center max-w-sm px-4">
        <h1 className="text-xl font-semibold text-copy-primary">
          Create a project or open an existing one
        </h1>
        <p className="text-sm text-copy-muted">
          Start a new architecture workspace, or choose a project from the sidebar.
        </p>
        <Button onClick={openCreate}>
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </div>
  )
}
