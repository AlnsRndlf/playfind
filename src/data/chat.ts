import { ChatMessage } from '../types'

export const INITIAL_CHAT: ChatMessage[] = [
  {
    id: 1,
    role: 'ai',
    text: 'Hola, soy tu Concierge. Vi que tu Gaming DNA tiene fuerte presencia de Souls-like y RPG. ¿Quieres una recomendación para esta noche?',
  },
]

export const AI_REPLIES: string[] = [
  'Basado en tu Gaming DNA, te recomiendo Lies of P: combina el diseño Souls con una narrativa oscura muy sólida.',
  'Ya que te gusta el cooperativo, Remnant II encaja perfecto con tu perfil — builds profundas y jefes únicos.',
  'Si buscas algo más corto para hoy, Hollow Knight tiene sesiones cortas ideales y mantiene tu racha de Indies.',
]
