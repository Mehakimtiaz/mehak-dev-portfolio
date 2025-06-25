const projects = [
  {
    title: 'Kidjo Platform Migration',
    description: 'Led scoped migration from Vue 2 to Vue 3, improved responsiveness and scalability.',
    bullets: [
      'Migrated complex modules module-wise for backward compatibility',
      'Optimized data flow with GraphQL and lazy loading',
      'Reduced latency by 20% and increased scalability by 45%'
    ]
  },
  {
    title: 'Accounts - Kidjo',
    description: 'Implemented OAuth and JWT based user authentication and subscriptions.',
    bullets: [
      'Integrated HttpOnly cookies and silent refresh to secure sessions',
      'Reduced post-deployment bugs by 70%',
      'Ensured stable and smooth subscription flow'
    ]
  },
  {
    title: 'Admin Panel - Kidjo',
    description: 'Developed dynamic modular components with real-time bulk update optimization.',
    bullets: [
      'Added smart diffing to avoid unnecessary data overwrite',
      'Improved data activation speed by 60% and team efficiency by 70%',
      'Implemented server-side pagination and optimized API interactions'
    ]
  },
  {
    title: 'Cobase Fintech App',
    description: 'React.js based fintech app for bank account management and payments.',
    bullets: [
      'Optimized component rendering with useMemo and useCallback',
      'Handled secure data flow and subscriptions',
      'Improved initial load performance using React.lazy'
    ]
  },
  {
    title: 'RedMarker Online Marking',
    description: 'Developed online marking and questionnaire system using React and AI-driven APIs.',
    bullets: [
      'Used React Context API and hooks for state management',
      'Implemented intuitive UI components for smooth UX',
      'Ensured scalability and performance'
    ]
  }
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-blue-300 mb-4">🚀 Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-blue-800 rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-xl font-bold text-blue-100 mb-2">{project.title}</h3>
            <p className="text-sm text-blue-200 mb-2">{project.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-200">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}