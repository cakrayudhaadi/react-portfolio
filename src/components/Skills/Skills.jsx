import { skills } from '../../data/constants';

export default function Skills() {
  return (
    <>
      <div id="skills" className="skills-bg">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">✦ TOOLS & WEAPONS ✦</span>
            <h2 className="section-title">THE SKILL SHED</h2>
          </div>
          {Object.entries(skills).map(([cat,items])=>(
            <div key={cat}>
              <div className="skill-category-title">▸ {cat}</div>
              <div className="skills-row">
                {items.map(s=>(
                  <div key={s.name} className="skill-pill">
                    <img src={s.logo} alt={s.name} onError={e=>{e.target.style.display="none";}}/>
                    <span className="skill-pill-name">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="field-divider" style={{transform:"scaleX(-1)"}}/>
    </>
  );
}
