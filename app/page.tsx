'use client'

import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { experience, milestones, projects } from './data'
import { ProjectVisual } from './project-visual'
import { ThemeToggle } from './theme-toggle'

const reveal = {
  hidden: { opacity: 0, y: 18, filter: 'blur(7px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

function ExternalLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="pill-link">
      {children}
      <ArrowUpRight size={13} strokeWidth={1.8} aria-hidden="true" />
    </a>
  )
}

export default function Home() {
  const reduceMotion = useReducedMotion()

  return (
    <main className="site-shell">
      <motion.header
        className="site-header"
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
        variants={reveal}
        transition={{ duration: 0.45 }}
      >
        <a href="#top" className="identity" aria-label="Back to top">
          <img src="/portrait.jpg" alt="Shyam Charan" />
          <span>
            <strong>Shyam Charan</strong>
            <small>Robotics researcher</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="/shyamcharanCV.pdf" target="_blank">
            CV
          </a>
        </nav>
      </motion.header>

      <motion.section
        id="top"
        className="hero"
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
        variants={reveal}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        <div className="status-line">
          <span className="status-dot" />
          Research intern at MARMoT Lab · NUS
        </div>
        <h1>
          Learning systems for robots that <em>move, manipulate,</em> and
          collaborate.
        </h1>
        <p className="hero-copy">
          I work at the intersection of robot learning and whole-body control,
          building general-purpose humanoids that can perform complex tasks in
          real environments.
        </p>
        <div className="hero-links">
          <ExternalLink href="mailto:shyamcharan.nitt@gmail.com">
            <Mail size={14} aria-hidden="true" /> Email
          </ExternalLink>
          <ExternalLink href="https://github.com/inclinedtaco">
            <Github size={14} aria-hidden="true" /> GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/shyamcharan/">
            <Linkedin size={14} aria-hidden="true" /> LinkedIn
          </ExternalLink>
        </div>
      </motion.section>

      <section id="work" className="section-block">
        <div className="section-heading">
          <div>
            <span>Selected work</span>
            <h2>Research &amp; systems</h2>
          </div>
          <p>Ideas moving from simulation toward the physical world.</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card project-${index + 1}`}
              key={project.title}
              initial={reduceMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={reveal}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <ProjectVisual variant={project.visual} />
              <div className="project-body">
                <div className="project-meta">
                  <span>{project.index}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-context">{project.context}</p>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} tools`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-block">
        <div className="section-heading compact">
          <div>
            <span>Experience</span>
            <h2>Where I&apos;ve worked</h2>
          </div>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="experience-row"
              key={item.organisation}
            >
              <span>
                <strong>{item.role}</strong>
                <small>{item.organisation}</small>
              </span>
              <span className="experience-date">{item.range}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="split-section section-block">
        <div>
          <div className="section-heading compact">
            <div>
              <span>Now</span>
              <h2>Current questions</h2>
            </div>
          </div>
          <ul className="question-list">
            <li>How can one policy connect locomotion and manipulation?</li>
            <li>What makes humanoid skills transfer reliably across simulators?</li>
            <li>How should multiple humanoids coordinate around shared objects?</li>
          </ul>
        </div>
        <div>
          <div className="section-heading compact">
            <div>
              <span>Milestones</span>
              <h2>Along the way</h2>
            </div>
          </div>
          <ol className="timeline">
            {milestones.map((milestone) => (
              <li key={milestone.date}>
                <time>{milestone.date}</time>
                <p>{milestone.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="closing-card">
        <span className="closing-kicker">Let&apos;s build what moves next.</span>
        <h2>Interested in robot learning, humanoids, or embodied AI?</h2>
        <p>I&apos;m always happy to talk research, systems, and ambitious robots.</p>
        <div className="closing-actions">
          <a href="mailto:shyamcharan.nitt@gmail.com" className="primary-button">
            Start a conversation <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a href="/shyamcharanCV.pdf" target="_blank" className="text-button">
            <FileText size={15} aria-hidden="true" /> View CV
          </a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Shyam Charan Kesavamoorthi</span>
        <span>Singapore · India</span>
        <ThemeToggle />
      </footer>
    </main>
  )
}
