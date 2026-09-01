import { Bell, Menu, User } from 'lucide-react'
import { Logo } from './Logo'

interface TopBarProps {
  onMenu: () => void
  onBell: () => void
  onProfile: () => void
}

export function TopBar({ onMenu, onBell, onProfile }: TopBarProps) {
  return (
    <div className="flex-shrink-0 flex items-center justify-between border-b border-neutral-900 bg-black/90 px-4 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenu}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-200"
          aria-label="Abrir menú"
        >
          <Menu size={17} />
        </button>
        <Logo />
      </div>

      <div className="flex items-center gap-3">
        <button onClick={onBell} className="relative text-neutral-400" aria-label="Notificaciones">
          <Bell size={18} />
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-cyan-400 px-1 text-[9px] font-bold text-black">
            7
          </span>
        </button>
        <button
          onClick={onProfile}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400"
          aria-label="Perfil"
        >
          <User size={14} className="text-black" />
        </button>
      </div>
    </div>
  )
}
