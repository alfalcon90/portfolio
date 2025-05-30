'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { PROJECTS, WORK_EXPERIENCE, EMAIL, SOCIAL_LINKS } from './data'
import Image from 'next/image'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-50 px-2.5 py-1 text-sm transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-zinc-900"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p>Hi there!</p>

          <p>
            I'm Alberto, a UX Design Engineer and founder of{' '}
            <a href="https://about.tinytown.app">Tinytown</a> based in Seattle,
            WA.
          </p>
          <br />
          <p>
            I like software with a point of view — software that takes a stand,
            that isn't afraid to pick a side. Software that makes you feel
            things. Not like crying-in-the-shower things, but the good kind —
            like ‘wow, I’m part of something cool’ things.
          </p>
          <br />
          <p>
            I've worked with a variety of companies, from startups like{' '}
            <a href="https://www.quilt.com/">Quilt</a>, and{' '}
            <a href="https://home.nest.com/">Nest</a> to large companies like{' '}
            <a href="https://google.com">Google</a>, and have extensive
            experience in both design and engineering. I love to create products
            that are not only functional but also beautiful and enjoyable to
            use.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-title mb-5">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <a
              href={project.link}
              key={project.name}
              className="group relative space-y-2 text-center"
            >
              <div className="relative h-[160px] rounded-2xl p-1 ring-2 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50">
                <Image
                  src={project.image}
                  alt={project.name}
                  style={{ objectFit: 'none', height: '100%' }}
                  fill
                />
              </div>
              <div className="px-1">
                <div className="text-subtitle group relative inline-block">
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[2px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-white"></span>
                </div>
                <p className="text-base">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-title mb-5">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="text-zinc-900 dark:text-zinc-100">
                      {job.company}
                    </h4>
                    <p className="text-base">{job.title}</p>
                  </div>
                  <p className="text-overline">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-title mb-5">Connect</h3>
        <p className="mb-5">
          Feel free to contact me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
