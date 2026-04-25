export default function Navigation({ activeSection }) {
  return (
    <nav>
        <div className="nav-logo">🌾CAKRAYUDHA🌾</div>
        <ul className="nav-links">
          {[["home","🏠"],["about","👤"],["skills","⚔️"],["experience","📜"],["projects","🌾"],["education","🎓"],["contact","📬"]].map(([s,ic])=>(
            <li key={s}><a href={`#${s}`} className={activeSection===s?"active":""}><span style={{fontSize:"18px"}}>{ic}</span> {s.toUpperCase()}</a></li>
          ))}
        </ul>
    </nav>
  );
}
