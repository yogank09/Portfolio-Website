import { useEffect, useState } from "react";
import pic from "./assets/yogank-sharma-headshot.png";
import { links, skills, projects, certifications } from "./data/portfolio";
const X = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children} ↗
  </a>
);
const Section = ({ id, kicker, title, children }) => (
  <section id={id}>
    <p className="kicker">{kicker}</p>
    <h2>{title}</h2>
    {children}
  </section>
);
function Nav({ theme, setTheme }) {
  const [n, setN] = useState(false);
  return (
    <header>
      <nav>
        <a className="brand" href="#home">
          YOGANK <b>SHARMA</b>
        </a>
        <div className={n ? "nav open" : "nav"}>
          {[
            "Home",
            "About",
            "Skills",
            "Experience",
            "Projects",
            "Education",
            "Certifications",
            "Contact",
          ].map((x) => (
            <a onClick={() => setN(false)} href={"#" + x.toLowerCase()} key={x}>
              {x}
            </a>
          ))}
        </div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Change theme"
        >
          {theme === "dark" ? "☀" : "◐"}
        </button>
        <button
          className="hamburger"
          onClick={() => setN(!n)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
function Hero() {
  return (
    <section id="home" className="hero">
      <div>
        <p className="available">
          ● Open to Software Development Opportunities
        </p>
        <p className="kicker">PORTFOLIO / 2026</p>
        <h1>
          Aspiring <em>Software Developer.</em>
        </h1>
        <p className="intro">
          B.Tech CSE student building reliable web applications with Java,
          Spring Boot, React.js, REST APIs and SQL.
        </p>
        <p>
          <a className="button" href="#projects">
            View Projects ↓
          </a>
          <a className="button ghost" href="#contact">
            Resume options
          </a>
        </p>
        <div className="social">
          <X href={links.github}>GitHub</X>
          <X href={links.linkedin}>LinkedIn</X>
          <X href={links.leetcode}>LeetCode</X>
        </div>
      </div>
      <div className="photo">
        <img src={pic} alt="Yogank Sharma" />
          <span>
            LeetCode
            <br />
            130+ problems solved
          </span>
      </div>
    </section>
  );
}
function About() {
  return (
    <Section
      id="about"
      kicker="01 / ABOUT"
      title="Grounded in fundamentals. Focused on useful software."
    >
      <div className="two">
        <p className="intro">
          I’m Yogank Sharma, a Computer Science student focused on turning
          programming fundamentals into useful web applications. I enjoy backend
          APIs, responsive interfaces and problem-solving.
        </p>
        <div className="facts">
          {[
            ["Education", "B.Tech CSE · 2023–2027"],
            ["Direction", "Software development"],
            ["Focus", "Web applications & APIs"],
            ["Problem solving", "130+ LeetCode problems"],
          ].map((x) => (
            <article>
              <small>{x[0]}</small>
              <b>{x[1]}</b>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
function Skills() {
  const [s, setS] = useState("All"),
    groups = [
      ...skills,
      [
        "CS Fundamentals",
        ["OOP", "DBMS", "Data Structures & Algorithms", "Operating Systems"],
      ],
    ];
  let g = s === "All" ? groups : groups.filter((x) => x[0] === s);
  return (
    <Section
      id="skills"
      kicker="02 / SKILLS"
      title="A practical development toolkit."
    >
      <div className="filters">
        {["All", ...groups.map((x) => x[0])].map((x) => (
          <button className={s === x ? "on" : ""} onClick={() => setS(x)}>
            {x}
          </button>
        ))}
      </div>
      <div className="skillgrid">
        {g.map(([n, v]) => (
          <article>
            <h3>{n}</h3>
            {v.map((t) => (
              <span>{t}</span>
            ))}
          </article>
        ))}
      </div>
    </Section>
  );
}
function Experience() {
  return (
    <Section
      id="experience"
      kicker="03 / EXPERIENCE"
      title="Learning in a real development environment."
    >
      <article className="timeline">
        <p className="kicker">FULL STACK DEVELOPER INTERN</p>
        <h3>
          TalentXMind <small>· Remote</small>
        </h3>
        <time>June 2026 – August 2026</time>
        <ul>
          <li>
            Completed hands-on training and practical assignments in Java and
            Spring Boot.
          </li>
          <li>
            Applied OOP and DBMS concepts to REST API design and backend tasks.
          </li>
        </ul>
        <span>Java</span>
        <span>Spring Boot</span>
        <span>REST APIs</span>
      </article>
    </Section>
  );
}
function Projects() {
  const [f, setF] = useState("All"),
    [modal, setModal] = useState(null),
    fs = ["All", "Frontend", "Backend", "Full Stack", "Java", "React"];
  let list = projects.filter(
    (p) =>
      f === "All" ||
      (f === "Backend" && p.category === "Java / Backend") ||
      p.category === f ||
      p.technologies.some((t) => t.includes(f)),
  );
  return (
    <Section
      id="projects"
      kicker="04 / PROJECTS"
      title="Selected work, built hands-on."
    >
      <div className="filters">
        {fs.map((x) => (
          <button className={f === x ? "on" : ""} onClick={() => setF(x)}>
            {x}
          </button>
        ))}
      </div>
      <div className="projectgrid">
        {list.map((p, i) => (
          <article className="project">
            <div className={"preview p" + i}>
              <b>0{i + 1}</b>
              <small>{p.category}</small>
            </div>
            <h3>{p.title}</h3>
            <p className="accent">{p.subtitle}</p>
            <p>{p.description}</p>
            {p.technologies.map((t) => (
              <span>{t}</span>
            ))}
            <p>
              <button onClick={() => setModal(p)}>View details →</button>
              {p.github && <X href={p.github}>GitHub</X>}
              {p.live && <X href={p.live}>Live demo</X>}
            </p>
          </article>
        ))}
      </div>
      {modal && (
        <div className="backdrop" onMouseDown={() => setModal(null)}>
          <article
            className="modal"
            role="dialog"
            aria-modal="true"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button onClick={() => setModal(null)}>×</button>
            <p className="kicker">{modal.category}</p>
            <h2>{modal.title}</h2>
            <p>{modal.description}</p>
            <h3>Features</h3>
            <ul>
              {modal.features.map((x) => (
                <li>{x}</li>
              ))}
            </ul>
            <h3>Technologies</h3>
            {modal.technologies.map((x) => (
              <span>{x}</span>
            ))}
            <p>
              {modal.github && <X href={modal.github}>GitHub</X>}
              {modal.live && <X href={modal.live}>Live demo</X>}
            </p>
          </article>
        </div>
      )}
    </Section>
  );
}
function Education() {
  let e = [
    [
      "2023–2027",
      "B.Tech Computer Science & Engineering",
      "IIMT College of Engineering, Greater Noida",
      "CGPA: 7.67/10",
    ],
    [
      "2022",
      "Class XII",
      "L.P.S.V.M. Inter College, Bamhanpur, Lakhimpur Kheri · UP Board",
      "71%",
    ],
    [
      "2020",
      "Class X",
      "Mewalal Ramdulari Saraswati Vidya Mandir Inter College, Majhgain, Lakhimpur Kheri · UP Board",
      "79%",
    ],
  ];
  return (
    <Section
      id="education"
      kicker="05 / EDUCATION"
      title="Academic foundation."
    >
      <div className="education">
        {e.map((x) => (
          <article>
            <time>{x[0]}</time>
            <div>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </div>
            <b>{x[3]}</b>
          </article>
        ))}
      </div>
    </Section>
  );
}
function Certs() {
  return (
    <Section
      id="certifications"
      kicker="06 / CERTIFICATIONS"
      title="Continued learning."
    >
      <div className="certs">
        {certifications.map((c) => (
          <X href={c.file}>
            <p>{c.organization}</p>
            <h3>{c.name}</h3>
            <small>Completed {c.date}</small>
          </X>
        ))}
      </div>
    </Section>
  );
}
function Contact() {
  const [c, setC] = useState(false),
    submit = (e) => {
      e.preventDefault();
      let f = new FormData(e.currentTarget);
      location.href = `mailto:yogank2005@gmail.com?subject=${encodeURIComponent(f.get("subject"))}&body=${encodeURIComponent(f.get("message"))}`;
    };
  return (
    <Section
      id="contact"
      kicker="07 / CONTACT"
      title="Let’s build something together."
    >
      <div className="two">
        <div className="intro">
          <p>
            Open to opportunities where I can contribute, learn and grow as a
            Software Developer.
          </p>
          <p>
            <X href={links.email}>yogank2005@gmail.com</X>{" "}
            <button
              onClick={() => {
                navigator.clipboard.writeText("yogank2005@gmail.com");
                setC(true);
              }}
            >
              {c ? "Copied!" : "Copy email"}
            </button>
          </p>
          <p>
            <a href={links.phone}>+91 9565387743</a>
          </p>
          <X href={links.linkedin}>LinkedIn</X> ·{" "}
          <X href={links.github}>GitHub</X>
          <p>
            <small>
              Resume available on request—email for the latest copy.
            </small>
          </p>
        </div>
        <form onSubmit={submit}>
          <label>
            Name
            <input required name="name" />
          </label>
          <label>
            Email
            <input required type="email" name="email" />
          </label>
          <label>
            Subject
            <input required name="subject" />
          </label>
          <label>
            Message
            <textarea required name="message" rows="4" />
          </label>
          <button className="button">Send via email →</button>
          <small>
            Opens your email app; no messages are sent automatically.
          </small>
        </form>
      </div>
    </Section>
  );
}
function Palette({ show, setShow }) {
  if (!show) return null;
  let cmds = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Certifications",
    "Contact",
  ];
  return (
    <div className="backdrop" onClick={() => setShow(false)}>
      <div className="palette" onClick={(e) => e.stopPropagation()}>
        <input autoFocus placeholder="Search commands…" />
        {cmds.map((x) => (
          <button
            onClick={() => {
              document
                .querySelector("#" + x.toLowerCase())
                .scrollIntoView({ behavior: "smooth" });
              setShow(false);
            }}
          >
            Go to {x}
            <b>↵</b>
          </button>
        ))}
      </div>
    </div>
  );
}
export default function App() {
  const [theme, setTheme] = useState(localStorage.theme || "dark"),
    [show, setShow] = useState(false),
    [top, setTop] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.theme = theme;
  }, [theme]);
  useEffect(() => {
    let k = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
          e.preventDefault();
          setShow(true);
        }
        if (e.key === "Escape") setShow(false);
      },
      s = () => setTop(scrollY > 500);
    addEventListener("keydown", k);
    addEventListener("scroll", s);
    return () => {
      removeEventListener("keydown", k);
      removeEventListener("scroll", s);
    };
  }, []);
  return (
    <>
      <Nav theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certs />
        <Contact />
      </main>
      <button
        className={"top " + (top ? "show" : "")}
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
      <Palette show={show} setShow={setShow} />
      <footer>
        © {new Date().getFullYear()} Yogank Sharma ·{" "}
        <X href={links.github}>GitHub</X>
      </footer>
    </>
  );
}
