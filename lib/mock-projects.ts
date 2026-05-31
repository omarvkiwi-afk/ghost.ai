export interface Project {
  id: string
  name: string
  slug: string
  owned: boolean
}

export const MOCK_PROJECTS: Project[] = [
  { id: "1", name: "Ghost Architecture", slug: "ghost-architecture", owned: true },
  { id: "2", name: "API Gateway Design", slug: "api-gateway-design", owned: true },
  { id: "3", name: "Shared Platform Spec", slug: "shared-platform-spec", owned: false },
]
