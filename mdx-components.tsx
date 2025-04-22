import type { MDXComponents } from 'mdx/types'
import { ImageZoom } from './components/ui/image-zoom'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ImageZoom: ({
      src,
      alt,
      caption,
      width = 800,
      height = 600,
    }: {
      src: string
      alt: string
      caption: string
      width?: number
      height?: number
    }) => {
      return (
        <figure>
          <ImageZoom src={src} alt={alt} width={width} height={height} />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    ProjectDetail: ({
      title,
      description,
      link,
    }: {
      title: string
      description: string
      link?: string
    }) => {
      return (
        <div className="my-4 flex">
          <span className="text-lg text-zinc-900 dark:text-zinc-100">
            {title}
          </span>
          <div className="mx-4 mt-[16px] h-[1px] flex-grow bg-zinc-400/30" />
          <span
            className={`${link ? '' : 'text-overline mt-[8px]'} max-w-64 text-right`}
          >
            {link ? <a href={link}>{description}</a> : description}
          </span>
        </div>
      )
    },
    TwoColumnImage: ({
      src,
      title,
      description,
      width = 800,
      height = 600,
      side = 'left',
    }: {
      src: string
      title: string
      description: string
      width?: number
      height?: number
      side?: 'left' | 'right'
    }) => {
      return (
        <div
          className={`flex items-center text-center md:my-4 md:items-start md:justify-between md:gap-6 md:text-left ${side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
        >
          <Image
            src={src}
            alt={description}
            width={width}
            height={height}
            className="w-1/2 rounded-xl border-zinc-400/30 md:rounded-[40px] md:border-2"
          />
          <div className="mb-8 flex flex-col md:mt-32">
            <span className="text-lg font-bold">{title}</span>
            <span className="">{description}</span>
          </div>
        </div>
      )
    },
  }
}
