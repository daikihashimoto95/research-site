"use client"

import * as React from "react"
import { TbMoon, TbSun } from "react-icons/tb"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-9 w-9" disabled>
          <TbSun className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9" disabled>
          <TbMoon className="h-5 w-5" />
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1">
      <Button
        variant={theme === "light" ? "default" : "ghost"}
        size="icon"
        className="h-9 w-9"
        onClick={() => setTheme("light")}
      >
        <TbSun className="h-5 w-5" />
        <span className="sr-only">ライトモード</span>
      </Button>
      <Button
        variant={theme === "dark" ? "default" : "ghost"}
        size="icon"
        className="h-9 w-9"
        onClick={() => setTheme("dark")}
      >
        <TbMoon className="h-5 w-5" />
        <span className="sr-only">ダークモード</span>
      </Button>
    </div>
  )
}
