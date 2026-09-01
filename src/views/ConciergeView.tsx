import { useEffect, useRef, useState } from 'react'
import { Send } from 'lucide-react'
import { INITIAL_CHAT, AI_REPLIES } from '../data/chat'
import { ChatMessage } from '../types'

export function ConciergeView() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_CHAT)
  const [input, setInput] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = () => {
    if (!input.trim()) return
    const userMsg: ChatMessage = { id: Date.now(), role: 'user', text: input.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')

    setTimeout(() => {
      const reply = AI_REPLIES[Math.floor(Math.random() * AI_REPLIES.length)]
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: 'ai', text: reply }])
    }, 700)
  }

  return (
    <div className="flex h-full w-full flex-col bg-black">
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-cyan-500 text-black rounded-br-sm'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-bl-sm'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="flex-shrink-0 flex items-center gap-2 px-4 py-3 border-t border-neutral-900">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Pregúntale al Concierge..."
          className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none focus:border-purple-500"
        />
        <button
          onClick={send}
          className="w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center"
          aria-label="Enviar"
        >
          <Send size={16} className="text-black" />
        </button>
      </div>
    </div>
  )
}
