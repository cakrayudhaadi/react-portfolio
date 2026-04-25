export default function Hero() {
  return (
    <div id="home" className="hero">
        <div className="hero-sun"/>
        {[{w:120,h:40,top:10,dur:36},{w:80,h:28,top:20,dur:50},{w:160,h:48,top:8,dur:29},{w:100,h:34,top:30,dur:44}].map((c,i)=>(
          <div key={i} className="cloud" style={{width:c.w,height:c.h,top:`${c.top}%`,left:`-${c.w}px`,animationDuration:`${c.dur}s`,animationDelay:`${i*7}s`,boxShadow:`${c.w*.3}px 0 0 ${c.w*.3}px rgba(255,255,255,0.88),${c.w*.5}px -${c.h*.3}px 0 ${c.h*.1}px rgba(255,255,255,0.7)`}}/>
        ))}
        {[{l:3,s:68},{l:8,s:50},{l:86,s:62},{l:92,s:78},{l:97,s:44}].map((t,i)=>(
          <div key={i} className="tree" style={{left:`${t.l}%`,bottom:"18%"}}>
            <div className="tree-top" style={{borderLeftWidth:t.s*.5,borderRightWidth:t.s*.5,borderBottomWidth:t.s*.7,borderBottomColor:i%2===0?"#3D5E35":"#4A7C3F"}}/>
            <div className="tree-top" style={{borderLeftWidth:t.s*.4,borderRightWidth:t.s*.4,borderBottomWidth:t.s*.6,marginTop:-t.s*.2,borderBottomColor:i%2===0?"#4A7C3F":"#6BAB5E"}}/>
            <div className="tree-trunk" style={{width:t.s*.2,height:t.s*.4}}/>
          </div>
        ))}
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:"20%",background:"linear-gradient(180deg,var(--grass) 0%,var(--moss) 40%,var(--dark) 100%)"}}/>
        <div className="hero-content">
          <div className="hero-card">
            <h1 className="hero-name">CAKRAYUDHA KUSUMA ADI</h1>
            <p className="hero-role">Backend Developer | Fullstack Developer</p>
            <p className="hero-summary">5+ years building high-performance microservices & APIs with Java, Node.js, and NestJS. From fintech to telco — I grow systems that scale.</p>
            <div className="hero-btns">
              <a href="https://drive.google.com/file/d/1Tipcz7UIAsrAXmBeSr-Db8s_239HSptV/view?usp=sharing" className="btn btn-primary" target="_blank">⬇️ Download Resume</a>
              <a href="#projects" className="btn btn-secondary">🌾 See My Work</a>
              <a href="#contact" className="btn btn-tertiary">📬 Get In Touch</a>
            </div>
          </div>
        </div>
        <div className="scroll-hint"><span>SCROLL</span><span>▼</span></div>
    </div>
  );
}
