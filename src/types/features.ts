export interface FeatureCard {
  title: string
  description: string
  icon: string
  path: string
  color: string
}

export const features: FeatureCard[] = [
  {
    title: 'Calendar',
    description: 'Plan and schedule your future tasks',
    icon: '📅',
    path: '/calendar',
    color: '#44dd44'
  },
  {
    title: 'Quests',
    description: 'Generate AI-powered challenges',
    icon: '⚔️',
    path: '/quests',
    color: '#dd44dd'
  },
  {
    title: 'Dailies',
    description: 'Complete your daily challenges',
    icon: '📝',
    path: '/dailies',
    color: '#44dddd'
  },
  {
    title: 'Todos',
    description: 'Manage your personal task list',
    icon: '✅',
    path: '/todos',
    color: '#dddd44'
  },
  {
    title: 'Stats',
    description: 'Track your progress and growth',
    icon: '📊',
    path: '/stats',
    color: '#dd4444'
  },
  {
    title: 'Streaks',
    description: 'Monitor your consistency',
    icon: '🔥',
    path: '/streaks',
    color: '#dd7744'
  },
  {
    title: 'AI Assistant',
    description: 'Chat with your AI companion',
    icon: '💬',
    path: '/assistant',
    color: '#44dd88'
  },
  {
    title: 'Avatar',
    description: 'Customize your character',
    icon: '👤',
    path: '/avatar',
    color: '#dd44aa'
  },
  {
    title: 'Rewards',
    description: 'Unlock new items and abilities',
    icon: '🏆',
    path: '/rewards',
    color: '#88dd44'
  },
  {
    title: 'Social',
    description: 'Connect with other users',
    icon: '🌐',
    path: '/social',
    color: '#4488dd'
  },
  {
    title: 'Messages',
    description: 'Chat with other users',
    icon: '✉️',
    path: '/messages',
    color: '#dd8844'
  },
  {
    title: 'Mini Game',
    description: 'Have fun with your XP points',
    icon: '🎮',
    path: '/mini_game',
    color: '#4444dd'
  },
] 