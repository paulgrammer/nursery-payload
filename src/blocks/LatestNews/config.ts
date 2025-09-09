import type { Block } from 'payload'
import { link } from '@/fields/link'

export const LatestNews: Block = {
  slug: 'latestNews',
  interfaceName: 'LatestNewsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Section Title',
      defaultValue: 'Latest News',
    },
    {
      name: 'button',
      type: 'group',
      fields: [
        {
          name: 'enable',
          type: 'checkbox',
          label: 'Enable Button',
        },
        link({
          overrides: {
            admin: {
              condition: (_, siblingData) => siblingData?.enable,
            },
          },
        }),
      ],
    },
  ],
}
