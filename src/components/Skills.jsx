const skills = [
  'JavaScript (ES6+)', 'TypeScript', 'Vue.js', 'React.js',
  'Redux', 'Pinia', 'Vuex', 'Tailwind CSS', 'Vuetify',
  'Jest', 'Cypress', 'Git', 'Docker', 'Vite', 'Nuxt.js', 'Next.js'
];

export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-blue-300 mb-4">🛠 Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-blue-800 rounded-xl p-4 text-sm shadow-md">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}