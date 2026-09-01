import { ArrowRight, Filter, Search, Star } from 'lucide-react'
import { heroGame, recommendedGames, upcomingGames } from '../data/discover'

interface DiscoverViewProps {
  onBack: () => void
}

function GameTile({
  title,
  match,
  score,
  cover,
  accent,
  platform,
  genre,
}: {
  title: string
  match: number
  score: number
  cover: string
  accent: string
  platform: string
  genre: string
}) {
  return (
    <div className="w-[170px] shrink-0 overflow-hidden rounded-[1.6rem] border border-neutral-800 bg-neutral-950 shadow-lg shadow-black/30">
      <div className={`relative h-52 bg-gradient-to-br ${accent}`}>
        <img src={cover} alt={title} className="h-full w-full object-cover opacity-80 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
        <div className="absolute left-2.5 top-2.5 rounded-full border border-white/15 bg-black/45 px-2 py-1 text-[10px] font-semibold text-cyan-200">
          {score}/100
        </div>
      </div>
      <div className="space-y-2 p-3">
        <div className="flex items-center justify-between text-[10px] text-neutral-300">
          <span>{platform}</span>
          <span className="rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-emerald-300">
            {match}% Match
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="text-[11px] text-neutral-500">{genre}</p>
        </div>
      </div>
    </div>
  )
}

export function DiscoverView({ onBack }: DiscoverViewProps) {
  return (
    <div className="h-full w-full overflow-y-auto bg-black px-4 pb-24 pt-3">
      <div className="mb-4 flex items-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-950 px-3 py-2.5 shadow-lg shadow-black/20">
        <button onClick={onBack} className="text-neutral-400" aria-label="Volver">
          <ArrowRight size={16} className="rotate-180" />
        </button>
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-300">
          <Search size={15} className="text-neutral-500" />
          <input
            placeholder="Buscar juegos..."
            className="w-full bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
          />
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-300" aria-label="Filtrar juegos">
          <Filter size={15} />
        </button>
      </div>

      <section className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950 shadow-2xl shadow-fuchsia-500/5">
        <img
          src={heroGame.cover}
          alt={heroGame.title}
          className="h-56 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300">
            <Star size={12} className="fill-cyan-300 text-cyan-300" /> Juego del mes
          </div>
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-2xl font-semibold text-white">{heroGame.title}</p>
              <p className="mt-1 text-xs text-neutral-200">{heroGame.genre}</p>
            </div>
            <div className="rounded-full border border-white/20 bg-black/25 px-2 py-1 text-[10px] font-medium text-white">
              {heroGame.match}% Match
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-xs font-semibold text-black">
              Añadir a Radar
            </button>
            <span className="text-xs text-neutral-300">{heroGame.score}/100 · {heroGame.platform}</span>
          </div>
        </div>
      </section>

      <section className="mt-7">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold text-white">Recomendado por tu ADN</h3>
          <button className="text-xs text-cyan-300">Ver más</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {recommendedGames.map((game) => (
            <GameTile key={game.id} {...game} />
          ))}
        </div>
      </section>

      <section className="mt-7">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold text-white">Lanzamientos populares</h3>
          <button className="text-xs text-cyan-300">Próximamente</button>
        </div>
        <div className="space-y-3">
          {upcomingGames.map((game) => (
            <div
              key={game.id}
              className="flex gap-3 overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-neutral-950 p-2.5"
            >
              <div className={`relative h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-br ${game.accent}`}>
                <img src={game.cover} alt={game.title} className="h-full w-full object-cover opacity-80" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-white">{game.title}</p>
                    <p className="text-[11px] text-neutral-500">{game.genre}</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                    {game.match}% Match
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-400">
                  <span>{game.platform}</span>
                  <span>{game.release}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-cyan-300">{game.score}/100</span>
                  <span className="text-xs text-white">{game.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
