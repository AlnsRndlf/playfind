import { GAMES } from '../data/games'

export function LibraryView() {
  return (
    <div className="h-full w-full overflow-y-auto bg-black px-4 py-4">
      <h2 className="text-white text-base font-semibold mb-3">Tu biblioteca</h2>
      <div className="grid grid-cols-2 gap-3">
        {GAMES.map((g) => (
          <div key={g.id} className="rounded-2xl overflow-hidden border border-neutral-800">
            <div className={`h-32 bg-gradient-to-b ${g.gradient} relative flex items-end p-2.5`}>
              <span className="absolute top-2 left-2 text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/60 text-neutral-300">
                {g.status}
              </span>
              <p className="text-white text-xs font-semibold leading-tight">{g.name}</p>
            </div>
            <div className="h-1 bg-neutral-900">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
                style={{ width: `${g.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
