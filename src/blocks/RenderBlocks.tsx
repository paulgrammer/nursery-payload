import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { DiscoverSchoolBlock } from '@/blocks/DiscoverSchool/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { LatestNewsBlock } from '@/blocks/LatestNews/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { SchoolLevelsBlock } from '@/blocks/SchoolLevels/Component'
import { StatisticsBlock } from '@/blocks/Statistics/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  discoverSchool: DiscoverSchoolBlock,
  formBlock: FormBlock,
  latestNews: LatestNewsBlock,
  mediaBlock: MediaBlock,
  schoolLevels: SchoolLevelsBlock,
  statistics: StatisticsBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
