import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { LatestNewsBlock as LatestNewsBlockProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { formatDateTime } from '@/utilities/formatDateTime'

export const LatestNewsBlock: React.FC<LatestNewsBlockProps> = async ({ title, button }) => {
  const payload = await getPayload({ config: configPromise })
  const { docs: posts } = await payload.find({
    collection: 'posts',
    limit: 2,
    sort: '-publishedAt',
  })

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {posts.map(post => (
            <div
              key={post.id}
              className="relative group overflow-hidden cursor-pointer rounded-sm shadow-md"
            >
              {typeof post.meta.image === 'object' && (
                <Media
                  resource={post.meta.image}
                  className="w-full h-80 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              )}
              <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white text-xs font-semibold px-2.5 py-1.5 rounded-sm z-10">
                {formatDateTime(post.publishedAt)}
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="p-6 text-white transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                  <h3 className="text-xl font-bold uppercase leading-tight">{post.title}</h3>
                </div>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <h3 className="text-xl font-bold uppercase leading-tight">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{post.meta.description}</p>
              </div>
            </div>
          ))}
        </div>
        {button?.enable && button.link && (
          <CMSLink
            {...button.link}
            className="mt-10 bg-primary-blue text-white font-bold py-3 px-10 hover:bg-primary-red transition-colors duration-300 rounded-sm"
          />
        )}
      </div>
    </section>
  )
}
