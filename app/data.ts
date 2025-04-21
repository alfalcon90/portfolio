type Project = {
  name: string
  description: string
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
    link: '/project/tinytown',
    id: 'tinytown',
  },
  {
    name: 'Gmail',
    description: 'Email from Google.',
    link: '/projects/gmail',
    id: 'gmail',
  },
  {
    name: 'TaxCredit.ai',
    description: 'AI for R&D Tax Credits.',
    link: '/projects/taxcredit',
    id: 'taxcredit',
  },
  {
    name: 'Quilt',
    description: 'Next-generation heat pump.',
    link: '/projects/quilt',
    id: 'quilt',
  },
  {
    name: 'Google Keep',
    description: 'Digital notes, accessible from anywhere.',
    link: '/projects/google-keep',
    id: 'google-keep',
  },
  {
    name: 'Nest',
    description: 'Thoughtful home products.',
    link: '/projects/nest',
    id: 'nest',
  },
  {
    name: 'Passpaw',
    description: 'Painless pet travel compliance.',
    link: '/projects/passpaw',
    id: 'passpaw',
  },
  {
    name: 'SpeechBubbles',
    description: 'Acceptance-first speech therapy.',
    link: '/projects/speechbubbles',
    id: 'speechbubbles',
  },
  {
    name: 'Crescendo',
    description: 'Performance consulting. ',
    link: '/projects/crescendo',
    id: 'crescendo',
  },
  {
    name: 'Zagaran',
    description: 'Software development experts.',
    link: '/projects/zagaran',
    id: 'zagaran',
  },
  {
    name: 'Revolv',
    description: 'Smart home awesomation.',
    link: '/projects/revolv',
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
