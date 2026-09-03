import { useApp } from '../../context'
import { Btn, StatusBadge, Badge, StatCard, EmptyState } from '../../components/ui'

export default function CourseInformation() {
  const { selectedCourse: course, navigate, showToast } = useApp()

  if (!course) return <EmptyState icon="📚" title="No course selected" message="Go back and select a course." />

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="rounded-xl p-6" style={{ background: 'linear-gradient(135deg, #1a0a3d, #0a2330)', border: '1px solid #1a2540' }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="text-xs px-2.5 py-1 rounded font-mono" style={{ background: '#1e2d4e', color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
                {course.code}
              </span>
              <StatusBadge status={course.approvalStatus} />
              <Badge variant="info">{course.level}</Badge>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{course.title}</h1>
            <p className="text-sm mb-4" style={{ color: '#64748b', lineHeight: '1.7' }}>{course.description}</p>
            <div className="flex items-center gap-5 text-sm" style={{ color: '#64748b' }}>
              <span>👤 {course.faculty}</span>
              <span>🏷 {course.category}</span>
              <span>📅 {course.createdAt}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard label="Enrolled Students" value={course.enrolledStudents.length} icon="👥" color="#0d9488" />
        <StatCard label="Units" value={course.units.length} icon="📦" color="#7c3aed" />
        <StatCard label="Syllabus Topics" value={course.syllabus.length} icon="📋" color="#3b82f6" />
        <StatCard label="Experiments" value={course.experiments.length} icon="🔬" color="#f59e0b" />
      </div>

      {/* Navigation tabs */}
      <div className="flex gap-2">
        <Btn variant="primary" onClick={() => navigate('faculty-course-content', { course })}>📝 Course Content</Btn>
        <Btn variant="secondary" onClick={() => navigate('faculty-course-preview', { course })}>👁 Preview</Btn>
        <Btn variant="secondary" onClick={() => navigate('faculty-learners', { course })}>👥 Learners</Btn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Syllabus */}
        <div className="rounded-xl p-5" style={{ background: '#111827', border: '1px solid #1a2540' }}>
          <h2 className="font-semibold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Syllabus</h2>
          {course.syllabus.length === 0 ? (
            <p className="text-sm" style={{ color: '#334155' }}>No syllabus added yet.</p>
          ) : (
            <div className="space-y-3">
              {course.syllabus.map((s, i) => (
                <div key={s.id} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(124,58,237,0.2)', color: '#a78bfa' }}>{i + 1}</span>
                  <div>
                    <div className="text-sm font-medium text-white">{s.topic}</div>
                    <div className="text-xs mt-0.5" style={{ color: '#475569' }}>{s.hours}h · {s.description}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Experiments */}
        <div className="rounded-xl p-5" style={{ background: '#111827', border: '1px solid #1a2540' }}>
          <h2 className="font-semibold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Experiments</h2>
          {course.experiments.length === 0 ? (
            <p className="text-sm" style={{ color: '#334155' }}>No experiments added yet.</p>
          ) : (
            <div className="space-y-3">
              {course.experiments.map(e => (
                <div key={e.id} className="p-3 rounded-lg" style={{ background: '#0a0f1a' }}>
                  <div className="text-sm font-medium text-white">{e.title}</div>
                  <div className="text-xs mt-1" style={{ color: '#475569' }}>{e.description}</div>
                  <div className="text-xs mt-1" style={{ color: '#334155' }}>🔧 {e.materials}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Units preview */}
      <div className="rounded-xl p-5" style={{ background: '#111827', border: '1px solid #1a2540' }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>Course Units</h2>
          <Btn size="sm" variant="outline" onClick={() => navigate('faculty-course-content', { course })}>Manage Content →</Btn>
        </div>
        {course.units.length === 0 ? (
          <p className="text-sm" style={{ color: '#334155' }}>No units yet. Go to Course Content to add units.</p>
        ) : (
          <div className="space-y-2">
            {course.units.map((u, i) => (
              <div key={u.id} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: '#0a0f1a' }}>
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: 'rgba(124,58,237,0.15)', color: '#a78bfa' }}>{i + 1}</span>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">{u.title}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#475569' }}>{u.content.length} items</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
