import { ForumPost } from '../types'

export const FORUM_POSTS: ForumPost[] = [
  {
    id: 1,
    user: 'DragonSlayer99',
    avatarColor: 'bg-purple-600',
    time: 'hace 2h',
    title: '¿Vale la pena empezar Elden Ring sin experiencia en Souls?',
    content: 'Me da miedo la dificultad pero todos lo recomiendan. ¿Alguien más empezó desde cero?',
    likes: 48,
    comments: [
      { id: 1, user: 'NightOwl', text: '100%, el juego te enseña a tu ritmo.' },
      { id: 2, user: 'ProGamer_MX', text: 'Empieza con un build de magia, es más accesible.' },
    ],
  },
  {
    id: 2,
    user: 'ProGamer_MX',
    avatarColor: 'bg-cyan-600',
    time: 'hace 5h',
    title: 'Platino en Elden Ring tras 3 meses',
    content: '156 horas después, por fin. Radahn en NG+7 fue lo más difícil que jugué nunca.',
    likes: 142,
    comments: [
      { id: 1, user: 'DragonSlayer99', text: 'Leyenda, felicidades.' },
    ],
  },
  {
    id: 3,
    user: 'NightOwlGamer',
    avatarColor: 'bg-fuchsia-600',
    time: 'hace 1d',
    title: 'Mejores builds para Remnant II (2024)',
    content: '200 horas invertidas, comparto las builds que mejor me funcionaron para cada estilo.',
    likes: 89,
    comments: [],
  },
]
