import { ChevronLeft, Heart, MessageCircle } from 'lucide-react'
import { ForumPost } from '../types'

interface ThreadDetailViewProps {
  post: ForumPost
  onBack: () => void
}

export function ThreadDetailView({ post, onBack }: ThreadDetailViewProps) {
  return (
    <div className="absolute inset-0 z-30 flex flex-col bg-black">
      <div className="flex-shrink-0 flex items-center gap-3 px-4 py-3 border-b border-neutral-900">
        <button onClick={onBack} className="text-neutral-400" aria-label="Volver">
          <ChevronLeft size={20} />
        </button>
        <span className="text-white text-sm font-medium">Hilo</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="flex items-center gap-2 mb-2">
          <div
            className={`w-7 h-7 rounded-full ${post.avatarColor} flex items-center justify-center text-xs text-white font-semibold`}
          >
            {post.user[0]}
          </div>
          <span className="text-xs text-neutral-400">
            {post.user} · {post.time}
          </span>
        </div>
        <p className="text-white text-base font-semibold leading-snug">{post.title}</p>
        <p className="text-neutral-400 text-sm mt-2 leading-relaxed">{post.content}</p>

        <div className="flex items-center gap-4 mt-4 pb-4 border-b border-neutral-900 text-neutral-500">
          <span className="flex items-center gap-1 text-xs">
            <Heart size={13} /> {post.likes}
          </span>
          <span className="flex items-center gap-1 text-xs">
            <MessageCircle size={13} /> {post.comments.length}
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {post.comments.length === 0 && (
            <p className="text-neutral-600 text-xs">Sé el primero en comentar.</p>
          )}
          {post.comments.map((c) => (
            <div key={c.id} className="flex gap-2">
              <div className="w-6 h-6 flex-shrink-0 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-300 font-semibold">
                {c.user[0]}
              </div>
              <div className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2">
                <p className="text-xs text-neutral-400 font-medium">{c.user}</p>
                <p className="text-sm text-neutral-200">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
