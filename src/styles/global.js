export const style = `
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Lato:wght@300;400;700&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap');

  :root {
    --dark:     #2E3A2F;
    --deep:     #3B4D3C;
    --hay:      #D4A843;
    --wheat:    #E8C96A;
    --grass:    #4A7C3F;
    --leaf:     #6BAB5E;
    --sage:     #8FBC6E;
    --moss:     #3D5E35;
    --sky:      #B8D4E8;
    --cream:    #F9F5EC;
    --offwhite: #F4EFE3;
    --ivory:    #EDE8DC;
    --stone:    #B0A898;
    --muted:    #7A7264;
    --berry:    #8B3A52;
    --sun:      #F0A830;
    --water:    #5B8FA8;
    --fog:      rgba(249,245,236,0.93);
  }

  * { box-sizing:border-box; margin:0; padding:0; }
  html, body { width:100%; min-height:100%; }
  html { scroll-behavior:smooth; }

  body {
    font-family:'Lato',sans-serif;
    background-color:var(--cream);
    color:var(--dark);
    overflow-x:hidden;
    min-height:100vh;
  }

  body::before {
    content:''; position:fixed; top:0; left:0; width:100%; height:100%;
    background-image:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(46,58,47,0.025) 2px,rgba(46,58,47,0.025) 4px);
    pointer-events:none; z-index:9999;
  }

  /* NAV */
  nav {
    position:sticky; top:0; z-index:1000;
    background:var(--dark); border-bottom:3px solid var(--hay);
    padding:0 2rem; display:flex; align-items:center; justify-content:space-between;
    height:60px; box-shadow:0 4px 20px rgba(0,0,0,0.25);
  }
  .nav-logo { font-family:'Press Start 2P',monospace; font-size:14px; color:var(--hay); letter-spacing:1px; line-height:1.6; }
  .nav-links { display:flex; gap:0.4rem; list-style:none; }
  .nav-links a {
    font-family:'Press Start 2P',monospace; font-size:6.5px; color:var(--ivory);
    text-decoration:none; padding:6px 10px; border:2px solid transparent;
    border-radius:20px; transition:all 0.15s; letter-spacing:0.5px;
  }
  .nav-links a:hover, .nav-links a.active { color:var(--hay); border-color:var(--hay); background:rgba(212,168,67,0.1); }

  /* HERO */
  .hero {
    min-height:100vh;
    background:linear-gradient(180deg,#A8C8E0 0%,#BDD5E5 22%,#8FBC6E 58%,#6BAB5E 68%,#4A7C3F 78%,#3D5E35 100%);
    position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center;
  }
  .hero-sun {
    position:absolute; top:55px; right:14%; width:96px; height:96px;
    background:radial-gradient(circle,#FFE066 30%,#F0A830 60%,transparent 75%);
    border-radius:50%; box-shadow:0 0 60px 30px rgba(240,168,48,0.3);
    animation:sunPulse 4s ease-in-out infinite;
  }
  @keyframes sunPulse {
    0%,100%{transform:scale(1);box-shadow:0 0 60px 30px rgba(240,168,48,0.3);}
    50%{transform:scale(1.05);box-shadow:0 0 80px 40px rgba(240,168,48,0.4);}
  }
  .cloud { position:absolute; background:rgba(255,255,255,0.88); border-radius:50px; animation:drift linear infinite; }
  @keyframes drift { from{transform:translateX(-250px);} to{transform:translateX(110vw);} }
  .tree { position:absolute; bottom:0; display:flex; flex-direction:column; align-items:center; }
  .tree-top { width:0; height:0; border-left:solid transparent; border-right:solid transparent; border-bottom:solid #3D5E35; filter:drop-shadow(2px 2px 0 rgba(0,0,0,0.2)); }
  .tree-trunk { background:#6B4A2A; border:2px solid #4a3018; }

  .hero-content { position:relative; z-index:10; text-align:center; padding:2rem; margin-top:-6vh; }
  .hero-card {
    background:var(--fog); border:2px solid rgba(255,255,255,0.7);
    border-radius:28px; padding:3rem 4rem;
    box-shadow:0 16px 56px rgba(46,58,47,0.16),0 2px 0 rgba(255,255,255,0.9) inset;
    backdrop-filter:blur(10px); position:relative; animation:fadeInUp 0.8s ease both;
  }
  @keyframes fadeInUp { from{opacity:0;transform:translateY(30px);} to{opacity:1;transform:translateY(0);} }
  .hero-card::before {
    content:'✦'; position:absolute; top:-14px; left:50%; transform:translateX(-50%);
    font-size:14px; color:var(--hay); background:var(--dark); padding:0 8px;
    width:28px; height:28px; border-radius:50%;
    display:flex; align-items:center; justify-content:center; line-height:28px;
  }
  .hero-tag { font-family:'Press Start 2P',monospace; font-size:7.5px; color:var(--grass); letter-spacing:3px; display:block; margin-bottom:1rem; }
  .hero-name { font-family:'Press Start 2P',monospace; font-size:clamp(13px,2.4vw,21px); color:var(--dark); line-height:1.9; margin-bottom:0.5rem; text-shadow:2px 2px 0 rgba(212,168,67,0.3); }
  .hero-role { font-family:'Crimson Pro',serif; font-size:1.55rem; color:var(--berry); font-style:italic; margin-bottom:1.5rem; }
  .hero-summary { font-size:1rem; color:var(--muted); max-width:540px; line-height:1.85; margin:0 auto 2rem; }
  .hero-btns { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }

  .btn { font-family:'Press Start 2P',monospace; font-size:7.5px; padding:12px 22px; border-radius:50px; cursor:pointer; text-decoration:none; transition:all 0.15s; display:inline-flex; align-items:center; gap:8px; letter-spacing:0.5px; }
  .btn:active{transform:scale(0.97);}
  .btn-primary { background:var(--sky); color:var(--water); border:2px solid var(--water); box-shadow:0 4px 18px rgba(113, 153, 198, 0.35); }
  .btn-primary:hover { background:var(--water); color:var(--cream); box-shadow:0 6px 24px rgba(88, 99, 201, 0.45); }
  .btn-secondary { background:var(--grass); color:var(--cream); border:2px solid var(--moss); box-shadow:0 4px 18px rgba(74,124,63,0.35); }
  .btn-secondary:hover { background:var(--moss); box-shadow:0 6px 24px rgba(74,124,63,0.45); }
  .btn-tertiary { background:rgba(232, 201, 106, 0.2); color:var(--dark); border:2px solid var(--stone); box-shadow:0 4px 12px rgba(0,0,0,0.08); }
  .btn-tertiary:hover { background:var(--hay); border-color:var(--hay); }

  .scroll-hint {
    position:absolute; bottom:28px; left:50%; transform:translateX(-50%);
    font-family:'Press Start 2P',monospace; font-size:6.5px; color:var(--cream);
    animation:bounce 1.5s ease-in-out infinite; z-index:10;
    display:flex; flex-direction:column; align-items:center; gap:6px;
    text-shadow:1px 1px 2px rgba(0,0,0,0.4);
  }
  @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0);} 50%{transform:translateX(-50%) translateY(8px);} }

  /* SECTIONS */
  section { padding:5rem 2rem; max-width:1100px; margin:0 auto; }
  .section-inner { max-width:1100px; margin:0 auto; padding:0 2rem; }
  .section-header { text-align:center; margin-bottom:3rem; }
  .section-label { font-family:'Press Start 2P',monospace; font-size:8px; color:var(--dark); letter-spacing:4px; display:block; margin-bottom:0.75rem; }
  .section-title { font-family:'Press Start 2P',monospace; font-size:clamp(13px,1.9vw,19px); color:var(--dark); line-height:2; position:relative; display:inline-block; }
  .section-title::after { content:''; position:absolute; bottom:-8px; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--hay),var(--grass),var(--hay)); border-radius:2px; }

  /* DIVIDER */
  .field-divider { width:100%; height:72px; background:linear-gradient(180deg,var(--sage) 0%,var(--grass) 50%,var(--dark) 100%); position:relative; overflow:hidden; }
  .field-divider::before { content:'🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾'; position:absolute; bottom:0; font-size:26px; white-space:nowrap; letter-spacing:-4px; animation:swayField 3s ease-in-out infinite; line-height:1; }
  @keyframes swayField { 0%,100%{transform:rotate(-2deg);} 50%{transform:rotate(2deg);} }

  /* ABOUT */
  .about-grid { display:grid; grid-template-columns:1fr 1.5fr; gap:3rem; align-items:start; }
  .about-card { background:var(--offwhite); border:1.5px solid var(--ivory); border-radius:24px; padding:2rem; box-shadow:0 4px 24px rgba(46,58,47,0.07); }
  .avatar-frame { width:128px; height:128px; margin:0 auto 1.5rem; border:2px solid var(--ivory); border-radius:20px; background:linear-gradient(135deg,var(--sky) 0%,var(--sage) 100%); display:flex; align-items:center; justify-content:center; font-size:58px; box-shadow:0 6px 20px rgba(74,124,63,0.18); position:relative; overflow:hidden; }
  .avatar-frame::after { content:''; position:absolute; bottom:0; left:0; right:0; height:35%; background:var(--grass); clip-path:polygon(0 60%,10% 30%,20% 55%,30% 20%,40% 50%,50% 15%,60% 45%,70% 25%,80% 55%,90% 30%,100% 50%,100% 100%,0 100%); }
  .about-name-card { text-align:center; margin-bottom:1.5rem; }
  .about-name-card h2 { font-family:'Press Start 2P',monospace; font-size:12px; color:var(--dark); margin-bottom:0.5rem; line-height:1.9; }
  .about-name-card p { font-family:'Crimson Pro',serif; font-style:italic; color:var(--berry); font-size:1.1rem; }
  .stat-list { list-style:none; display:flex; flex-direction:column; gap:0.65rem; }
  .stat-item { display:flex; align-items:center; gap:0.75rem; font-size:0.875rem; color:var(--muted); }
  .stat-icon { font-size:17px; width:26px; text-align:center; flex-shrink:0; }
  .stat-item a { color:var(--grass); text-decoration:none; font-weight:700; }
  .stat-item a:hover { color:var(--moss); text-decoration:underline; }
  .about-text p { font-size:1.05rem; line-height:1.9; color:var(--muted); margin-bottom:1.2rem; }
  .about-text strong { color:var(--dark); }

  .xp-bars { margin-top:2rem; }
  .xp-label { font-family:'Press Start 2P',monospace; font-size:10px; color:var(--dark); margin-bottom:1rem; display:block; }
  .xp-row { display:flex; align-items:center; gap:1rem; margin-bottom:0.7rem; }
  .xp-name { font-size:0.82rem; color:var(--muted); width:120px; flex-shrink:0; font-weight:700; }
  .xp-track { flex:1; height:10px; background:var(--ivory); border:1.5px solid var(--stone); border-radius:20px; overflow:hidden; }
  .xp-fill { height:100%; background:linear-gradient(90deg,var(--grass),var(--leaf)); border-radius:20px; animation:shimmer 3s linear infinite; }
  @keyframes shimmer { 0%{filter:brightness(1);} 50%{filter:brightness(1.15);} 100%{filter:brightness(1);} }
  .xp-pct { font-family:'Press Start 2P',monospace; font-size:6.5px; color:var(--grass); width:28px; text-align:right; }

  /* SKILLS */
  .skills-bg { background:var(--offwhite); padding:5rem 0; }
  .skill-category-title { font-family:'Press Start 2P',monospace; font-size:8px; color:var(--cream); background:var(--deep); display:inline-block; padding:6px 16px; border-radius:20px; margin:2.5rem 0 1.25rem; letter-spacing:1px; }
  .skills-row { display:flex; flex-wrap:wrap; gap:0.85rem; align-items:center; }
  .skill-pill { display:flex; align-items:center; gap:10px; padding:8px 18px 8px 12px; border-radius:50px; background:var(--cream); border:1.5px solid var(--ivory); box-shadow:0 2px 8px rgba(46,58,47,0.06); transition:all 0.18s; cursor:default; }
  .skill-pill:hover { transform:translateY(-3px); box-shadow:0 8px 20px rgba(74,124,63,0.14); border-color:var(--sage); background:#fff; }
  .skill-pill img { width:28px; height:28px; object-fit:contain; display:block; flex-shrink:0; }
  .skill-pill-name { font-family:'Lato',sans-serif; font-weight:700; font-size:0.82rem; color:var(--dark); white-space:nowrap; }

  /* EXPERIENCE */
  .exp-bg { background:var(--dark); padding:5rem 0; }
  .exp-bg .section-label { color:var(--stone); }
  .exp-bg .section-title { color:var(--hay); }
  .exp-bg .section-title::after { background:linear-gradient(90deg,var(--hay),var(--sage),var(--hay)); }
  .timeline { position:relative; padding-left:3rem; }
  .timeline::before { content:''; position:absolute; left:11px; top:0; bottom:0; width:3px; background:repeating-linear-gradient(180deg,var(--hay) 0px,var(--hay) 8px,transparent 8px,transparent 14px); }
  .company-block { margin-bottom:2.75rem; }
  .company-header { background:rgba(255,255,255,0.06); border:1.5px solid rgba(212,168,67,0.4); border-radius:18px; padding:1.1rem 1.5rem; margin-bottom:1rem; position:relative; box-shadow:0 4px 16px rgba(0,0,0,0.18); backdrop-filter:blur(4px); }
  .company-header::before { content:'⬥'; position:absolute; left:-38px; top:50%; transform:translateY(-50%); font-size:16px; color:var(--hay); width:26px; height:26px; background:var(--dark); border:2px solid var(--hay); border-radius:50%; display:flex; align-items:center; justify-content:center; line-height:22px; text-align:center; }
  .company-name { font-family:'Press Start 2P',monospace; font-size:8.5px; color:var(--hay); margin-bottom:0.35rem; line-height:1.7; }
  .company-period { font-size:0.8rem; color:var(--sage); font-style:italic; }
  .role-cards { display:flex; flex-direction:column; gap:0.85rem; padding-left:0.75rem; }
  .role-card { background:rgba(255,255,255,0.05); border:1.5px solid rgba(255,255,255,0.09); border-radius:16px; padding:1.2rem 1.5rem; transition:all 0.2s; }
  .role-card:hover { border-color:rgba(212,168,67,0.45); background:rgba(255,255,255,0.08); transform:translateX(4px); }
  .role-title { font-family:'Press Start 2P',monospace; font-size:7.5px; color:#E8E0D0; margin-bottom:0.3rem; line-height:1.7; }
  .role-client { font-size:0.8rem; color:var(--sage); margin-bottom:0.75rem; font-style:italic; }
  .role-bullets { list-style:none; display:flex; flex-direction:column; gap:0.5rem; }
  .role-bullets li { font-size:0.875rem; color:rgba(232,224,208,0.8); line-height:1.75; padding-left:1.1rem; position:relative; }
  .role-bullets li::before { content:'▸'; position:absolute; left:0; color:var(--hay); }
  .tech-tags { display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.75rem; }
  .tech-tag { font-family:'Press Start 2P',monospace; font-size:5.5px; padding:4px 10px; background:rgba(212,168,67,0.1); border:1px solid rgba(212,168,67,0.3); border-radius:20px; color:var(--wheat); letter-spacing:0.3px; }

  /* PROJECTS */
  .projects-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:1.5rem; }
  .project-card { background:var(--offwhite); border:1.5px solid var(--ivory); border-radius:22px; overflow:hidden; box-shadow:0 4px 20px rgba(46,58,47,0.07); transition:all 0.22s; display:flex; flex-direction:column; }
  .project-card:hover { transform:translateY(-6px); box-shadow:0 14px 40px rgba(46,58,47,0.13); border-color:var(--sage); }
  .project-banner { height:80px; display:flex; align-items:center; justify-content:center; font-size:36px; position:relative; overflow:hidden; }
  .project-banner::before { content:''; position:absolute; inset:0; background:inherit; filter:brightness(0.75); }
  .project-banner span { position:relative; z-index:1; filter:drop-shadow(2px 2px 0 rgba(0,0,0,0.25)); }
  .project-body { padding:1.5rem; flex:1; display:flex; flex-direction:column; }
  .project-company { font-family:'Press Start 2P',monospace; font-size:5.5px; color:var(--stone); letter-spacing:2px; margin-bottom:0.5rem; }
  .project-title { font-family:'Press Start 2P',monospace; font-size:8.5px; color:var(--dark); line-height:1.9; margin-bottom:0.75rem; }
  .project-desc { font-size:0.9rem; line-height:1.75; color:var(--muted); flex:1; margin-bottom:1rem; }
  .project-highlight { background:var(--grass); color:var(--cream); font-family:'Press Start 2P',monospace; font-size:6px; padding:6px 12px; border-radius:20px; display:inline-block; margin-bottom:0.75rem; line-height:1.7; }
  .project-tech-tag { font-family:'Press Start 2P',monospace; font-size:5.5px; padding:4px 10px; background:rgba(74,124,63,0.09); border:1px solid rgba(74,124,63,0.28); border-radius:20px; color:var(--moss); letter-spacing:0.3px; }

  /* EDUCATION */
  .edu-bg { background:linear-gradient(135deg,var(--sky) 0%,var(--sage) 60%,var(--grass) 100%); padding:5rem 0; }
  .edu-card { background:var(--fog); border:2px solid rgba(255,255,255,0.65); border-radius:26px; padding:2.5rem 3rem; box-shadow:0 12px 40px rgba(46,58,47,0.13); max-width:680px; margin:0 auto; display:grid; grid-template-columns:auto 1fr; gap:2rem; align-items:center; }
  .edu-icon { width:96px; height:96px; background:var(--dark); border:2px solid var(--hay); border-radius:22px; display:flex; align-items:center; justify-content:center; font-size:44px; box-shadow:0 6px 20px rgba(0,0,0,0.18); flex-shrink:0; }
  .edu-school { font-family:'Press Start 2P',monospace; font-size:9.5px; color:var(--dark); line-height:1.9; margin-bottom:0.5rem; }
  .edu-degree { font-family:'Crimson Pro',serif; font-size:1.2rem; color:var(--berry); font-style:italic; margin-bottom:0.5rem; }
  .edu-period { font-size:0.875rem; color:var(--moss); font-weight:700; }
  .cert-list { display:flex; flex-direction:column; gap:0.7rem; margin-top:2rem; align-items:flex-start; text-align:left; }
  .cert-item { background:rgba(249,245,236,0.92); border:1.5px solid rgba(255,255,255,0.6); border-left:5px solid var(--grass); border-radius:16px; padding:1rem 1.5rem; display:flex; align-items:center; gap:1rem; box-shadow:0 2px 10px rgba(46,58,47,0.07); transition:all 0.15s; width:100%; }
  .cert-item:hover { transform:translateX(5px); border-left-color:var(--hay); background:rgba(249,245,236,0.7); }
  .cert-icon { font-size:22px; flex-shrink:0; }
  .cert-name { font-family:'Press Start 2P',monospace; font-size:6.5px; color:var(--dark); line-height:1.9; }
  .cert-issuer { font-size:0.8rem; color:var(--muted); margin-top:0.2rem; }

  /* CONTACT */
  .social-bg { background:var(--moss); padding:5rem 0; }
  .social-bg .section-label { color:var(--sage); }
  .social-bg .section-title { color:var(--cream); }
  .social-bg .section-title::after { background:linear-gradient(90deg,var(--hay),var(--sage)); }
  .social-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:1rem; max-width:800px; margin:0 auto; }
  .social-card { background:rgba(255,255,255,0.08); border:1.5px solid rgba(255,255,255,0.14); border-radius:22px; padding:1.5rem; text-align:center; text-decoration:none; box-shadow:0 4px 16px rgba(0,0,0,0.14); transition:all 0.18s; display:flex; flex-direction:column; align-items:center; gap:0.65rem; }
  .social-card:hover { transform:translateY(-5px); box-shadow:0 10px 32px rgba(0,0,0,0.2); background:rgba(255,255,255,0.14); border-color:var(--hay); }
  .social-icon { font-size:30px; }
  .social-name { font-family:'Press Start 2P',monospace; font-size:5.5px; color:var(--hay); line-height:1.8; }
  .social-handle { font-size:0.7rem; color:rgba(232,224,208,0.8); }

  /* FOOTER */
  footer { background:var(--dark); border-top:3px solid var(--hay); padding:2rem; text-align:center; }
  .footer-text { font-family:'Press Start 2P',monospace; font-size:9px; color:var(--stone); line-height:2.2; }
  .footer-heart { color:var(--berry); }

  /* FLOATING LEAVES */
  .leaf-float { position:fixed; font-size:18px; pointer-events:none; animation:leafFall linear infinite; z-index:9998; opacity:0.5; }
  @keyframes leafFall { 0%{transform:translateY(-50px) rotate(0deg);opacity:0;} 10%{opacity:0.5;} 90%{opacity:0.3;} 100%{transform:translateY(110vh) rotate(720deg);opacity:0;} }

  /* RESPONSIVE */
  @media(max-width:768px){
    nav{padding:0 1rem;} .nav-links{display:none;}
    .hero-card{padding:2rem 1.5rem;border-radius:18px;}
    .about-grid{grid-template-columns:1fr;}
    .edu-card{grid-template-columns:1fr;text-align:center;}
    .edu-icon{margin:0 auto;}
    section{padding:3rem 1rem;}
    .hero-name{font-size:11px;}
  }
`;
