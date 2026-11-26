# Project brief

The short description of your site: who it is for and what it does. Its reader has never seen your
site, so write what a stranger needs to understand it. Keep the brief
to one page; the details belong in `docs/requirements.md`.

Written by: Lennert, with the whole team.

## What the site is for

- **The promise:** Boekenbrug's website helps students and residents to reserve a meeting room in the library for a free hour and to find the lectures and tutoring sessions on a topic they care about, so that the library knows which rooms are taken and which activities people look for.
- **Who runs it:** Boekenbrug is a made-up city library. Its desk staff keep the rooms, the time slots and the activities up to date in the site's admin area.
- **What it offers:** Meeting rooms that can be reserved for fixed hourly time slots, and a list of lectures and tutoring sessions that can be filtered by topic and shared as a link.
- **Real or made up:** Made up. Boekenbrug is not a real library, and every name, e-mail address, room and reservation on the site is invented.

## Its users

| Kind of user | What they come to do | What they have when it is done |
| --- | --- | --- |
| A student or resident who wants to work with others | Reserve a meeting room for an hour | A reservation that is saved, with a confirmation that says so |
| A user who looks for a lecture or tutoring session | Find the activities on one topic and send the list to someone | A list of activities on that topic, and a link that shows the same list to the person who opens it |
| A member of the desk staff | Open the reservations in the admin area | The list of who reserved which room and hour, so that nobody is turned away from a taken room |

| Comparable site (its address) | Date we looked | One thing we learned from it |
| --- | --- | --- |
| https://student.uva.nl/onderwerpen/ruimtes-reserveren (University of Amsterdam, room reservations) | 26 November 2026 | A room is reserved for a limited time, here at most 4 hours and at most 2 reservations at once, and rooms can be filtered, for example by number of seats. We set a fixed one-hour time slot, so that one reservation is always easy to understand. |
| https://bibliotheekdenhaag.nl/activiteiten/activiteiten.34.html (The Hague public library, agenda) | 26 November 2026 | The agenda offers filters on library, age, type of activity and theme, and lists lectures next to clubs and classes. We keep one filter, topic, because our users have one question: what is there on this topic? |

| What we do not know yet | How and when we will find out |
| --- | --- |
| Whether one hour is long enough for a group that reserves a room | In the usability test, we ask the person who reserves a room whether one hour was enough, and write the answer in the test report. |
| Whether users look for an activity by topic first, or by date | In the same test, we watch which way the person goes when they look for a lecture, and write it in the test report. |

## The two tasks, ranked

1. **Task 1 (the primary task):** Reserve a meeting room for a free hour
   - **Type:** Transactional
   - **Outcome:** The reservation is saved for a room and an hour that were still free, and the user sees a confirmation that says it is saved.
   - **When it fails:** Students and residents have no room they can count on and may stand at a locked door, and the library does not know which rooms are taken.
2. **Task 2:** Find the lectures and tutoring sessions on one topic and share the list
   - **Type:** Informational
   - **Outcome:** The user sees every lecture and tutoring session on the chosen topic, and has a link that shows the same list to whoever opens it.
   - **When it fails:** A user does not learn what the library offers on a topic, but can still ask at the library desk.

**Why task 1 must work first:** A reservation is a promise to a person: when the site saves a room for an hour, nobody else may get it. If this fails, someone loses their group's meeting place, which a missing activity list never causes. It is also the only task where the site stores something about a user.

## Constraints

- Test data only: made-up names, e-mail addresses and bookings, never real personal data.
- No payments.
- Free plans only.
- Each room can be reserved for fixed one-hour time slots only, and one reservation takes one room for one hour.

## Not in this version

| Left out | Why | We look at it again when |
| --- | --- | --- |
| Signing up for a lecture or tutoring session | It would be a second reservation system with its own rules, and we keep two tasks. | The two tasks work on the live site and a user asks to reserve a place at an activity. |
| Cancelling a reservation | A cancel step needs a way to prove that the user made the reservation, and we have no log-in for it yet. | A reservation has to be undone more than once during the usability test. |
