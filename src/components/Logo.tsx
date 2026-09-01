import { Gamepad2 } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
        <Gamepad2 size={16} className="text-black" strokeWidth={2.5} />
      </div>
      <span className="text-white font-semibold tracking-wide text-sm">
        PLAY<span className="text-cyan-400">FIND</span>
      </span>
    </div>
  )
}
