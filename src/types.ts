export type Screen = 'splash' | 'onboarding' | 'app'
export type NavScreen = 'concierge' | 'library' | 'community'

export interface Game {
  id: number
  name: string
  genre: string
  gradient: string
  status: 'Jugando' | 'Pendiente' | 'Completado' | 'Favorito'
  progress: number
}

export interface ForumComment {
  id: number
  user: string
  text: string
}

export interface ForumPost {
  id: number
  user: string
  avatarColor: string
  time: string
  title: string
  content: string
  likes: number
  comments: ForumComment[]
}

export interface ChatMessage {
  id: number
  role: 'ai' | 'user'
  text: string
}
