export interface DiscoverGame {
  id: number
  title: string
  platform: string
  genre: string
  score: number
  match: number
  price: string
  release: string
  cover: string
  accent: string
}

export const heroGame: DiscoverGame = {
  id: 1,
  title: 'Elden Ring',
  platform: 'PS5 / PC',
  genre: 'Souls-like RPG',
  score: 96,
  match: 98,
  price: '59.99 €',
  release: 'Disponible ahora',
  cover:
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
  accent: 'from-violet-500 via-purple-500 to-fuchsia-500',
}

export const recommendedGames: DiscoverGame[] = [
  {
    id: 2,
    title: 'Baldur\'s Gate 3',
    platform: 'PC / Xbox',
    genre: 'RPG',
    score: 94,
    match: 97,
    price: '49.99 €',
    release: 'Muy recomendado',
    cover:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    accent: 'from-cyan-500 via-blue-500 to-violet-500',
  },
  {
    id: 3,
    title: 'Starfield',
    platform: 'Xbox / PC',
    genre: 'Exploración',
    score: 89,
    match: 92,
    price: '69.99 €',
    release: 'Nuevo',
    cover:
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80',
    accent: 'from-orange-500 via-rose-500 to-purple-500',
  },
  {
    id: 4,
    title: 'Hades II',
    platform: 'PC',
    genre: 'Roguelite',
    score: 91,
    match: 95,
    price: '29.99 €',
    release: 'Top 2026',
    cover:
      'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=900&q=80',
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    id: 5,
    title: 'Tekken 8',
    platform: 'PS5 / PC',
    genre: 'Lucha',
    score: 90,
    match: 86,
    price: '69.99 €',
    release: 'Trending',
    cover:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',
    accent: 'from-red-500 via-orange-500 to-yellow-500',
  },
]

export const upcomingGames: DiscoverGame[] = [
  {
    id: 6,
    title: 'Silent Hill f',
    platform: 'PS5 / PC',
    genre: 'Terror',
    score: 88,
    match: 89,
    price: '69.99 €',
    release: 'Próximo 29 de nov',
    cover:
      'https://images.unsplash.com/photo-1526509867162-6e5a5c3dbd4d?auto=format&fit=crop&w=900&q=80',
    accent: 'from-slate-500 via-zinc-500 to-sky-500',
  },
  {
    id: 7,
    title: 'Final Fantasy XVI',
    platform: 'PS5',
    genre: 'Aventura',
    score: 92,
    match: 90,
    price: '79.99 €',
    release: 'Semana próxima',
    cover:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    accent: 'from-pink-500 via-purple-500 to-indigo-500',
  },
  {
    id: 8,
    title: 'Deadlock',
    platform: 'PC',
    genre: 'Shooter',
    score: 85,
    match: 84,
    price: 'Gratis',
    release: 'Beta privada',
    cover:
      'https://images.unsplash.com/photo-1528819622761-6bcf032f7d5c?auto=format&fit=crop&w=900&q=80',
    accent: 'from-amber-500 via-orange-500 to-red-500',
  },
]
