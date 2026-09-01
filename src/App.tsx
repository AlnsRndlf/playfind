import { useState } from 'react'
import { Screen, NavScreen, ForumPost } from './types'

import { MenuDrawer } from './components/MenuDrawer'
import { TopBar } from './components/TopBar'
import { BottomNav } from './components/BottomNav'
import { NotificationsPanel } from './components/NotificationsPanel'

import { SplashScreen } from './views/SplashScreen'
import { OnboardingScreen } from './views/OnboardingScreen'
import { ConciergeView } from './views/ConciergeView'
import { LibraryView } from './views/LibraryView'
import { CommunityView } from './views/CommunityView'
import { ThreadDetailView } from './views/ThreadDetailView'
import { ProfileView } from './views/ProfileView'
import { PaywallView } from './views/PaywallView'
import { DiscoverView } from './views/DiscoverView'

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash')
  const [activeNav, setActiveNav] = useState<NavScreen>('concierge')

  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showDiscover, setShowDiscover] = useState(false)
  const [showPaywall, setShowPaywall] = useState(false)

  const renderNav = () => {
    switch (activeNav) {
      case 'concierge':
        return <ConciergeView />
      case 'library':
        return <LibraryView />
      case 'community':
        return <CommunityView onOpenPost={setSelectedPost} />
      default:
        return <ConciergeView />
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-neutral-950">
      <div className="relative flex h-screen w-full max-w-md flex-col overflow-hidden bg-black sm:h-[780px] sm:rounded-[2.5rem] sm:border sm:border-neutral-800">
        {screen === 'splash' && <SplashScreen onFinish={() => setScreen('onboarding')} />}

        {screen === 'onboarding' && <OnboardingScreen onDone={() => setScreen('app')} />}

        {screen === 'app' && (
          <>
            <TopBar
              onMenu={() => setShowMenu(true)}
              onBell={() => setShowNotifications((v) => !v)}
              onProfile={() => setShowProfile(true)}
            />

            <div className="relative flex-1 overflow-hidden">
              {!showDiscover && !showProfile && renderNav()}
              {showDiscover && <DiscoverView onBack={() => setShowDiscover(false)} />}
            </div>

            {!showDiscover && !showProfile && (
              <BottomNav active={activeNav} onChange={setActiveNav} />
            )}

            {showMenu && (
              <MenuDrawer
                onClose={() => setShowMenu(false)}
                onOpenProfile={() => {
                  setShowMenu(false)
                  setShowProfile(true)
                }}
                onOpenDiscover={() => {
                  setShowMenu(false)
                  setShowDiscover(true)
                }}
                onOpenNotifications={() => {
                  setShowMenu(false)
                  setShowNotifications(true)
                }}
                onOpenPaywall={() => {
                  setShowMenu(false)
                  setShowPaywall(true)
                }}
              />
            )}

            {showNotifications && (
              <NotificationsPanel onClose={() => setShowNotifications(false)} />
            )}

            {selectedPost && (
              <ThreadDetailView post={selectedPost} onBack={() => setSelectedPost(null)} />
            )}

            {showProfile && (
              <ProfileView
                onBack={() => setShowProfile(false)}
                onPaywall={() => setShowPaywall(true)}
              />
            )}

            {showPaywall && <PaywallView onClose={() => setShowPaywall(false)} />}
          </>
        )}
      </div>
    </div>
  )
}
