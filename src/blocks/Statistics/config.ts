import type { Block } from 'payload'

export const Statistics: Block = {
  slug: 'statistics',
  interfaceName: 'StatisticsBlock',
  fields: [
    {
      name: 'stats',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 3, // To match the 3-column layout
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Star', value: 'star' },
            { label: 'Document', value: 'document' },
            { label: 'People', value: 'people' },
          ],
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
