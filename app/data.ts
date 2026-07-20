export const projects = [
  {
    index: '01',
    title: 'Motion generation for humanoid loco-manipulation',
    context: 'MARMoT Lab · NUS',
    period: '2025 — now',
    description:
      'Developed a flow-based motion generator for humanoid loco-manipulation. The generated motions serve as references for a downstream reinforcement-learning tracker fine-tuned with loco-manipulation rewards.',
    visual: 'locomotion',
  },
  {
    index: '02',
    title: 'Residual dynamics prediction',
    context: 'DACAS Lab · IISc',
    period: '2025',
    description:
      'Built conditional diffusion models to predict multi-step uncertainty in quadrotor residual dynamics, with a focus on data efficiency and inference latency.',
    visual: 'diffusion',
  },
  {
    index: '03',
    title: 'EdVisor',
    context: 'Assistive robotics',
    period: '2024 — 2025',
    description:
      'A gesture-driven reading device that combines edge hardware, vision, and small language models to make textbook content easier to access.',
    visual: 'vision',
  },
] as const

export const experience = [
  {
    role: 'Undergraduate Researcher',
    organisation: 'MARMoT Laboratory, National University of Singapore',
    range: 'May 2025 — Present',
    href: 'https://marmotlab.org/',
  },
  {
    role: 'Quadrotor Research Intern',
    organisation: 'DACAS Laboratory, Indian Institute of Science',
    range: 'May — Jul 2025',
    href: 'https://github.com/DACASLab',
  },
  {
    role: 'Embedded Systems Intern',
    organisation: 'Thryv Mobility, IIT Madras',
    range: 'Jun — Jul 2024',
    href: 'https://www.thryvmobility.com/',
  },
] as const

export const news = [
  {
    year: '2026',
    month: 'Jan',
    showYear: true,
    text: 'Moved on-site to MARMoT Laboratory, NUS as a Research Intern.',
  },
  {
    year: '2025',
    month: 'May',
    showYear: true,
    text: 'Started remotely as a Research Intern at MARMoT Laboratory, NUS.',
  },
  {
    year: '2025',
    month: 'May',
    showYear: false,
    text: 'Joined DACAS Laboratory at IISc as a Quadrotor Research Intern.',
  },
  {
    year: '2024',
    month: 'Jun',
    showYear: true,
    text: 'Worked at Thryv Mobility as an Embedded Systems Intern.',
  },
] as const
