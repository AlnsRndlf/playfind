import {
  Bell,
  ChevronRight,
  CircleUserRound,
  Compass,
  LogOut,
  Settings2,
  Sparkles,
  Star,
  User,
  Wand2,
  Zap,
} from 'lucide-react'

interface MenuDrawerProps {
  onClose: () => void
  onOpenProfile: () => void
  onOpenDiscover: () => void
  onOpenNotifications: () => void
  onOpenPaywall: () => void
}

const menuItems = [
  { label: 'Mi Perfil', icon: User, action: 'profile' },
  { label: 'Descubrir', icon: Compass, action: 'discover' },
  { label: 'Notificaciones', icon: Bell, action: 'notifications', badge: 7 },
  { label: 'Ajustes de IA', icon: Wand2, action: 'settings' },
  { label: 'Cerrar Sesión', icon: LogOut, action: 'logout' },
] as const

export function MenuDrawer({
  onClose,
  onOpenProfile,
  onOpenDiscover,
  onOpenNotifications,
  onOpenPaywall,
}: MenuDrawerProps) {
  const handleAction = (action: string) => {
    onClose()

    switch (action) {
      case 'profile':
        onOpenProfile()
        break
      case 'discover':
        onOpenDiscover()
        break
      case 'notifications':
        onOpenNotifications()
        break
      case 'paywall':
        onOpenPaywall()
        break
      default:
        break
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label="Cerrar menú"
        onClick={onClose}
        className="absolute inset-0 z-40 bg-black/70"
      />

      <aside className="absolute inset-y-0 left-0 z-50 w-[78%] max-w-[320px] border-r border-neutral-800 bg-[#0b0b0d] px-4 py-5 shadow-[0_0_40px_rgba(0,0,0,0.75)] transition-transform duration-300 ease-out animate-fade-in">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 text-black shadow-lg shadow-violet-500/20">
              <CircleUserRound size={28} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">Ari Vega</p>
              <p className="text-[11px] text-neutral-400">Nivel 27 · Jugador Elite</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-neutral-800 p-1.5 text-neutral-400"
            aria-label="Cerrar menú"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="mt-5 space-y-2">
          {menuItems.map(({ label, icon: Icon, badge, action }) => (
            <button
              key={label}
              type="button"
              onClick={() => handleAction(action)}
              className={`flex w-full items-center justify-between rounded-2xl border px-3 py-2.5 text-left transition-colors ${
                label === 'Mi Perfil'
                  ? 'border-neutral-800 bg-neutral-900/80 text-white'
                  : 'border-transparent bg-transparent text-neutral-200 hover:bg-neutral-900/80 hover:border-neutral-800'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-neutral-300">
                  <Icon size={15} />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </span>

              {badge ? (
                <span className="rounded-full bg-cyan-400/20 px-1.5 py-0.5 text-[10px] font-semibold text-cyan-300">
                  {badge}
                </span>
              ) : null}
            </button>
          ))}

          <button
            type="button"
            onClick={() => {
              onClose()
              onOpenPaywall()
            }}
            className="mt-4 flex w-full items-center justify-between overflow-hidden rounded-2xl border border-fuchsia-500/50 bg-gradient-to-r from-fuchsia-500/15 via-violet-500/15 to-cyan-500/15 px-3 py-3 text-left shadow-lg shadow-fuchsia-500/10"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-black">
                <Zap size={15} />
              </span>
              <span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-fuchsia-300">
                  PRO
                </span>
                <span className="block text-sm font-semibold text-white">PLAYFIND PRO</span>
              </span>
            </span>
            <Star size={15} className="text-fuchsia-300" />
          </button>

          <div className="mt-5 rounded-2xl border border-neutral-800 bg-neutral-900/70 p-3">
            <div className="flex items-center justify-between text-[11px] text-neutral-400">
              <span className="flex items-center gap-2">
                <Sparkles size={12} className="text-cyan-400" /> IA Coach
              </span>
              <span className="text-cyan-300">Activo</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-neutral-800">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500" />
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-neutral-400">
              Tono actual: agresivo, orientado a desafío y descubrimiento.
            </p>
            <button
              type="button"
              onClick={() => {
                onClose()
                onOpenPaywall()
              }}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-neutral-700 px-2.5 py-1.5 text-[11px] font-medium text-white"
            >
              <Settings2 size={12} /> Ajustar tono
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
