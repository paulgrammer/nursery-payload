import React from 'react'
import type { SchoolLevelsBlock as SchoolLevelsBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { Gutter } from '@/components/Gutter'

export const SchoolLevelsBlock: React.FC<SchoolLevelsBlockProps> = ({ title, levels }) => {
  return (
    <Gutter>
      <section className="w-full py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-8">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {levels.map((level, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md bg-white"
              >
                {typeof level.image === 'object' && (
                  <Media resource={level.image} className="w-full h-48 object-cover rounded-md mb-4" />
                )}
                <h3 className="text-xl font-bold text-primary-blue mb-2">{level.title}</h3>
                <p className="text-gray-700 leading-relaxed">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Gutter>
  )
}
