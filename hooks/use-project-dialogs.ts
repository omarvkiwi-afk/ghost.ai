"use client"

import { useState } from "react"
import { MOCK_PROJECTS, type Project } from "@/lib/mock-projects"

type DialogType = "create" | "rename" | "delete" | null

interface DialogState {
  type: DialogType
  project: Project | null
}

interface FormState {
  name: string
  slug: string
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

export function useProjectDialogs() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS)
  const [dialog, setDialog] = useState<DialogState>({ type: null, project: null })
  const [form, setForm] = useState<FormState>({ name: "", slug: "" })
  const [loading, setLoading] = useState(false)

  const openCreate = () => {
    setForm({ name: "", slug: "" })
    setDialog({ type: "create", project: null })
  }

  const openRename = (project: Project) => {
    setForm({ name: project.name, slug: project.slug })
    setDialog({ type: "rename", project })
  }

  const openDelete = (project: Project) => {
    setForm({ name: "", slug: "" })
    setDialog({ type: "delete", project })
  }

  const closeAll = () => setDialog({ type: null, project: null })

  const handleNameChange = (name: string) => {
    setForm({ name, slug: toSlug(name) })
  }

  const handleCreate = () => {
    if (!form.name.trim()) return
    setLoading(true)
    const newProject: Project = {
      id: Date.now().toString(),
      name: form.name.trim(),
      slug: form.slug || toSlug(form.name),
      owned: true,
    }
    setProjects(prev => [...prev, newProject])
    setLoading(false)
    closeAll()
  }

  const handleRename = () => {
    if (!form.name.trim() || !dialog.project) return
    setLoading(true)
    setProjects(prev =>
      prev.map(p =>
        p.id === dialog.project!.id
          ? { ...p, name: form.name.trim(), slug: form.slug || toSlug(form.name) }
          : p
      )
    )
    setLoading(false)
    closeAll()
  }

  const handleDelete = () => {
    if (!dialog.project) return
    setLoading(true)
    setProjects(prev => prev.filter(p => p.id !== dialog.project!.id))
    setLoading(false)
    closeAll()
  }

  return {
    projects,
    dialog,
    form,
    loading,
    openCreate,
    openRename,
    openDelete,
    closeAll,
    handleNameChange,
    handleCreate,
    handleRename,
    handleDelete,
  }
}
