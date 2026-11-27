import type { CollectionConfig } from 'payload'
import { publicContent } from '../access'
import { checkUniqueSlug, preventDependentDeletion } from '../lib/modelIntegrity'
import { slug } from './fields'

// A subject an activity can cover, such as study skills or digital skills. Users filter the activities by topic.
export const Topics: CollectionConfig = {
  slug: 'topics',
  admin: {
    useAsTitle: 'name',
  },
  access: publicContent,
  hooks: {
    beforeChange: [checkUniqueSlug],
    beforeDelete: [
      preventDependentDeletion(
        'activities',
        'topics',
        'This topic is still used by activities (see its Activities list). Remove it from each activity, then delete the topic.',
      ),
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    slug,
    {
      name: 'description',
      type: 'textarea',
    },
    // The reverse side of the many-to-many: read from each activity's "topics". Nothing is stored twice.
    {
      name: 'activities',
      type: 'join',
      collection: 'activities',
      on: 'topics',
    },
  ],
}
