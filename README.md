# Formboost Next.js Examples

Next.js App Router examples for [Formboost](https://formboost.app/), covering both client-side submissions and server actions.

Endpoint format:

```text
https://formboost.app/f/YOUR_ENDPOINT
```

## Included

- `components/ClientContactForm.tsx` — client component using `fetch`
- `app/actions.ts` — server action forwarding submissions to Formboost
- `components/ServerActionForm.tsx` — form using the server action

## Run locally

```bash
npm install
npm run dev
```

Replace `YOUR_ENDPOINT` before testing.

## When to use which approach

Use the client example when you want custom loading/success UI in the browser. Use the server-action example when you prefer server-side submission handling in your Next.js application.

For configuration and integrations, see the [Formboost documentation](https://formboost.app/docs).
