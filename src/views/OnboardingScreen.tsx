import { useState } from 'react'
import { Check } from 'lucide-react'
import { GENRES } from '../data/games'

interface OnboardingScreenProps {
  onDone: () => void
}

// Layout en columna (header fijo / grid con scroll propio / footer fijo).
// No se usa position:absolute en ningún punto, por lo que el botón
// "Continuar" nunca se superpone con la cuadrícula de géneros, incluso
// cuando esta crece o se hace scroll — esto evita el bug de layout anterior.
export function OnboardingScreen({ onDone }: OnboardingScreenProps) {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (genre: string) => {
    setSelected((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    )
  }

  return (
    <div className="flex h-full w-full flex-col bg-black">
      <div className="flex-shrink-0 px-6 pt-10 pb-4 text-center">
        <h1 className="text-white text-xl font-semibold">Tu Gaming DNA</h1>
        <p className="text-neutral-400 text-sm mt-1">
          Elige los géneros que más te representan
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-4">
        <div className="grid grid-cols-2 gap-3">
          {GENRES.map((genre) => {
            const active = selected.includes(genre)
            return (
              <button
                key={genre}
                onClick={() => toggle(genre)}
                className={`rounded-2xl p-4 text-left border transition-colors ${
                  active
                    ? 'bg-purple-500/10 border-purple-500 text-white'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{genre}</span>
                  {active && <Check size={14} className="text-purple-400" />}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex-shrink-0 px-6 pt-4 pb-6 border-t border-neutral-900 bg-black">
        <button
          disabled={selected.length === 0}
          onClick={onDone}
          className={`w-full rounded-xl py-3.5 text-sm font-semibold transition-colors ${
            selected.length === 0
              ? 'bg-neutral-800 text-neutral-500'
              : 'bg-gradient-to-r from-purple-500 to-cyan-400 text-black'
          }`}
        >
          Continuar {selected.length > 0 && `(${selected.length})`}
        </button>
      </div>
    </div>
  )
}
