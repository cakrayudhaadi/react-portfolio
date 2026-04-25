import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', body: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, body } = formData;
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      from_name: name,
      from_email: email,
      subject: subject,
      message: body,
    }, 'YOUR_USER_ID')
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', body: '' });
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message.');
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="social-bg">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">✦ LET'S CONNECT ✦</span>
            <h2 className="section-title">SEND A LETTER</h2>
          </div>
          <p style={{textAlign:"center",color:"var(--sage)",fontFamily:"'Crimson Pro',serif",fontSize:"1.2rem",fontStyle:"italic",marginBottom:"2.5rem"}}>Open to remote opportunities in around the world 🌍</p>
          <div className="social-grid">
            {[{href:"mailto:cakrayudha.adi@gmail.com",icon:"📧",name:"EMAIL",handle:"cakrayudha.adi@gmail.com"},{href:"https://www.linkedin.com/in/cakrayudha",icon:"💼",name:"LINKEDIN",handle:"linkedin.com/in/cakrayudha"},{href:"https://github.com/cakrayudhaadi",icon:"🐙",name:"GITHUB",handle:"github.com/cakrayudha"},{href:"tel:+6285771188754",icon:"📱",name:"PHONE",handle:"+62 857-7118-8754"}].map((s,i)=>(
              <a key={i} href={s.href} target={s.href.startsWith("http")?"_blank":undefined} rel="noreferrer" className="social-card">
                <span className="social-icon">{s.icon}</span>
                <span className="social-name">{s.name}</span>
                <span className="social-handle">{s.handle}</span>
              </a>
            ))}
          </div>
          {/* <div style={{marginTop:"3rem", textAlign:"center", maxWidth:"600px", margin:"3rem auto 0"}}>
            <form onSubmit={handleSubmit} style={{background:"rgba(255,255,255,0.08)", border:"1.5px solid rgba(212,168,67,0.55)", borderRadius:24, padding:"2rem", boxShadow:"0 6px 24px rgba(0,0,0,0.18)"}}>
              <div style={{marginBottom:"1rem", textAlign:"left"}}>
                <label style={{display:"block", marginBottom:"0.4rem", fontSize:"0.6rem", color:"var(--cream)", fontFamily:"'Press Start 2P',monospace", letterSpacing:"1px"}}>Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{width:"100%", padding:"0.75rem", borderRadius:"8px", border:"1px solid rgba(255,255,255,0.3)", background:"rgba(255,255,255,0.1)", color:"var(--cream)", fontSize:"1rem"}} />
              </div>
              <div style={{marginBottom:"1rem", textAlign:"left"}}>
                <label style={{display:"block", marginBottom:"0.4rem", fontSize:"0.6rem", color:"var(--cream)", fontFamily:"'Press Start 2P',monospace", letterSpacing:"1px"}}>Your Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{width:"100%", padding:"0.75rem", borderRadius:"8px", border:"1px solid rgba(255,255,255,0.3)", background:"rgba(255,255,255,0.1)", color:"var(--cream)", fontSize:"1rem"}} />
              </div>
              <div style={{marginBottom:"1rem", textAlign:"left"}}>
                <label style={{display:"block", marginBottom:"0.4rem", fontSize:"0.6rem", color:"var(--cream)", fontFamily:"'Press Start 2P',monospace", letterSpacing:"1px"}}>Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required style={{width:"100%", padding:"0.75rem", borderRadius:"8px", border:"1px solid rgba(255,255,255,0.3)", background:"rgba(255,255,255,0.1)", color:"var(--cream)", fontSize:"1rem"}} />
              </div>
              <div style={{marginBottom:"1.5rem", textAlign:"left"}}>
                <label style={{display:"block", marginBottom:"0.4rem", fontSize:"0.6rem", color:"var(--cream)", fontFamily:"'Press Start 2P',monospace", letterSpacing:"1px"}}>Your Message</label>
                <textarea name="body" value={formData.body} onChange={handleChange} required rows="5" style={{width:"100%", padding:"0.75rem", borderRadius:"8px", border:"1px solid rgba(255,255,255,0.3)", background:"rgba(255,255,255,0.1)", color:"var(--cream)", fontSize:"1rem", resize:"vertical"}} />
              </div>
              <button type="submit" className="btn btn-primary" style={{width:"100%", fontSize:"0.8rem", padding:"0.75rem"}}>📬 Send Message</button>
            </form>
          </div> */}
          <div style={{marginTop:"3rem",textAlign:"center", margin:"3rem auto 0"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:"0.85rem",background:"rgba(255,255,255,0.1)",border:"1.5px solid rgba(212,168,67,0.55)",borderRadius:24,padding:"1rem 2rem",boxShadow:"0 6px 24px rgba(0,0,0,0.18)"}}>
              <span style={{fontSize:26}}>🌱</span>
              <div>
                <div style={{fontFamily:"'Press Start 2P',monospace",fontSize:7,color:"var(--hay)",marginBottom:4,lineHeight:1.9}}>AVAILABLE FOR HIRE</div>
                <div style={{fontSize:"0.83rem",color:"var(--sage)"}}>Remote | Full-time · Contract · Freelance</div>
              </div>
              <span style={{width:11,height:11,background:"#6BCB77",borderRadius:"50%",boxShadow:"0 0 0 3px rgba(107,203,119,0.35)",animation:"sunPulse 2s ease-in-out infinite",flexShrink:0,display:"inline-block"}}/>
            </div>
          </div>
        </div>
    </div>
  );
}
