# Decision: an integration

Whether the site connects to another service, and to which. Its reader comes later, with one question: can I change this, and what happens if I do?

## The question

- **The question:** Do we show a map of where to find the library on the Contact page, and from which service?
- **The need or requirement behind it:** A user who reserves a meeting room needs to find the building. The map serves that need; it is not one of requirements R1 to R9.

## Options considered

| Option | What it would give | What it would cost |
| --- | --- | --- |
| No integration | The place as text on the Contact page: nothing is sent to anyone. | A user must look up the way in another app. |
| A map from OpenStreetMap | A map with a marker on the Contact page, with no account and no key. | The service receives each user's internet address when the map loads, and the page depends on it. |
| E-mail confirmations (Resend) | A confirmation e-mail after a reservation. | An account and a key, and each user's name and e-mail address would go to the service. More work than a map. |

## The decision

- **We chose:** A map from OpenStreetMap on the Contact page.
- **What we installed, and where its settings are:** Not installed yet. It is one frame in src/app/(site)/contact/page.tsx, from recipe R11 in docs/guides/recipes.md. It is made in a pull request by Achiel.
- **How we checked that it does what we expected:** Not installed yet.
- **Who took part in the decision:** Lennert proposed it, with an AI assistant looking up the facts below. The whole team (Lennert, Achiel, Jean, Martijn, Mauro and Barre) agreed on 27 November 2026.

## Why

- **Why we chose it:** (1) It needs no account and no key, so nobody has to manage a secret. (2) Recipe R11 in docs/guides/recipes.md gives the exact code and says it was run on a fresh starter. (3) OpenStreetMap's tile usage policy asks for visible attribution and warns about heavy use, and our contact page is small.
- **What this evidence cannot tell us:** The policy page does not mention the frame embed that openstreetmap.org offers, so it does not say whether that embed is covered. It also cannot tell us whether the embed sets cookies; we check that on the live page once it is installed.

## Consequences

- **The accounts it needs, and its cost in money and in time:** No account and no cost. About fifteen minutes.
- **Who maintains it:** Achiel.
- **What we give up:** The map shows an invented place (the centre of Ghent), because Boekenbrug is a fictional library.
- **How we could leave the service later:** Delete the frame and the link under it from the Contact page.
- **The personal data that leaves our site, and whether it needs a cookie banner:** openstreetmap.org receives each user's internet address when the map loads. We write that on the privacy page. We have not yet checked whether the frame sets cookies.
- **What happens to our site when the service is down:** The frame stays empty; the place and the e-mail address are still shown as text.

## Facts read on

| Page | Its link | Read on |
| --- | --- | --- |
| OpenStreetMap Tile Usage Policy | https://operations.osmfoundation.org/policies/tiles/ | 27 November 2026 |
| Our recipe R11 (OpenStreetMap on the contact page) | docs/guides/recipes.md in this repository | 27 November 2026 |

## Review when

When the library gets a real address, or when the map stops loading on the live site.
