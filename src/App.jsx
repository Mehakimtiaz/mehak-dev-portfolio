import { useState, useEffect } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 min-h-screen">
      <header className="bg-blue-900 text-white py-6 shadow-md px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Mehak Imtiaz</h1>
            <p className="text-sm">Frontend Developer | Vue & React Expert</p>
          </div>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="bg-blue-700 px-3 py-1 rounded text-sm"
          >
            Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="bg-blue-900 text-center text-sm text-blue-100 py-4">
        &copy; 2025 Mehak Imtiaz. All rights reserved.
      </footer>
    </div>
  );
}