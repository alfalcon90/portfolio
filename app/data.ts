type Project = {
  name: string
  description: string
  image: string
  link: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Tinytown',
    description: 'Hyperlocal chat app for neighbors.',
    image: '/projects/tinytown/cover.svg',
    link: '/project/tinytown',
    id: 'tinytown',
  },
  {
    name: 'Gmail',
    description: 'Email from Google.',
    image: '/projects/gmail/cover.svg',
    link: '/project/gmail',
    id: 'gmail',
  },
  {
    name: 'TaxCredit.ai',
    description: 'AI for R&D Tax Credits.',
    image: '/projects/taxcredit/cover.svg',
    link: '/project/taxcredit',
    id: 'taxcredit',
  },
  {
    name: 'Quilt',
    description: 'Next-generation heat pump.',
    image: '/projects/quilt/cover.svg',
    link: '/project/quilt',
    id: 'quilt',
  },
  {
    name: 'Google Keep',
    description: 'Digital notes, accessible from anywhere.',
    image: '/projects/keep/cover.svg',
    link: '/project/keep',
    id: 'keep',
  },
  {
    name: 'Nest',
    description: 'Thoughtful home products.',
    image: '/projects/nest/cover.svg',
    link: '/project/nest',
    id: 'nest',
  },
  {
    name: 'Passpaw',
    description: 'Painless pet travel compliance.',
    image: '/projects/passpaw/cover.svg',
    link: '/project/passpaw',
    id: 'passpaw',
  },
  {
    name: 'SpeechBubbles',
    description: 'Acceptance-first speech therapy.',
    image: '/projects/speechbubbles/cover.svg',
    link: '/project/speechbubbles',
    id: 'speechbubbles',
  },
  {
    name: 'Crescendo',
    description: 'Performance consulting. ',
    image: '/projects/crescendo/cover.svg',
    link: '/project/crescendo',
    id: 'crescendo',
  },
  {
    name: 'Zagaran',
    description: 'Software development experts.',
    image: '/projects/zagaran/cover.svg',
    link: '/project/zagaran',
    id: 'zagaran',
  },
  {
    name: 'Revolv',
    description: 'Smart home awesomation.',
    image: '/projects/revolv/cover.svg',
    link: '/project/revolv',
    id: 'revolv',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'UX Designer + Engineer',
    start: '2020',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'Google',
    title: 'Senior UX Designer',
    start: '2016',
    end: '2020',
    id: 'work2',
  },
  {
    company: 'Nest',
    title: 'UX Designer',
    start: '2014',
    end: '2016',
    id: 'work3',
  },
  {
    company: 'Revolv',
    title: 'UX Designer',
    start: '2013',
    end: '2014',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'title',
    description: 'description',
    link: '/blog/blog-1',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/alfalcon90',
  },
  {
    label: 'Bluesky',
    link: 'https://bsky.app/profile/bembot.bsky.social',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/alberto-vildosola-1257a949/',
  },
]

export const EMAIL = 'hello@alberto.page'
