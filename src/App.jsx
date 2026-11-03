import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Menu, X, Sparkles, MoveUpRight, Github, Linkedin, Instagram, Mail, Download, GraduationCap, Award, Code2, Palette, Monitor, Camera } from 'lucide-react';

const projects = [
  { n: '01', title: 'AI-Based Document Analyser', category: 'NLP · MACHINE LEARNING · FULL STACK', description: 'Built a document Q&A and summarization app with text preprocessing, chunking, semantic representation, and keyword extraction. The custom NLP pipeline generates context-aware responses without external AI APIs.', stack: 'React · Python · Flask · NLP · SQLite', href: 'https://github.com/KalashChauhan/AI-Based-Document-Summarization', color: 'pink', tag: 'DOCUMENT INTELLIGENCE', icon: '✳' },
  { n: '02', title: 'EduGuide', category: 'GENERATIVE AI · FULL STACK', description: 'Created an education guidance platform that uses student academics, interests, and goals to generate personalized college, stream, and learning-roadmap recommendations.', stack: 'React · Node.js · Express · Gemini API · MongoDB', href: 'https://github.com/KalashChauhan/EduGuide', color: 'yellow', tag: 'AI-POWERED GUIDANCE', icon: '✦' },
];

const skills = [
  { icon: Code2, name: 'Software development', items: 'C · C++ · Java · Python · JavaScript · React · Node.js · Spring Boot' },
  { icon: Sparkles, name: 'AI & machine learning', items: 'Scikit-learn · TensorFlow · PyTorch · NLP · OpenCV · NumPy · Pandas' },
  { icon: Monitor, name: 'Generative AI', items: 'Gemini API · LLM concepts · RAG fundamentals · document Q&A' },
  { icon: Palette, name: 'Data & foundations', items: 'MySQL · MongoDB · SQLite · OOP · DBMS · OS · Networks · System Design' },
];

const education = [
  { degree: 'B.Tech, Computer Science & Engineering', school: 'Pranveer Singh Institute of Technology · Kanpur', date: 'Oct 2023 – Jun 2027', note: 'CGPA: 8.06 / 10 (through 6th semester)' },
  { degree: 'Intermediate · CBSE', school: 'M.J.R. Phule Public School · Ghazipur, Uttar Pradesh', date: 'Completed', note: '76.2%' },
  { degree: 'Matriculation · CBSE', school: 'M.J.R. Phule Public School · Ghazipur, Uttar Pradesh', date: 'Completed', note: '89.33%' },
];

const certifications = [
  { name: 'Complete Machine Learning and Data Science', issuer: 'GeeksforGeeks Skill Up', year: '2026' },
  { name: 'Generative AI, LLM & RAG', issuer: 'GeeksforGeeks Skill Up', year: '2026' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const targets = document.querySelectorAll('.section-head, .project-card, .about-main, .skill-card, .timeline-item, .cert-card, .achievement-strip, .contact-grid');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    targets.forEach((target, index) => {
      target.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 75}ms`);
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell">
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu}>KC<span>®</span></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {[['Work', '#work'], ['About', '#about'], ['Journey', '#journey'], ['Contact', '#contact']].map(([label, link]) => <a key={label} href={link} onClick={closeMenu}>{label}<ArrowUpRight size={12} /></a>)}
      </nav>
      <a className="availability" href="#contact"><span /> FINAL-YEAR BTECH · 2027</a>
    </header>

    <main id="home">
      <section className="hero section-pad">
        <div className="hero-topline"><span>COMPUTER SCIENCE & ENGINEERING</span><span>PRANVEER SINGH INSTITUTE OF TECHNOLOGY · KANPUR</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker"><span className="pink-dash" /> HELLO, I'M <b>KALASH CHAUHAN</b></p>
            <h1>Building<br /><em>software</em><br />with AI<span className="pink">.</span></h1>
            <div className="hero-lower"><p>Final-year B.Tech student exploring <strong>software development, AI, machine learning, and generative AI</strong>. I enjoy turning ideas into useful products and learning by building.</p><a className="circle-arrow" href="#work" aria-label="Explore the portfolio"><ArrowDown /></a></div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-photo"><img className="portrait-img" src="/assets/kalash-portrait.png" alt="Portrait of Kalash Chauhan" /></div>
            <div className="portrait-caption"><span>KALASH CHAUHAN · CSE</span><span>✳ KANPUR, INDIA</span></div>
            <div className="orbit-sticker">GOOD<br />THINGS<br />AHEAD <b>✳</b></div>
          </div>
        </div>
        <div className="hero-foot"><span>SCROLL A LITTLE</span><span>DESIGN · IDEAS · IMPACT</span></div>
      </section>

      <div className="ticker" aria-hidden="true"><div>{Array.from({ length: 4 }, (_, i) => <span key={i}>THOUGHTFUL WORK <b>✳</b> GOOD PEOPLE <b>✳</b> ALWAYS LEARNING <b>✳</b> </span>)}</div></div>

      <section className="work-section section-pad" id="work">
        <div className="section-head"><div><p className="eyebrow">01 / THE WORK</p><h2>Made with<br /><i>intention.</i></h2></div><p className="section-aside">A few projects, experiments,<br />and ideas I’m happy to share.</p></div>
        <div className="project-list">{projects.map((project) => <article className={`project-card ${project.color}`} key={project.n}>
          <div className="project-visual"><span className="project-tag">{project.tag}</span><div className="visual-center"><span className="visual-icon">{project.icon}</span><span className="visual-title">{project.title}</span></div><span className="project-count">/{project.n}</span></div>
          <div className="project-info"><div><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="project-stack">{project.stack}</p></div><a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><MoveUpRight /></a></div>
        </article>)}</div>
        <p className="edit-hint">✳ Replace these sample cards with your real projects, links, and outcomes.</p>
      </section>

      <section className="about-section" id="about"><div className="section-pad about-grid">
        <div><p className="eyebrow">02 / PROFILE</p><div className="about-doodle">✳</div></div>
        <div className="about-main"><h2>Engineer in<br />the <i>making.</i></h2><p className="about-intro">I’m Kalash, a Computer Science and Engineering student at Pranveer Singh Institute of Technology. I’m building a strong foundation in programming, problem-solving, and software development, while exploring how machine learning and generative AI can solve practical problems. I’m looking for an entry-level software engineering opportunity where I can contribute, keep learning, and grow with a team.</p>
          <div className="quick-facts"><div><span>01</span><p><b>Focus</b><br />Software engineering · AI / ML</p></div><div><span>02</span><p><b>Currently building</b><br />Document intelligence · AI guidance tools</p></div><div><span>03</span><p><b>Learning mindset</b><br />Practice, ship, improve</p></div></div>
        </div>
      </div></section>

      <section className="skills-section section-pad"><div className="section-head"><div><p className="eyebrow">03 / TECHNICAL SKILLS</p><h2>My kind<br />of <i>toolkit.</i></h2></div><p className="section-aside">Software, machine learning,<br />and generative AI.</p></div>
        <div className="skills-grid">{skills.map(({ icon: Icon, name, items }, index) => <article className="skill-card" key={name}><span className="skill-index">0{index + 1}</span><Icon size={25} strokeWidth={1.5} /><h3>{name}</h3><p>{items}</p></article>)}</div>
      </section>

      <section className="journey-section section-pad" id="journey"><div className="section-head"><div><p className="eyebrow">04 / EDUCATION & CERTIFICATIONS</p><h2>The <i>journey.</i></h2></div><p className="section-aside">Academic foundations<br />and focused learning.</p></div>
        <div className="journey-grid"><div className="timeline-block"><h3><GraduationCap /> Education</h3>{education.map((item, i) => <article className="timeline-item" key={i}><span className="timeline-dot"/><div className="timeline-date">{item.date}</div><h4>{item.degree}</h4><p className="timeline-place">{item.school}</p><p className="timeline-note">{item.note}</p></article>)}</div>
          <div className="cert-block"><h3><Award /> Certifications</h3>{certifications.map((item, i) => <article className="cert-card" key={i}><span className="cert-number">0{i + 1}</span><div><h4>{item.name}</h4><p>{item.issuer} <span>·</span> {item.year}</p></div><ArrowUpRight size={17} /></article>)}</div></div>
        <div className="achievement-strip"><div><span>250+</span><p>problems solved on <a href="https://leetcode.com/u/KalashChauhan/" target="_blank" rel="noreferrer">LeetCode ↗</a></p></div><div><span>4★</span><p>Problem Solving on <a href="https://www.hackerrank.com/profile/cs1d_2313683" target="_blank" rel="noreferrer">HackerRank ↗</a></p></div><div><span>160</span><p>days of problem solving · GFG Skill Up, 2026</p></div></div>
      </section>

      <section className="contact-section section-pad" id="contact"><p className="eyebrow">05 / SAY HELLO</p><div className="contact-grid"><h2>Let’s build<br />something <i>useful.</i></h2><div className="contact-copy"><p>Open to entry-level software engineering opportunities, internships, and thoughtful collaborations across software, AI, and machine learning.</p><a className="contact-email" href="mailto:kalashchauhan1000@gmail.com">kalashchauhan1000@gmail.com <MoveUpRight /></a><a className="phone-link" href="tel:+919026380534">+91 90263 80534</a><div className="social-row"><a href="https://www.linkedin.com/in/kalash-chauhan-2004nov02" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /> LINKEDIN</a><a href="https://github.com/KalashChauhan" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /> GITHUB</a><a href="https://leetcode.com/u/KalashChauhan/" target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 /> LEETCODE</a></div></div></div></section>
    </main>
    <footer className="footer"><a className="brand" href="#home">KC<span>®</span></a><span>SOFTWARE DEVELOPMENT · AI · MACHINE LEARNING</span><a href="#home">BACK TO TOP ↑</a></footer>
  </div>;
}

export default App;
