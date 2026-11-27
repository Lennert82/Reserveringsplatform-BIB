// The Contact page. This folder wins over [slug] for /contact, so this file shows it.
// It is the Contact record from the Pages collection, shown like every plain page, plus the e-mail
// address and the place from the Site facts global: both are kept once, in /admin, and change here
// (and on the workshop pages) the moment an editor saves them.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { PlainPage } from '@/components/site/PlainPage'
import { findPage, pageMetadata } from '@/lib/pages'
import config from '@/payload.config'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await findPage('contact'))
}

export default async function ContactPage() {
  const page = await findPage('contact')
  if (!page) notFound()
  const payload = await getPayload({ config })
  const facts = await payload.findGlobal({ slug: 'site-facts', depth: 0 })

  return (
    <PlainPage page={page}>
      {/* A short list of labelled facts: each label says what the value is. The global's fields are
          all required, so it is either complete or, on a site started without the example content,
          never saved and empty: then the list is left out.
          On a phone each label sits above its value, so a long e-mail address never pushes the page
          sideways; minmax(0,1fr) and overflow-wrap let a very long one wrap instead. */}
      {facts.email && facts.place && (
        <dl className="grid max-w-(--container-reading) grid-cols-1 gap-x-6 text-lg sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-y-2">
          <dt className="font-bold whitespace-nowrap">E-mail</dt>
          <dd className="min-w-0 [overflow-wrap:anywhere]">
            <a href={`mailto:${facts.email}`}>{facts.email}</a>
          </dd>
          <dt className="mt-3 font-bold whitespace-nowrap sm:mt-0">Place</dt>
          <dd className="min-w-0 [overflow-wrap:anywhere]">{facts.place}</dd>
        </dl>
      )}
        {/* The map: OpenStreetMap's own embed. The title says what the frame shows; the link below opens the same map for people who cannot use the frame. */}
      <iframe
        title="Map: where to find us"
        src="https://www.openstreetmap.org/export/embed.html?bbox=3.7150%2C51.0515%2C3.7275%2C51.0570&layer=mapnik&marker=51.0543%2C3.7212"
        loading="lazy"
        className="h-80 w-full max-w-(--container-reading) rounded-frame border border-line"
      />
      <p>
        <a href="https://www.openstreetmap.org/?mlat=51.0543&mlon=3.7212#map=17/51.0543/3.7212">Open the map on its own page</a>
      </p>

    </PlainPage>
  )
}
