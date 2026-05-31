"use client"

import { createContext, useContext } from "react"
import type { Project } from "@/lib/mock-projects"

interface ProjectDialogContextValue {
  openCreate: () => void
  openRename: (project: Project) => void
  openDelete: (project: Project) => void
}

export const ProjectDialogContext = createContext<ProjectDialogContextValue | null>(null)

export function useProjectDialogContext(): ProjectDialogContextValue {
  const ctx = useContext(ProjectDialogContext)
  if (!ctx) throw new Error("useProjectDialogContext must be used within EditorShell")
  return ctx
}
