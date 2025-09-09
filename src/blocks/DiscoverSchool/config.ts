import type { Block } from 'payload'
import { link } from '@/fields/link'

export const DiscoverSchool: Block = {
  slug: 'discoverSchool',
  interfaceName: 'DiscoverSchoolBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
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
