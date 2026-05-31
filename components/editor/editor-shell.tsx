"use client"

import { useState } from "react"
import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"
import { CreateProjectDialog } from "@/components/editor/create-project-dialog"
import { RenameProjectDialog } from "@/components/editor/rename-project-dialog"
import { DeleteProjectDialog } from "@/components/editor/delete-project-dialog"
import { ProjectDialogContext } from "@/components/editor/project-dialog-context"
import { useProjectDialogs } from "@/hooks/use-project-dialogs"

interface EditorShellProps {
  children: React.ReactNode
}

export function EditorShell({ children }: EditorShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const {
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
  } = useProjectDialogs()

  return (
    <ProjectDialogContext.Provider value={{ openCreate, openRename, openDelete }}>
      <div className="flex flex-col h-screen overflow-hidden bg-base">
        <EditorNavbar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(prev => !prev)}
        />
        <div className="flex-1 relative overflow-hidden">
          {sidebarOpen && (
            <div
              className="absolute inset-0 z-40 md:hidden"
              style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
              onClick={() => setSidebarOpen(false)}
            />
          )}
          <ProjectSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            projects={projects}
            onNewProject={openCreate}
            onRename={openRename}
            onDelete={openDelete}
          />
          <main className="h-full">{children}</main>
        </div>
      </div>

      <CreateProjectDialog
        open={dialog.type === "create"}
        onOpenChange={open => { if (!open) closeAll() }}
        name={form.name}
        slug={form.slug}
        loading={loading}
        onNameChange={handleNameChange}
        onSubmit={handleCreate}
      />
      <RenameProjectDialog
        open={dialog.type === "rename"}
        onOpenChange={open => { if (!open) closeAll() }}
        project={dialog.project}
        name={form.name}
        loading={loading}
        onNameChange={handleNameChange}
        onSubmit={handleRename}
      />
      <DeleteProjectDialog
        open={dialog.type === "delete"}
        onOpenChange={open => { if (!open) closeAll() }}
        project={dialog.project}
        loading={loading}
        onConfirm={handleDelete}
      />
    </ProjectDialogContext.Provider>
  )
}
