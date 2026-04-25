import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Education from "./components/Education/Education.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import { style } from "./styles/global.js"
import { skills, experiences, projects, leaves } from './data/constants.js';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [leafEls, setLeafEls] = useState([]);
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

  useEffect(() => {
    setLeafEls(Array.from({length:7},(_,i)=>({
      id:i, emoji:leaves[i%leaves.length],
      left:Math.random()*100,
      delay:Math.random()*12,
      duration:9+Math.random()*8,
    })));
  }, []);

  useEffect(() => {
    const handler = () => {
      const ids = ["home","about","skills","experience","projects","education","contact"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) { const r = el.getBoundingClientRect(); if (r.top<=100&&r.bottom>=100){setActiveSection(id);break;} }
      }
    };
    window.addEventListener("scroll",handler);
    return ()=>window.removeEventListener("scroll",handler);
  }, []);

  return (
    <>
      <style>{style}</style>
      {leafEls.map(l=>(
        <div key={l.id} className="leaf-float" style={{left:`${l.left}%`,animationDelay:`${l.delay}s`,animationDuration:`${l.duration}s`}}>{l.emoji}</div>
      ))}

      {/* NAV */}
      <Navigation activeSection={activeSection}/>

      {/* HERO */}
      <Hero activeSection={activeSection}/>

      {/* ABOUT */}
      <About activeSection={activeSection}/>

      {/* SKILLS */}
      <Skills activeSection={activeSection}/>

      {/* EXPERIENCE */}
      <Experience activeSection={activeSection}/>

      {/* PROJECTS */}
      <Projects activeSection={activeSection}/>

      {/* EDUCATION */}
      <Education activeSection={activeSection}/>

      {/* CONTACT */}
      <Contact activeSection={activeSection}/>

      {/* FOOTER */}
      <Footer activeSection={activeSection}/>
    </>
  );
}
