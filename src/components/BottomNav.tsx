import { Sparkles, Library, Users } from 'lucide-react'
import { NavScreen } from '../types'

interface BottomNavProps {
  active: NavScreen
  onChange: (screen: NavScreen) => void
}

const ITEMS: { key: NavScreen; label: string; icon: typeof Sparkles }[] = [
  { key: 'concierge', label: 'Concierge', icon: Sparkles },
  { key: 'library', label: 'Library', icon: Library },
  { key: 'community', label: 'Community', icon: Users },
]

export function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <div className="flex-shrink-0 flex items-center justify-around border-t border-neutral-900 bg-black py-2.5">
      {ITEMS.map((item) => {
        const Icon = item.icon
        const isActive = active === item.key
        return (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            className="flex flex-col items-center gap-1 w-16"
          >
            <Icon
              size={19}
              className={isActive ? 'text-purple-400' : 'text-neutral-600'}
              strokeWidth={isActive ? 2.4 : 2}
            />
            <span className={`text-[10px] font-medium ${isActive ? 'text-white' : 'text-neutral-600'}`}>
              {item.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
