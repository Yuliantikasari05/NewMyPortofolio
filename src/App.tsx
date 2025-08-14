import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Navigation } from "./components/Navigation"
import ProjectDetail1 from "./pages/ProjectDetail1"
import ProjectDetail2 from "./pages/ProjectDetail2"
import ProjectDetail3 from "./pages/ProjectDetail3"
import ProjectDetail4 from "./pages/ProjectDetail4"
import "./App.css"

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <Routes>
          {/* Halaman utama */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />

          {/* Halaman detail project */}
          <Route path="/project/1" element={<ProjectDetail1 />} />
          <Route path="/project/2" element={<ProjectDetail2 />} />
          <Route path="/project/3" element={<ProjectDetail3 />} />
          <Route path="/project/4" element={<ProjectDetail4 />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
