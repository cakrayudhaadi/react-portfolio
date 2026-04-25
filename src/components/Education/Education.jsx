export default function Education() {
  return (
    <div id="education" className="edu-bg">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">✦ KNOWLEDGE BASE ✦</span>
            <h2 className="section-title">EDUCATION</h2>
          </div>
          <div className="edu-card">
            <div className="edu-icon">🎓</div>
            <div>
              <div className="edu-school">BANDUNG INSTITUTE OF TECHNOLOGY (ITB)</div>
              <div className="edu-degree">Bachelor of Science, Mathematics</div>
              <div className="edu-period">📅 June 2017 – July 2021</div>
            </div>
          </div>
          <div style={{maxWidth:680,margin:"3rem auto 0"}}>
            <div className="section-header" style={{marginBottom:"1.5rem"}}><span className="section-title">CERTIFICATIONS</span></div>
            <div className="cert-list">
              {[{icon:"🐹",name:"Backend Development with Golang",issuer:"Sanbercode · 2025",link:"https://sanbercode.com/certificate/in/a5fac4ee-2f11-4e14-a29b-8d17d0b6f629"},{icon:"☕",name:"The Complete Java Certification Course",issuer:"Udemy · 2025",link:"https://www.udemy.com/certificate/UC-265dd646-2136-4ed4-89b4-3d0aba0922e9/"},{icon:"🔒",name:"Security Awareness",issuer:"PT. FIFGROUP · 2024",link:"https://drive.google.com/drive/folders/1DXuGYq83-4ZvWT_b4l9qUZDtxbpd0VIB?usp=sharing"}].map((c,i)=>(
                c.link ? (
                  <a key={i} href={c.link} target="_blank" rel="noreferrer" className="cert-item" style={{textDecoration:'none', color:'inherit'}}>
                    <span className="cert-icon">{c.icon}</span>
                    <div><div className="cert-name">{c.name}</div><div className="cert-issuer">{c.issuer}</div></div>
                  </a>
                ) : (
                  <div key={i} className="cert-item">
                    <span className="cert-icon">{c.icon}</span>
                    <div><div className="cert-name">{c.name}</div><div className="cert-issuer">{c.issuer}</div></div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}
