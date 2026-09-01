import { useEffect } from 'react'
import { Gamepad2 } from 'lucide-react'

interface SplashScreenProps {
  onFinish: () => void
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-black">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center animate-pulse">
        <Gamepad2 size={30} className="text-black" strokeWidth={2.5} />
      </div>
      <span className="text-white font-semibold tracking-[0.3em] text-sm">PLAYFIND</span>
      <span className="text-neutral-500 text-xs">Tu gaming concierge</span>
    </div>
  )
}
