import React from 'react'
import type { StatisticsBlock as StatisticsBlockProps } from '@/payload-types'

const iconRegistry = {
  star: (
    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  document: (
    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    </svg>
  ),
  people: (
    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 14.5H3.5V22h2v-6h2.5l1.5-4.5L12 14l2.5-2.5L16 16h2.5v6h2z" />
    </svg>
  ),
}

export const StatisticsBlock: React.FC<StatisticsBlockProps> = ({ stats }) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-red-700 mb-2">
                {iconRegistry[stat.icon]}
              </div>
              <div className="text-4xl font-bold text-red-700 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
