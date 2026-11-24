# Revenue AI

Know Your Numbers. Predict Your Growth.

Revenue AI is a B2B revenue intelligence platform: pipeline, deal intelligence, forecasting with stated assumptions, customer retention, AI assistant and approval gated AI agents.

## Stack
Next.js 16, React 19, TypeScript, Tailwind CSS 4, Recharts, Lucide, Supabase (Auth, Postgres with RLS, Storage), Anthropic Claude for AI.

## What is implemented
- Marketing site: Home, Platform, Solutions, Features, Pricing, Login, Sign Up. Footer is `© 2026 Revenue AI`.
- Supabase authentication: sign up, email verification, login, forgot and reset password, logout, protected routes, persistent sessions, profile.
- Dashboard: Overview, Revenue Intelligence, Pipeline (Kanban and table), Opportunities, Deal Inspection, Forecasting, Accounts, Contacts, Sales Activities, AI Assistant, AI Agents, Analytics, Reports (CSV), Team Performance, Targets and Quotas, Integrations, Notifications, Billing, Settings (profile, team, roles, territories, pipeline stages, audit log).
- All figures are computed from the organisation's records. Actual results are labelled separately from projections.
- Forecasting: monthly, quarterly, annual, worst, expected and best case, assumptions, confidence, snapshots, change review and accuracy history.
- AI: the assistant reads data through server side tools; six agents return evidence with every recommendation. Deal updates need approval, emails are only drafted, and everything is audit logged.
- Integrations: OAuth adapters for Salesforce, HubSpot, Pipedrive, Google Calendar, Outlook Calendar and Slack, plus a BI metrics API. Tokens are encrypted; a connector shows as connected only after authorisation.
- Roles: Owner, Administrator, Sales Manager, Sales Representative, Revenue Operations, Executive, Viewer, enforced by Row Level Security and the API.
- Billing: three plans linked to the Selar links in order; plans activate only from a verified Selar notification; limits are enforced on the server.

## Selar plans
Starter $47, Growth $57, Scale $97, monthly, linking to `47plan`, `57plan`, `97plan`. The Selar pages could not be read from the build environment, so these names and prices were confirmed by the owner. Seats and usage limits are proposed values in `src/config/plans.ts`; edit that one file to match what you sell.

## Develop
`npm install`, copy `.env.example` to `.env.local`, run the migration, `npm run dev`. Tests: `npm test`. Deployment steps: `DEPLOY.md`.

## Testing performed
Unit tests cover the revenue engine, deal health, forecasting, agents, assistant tools and Selar verification (12 passing). The SQL migration was run twice on PostgreSQL and role based policies were checked (representatives cannot create others' deals or set targets, outsiders see nothing, credentials are unreadable, closed won deals book revenue). `next build`, type checking and lint pass. Not tested end to end: live Supabase email flows, real OAuth connections and Anthropic calls, which need your credentials.

