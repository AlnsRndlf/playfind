import { Heart, MessageCircle } from 'lucide-react'
import { FORUM_POSTS } from '../data/forum'
import { ForumPost } from '../types'

interface CommunityViewProps {
  onOpenPost: (post: ForumPost) => void
}

export function CommunityView({ onOpenPost }: CommunityViewProps) {
  return (
    <div className="h-full w-full overflow-y-auto bg-black px-4 py-4 space-y-3">
      <h2 className="text-white text-base font-semibold mb-1">Community</h2>
      {FORUM_POSTS.map((post) => (
        <button
          key={post.id}
          onClick={() => onOpenPost(post)}
          className="w-full text-left rounded-2xl border border-neutral-800 bg-neutral-900 p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`w-6 h-6 rounded-full ${post.avatarColor} flex items-center justify-center text-[10px] text-white font-semibold`}
            >
              {post.user[0]}
            </div>
            <span className="text-xs text-neutral-400">
              {post.user} · {post.time}
            </span>
          </div>
          <p className="text-white text-sm font-medium leading-snug">{post.title}</p>
          <p className="text-neutral-500 text-xs mt-1 line-clamp-2">{post.content}</p>
          <div className="flex items-center gap-4 mt-3 text-neutral-500">
            <span className="flex items-center gap-1 text-xs">
              <Heart size={12} /> {post.likes}
            </span>
            <span className="flex items-center gap-1 text-xs">
              <MessageCircle size={12} /> {post.comments.length}
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}
