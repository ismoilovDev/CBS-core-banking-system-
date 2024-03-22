import { ReactNode } from "react"

export enum Roles {
   Admin = "ADMIN",
   Director = "DIRECTOR",
   ProjectManager = "PROJECT_MANAGER",
   User = "USER",
}

export type NavItem = {
   title: string
   href: string
   disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
   title: string
   disabled?: boolean
   external?: boolean
   icon?: ReactNode
} & (
      | {
         href: string
         items?: never
      }
      | {
         href?: string
         // items: NavLink[]
      }
   )

export type SiteConfig = {
   name: string
   description: string
   url: string
   ogImage: string
   mailSupport: string
   links: {
      twitter: string
      github: string
   }
}

export type DocsConfig = {
   mainNav: MainNavItem[]
   sidebarNav: SidebarNavItem[]
}

export type MarketingConfig = {
   mainNav: MainNavItem[]
}

export type DashboardConfig = {
   mainNav: MainNavItem[]
   sidebarNav: SidebarNavItem[]
}