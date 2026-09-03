import { useState } from 'react'
import { useApp } from '../../context'
import { Btn, StatusBadge, Badge } from '../../components/ui'

export default function CourseGrid() {
  const { courses, navigate } = useApp()
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('All')

  const categories = ['All', ...Array.from(new Set(courses.map(c => c.category)))]

  const filtered = courses.filter(c =>
    (cat === 'All' || c.category === cat) &&
    (c.title.toLowerCase().includes(search.toLowerCase()) || c.code.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>Course Grid</h1>
        <p className="text-sm mt-1" style={{ color: '#475569' }}>All courses available in the CAMPIZO system.</p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <div className="relative flex-1 min-w-48">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: '#475569' }}>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses…"
            className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm outline-none"
            style={{ background: '#111827', border: '1px solid #1a2540', color: '#e2e8f0' }}
            onFocus={e => (e.target.style.borderColor = '#7c3aed')}
            onBlur={e => (e.target.style.borderColor = '#1a2540')} />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className="px-3 py-2 rounded-lg text-sm transition-all"
              style={{
                background: cat === c ? '#7c3aed' : '#111827',
                color: cat === c ? '#fff' : '#64748b',
                border: `1px solid ${cat === c ? '#7c3aed' : '#1a2540'}`,
              }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map(course => (
          <div key={course.id} className="rounded-xl p-5 flex flex-col gap-4 cursor-pointer group transition-colors"
            style={{ background: '#111827', border: '1px solid #1a2540' }}
            onClick={() => navigate('faculty-course-info', { course })}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-xs mb-1" style={{ color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>{course.code}</div>
                <h3 className="font-semibold text-white leading-snug group-hover:text-[#a78bfa] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {course.title}
                </h3>
              </div>
              <StatusBadge status={course.approvalStatus} />
            </div>
            <p className="text-xs line-clamp-2" style={{ color: '#64748b', lineHeight: '1.6' }}>{course.description}</p>
            <div className="flex items-center justify-between text-xs" style={{ color: '#475569' }}>
              <span>👤 {course.faculty.split(' ').slice(-1)[0]}</span>
              <Badge variant="info">{course.level}</Badge>
            </div>
            <div className="flex items-center gap-3 text-xs" style={{ color: '#334155' }}>
              <span>📦 {course.units.length} units</span>
              <span>👥 {course.enrolledStudents.length} enrolled</span>
              <span>📝 {course.syllabus.length} topics</span>
            </div>
            <Btn size="sm" variant="outline" onClick={() => navigate('faculty-course-info', { course })}>
              View Course →
            </Btn>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center" style={{ color: '#334155' }}>No courses match your search.</div>
      )}
    </div>
  )
}
