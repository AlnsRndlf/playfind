import { ChevronLeft, Crown, Sparkles, Trophy, User } from 'lucide-react'
import { profileData } from '../data/profile'

interface ProfileViewProps {
  onBack: () => void
  onPaywall: () => void
}

export function ProfileView({ onBack, onPaywall }: ProfileViewProps) {
  return (
    <div className="absolute inset-0 z-30 flex flex-col bg-black">
      <div className="flex-shrink-0 flex items-center gap-3 border-b border-neutral-900 px-4 py-3">
        <button onClick={onBack} className="text-neutral-400" aria-label="Volver">
          <ChevronLeft size={20} />
        </button>
        <span className="text-sm font-medium text-white">Perfil</span>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-24 pt-5">
        <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950 p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-[1.8rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 text-black shadow-2xl shadow-violet-500/20">
              <User size={32} />
            </div>
            <div className="min-w-0">
              <p className="text-xl font-semibold text-white">{profileData.name}</p>
              <p className="text-xs text-cyan-300">{profileData.username}</p>
              <p className="mt-1 inline-flex rounded-full border border-violet-500/40 bg-violet-500/10 px-2 py-1 text-[10px] font-medium text-violet-200">
                {profileData.tag}
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-[11px] text-neutral-400">
              <span>XP actual</span>
              <span>{profileData.xpLabel}</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-neutral-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400"
                style={{ width: `${profileData.xp}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[1.75rem] border border-neutral-800 bg-neutral-950 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles size={15} className="text-cyan-400" />
            <h3 className="text-sm font-semibold text-white">Gaming DNA</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {profileData.favoriteGenres.map((genre, index) => (
              <span
                key={genre}
                className={`rounded-full border px-2.5 py-1.5 text-[11px] font-medium ${
                  index % 2 === 0
                    ? 'border-violet-500/40 bg-violet-500/10 text-violet-200'
                    : 'border-cyan-500/40 bg-cyan-500/10 text-cyan-200'
                }`}
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {profileData.stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.4rem] border border-neutral-800 bg-neutral-950 p-3 text-center">
              <p className="text-lg font-semibold text-white">{stat.value}</p>
              <p className="mt-1 text-[10px] leading-relaxed text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-[1.75rem] border border-neutral-800 bg-neutral-950 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Trophy size={15} className="text-amber-400" />
            <h3 className="text-sm font-semibold text-white">Jugado recientemente</h3>
          </div>
          <div className="space-y-2">
            {profileData.recentGames.map((game) => (
              <div key={game.title} className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/70 px-3 py-2.5">
                <div>
                  <p className="text-sm font-medium text-white">{game.title}</p>
                  <p className="text-[10px] text-neutral-500">{game.time}</p>
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onPaywall}
          className="mt-5 flex w-full items-center justify-between rounded-[1.7rem] border border-fuchsia-500/40 bg-gradient-to-r from-fuchsia-500/15 via-violet-500/15 to-cyan-500/15 p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-black">
              <Crown size={18} />
            </div>
            <div className="text-left">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-fuchsia-300">Plan</p>
              <p className="text-sm font-semibold text-white">{profileData.plan}</p>
            </div>
          </div>
          <span className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold text-white">
            Upgrade
          </span>
        </button>
      </div>
    </div>
  )
}
