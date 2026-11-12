import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Menu, X, Sparkles, MoveUpRight, Github, Linkedin, GraduationCap, Award, Code2, Palette, Monitor } from 'lucide-react';

const navigation = [
  ['About', '#about'],
  ['Academic Qualifications', '#academics'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Certifications', '#certifications'],
  ['Contact', '#contact'],
];

const projects = [
  { n: '01', title: 'AI-Based Document Analyser', category: 'NLP · MACHINE LEARNING · FULL STACK', description: 'Built a document Q&A and summarization app with text preprocessing, chunking, semantic representation, and keyword extraction. Its custom NLP pipeline produces context-aware responses without external AI APIs.', stack: 'React.js · Python · Flask · NLP · Machine Learning · SQLite', href: 'https://github.com/KalashChauhan/AI-Based-Document-Summarization', color: 'pink', tag: 'DOCUMENT INTELLIGENCE', icon: '✳' },
  { n: '02', title: 'EduGuide', category: 'GENERATIVE AI · FULL STACK', description: 'Created an AI-powered education guidance platform that recommends colleges, streams, and learning roadmaps based on each student’s academic profile, interests, and goals.', stack: 'React · Node.js · Express · Gemini API · MongoDB', href: 'https://github.com/KalashChauhan/EduGuide', color: 'soft-pink', tag: 'AI-POWERED GUIDANCE', icon: '✦' },
  { n: '03', title: 'Trip Planner', category: 'LOCAL AI · FULL STACK', description: 'Built a planner that creates personalized day-by-day itineraries from travel dates, interests, and trip briefs. It uses Ollama for local language-model planning, an offline destination guide, itinerary checks, interactive editing, and optional trip-history storage.', stack: 'React 19 · Vite · Node.js · Ollama · MySQL · ESLint', href: 'https://github.com/KalashChauhan/Trip_Plan', liveHref: 'https://kalashchauhan.github.io/Trip_Plan/', color: 'rose', tag: 'TRAVEL, PLANNED THOUGHTFULLY', icon: '✧' },
];

const skills = [
  { icon: Code2, name: 'Programming languages', items: 'C · C++ · Python · Java · JavaScript' },
  { icon: Monitor, name: 'Web & backend', items: 'HTML · Tailwind CSS · React · Spring Boot · Node.js · Flask · Django · REST APIs' },
  { icon: Sparkles, name: 'AI & machine learning', items: 'PyTorch · TensorFlow · Scikit-learn · OpenCV · NLP · Gemini API' },
  { icon: Palette, name: 'Data & visualization', items: 'NumPy · Pandas · Matplotlib · Seaborn · Data Analytics' },
  { icon: Code2, name: 'Databases', items: 'MySQL · MongoDB · SQLite' },
  { icon: Monitor, name: 'Tools & CS foundations', items: 'Git · GitHub · VS Code · Oracle SQL · AWS · Azure · OOP · DBMS · OS · Networks · System Design' },
];

const education = [
  { degree: 'B.Tech, Computer Science & Engineering', school: 'Pranveer Singh Institute of Technology · Kanpur', date: 'Oct 2023 – Jun 2027', note: 'CGPA: 8.06 / 10 (through 6th semester)' },
  { degree: 'Intermediate · CBSE', school: 'M.J.R. Phule Public School · Ghazipur, Uttar Pradesh', date: 'Completed', note: '76.2%' },
  { degree: 'Matriculation · CBSE', school: 'M.J.R. Phule Public School · Ghazipur, Uttar Pradesh', date: 'Completed', note: '89.33%' },
];

const certifications = [
  { name: 'Complete Machine Learning and Data Science', issuer: 'GeeksforGeeks Skill Up', year: '2026', mark: 'ML', href: 'https://www.geeksforgeeks.org/courses/' },
  { name: 'Generative AI, LLM & RAG', issuer: 'GeeksforGeeks Skill Up', year: '2026', mark: 'GenAI', href: 'https://www.geeksforgeeks.org/courses/' },
  { name: 'Introduction to Generative AI', issuer: 'Simplilearn', year: '2025', mark: 'AI', href: 'https://www.simplilearn.com/skillup-free-online-courses/generative-ai' },
  { name: 'Data Analytics with Python', issuer: 'NPTEL', year: '2025', mark: 'DA', href: 'https://nptel.ac.in/courses' },
  { name: 'Programming Fundamentals using Python · Part 1', issuer: 'Infosys Springboard', year: '2024', mark: 'Py 1', href: 'https://infyspringboard.onwingspan.com/' },
  { name: 'Programming Fundamentals using Python · Part 2', issuer: 'Infosys Springboard', year: '2025', mark: 'Py 2', href: 'https://infyspringboard.onwingspan.com/' },
  { name: 'Object Oriented Programming using Python', issuer: 'Infosys Springboard', year: '2025', mark: 'OOP', href: 'https://infyspringboard.onwingspan.com/' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const targets = document.querySelectorAll('.section-head, .project-card, .about-main, .skill-card, .timeline-item, .cert-card, .contact-grid, .about-stats');
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
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {navigation.map(([label, link]) => <a key={label} href={link} onClick={closeMenu}>{label}<ArrowUpRight size={12} /></a>)}
      </nav>
      <a className="availability" href="#contact"><span /> OPEN TO OPPORTUNITIES</a>
    </header>

    <main id="home">
      <section className="hero section-pad">
        <div className="hero-topline"><span>SOFTWARE DEVELOPMENT · AI / ML</span><span>COMPUTER SCIENCE & ENGINEERING · 2027</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker"><span className="pink-dash" /> HELLO, I'M <b>KALASH CHAUHAN</b></p>
            <h1>Crafting<br /><em>useful</em><br />digital ideas<span className="pink">.</span></h1>
            <div className="hero-lower"><p>I’m a final-year B.Tech student building a foundation in <strong>software development, AI, machine learning, and generative AI</strong> through hands-on projects.</p><a className="circle-arrow" href="#about" aria-label="Learn about Kalash"><ArrowDown /></a></div>
            <div className="hero-actions"><a className="hero-primary" href="mailto:kalashchauhan1000@gmail.com">Let’s connect <MoveUpRight size={15} /></a><a className="hero-secondary" href="#projects">Explore projects <ArrowDown size={14} /></a></div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-photo"><img className="portrait-img" src={`${import.meta.env.BASE_URL}assets/kalash-portrait.png`} alt="Portrait of Kalash Chauhan" /></div>
            <div className="portrait-caption"><span>KALASH CHAUHAN · CSE</span><span>✳ KANPUR, INDIA</span></div>
            <div className="orbit-sticker">BUILD<br />WITH<br />PURPOSE <b>✳</b></div>
            <div className="developer-card"><div className="developer-card-top"><span>● ● ●</span><span>kalash.ts</span></div><pre><code><i>const</i> developer = {'{'}<br />  name: <b>'Kalash Chauhan'</b>,<br />  focus: <b>'Software + AI'</b>,<br />  learning: <em>true</em><br />{'}'};</code></pre></div>
          </div>
        </div>
        <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>LEARN · BUILD · IMPROVE</span></div>
      </section>

      <div className="ticker" aria-hidden="true"><div>{Array.from({ length: 4 }, (_, i) => <span key={i}>BUILD WITH PURPOSE <b>✳</b> ALWAYS LEARNING <b>✳</b> SOFTWARE · AI · IMPACT <b>✳</b> </span>)}</div></div>

      <section className="about-section" id="about"><div className="section-pad about-grid">
        <div><p className="eyebrow">01 / ABOUT</p><div className="about-doodle">✳</div></div>
        <div className="about-main"><h2>About <i>Kalash.</i></h2><p className="about-intro">I am Kalash, a Computer Science and Engineering student at Pranveer Singh Institute of Technology with a strong foundation in programming, problem-solving, and software development. I focus on applying my skills to real-world problems through software, AI, and machine learning projects. I am seeking an entry-level software engineering opportunity where I can contribute, keep learning, and grow with a team.</p>
          <div className="quick-facts"><div><span>01</span><p><b>Focus</b><br />Software engineering · AI / ML</p></div><div><span>02</span><p><b>Approach</b><br />Learn by building useful projects</p></div><div><span>03</span><p><b>Currently exploring</b><br />LLMs · RAG · intelligent applications</p></div></div>
          <div className="about-stats"><div><strong>250+</strong><a href="https://leetcode.com/u/KalashChauhan/" target="_blank" rel="noopener noreferrer">LeetCode profile ↗</a></div><div><strong>4★</strong><a href="https://www.hackerrank.com/profile/cs1d_2313683" target="_blank" rel="noopener noreferrer">HackerRank profile ↗</a></div><div><strong>160</strong><a href="https://www.geeksforgeeks.org/practice/" target="_blank" rel="noopener noreferrer">GFG practice ↗</a></div></div>
        </div>
      </div></section>

      <section className="academic-section section-pad" id="academics"><div className="section-head"><div><p className="eyebrow">02 / EDUCATION</p><h2>Academic<br /><i>Qualifications.</i></h2></div><p className="section-aside">The learning journey behind<br />the work I build.</p></div>
        <div className="academic-layout"><div className="academic-intro"><GraduationCap size={29} /><p>Computer Science foundations, curiosity, and a steady commitment to growing as an engineer.</p></div><div className="academic-timeline">{education.map((item, i) => <article className="timeline-item" key={i}><span className="timeline-dot"/><div className="timeline-date">{item.date}</div><h3>{item.degree}</h3><p className="timeline-place">{item.school}</p><p className="timeline-note">{item.note}</p></article>)}</div></div>
      </section>

      <section className="skills-section section-pad" id="skills"><div className="section-head"><div><p className="eyebrow">03 / THE TOOLKIT</p><h2>Skills &<br /><i>technology.</i></h2></div><p className="section-aside">Software development, AI,<br />machine learning, and Gen AI.</p></div>
        <div className="skills-grid">{skills.map(({ icon: Icon, name, items }, index) => <article className="skill-card" key={name}><span className="skill-index">0{index + 1}</span><Icon size={25} strokeWidth={1.5} /><h3>{name}</h3><p>{items}</p></article>)}</div>
      </section>

      <section className="work-section section-pad" id="projects">
        <div className="section-head"><div><p className="eyebrow">04 / SELECTED PROJECTS</p><h2>Featured<br /><i>creations.</i></h2></div><p className="section-aside">A selection of AI and software<br />projects built through practice.</p></div>
        <div className="project-list">{projects.map((project) => <article className={`project-card ${project.color}`} key={project.n}>
          <div className={`project-visual project-visual-${project.n}`} aria-label={`${project.title} interface preview`}><span className="project-tag">{project.tag}</span><div className="app-preview"><div className="preview-topbar"><span className="preview-brand">{project.n === '01' ? 'docu.' : project.n === '02' ? 'eduguide.' : 'tripplan.'}</span><span className="preview-status">● {project.n === '03' ? 'LOCAL MODE' : 'READY'}</span></div>{project.n === '01' ? <div className="preview-document"><div className="preview-heading">Understand your documents<span>✳</span></div><div className="preview-columns"><div className="preview-upload"><span className="preview-file-icon">↥</span><b>Drop a document here</b><small>PDF · DOCX · TXT</small><span className="preview-file">⌕ &nbsp; research-notes.pdf</span></div><div className="preview-summary"><small>GENERATED SUMMARY</small><b>Key ideas at a glance</b><i/><i/><i/><span className="preview-pill">6 key points</span></div></div></div> : project.n === '02' ? <div className="preview-guide"><div><small>YOUR LEARNING ROADMAP</small><b>Build your next chapter.</b><span>A plan shaped around your goals.</span></div><div className="preview-roadmap"><span>01</span><i/><b>Explore your direction</b><em>DONE</em></div><div className="preview-roadmap"><span>02</span><i/><b>Build core skills</b><em>IN PROGRESS</em></div><div className="preview-roadmap"><span>03</span><i/><b>Create a real project</b><em>UP NEXT</em></div></div> : <div className="preview-trip"><div className="preview-destination"><small>YOUR NEXT ADVENTURE</small><b>Plan a trip<br/><i>your way.</i></b><span>✳ &nbsp; PERSONALIZED ITINERARIES</span></div><div className="preview-itinerary"><small>3 DAY ITINERARY</small><b>01 &nbsp; Explore the old town</b><b>02 &nbsp; Local food & hidden gems</b><b>03 &nbsp; A slower morning</b><span>✦ AI PLANNED · READY TO EDIT</span></div></div>}</div><span className="project-count">/{project.n}</span></div>
          <div className="project-info"><div><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="project-stack">{project.stack}</p></div><div className="project-links">{project.liveHref && <a className="project-live" href={project.liveHref} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={13} /></a>}<a className="project-source" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><Github /></a></div></div>
        </article>)}</div>
      </section>

      <section className="certifications-section section-pad" id="certifications"><div className="section-head"><div><p className="eyebrow">05 / CONTINUOUS LEARNING</p><h2>Certifications<br />& <i>courses.</i></h2></div><p className="section-aside">Focused learning in data science,<br />machine learning, and Gen AI.</p></div>
        <div className="certification-list">{certifications.map((item, i) => <a className="cert-card cert-link" href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.issuer} learning platform`} key={item.name}><span className="cert-number">0{i + 1}</span><span className="cert-mark">{item.mark}</span><div><h3>{item.name}</h3><p>{item.issuer} <span>·</span> {item.year}</p></div><span className="cert-view">ISSUER SITE ↗</span><Award size={19} /></a>)}</div>
      </section>

      <section className="contact-section section-pad" id="contact"><p className="eyebrow">06 / CONTACT</p><div className="contact-grid"><h2>Let’s build<br />something <i>useful.</i></h2><div className="contact-copy"><p>Have an opportunity, a project, or an idea you’d like to discuss? I’d love to hear from you.</p><a className="contact-email" href="mailto:kalashchauhan1000@gmail.com">Send me a message <MoveUpRight /></a><a className="phone-link" href="tel:+919026380534">+91 90263 80534</a><div className="social-row"><a href="https://www.linkedin.com/in/kalash-chauhan-2004nov02/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /> LINKEDIN</a><a href="https://github.com/KalashChauhan" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /> GITHUB</a><a href="https://leetcode.com/u/KalashChauhan/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile"><Code2 /> LEETCODE PROFILE ↗</a></div></div></div></section>
    </main>
    <footer className="footer"><a className="brand" href="#home">KC<span>®</span></a><span>SOFTWARE DEVELOPMENT · AI · MACHINE LEARNING</span><a href="#home">BACK TO TOP ↑</a></footer>
  </div>;
}

export default App;
