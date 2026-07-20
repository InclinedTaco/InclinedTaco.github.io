export const projects = [
  {
    index: '01',
    title: 'General loco-manipulation',
    context: 'MARMoT Lab · NUS',
    period: '2025 — now',
    description:
      'Developing whole-body policies that let humanoids move through a scene and manipulate objects as one continuous skill.',
    tags: ['Imitation learning', 'Reinforcement learning', 'IsaacLab', 'MuJoCo'],
    visual: 'locomotion',
  },
  {
    index: '02',
    title: 'Residual dynamics prediction',
    context: 'DACAS Lab · IISc',
    period: '2025',
    description:
      'Built conditional diffusion models to predict multi-step uncertainty in quadrotor residual dynamics, with a focus on data efficiency and inference latency.',
    tags: ['Diffusion models', 'Dynamics', 'PyTorch', 'Quadrotors'],
    visual: 'diffusion',
  },
  {
    index: '03',
    title: 'EdVisor',
    context: 'Assistive robotics',
    period: '2024 — 2025',
    description:
      'A gesture-driven reading device that combines edge hardware, vision, and small language models to make textbook content easier to access.',
    tags: ['Computer vision', 'Edge AI', 'Jetson Nano', 'Raspberry Pi'],
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

export const milestones = [
  {
    date: 'Jan 2026',
    text: 'Began a funded on-site research term at MARMoT Lab, NUS.',
  },
  {
    date: 'May 2025',
    text: 'Joined MARMoT Lab and DACAS Lab as a research intern.',
  },
  {
    date: 'Jan 2024',
    text: 'Won first place at SANGAM for an AR surgical-training prototype.',
  },
] as const
