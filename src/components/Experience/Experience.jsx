import { experiences } from '../../data/constants';

export default function Experience() {
  return (
    <div id="experience" className="exp-bg">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">✦ CAREER HISTORY ✦</span>
            <h2 className="section-title">THE CAREER LEDGER</h2>
          </div>
          <div className="timeline">
            {experiences.map((exp,ei)=>(
              <div key={ei} className="company-block">
                <div className="company-header">
                  <div className="company-name">{exp.company}</div>
                  <div className="company-period">{exp.period}</div>
                </div>
                <div className="role-cards">
                  {exp.roles.map((role,ri)=>(
                    <div key={ri} className="role-card">
                      <div className="role-title">{role.title}</div>
                      {role.client&&<div className="role-client">{role.client} · {role.period}</div>}
                      <ul className="role-bullets">{role.bullets.map((b,bi)=><li key={bi}>{b}</li>)}</ul>
                      <div className="tech-tags">{role.tech.map(t=><span key={t} className="tech-tag">{t}</span>)}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
