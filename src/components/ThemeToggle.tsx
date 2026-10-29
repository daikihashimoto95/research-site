"use client"

import * as React from "react"
import { TbMoon, TbSun } from "react-icons/tb"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"
  const label = !mounted
    ? "表示テーマを切り替え / Change color theme"
    : isDark
      ? "ライトモードに切り替え / Switch to light mode"
      : "ダークモードに切り替え / Switch to dark mode"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="h-11 w-11 rounded-full text-muted-foreground hover:text-foreground"
      disabled={!mounted}
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <TbSun aria-hidden="true" /> : <TbMoon aria-hidden="true" />}
    </Button>
  )
}
