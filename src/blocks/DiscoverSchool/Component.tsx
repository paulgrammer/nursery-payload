import React from 'react'
import type { DiscoverSchoolBlock as DiscoverSchoolBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'

export const DiscoverSchoolBlock: React.FC<DiscoverSchoolBlockProps> = ({
  title,
  text,
  image,
  button,
}) => {
  return (
    <section className="mx-auto px-4 md:py-16 bg-slate-50">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mt-1">{title}</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">{text}</p>
          {button?.enable && button.link && (
            <CMSLink
              {...button.link}
              className="mt-6 bg-primary-blue text-white font-bold py-3 px-10 hover:bg-red-700 transition-colors duration-300 rounded-sm"
            />
          )}
        </div>
        <div className="w-full md:w-1/2">
          {typeof image === 'object' && (
            <Media
              resource={image}
              className="w-full h-auto object-cover rounded-sm shadow-md"
            />
          )}
        </div>
      </div>
    </section>
  )
}
