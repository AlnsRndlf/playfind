import { Check, Lock, X, Zap } from 'lucide-react'

interface PaywallViewProps {
  onClose: () => void
}

const FEATURES = [
  'Recomendaciones de IA sin límite diario',
  'Gaming DNA con análisis profundo',
  'Acceso anticipado a nuevas funciones',
  'Sin anuncios, para siempre',
]

export function PaywallView({ onClose }: PaywallViewProps) {
  return (
    <div className="absolute inset-0 z-40 flex flex-col bg-black">
      <div className="flex-shrink-0 flex justify-end px-4 py-3">
        <button onClick={onClose} className="text-neutral-500" aria-label="Cerrar">
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col items-center px-6 pb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center mb-4">
          <Zap size={28} className="text-black" />
        </div>
        <h1 className="text-white text-xl font-semibold">PLAYFIND PRO</h1>
        <p className="text-neutral-400 text-sm mt-1 text-center">
          Tu concierge de videojuegos, sin límites.
        </p>

        <div className="w-full mt-8 space-y-3">
          {FEATURES.map((f) => (
            <div key={f} className="flex items-center gap-3">
              <div className="w-5 h-5 flex-shrink-0 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Check size={11} className="text-cyan-400" />
              </div>
              <span className="text-neutral-200 text-sm">{f}</span>
            </div>
          ))}
        </div>

        <div className="w-full mt-auto pt-8">
          <button className="w-full rounded-xl py-3.5 text-sm font-semibold bg-gradient-to-r from-purple-500 to-cyan-400 text-black flex items-center justify-center gap-2">
            <Lock size={14} /> Suscribirme — $4.99/mes
          </button>
          <p className="text-neutral-600 text-[11px] text-center mt-3">
            Cancela cuando quieras.
          </p>
        </div>
      </div>
    </div>
  )
}
