# Next.js Frontend Boilerplate

A reusable frontend boilerplate designed to accelerate project setup using Next.js, Clerk for authentication, TailwindCSS with ShadCN for UI, TypeScript for type safety, and a robust API client.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org) with App Router
- **Authentication**: [Clerk](https://clerk.dev)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com) + TailwindCSS
- **Language**: TypeScript
- **Styling**: TailwindCSS

## 📊 Folder Structure

```
/app
  /components    # UI components
  /hooks         # Custom hooks
  /lib           # Utilities (e.g., api client)
  /styles        # Tailwind styles & globals
  /types         # TypeScript types
```

## 🔧 Getting Started

1. Clone this repository
2. Install dependencies:
```bash
npm install
```
3. Copy the `.env.example` file to create your own `.env.local`:
```bash
cp .env.example .env.local
```
4. Update the `.env.local` file with your own values:
```env
NEXT_PUBLIC_API_BASE_URL=https://your-backend-api.example.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```
5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔐 Authentication

The boilerplate uses Clerk for authentication with a ready-made landing page featuring SignUpButton and SignInButton components.

## 📁 API Client

A robust API client is included in `/lib/api-client.ts` with the following features:

- Uses `NEXT_PUBLIC_API_BASE_URL` from environment to connect to your backend
- Adds `Authorization` header using Clerk JWT
- Handles errors centrally with toast notifications
- Type-safe with TypeScript

Example usage:

```ts
const apiClient = useApiClient();

// Get data from your backend API
const data = await apiClient.get("/users/me", {
  toastOnError: true,
});
```

## 🚪 UI Components

The boilerplate includes ShadCN UI with TailwindCSS for beautiful, customizable components.

## 🚰 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
