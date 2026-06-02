# Voice Search Optimization Guide

Use this as Salt & Tide Creative's practical checklist for clients who ask about "voice search optimization." The short version: there is usually no separate paid listing for Siri, Alexa, or Google Assistant. Voice visibility comes from strong local SEO, accurate business listings, structured data, fast mobile pages, and concise answers to natural-language questions.

## Best-practice sources checked

- Google Business Profile Help: Google says local ranking is based on relevance, distance, and prominence. It recommends complete, accurate, up-to-date business information, hours, reviews, photos, and details about what the business does.
- Google Search Central — LocalBusiness structured data: use structured data to help Google understand business type, name, address/service area, hours, phone, and related local details.
- Google Search Central — FAQ structured data: question-and-answer content should be visible on the page and match the structured data.
- Google Search Central — SEO Starter Guide: create helpful, reliable, people-first content with clear page titles, descriptions, headings, links, and crawlable pages.
- Google Search Central — Speakable structured data: Speakable markup is beta and intended for eligible news-style use cases, so Salt & Tide should not promise generic speakable-schema wins for small-business service sites.

## What to optimize

1. **Google Business Profile completeness**
   - Primary and secondary categories match the actual business.
   - Business name, phone, website, service area, hours, and appointment/contact links are accurate.
   - Services/products list the real offerings in plain language.
   - Photos, updates, and reviews are active.

2. **NAP and local consistency**
   - Name, address/service area, phone, email, and website are consistent across the website, GBP, citations, maps, and schema.
   - Use a crawlable `tel:` link and visible contact information.

3. **Conversational page copy**
   - Add short answers to questions people would speak aloud:
     - "Who designs websites for restaurants near Edmonds?"
     - "How much does a small business website cost in Seattle?"
     - "Do you build websites and handle local SEO?"
     - "What areas does Salt & Tide Creative serve?"
   - Put answers on visible pages, not only hidden metadata.

4. **Structured data**
   - Use `LocalBusiness` / `ProfessionalService` schema for identity and service area.
   - Use `Service` schema for the actual service offering.
   - Use `FAQPage` schema only for questions visibly answered on the page.
   - Use `BreadcrumbList` for page hierarchy.

5. **Mobile and crawlability**
   - Voice searches are usually mobile. Pages should be fast, readable, tap-to-call friendly, and understandable in raw HTML or rendered DOM.
   - Avoid relying only on JavaScript for critical business details.

6. **Reviews and prominence**
   - Ask clients for reviews ethically and consistently.
   - Earn local links/citations from real partners, chambers, directories, client projects, and community mentions.

## Implementation added to salttidecreative.com

- Added visible `/services#voice-search-optimization` section.
- Added voice-search language to service packages and add-ons.
- Added two visible FAQ answers for voice search and near-me searches.
- Added FAQPage schema entries for those questions.
- Added a dedicated `Service` JSON-LD block for Voice Search Optimization.
- Added `voice search optimization Seattle` to services-page keywords and updated the services meta description.

## Sales positioning

Recommended client explanation:

> Voice search optimization is not a magic directory submission. We optimize the signals voice assistants already use: your Google Business Profile, local SEO, reviews, structured data, service-area clarity, mobile speed, and plain-English answers to the questions customers ask out loud.

## What not to promise

- Do not guarantee ranking in Siri, Alexa, Google Assistant, ChatGPT, or any AI answer engine.
- Do not sell generic `speakable` schema as a universal small-business ranking boost.
- Do not create fake locations, fake reviews, keyword-stuffed business names, or duplicate doorway pages.
