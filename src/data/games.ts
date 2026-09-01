import { Game } from '../types'

export const GENRES = [
  'RPG', 'Shooter', 'Souls-like', 'Estrategia',
  'Terror', 'Aventura', 'Indie', 'Deportes',
]

export const GAMES: Game[] = [
  { id: 1, name: 'Elden Ring', genre: 'Souls-like', gradient: 'from-purple-900 via-neutral-950 to-black', status: 'Jugando', progress: 62 },
  { id: 2, name: 'Remnant II', genre: 'RPG', gradient: 'from-cyan-900 via-neutral-950 to-black', status: 'Pendiente', progress: 0 },
  { id: 3, name: 'Hollow Knight', genre: 'Indie', gradient: 'from-indigo-900 via-neutral-950 to-black', status: 'Completado', progress: 100 },
  { id: 4, name: 'Lies of P', genre: 'Souls-like', gradient: 'from-fuchsia-900 via-neutral-950 to-black', status: 'Favorito', progress: 88 },
  { id: 5, name: 'Dave the Diver', genre: 'Indie', gradient: 'from-teal-900 via-neutral-950 to-black', status: 'Jugando', progress: 34 },
  { id: 6, name: "Baldur's Gate 3", genre: 'RPG', gradient: 'from-violet-900 via-neutral-950 to-black', status: 'Pendiente', progress: 0 },
]
