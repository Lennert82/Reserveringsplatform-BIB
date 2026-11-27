import type { CollectionConfig } from 'payload'
import { publicContent } from '../access'
import { checkUniqueSlug, requireExistingRelation } from '../lib/modelIntegrity'
import { day, slug, startTime } from './fields'

// A weekly lecture, tutoring session, workshop or book club that users can find by topic.
export const Activities: CollectionConfig = {
  slug: 'activities',
  labels: { singular: 'Activity', plural: 'Activities' },
  admin: {
    useAsTitle: 'title',
  },
  access: publicContent,
  hooks: {
    beforeChange: [
      checkUniqueSlug,
      requireExistingRelation('topics', 'topics', 'A selected topic no longer exists. Choose the topics again.'),
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slug,
    {
      name: 'kind',
      type: 'select',
      required: true,
      options: [
        { label: 'Lecture', value: 'lecture' },
        { label: 'Tutoring', value: 'tutoring' },
        { label: 'Workshop', value: 'workshop' },
        { label: 'Book club', value: 'book-club' },
      ],
    },
    day,
    startTime,
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    // The many-to-many: an activity can cover several topics, and a topic can belong to several
    // activities. Stored only here.
    {
      name: 'topics',
      type: 'relationship',
      relationTo: 'topics',
      hasMany: true,
    },
  ],
}
