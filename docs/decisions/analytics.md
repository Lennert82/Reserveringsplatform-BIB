# Decision: analytics

Whether the site measures how it is used, and with which tool. Its reader comes later, with one question: can I change this, and what happens if I do? The starter's analytics are off until NEXT_PUBLIC_ANALYTICS names a tool; see src/lib/analytics.ts.

## The question

- **The question:** Do we measure how the site is used, and with which tool?
- **The need or requirement behind it:** We want to know whether people who open a room's page go on to reserve it (R1 in docs/requirements.md), and whether the topic filter on the activities page is used (R3 and R4).

## Options considered

| Option | What it would give | What it would cost |
| --- | --- | --- |
| No analytics | Nothing to install, and nothing is collected. | We cannot see whether anyone reserves a room or uses the filter. |
| Vercel Web Analytics | Page views without third-party cookies and, if our plan allows it, the starter's two custom events (filter_used and booking_saved). | A monthly allowance of events, one environment variable and one switch in Vercel. |

## The decision

- **We chose:** Vercel Web Analytics.
- **What we installed, and where its settings are:** Not installed yet. It will be switched on with NEXT_PUBLIC_ANALYTICS=vercel in the project's environment variables in Vercel and with Enable on the project's Analytics tab (see src/lib/analytics.ts).
- **How we checked that it does what we expected:** Not installed yet.
- **Who took part in the decision:** Lennert proposed it, with an AI assistant looking up the facts below. The whole team (Lennert, Achiel, Jean, Martijn, Mauro and Barre) agreed on 27 November 2026.

## Why

- **Why we chose it:** (1) The site already runs on Vercel, so we need no second account. (2) The starter already sends the two key steps once NEXT_PUBLIC_ANALYTICS is set (src/lib/analytics.ts), so no code is needed. (3) Vercel's pages say that Hobby teams include 50,000 events per month, that it is free within the limits, and that visitors are counted without third-party cookies, by a hash of the request.
- **What this evidence cannot tell us:** How many events our site will have, which plan our Vercel team is on (we have not looked in the dashboard), and whether that plan records custom events as well as page views.

## Consequences

- **Its cost in money and in time:** Nothing if the team is on the Hobby plan and stays under 50,000 events a month, and about ten minutes to switch on.
- **Who maintains it:** Lennert, who looks after the releases.
- **What we give up:** On the Hobby plan, collection pauses when the monthly limit is reached (Vercel's pricing page), so we would see nothing for the rest of that month.
- **How we could leave the tool later:** Remove NEXT_PUBLIC_ANALYTICS from Vercel's environment variables and switch Analytics off on the project's Analytics tab.
- **The data it collects about our users, and whether it needs a cookie banner:** Vercel's privacy page lists, per data point: time, address of the page, referrer, geolocation, device system, browser and device type, with no personal identifiers. It says no third-party cookies are used. We have not asked a lawyer whether a banner is needed; our privacy page (in /admin) must say that the site counts visits, when we switch it on.

## Facts read on

| Page | Its link | Read on |
| --- | --- | --- |
| Pricing for Web Analytics | https://vercel.com/docs/analytics/limits-and-pricing | 27 November 2026 |
| Manage and optimize Observability usage (50,000 events on Hobby) | https://vercel.com/docs/manage-and-optimize-observability | 27 November 2026 |
| Privacy and Compliance (Web Analytics) | https://vercel.com/docs/analytics/privacy-policy | 27 November 2026 |

## Review when

When we switch it on and see the first numbers, when the monthly limit is reached, or when the privacy page of the site changes.
