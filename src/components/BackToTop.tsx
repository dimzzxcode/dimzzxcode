import { useBackToTop } from '../hooks/useBackToTop'

export default function BackToTop() {
  const show = useBackToTop()

  return (
    <button
      id="back-to-top"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, #36ada3, #232f72)',
        boxShadow: '0 4px 15px rgba(54, 173, 163, 0.3)',
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        transform: show ? 'translateY(0)' : 'translateY(8px)',
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}