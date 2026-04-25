export default function About() {
  return (
    <>
      <section id="about">
        <div className="section-header">
          <span className="section-label">✦ WHO AM I ✦</span>
          <h2 className="section-title">PROFESSIONAL SUMMARY</h2>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <div className="avatar-frame">👨‍💻</div>
            <div className="about-name-card">
              <h2>CAKRAYUDHA KUSUMA ADI</h2>
              <p>Backend Developer | Fullstack Developer</p>
            </div>
            <ul className="stat-list">
              <li className="stat-item"><span className="stat-icon">📍</span>Bandung, West Java, Indonesia</li>
              <li className="stat-item"><span className="stat-icon">📧</span><a href="mailto:cakrayudha.adi@gmail.com">cakrayudha.adi@gmail.com</a></li>
              <li className="stat-item"><span className="stat-icon">📱</span>+62 857-7118-8754</li>
              <li className="stat-item"><span className="stat-icon">💼</span><a href="https://www.linkedin.com/in/cakrayudha" target="_blank" rel="noreferrer">LinkedIn Profile</a></li>
              <li className="stat-item"><span className="stat-icon">🐙</span><a href="https://github.com/cakrayudhaadi" target="_blank" rel="noreferrer">GitHub Profile</a></li>
              <li className="stat-item"><span className="stat-icon">🌏</span>Open to Work Remotely</li>
            </ul>
          </div>
          <div className="about-text">
            <p>Hey there! I'm a <strong>Backend Developer with 5+ years of experience</strong> specializing in building scalable microservices and high-performance API orchestration. I've cultivated my craft across fintech, telecommunications, and insurance industries.</p>
            <p>I work fluently in <strong>Java (Spring Boot, Quarkus), Node.js, and NestJS</strong>, managing complex data environments across PostgreSQL, MongoDB, and IBM DB2, while leveraging Kafka, Redis, and Elasticsearch to grow reliable systems.</p>
            <p>I'm a <strong>proactive collaborator</strong> in cross-functional teams who adapts quickly to new technologies.</p>
            <div className="xp-bars">
              <span className="xp-label">⚔️ SKILL LEVELS</span>
              {[{name:"Backend Dev",pct:95},{name:"Java / JVM",pct:93},{name:"Databases",pct:90},{name:"Node / TS",pct:88},{name:"DevOps",pct:72}].map(({name,pct})=>(
                <div key={name} className="xp-row">
                  <span className="xp-name">{name}</span>
                  <div className="xp-track"><div className="xp-fill" style={{width:`${pct}%`}}/></div>
                  <span className="xp-pct">{pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="field-divider"/>
    </>
  );
}
