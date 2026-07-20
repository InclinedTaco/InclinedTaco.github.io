'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const options = [
  { id: 'light', label: 'Light', Icon: Sun },
  { id: 'dark', label: 'Dark', Icon: Moon },
  { id: 'system', label: 'System', Icon: Monitor },
] as const

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="theme-toggle theme-placeholder" />

  return (
    <div className="theme-toggle" role="group" aria-label="Color theme">
      {options.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          aria-label={`Use ${label.toLowerCase()} theme`}
          aria-pressed={theme === id}
          onClick={() => setTheme(id)}
        >
          <Icon size={14} strokeWidth={1.8} aria-hidden="true" />
        </button>
      ))}
    </div>
  )
}
