import { projects } from '../../data/constants';

export default function Projects() {
  return (
    <section id="projects">
        <div className="section-header">
          <span className="section-label">✦ WHAT I'VE BUILT ✦</span>
          <h2 className="section-title">THE PROJECTS</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p,i)=>(
            <div key={i} className="project-card">
              <div className="project-banner" style={{background:p.color}}><span>{p.icon}</span></div>
              <div className="project-body">
                <div className="project-company">{p.company} · {p.period}</div>
                <div className="project-title">{p.title}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-highlight">{p.highlight}</div>
                <div className="tech-tags">{p.tech.map(t=><span key={t} className="project-tech-tag">{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
