"use client"

import { X, Plus, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Project } from "@/lib/mock-projects"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
  projects: Project[]
  onNewProject: () => void
  onRename: (project: Project) => void
  onDelete: (project: Project) => void
}

function ProjectItem({
  project,
  onRename,
  onDelete,
}: {
  project: Project
  onRename: (project: Project) => void
  onDelete: (project: Project) => void
}) {
  return (
    <div className="group flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer hover:bg-[var(--bg-subtle)] transition-colors">
      <span className="text-sm text-copy-primary truncate flex-1">{project.name}</span>
      {project.owned && (
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 shrink-0 ml-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-copy-muted hover:text-copy-primary"
            onClick={e => {
              e.stopPropagation()
              onRename(project)
            }}
          >
            <Pencil className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-copy-muted hover:text-[var(--state-error)]"
            onClick={e => {
              e.stopPropagation()
              onDelete(project)
            }}
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      )}
    </div>
  )
}

function ProjectList({
  projects,
  emptyLabel,
  onRename,
  onDelete,
}: {
  projects: Project[]
  emptyLabel: string
  onRename: (project: Project) => void
  onDelete: (project: Project) => void
}) {
  if (projects.length === 0) {
    return (
      <div className="flex items-center justify-center h-24 text-copy-muted text-sm">
        {emptyLabel}
      </div>
    )
  }
  return (
    <ScrollArea className="h-full">
      <div className="space-y-0.5">
        {projects.map(project => (
          <ProjectItem
            key={project.id}
            project={project}
            onRename={onRename}
            onDelete={onDelete}
          />
        ))}
      </div>
    </ScrollArea>
  )
}

export function ProjectSidebar({
  isOpen,
  onClose,
  projects,
  onNewProject,
  onRename,
  onDelete,
}: ProjectSidebarProps) {
  const myProjects = projects.filter(p => p.owned)
  const sharedProjects = projects.filter(p => !p.owned)

  return (
    <aside
      className="absolute left-0 z-50 flex flex-col border-r border-surface-border"
      style={{
        top: 0,
        bottom: 0,
        width: "18rem",
        backgroundColor: "var(--bg-elevated)",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 300ms ease-in-out",
      }}
    >
      <div className="flex items-center justify-between px-4 h-14 border-b border-surface-border shrink-0">
        <span className="text-sm font-medium text-copy-primary">Projects</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-8 w-8 text-copy-muted hover:text-copy-primary hover:bg-[var(--bg-subtle)]"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-col flex-1 overflow-hidden p-4">
        <Tabs defaultValue="my-projects" className="flex flex-col flex-1">
          <TabsList className="w-full" style={{ backgroundColor: "var(--bg-subtle)" }}>
            <TabsTrigger value="my-projects" className="flex-1 text-xs">
              My Projects
            </TabsTrigger>
            <TabsTrigger value="shared" className="flex-1 text-xs">
              Shared
            </TabsTrigger>
          </TabsList>
          <TabsContent value="my-projects" className="flex-1 mt-2">
            <ProjectList
              projects={myProjects}
              emptyLabel="No projects yet"
              onRename={onRename}
              onDelete={onDelete}
            />
          </TabsContent>
          <TabsContent value="shared" className="flex-1 mt-2">
            <ProjectList
              projects={sharedProjects}
              emptyLabel="No shared projects"
              onRename={onRename}
              onDelete={onDelete}
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="p-4 border-t border-surface-border shrink-0">
        <Button className="w-full" variant="default" onClick={onNewProject}>
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  )
}
