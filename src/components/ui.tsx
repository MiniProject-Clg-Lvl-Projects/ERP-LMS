import type { ReactNode, CSSProperties } from 'react'

export function Badge({ children, variant = 'default' }: { children: ReactNode; variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'purple' }) {
  const styles: Record<string, CSSProperties> = {
    default: { background: '#1e2d4e', color: '#94a3b8' },
    success: { background: 'rgba(13,148,136,0.18)', color: '#2dd4bf' },
    warning: { background: 'rgba(245,158,11,0.18)', color: '#fbbf24' },
    danger: { background: 'rgba(239,68,68,0.18)', color: '#f87171' },
    info: { background: 'rgba(59,130,246,0.18)', color: '#60a5fa' },
    purple: { background: 'rgba(124,58,237,0.18)', color: '#a78bfa' },
  }
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium" style={styles[variant]}>
      {children}
    </span>
  )
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; variant: 'success' | 'warning' | 'danger' | 'info' | 'purple' | 'default' }> = {
    approved: { label: 'Approved', variant: 'success' },
    pending: { label: 'Pending', variant: 'warning' },
    rejected: { label: 'Rejected', variant: 'danger' },
    draft: { label: 'Draft', variant: 'default' },
    'in-progress': { label: 'In Progress', variant: 'info' },
    completed: { label: 'Completed', variant: 'success' },
    'not-started': { label: 'Not Started', variant: 'default' },
    enrolled: { label: 'Enrolled', variant: 'purple' },
  }
  const item = map[status] ?? { label: status, variant: 'default' as const }
  return <Badge variant={item.variant}>{item.label}</Badge>
}

export function ProgressBar({ value, color = '#7c3aed' }: { value: number; color?: string }) {
  return (
    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: '#1e2d4e' }}>
      <div className="h-full rounded-full transition-all duration-300" style={{ width: `${Math.min(100, value)}%`, background: color }} />
    </div>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl p-5 ${className}`} style={{ background: '#111827', border: '1px solid #1a2540' }}>
      {children}
    </div>
  )
}

export function StatCard({ label, value, icon, color = '#7c3aed', sub }: { label: string; value: string | number; icon: string; color?: string; sub?: string }) {
  return (
    <div className="rounded-xl p-5 flex items-center gap-4" style={{ background: '#111827', border: '1px solid #1a2540' }}>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${color}22` }}>
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>{value}</div>
        <div className="text-sm" style={{ color: '#64748b' }}>{label}</div>
        {sub && <div className="text-xs mt-0.5" style={{ color: '#475569' }}>{sub}</div>}
      </div>
    </div>
  )
}

interface BtnProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'teal' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export function Btn({ children, onClick, variant = 'primary', size = 'md', className = '', disabled, type = 'button' }: BtnProps) {
  const base = 'inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed'
  const sizes = { sm: 'px-3 py-1.5 text-xs', md: 'px-4 py-2 text-sm', lg: 'px-6 py-3 text-base' }
  const variants: Record<string, CSSProperties> = {
    primary: { background: '#7c3aed', color: '#fff' },
    secondary: { background: '#1e2d4e', color: '#94a3b8' },
    danger: { background: 'rgba(239,68,68,0.15)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)' },
    ghost: { background: 'transparent', color: '#64748b' },
    teal: { background: '#0d9488', color: '#fff' },
    outline: { background: 'transparent', color: '#a78bfa', border: '1px solid #7c3aed' },
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${sizes[size]} ${className}`} style={variants[variant]}>
      {children}
    </button>
  )
}

export function Input({ label, ...props }: { label?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium" style={{ color: '#94a3b8' }}>{label}</label>}
      <input
        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-colors"
        style={{ background: '#0a0f1a', border: '1px solid #1e2d4e', color: '#e2e8f0' }}
        onFocus={e => (e.target.style.borderColor = '#7c3aed')}
        onBlur={e => (e.target.style.borderColor = '#1e2d4e')}
        {...props}
      />
    </div>
  )
}

export function Select({ label, children, ...props }: { label?: string } & React.SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium" style={{ color: '#94a3b8' }}>{label}</label>}
      <select
        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-colors"
        style={{ background: '#0a0f1a', border: '1px solid #1e2d4e', color: '#e2e8f0' }}
        onFocus={e => (e.currentTarget.style.borderColor = '#7c3aed')}
        onBlur={e => (e.currentTarget.style.borderColor = '#1e2d4e')}
        {...props}
      >
        {children}
      </select>
    </div>
  )
}

export function Textarea({ label, ...props }: { label?: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium" style={{ color: '#94a3b8' }}>{label}</label>}
      <textarea
        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-colors resize-none"
        style={{ background: '#0a0f1a', border: '1px solid #1e2d4e', color: '#e2e8f0' }}
        onFocus={e => (e.target.style.borderColor = '#7c3aed')}
        onBlur={e => (e.target.style.borderColor = '#1e2d4e')}
        {...props}
      />
    </div>
  )
}

export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)' }} onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl p-6" style={{ background: '#111827', border: '1px solid #1e2d4e' }} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</h3>
          <button onClick={onClose} className="text-xl" style={{ color: '#475569' }}>×</button>
        </div>
        {children}
      </div>
    </div>
  )
}

export function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>{children}</h2>
      {action}
    </div>
  )
}

export function EmptyState({ icon, title, message }: { icon: string; title: string; message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-white font-semibold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</div>
      <div className="text-sm max-w-xs" style={{ color: '#475569' }}>{message}</div>
    </div>
  )
}

export function CourseCard({
  title, code, faculty, status, approvalStatus, progress, onClick, actions
}: {
  title: string; code: string; faculty: string; status?: string; approvalStatus?: string
  progress?: number; onClick?: () => void; actions?: ReactNode
}) {
  return (
    <div className="rounded-xl p-4 flex flex-col gap-3 hover:border-[#7c3aed] transition-colors cursor-pointer group"
      style={{ background: '#111827', border: '1px solid #1a2540' }} onClick={onClick}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-xs font-mono mb-1" style={{ color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>{code}</div>
          <div className="font-semibold text-white text-sm leading-snug group-hover:text-[#a78bfa] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</div>
        </div>
        {approvalStatus && <StatusBadge status={approvalStatus} />}
      </div>
      <div className="text-xs" style={{ color: '#64748b' }}>👤 {faculty}</div>
      {status && <div className="flex gap-2">{status && <StatusBadge status={status} />}</div>}
      {progress !== undefined && (
        <div>
          <div className="flex justify-between text-xs mb-1" style={{ color: '#64748b' }}>
            <span>Progress</span><span>{progress}%</span>
          </div>
          <ProgressBar value={progress} color={progress === 100 ? '#0d9488' : '#7c3aed'} />
        </div>
      )}
      {actions && <div className="flex gap-2 pt-1" onClick={e => e.stopPropagation()}>{actions}</div>}
    </div>
  )
}
