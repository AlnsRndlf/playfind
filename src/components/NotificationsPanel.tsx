import { X } from 'lucide-react'

const ALERTS = [
  'Nuevos juegos añadidos a tu radar esta semana.',
  'DragonSlayer99 comentó en un hilo que sigues.',
  'Tu Gaming DNA se actualizó tras tus últimas partidas.',
]

interface NotificationsPanelProps {
  onClose: () => void
}

export function NotificationsPanel({ onClose }: NotificationsPanelProps) {
  return (
    <div className="absolute top-14 right-4 z-40 w-64 rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-900">
        <span className="text-white text-sm font-medium">Notificaciones</span>
        <button onClick={onClose} className="text-neutral-500" aria-label="Cerrar">
          <X size={14} />
        </button>
      </div>
      <div className="max-h-56 overflow-y-auto">
        {ALERTS.map((a, i) => (
          <div key={i} className="px-4 py-3 border-b border-neutral-900 last:border-0">
            <p className="text-neutral-300 text-xs leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
