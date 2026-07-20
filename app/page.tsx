'use client'

import {
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { experience, news, projects, publications } from './data'
import { ProjectVisual } from './project-visual'
import { ThemeToggle } from './theme-toggle'

const sectionIds = ['about', 'news', 'work', 'publications', 'projects'] as const

const reveal = {
  hidden: { opacity: 0, y: 14, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const emailUser = 'shyamcharan.nitt'
const scrambleCharacters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const englishName = 'Shyam Charan Kesavamoorthi'
const tamilName = 'ஷ்யாம் சரண் கேசவமூர்த்தி'
// Ka Kavithai is a legacy Tamil font whose glyphs are mapped to Latin codepoints.
const tamilNameKa = 'xVôm NWi úLNYêoj§'
const nameScrambleCharacters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function splitGraphemes(value: string) {
  const segmenter = new Intl.Segmenter('ta', { granularity: 'grapheme' })
  return Array.from(segmenter.segment(value), ({ segment }) => segment)
}

function randomNameCharacter() {
  return nameScrambleCharacters.charAt(
    Math.floor(Math.random() * nameScrambleCharacters.length),
  )
}

function NameScrambler() {
  const [displayName, setDisplayName] = useState(englishName)
  const [targetIsTamil, setTargetIsTamil] = useState(false)
  const intervalRef = useRef<number | null>(null)
  const leaveTimeoutRef = useRef<number | null>(null)
  const pointerInsideRef = useRef(false)
  const focusInsideRef = useRef(false)
  const targetRef = useRef<'english' | 'tamil'>('english')
  const reduceMotion = useReducedMotion()

  const scrambleTo = (target: string, isTamil: boolean) => {
    const nextTarget = isTamil ? 'tamil' : 'english'
    if (targetRef.current === nextTarget) return
    targetRef.current = nextTarget

    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current)
    }

    const targetCharacters = splitGraphemes(target)

    if (reduceMotion) {
      setTargetIsTamil(isTamil)
      setDisplayName(target)
      return
    }

    setDisplayName(
      targetCharacters
        .map((character) => character === ' ' ? ' ' : randomNameCharacter())
        .join(''),
    )
    setTargetIsTamil(isTamil)

    const totalFrames = Math.max(targetCharacters.length, 16)
    let frame = 0

    intervalRef.current = window.setInterval(() => {
      frame += 1
      const revealedCharacters = Math.floor(
        (frame / totalFrames) * targetCharacters.length,
      )

      setDisplayName(
        targetCharacters
          .map((character, index) => {
            if (character === ' ') return ' '
            return index < revealedCharacters ? character : randomNameCharacter()
          })
          .join(''),
      )

      if (frame >= totalFrames) {
        window.clearInterval(intervalRef.current ?? undefined)
        intervalRef.current = null
        setDisplayName(target)
      }
    }, 32)
  }

  const clearLeaveTimeout = () => {
    if (leaveTimeoutRef.current !== null) {
      window.clearTimeout(leaveTimeoutRef.current)
      leaveTimeoutRef.current = null
    }
  }

  const showTamil = () => {
    clearLeaveTimeout()
    scrambleTo(tamilNameKa, true)
  }

  const queueEnglish = () => {
    clearLeaveTimeout()
    leaveTimeoutRef.current = window.setTimeout(() => {
      leaveTimeoutRef.current = null
      if (!pointerInsideRef.current && !focusInsideRef.current) {
        scrambleTo(englishName, false)
      }
    }, 90)
  }

  useEffect(
    () => () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
      }
      if (leaveTimeoutRef.current !== null) {
        window.clearTimeout(leaveTimeoutRef.current)
      }
    },
    [],
  )

  return (
    <h1
      className={`name-scrambler${targetIsTamil ? ' tamil-active' : ''}`}
      tabIndex={0}
      lang={targetIsTamil ? 'ta' : 'en'}
      aria-label={targetIsTamil ? tamilName : englishName}
      onMouseEnter={() => {
        pointerInsideRef.current = true
        showTamil()
      }}
      onMouseLeave={() => {
        pointerInsideRef.current = false
        queueEnglish()
      }}
      onFocus={() => {
        focusInsideRef.current = true
        showTamil()
      }}
      onBlur={() => {
        focusInsideRef.current = false
        queueEnglish()
      }}
    >
      <span className="name-width-anchor" aria-hidden="true">{englishName}</span>
      <span className="name-visible" aria-hidden="true">
        <span className="name-output">{displayName}</span>
        <span className="pixel-cursor" />
      </span>
    </h1>
  )
}

function randomCharacters(length: number) {
  return Array.from({ length }, () =>
    scrambleCharacters.charAt(
      Math.floor(Math.random() * scrambleCharacters.length),
    ),
  ).join('')
}

function EmailScrambler() {
  const [isScrambled, setIsScrambled] = useState(true)
  const [displayUsername, setDisplayUsername] = useState(
    '•'.repeat(emailUser.length),
  )

  useEffect(() => {
    if (isScrambled) {
      setDisplayUsername(randomCharacters(emailUser.length))
      return
    }

    let revealedCharacters = 0
    const interval = window.setInterval(() => {
      revealedCharacters += 1
      setDisplayUsername(
        emailUser.slice(0, revealedCharacters) +
          randomCharacters(emailUser.length - revealedCharacters),
      )

      if (revealedCharacters >= emailUser.length) {
        window.clearInterval(interval)
      }
    }, 50)

    return () => window.clearInterval(interval)
  }, [isScrambled])

  return (
    <div className="email-block">
      <button
        type="button"
        aria-label={isScrambled ? 'Unscramble email address' : 'Scramble email address'}
        onClick={() => setIsScrambled((value) => !value)}
      >
        {displayUsername}<span> [at] </span>gmail<span> [dot] </span>com
      </button>
      <small>{isScrambled ? '(click to unscramble)' : '\u00a0'}</small>
    </div>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
      {label}
    </a>
  )
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const updateActiveSection = () => {
      const position = window.scrollY + 150
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (
          section &&
          position >= section.offsetTop &&
          position < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    updateActiveSection()
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  const scrollTo = (id: string) => {
    const section = document.getElementById(id)
    if (section) window.scrollTo({ top: section.offsetTop - 82, behavior: 'smooth' })
  }

  return (
    <>
      <nav className="top-nav" aria-label="Primary navigation">
        <div className="nav-inner">
          <div className="nav-links">
            {sectionIds.map((id, index) => (
              <span key={id}>
                <button
                  type="button"
                  className={activeSection === id ? 'active' : ''}
                  onClick={() => scrollTo(id)}
                >
                  {id === 'about'
                    ? 'About'
                    : id === 'projects'
                      ? 'Projects'
                      : id[0].toUpperCase() + id.slice(1)}
                </button>
                {index < sectionIds.length - 1 && <i>/</i>}
              </span>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <motion.main
        className="academic-shell"
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.section
          id="about"
          className="about-section"
          variants={reveal}
          transition={{ duration: 0.35 }}
        >
          <img src="/portrait.jpg" alt="Portrait of Shyam Charan" />
          <div className="about-copy">
            <NameScrambler />
            <EmailScrambler />
            <p>
              I am currently a Research Intern at the{' '}
              <a href="https://marmotlab.org/" target="_blank" rel="noreferrer">
                MARMoT Laboratory
              </a>,{' '}
              <a href="https://www.nus.edu.sg/" target="_blank" rel="noreferrer">
                National University of Singapore
              </a>, advised by{' '}
              <a
                href="https://marmotlab.org/bio.html"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Guillaume Sartoretti
              </a>, where I work on humanoid whole-body loco-manipulation and
              long-horizon skill composition. I am broadly interested in
              structure-aware and data-efficient robot-learning methods that use
              strong inductive biases rather than relying on scale alone.
            </p>
            <p>
              I graduated from{' '}
              <a href="https://www.nitt.edu/" target="_blank" rel="noreferrer">
                NIT Tiruchirappalli
              </a>{' '}
              with a B.Tech in Instrumentation and Control Engineering.
              Previously, I was a Research Intern at the{' '}
              <a href="https://github.com/DACASLab" target="_blank" rel="noreferrer">
                DACAS Lab, IISc
              </a>, advised by{' '}
              <a
                href="https://mecheng.iisc.ac.in/project/jishnu-keshavan/"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Jishnu Keshavan
              </a>, where I worked on diffusion models for quadrotor residual
              dynamics. I have also worked at{' '}
              <a
                href="https://www.thryvmobility.com/"
                target="_blank"
                rel="noreferrer"
              >
                Thryv Mobility
              </a>{' '}
              on embedded systems and PCB design.
            </p>
            <p>
              My journey into robotics began at NIT Trichy’s{' '}
              <a href="https://rmi.nitt.edu/" target="_blank" rel="noreferrer">
                Robotics and Machine Intelligence club
              </a>, where I worked on my first robotics projects.
            </p>
          </div>
          <div className="clear" />
        </motion.section>

        <motion.div className="link-pills" variants={reveal} transition={{ duration: 0.35 }}>
          <SocialLink href="/shyamcharanCV.pdf" label="CV">
            <FileText aria-hidden="true" />
          </SocialLink>
          <SocialLink href="https://github.com/inclinedtaco" label="Github">
            <Github aria-hidden="true" />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/shyamcharan/"
            label="LinkedIn"
          >
            <Linkedin aria-hidden="true" />
          </SocialLink>
          <SocialLink href="https://x.com/thisizshyam" label="Twitter">
            <Twitter aria-hidden="true" />
          </SocialLink>
        </motion.div>

        <motion.section
          id="news"
          className="academic-section"
          variants={reveal}
          transition={{ duration: 0.35 }}
        >
          <h2>News</h2>
          <div className="news-list">
            {news.map((item, index) => (
              <div key={`${item.year}-${item.month}-${index}`}>
                {item.showYear && (
                  <div className="year-row">
                    <span>{item.year} ↓</span>
                    <i />
                  </div>
                )}
                <div className="news-row">
                  <time>{item.month}</time>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="work"
          className="academic-section"
          variants={reveal}
          transition={{ duration: 0.35 }}
        >
          <h2>Work</h2>
          <div className="experience-list">
            {experience.map((item) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={item.organisation}>
                <span>
                  <strong>{item.role}</strong>
                  <small>{item.organisation}</small>
                </span>
                <time>{item.range}</time>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="publications"
          className="academic-section"
          variants={reveal}
          transition={{ duration: 0.35 }}
        >
          <h2>Publications</h2>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication-row" key={publication.title}>
                <h3>{publication.title}</h3>
                <p className="publication-authors">
                  {publication.authors.map((author, index) => (
                    <span key={author}>
                      {author === 'Shyam Charan Kesavamoorthi' ? (
                        <strong>{author}</strong>
                      ) : (
                        author
                      )}
                      {index < publication.authors.length - 1 && ', '}
                    </span>
                  ))}
                </p>
                <p className="publication-meta">
                  {publication.venue} · {publication.year}
                </p>
                <div className="publication-links">
                  <a href={publication.paper} target="_blank" rel="noreferrer">
                    Paper <ArrowUpRight aria-hidden="true" />
                  </a>
                  <a href={publication.project} target="_blank" rel="noreferrer">
                    Project page <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="academic-section"
          variants={reveal}
          transition={{ duration: 0.35 }}
        >
          <h2>Projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <div className="project-thumb">
                  <ProjectVisual variant={project.visual} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-org">{project.context}</p>
                  <p>{project.description}</p>
                  <p className="project-period">
                    {project.period}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.blockquote
          className="interstellar-quote"
          variants={reveal}
          transition={{ duration: 0.35 }}
        >
          <p>“We are still pioneers. And we’ve barely begun.”</p>
          <cite>— Cooper, Interstellar</cite>
        </motion.blockquote>

        <footer>
          <a href="https://suddhu.github.io/" target="_blank" rel="noreferrer">
            Site design respectfully poached from Sudharshan Suresh
          </a>
          <span>© {new Date().getFullYear()} Shyam Charan Kesavamoorthi</span>
        </footer>
      </motion.main>
    </>
  )
}
