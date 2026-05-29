"use client"

import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      className="fixed top-0 left-0 h-full w-72 z-50 flex flex-col bg-elevated backdrop-blur-sm border-r border-surface-border"
      style={{
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
          className="h-8 w-8 text-copy-muted hover:text-copy-primary hover:bg-subtle"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-col flex-1 overflow-hidden p-4">
        <Tabs defaultValue="my-projects" className="flex flex-col flex-1">
          <TabsList className="w-full bg-subtle">
            <TabsTrigger value="my-projects" className="flex-1 text-xs">
              My Projects
            </TabsTrigger>
            <TabsTrigger value="shared" className="flex-1 text-xs">
              Shared
            </TabsTrigger>
          </TabsList>
          <TabsContent value="my-projects" className="flex-1 mt-4">
            <div className="flex items-center justify-center h-24 text-copy-muted text-sm">
              No projects yet
            </div>
          </TabsContent>
          <TabsContent value="shared" className="flex-1 mt-4">
            <div className="flex items-center justify-center h-24 text-copy-muted text-sm">
              No shared projects
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="p-4 border-t border-surface-border shrink-0">
        <Button className="w-full" variant="default">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  )
}
