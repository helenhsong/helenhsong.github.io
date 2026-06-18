import './App.css'
import Project from './components/Project'
import projectData from './projectData'
import Arrow from './assets/icons/Arrow'

function App() {

  const projectElements = projectData.map((project) => {
    return (
      <Project
        project={project}
      />
    )
  })

  return (
    <div className="profile">
      <header className="profileHeader">
        <h1>Helen Song</h1>
        <p>Product Designer in New York</p>
      </header>
      <section className="about">
        <p>Previously shaped foundational product experiences for institutions at Coinbase. I enjoy simplifying complex systems, designing for scale, and crafting polished interfaces.</p>
        <p>Now on sabbatical, spending part of my time learning things I've been putting off and working on side projects. Open to new opportunities starting fall 2026.</p>
        <p>You can find me on <a href="https://linkedin.com/in/helenhsong" target="_blank">LinkedIn</a><span className="linkArrow"><Arrow fill="var(--gray2)" /></span> or reach out via <a href="mailto:helenhsong@gmail.com">email</a><span className="linkArrow"><Arrow fill="var(--gray2)" /></span>.</p>
      </section>
      <section className="projectList">
        {projectElements}
      </section>
    </div>
  )
}

export default App
