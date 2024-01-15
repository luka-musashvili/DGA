This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
homework
├─ .eslintrc.json
├─ .git
│  ├─ branches
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ main
│  ├─ objects
│  │  ├─ 18
│  │  │  └─ 2cd5e1b7b0f624758c8b796521d0e5584cecbe
│  │  ├─ 1a
│  │  │  └─ f3b8f01934a8fdd694eb5747b8115f01419199
│  │  ├─ 33
│  │  │  └─ ad091d26d8a9dc95ebdf616e217d985ec215b8
│  │  ├─ 3b
│  │  │  └─ bf4aec4efdd5f53338277eb8c76fcdd2e83721
│  │  ├─ 40
│  │  │  └─ e027fbefc15026f37d0e7d8b37e9d8f6e532b1
│  │  ├─ 46
│  │  │  └─ f01a72cb688994fd3c245039db1b86cd8ea457
│  │  ├─ 51
│  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 76
│  │  │  └─ 7719fc4fba59345ae29e29159c9aff270f5819
│  │  ├─ ae
│  │  │  └─ 8ab2ed4abf0b604d7f4b42d7c80c85fb2f443b
│  │  ├─ b9
│  │  │  └─ 73266263f2fb83a6c385966c1c3656a60503be
│  │  ├─ be
│  │  │  └─ f290dd43c11955bd7224e7c1e8db7ece45807a
│  │  ├─ bf
│  │  │  └─ fb357a7122523ec94045523758c4b825b448ef
│  │  ├─ c4
│  │  │  └─ 033664f80d3cb9cb687fb5facbc82aedb302f6
│  │  ├─ cf
│  │  │  └─ a97b43f4279f1e65c2a5997567b877c54098ac
│  │  ├─ d2
│  │  │  └─ f84222734f27b623d1c80dda3561b04d1284af
│  │  ├─ e3
│  │  │  └─ 97ba02717230d1328c71f52f12655120e8760c
│  │  ├─ e5
│  │  │  └─ 9724b283f9cb9a63ce04a2405128164607a14a
│  │  ├─ fd
│  │  │  ├─ 3dbb571a12a1c3baf000db049e141c888d05a8
│  │  │  └─ 81e885836d815b8019694a910a93d86a43cb66
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     └─ tags
├─ .gitignore
├─ config
│  ├─ axios.config.ts
│  └─ mail.config.ts
├─ db-1704733943103.json
├─ db.json
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ assets
│  │  ├─ icons
│  │  └─ img
│  ├─ compontents
│  │  └─ ui
│  ├─ next.svg
│  ├─ uploads
│  │  └─ download.jpeg
│  └─ vercel.svg
├─ README.md
├─ server.js
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ v1
│  │  │     ├─ agency
│  │  │     │  └─ route.ts
│  │  │     ├─ document-level
│  │  │     │  └─ route.ts
│  │  │     ├─ permissions
│  │  │     │  ├─ route.ts
│  │  │     │  ├─ tabs
│  │  │     │  │  └─ [id]
│  │  │     │  │     └─ route.ts
│  │  │     │  └─ users
│  │  │     │     └─ [id]
│  │  │     │        └─ route.ts
│  │  │     ├─ role
│  │  │     │  ├─ add
│  │  │     │  │  └─ route.ts
│  │  │     │  ├─ edit
│  │  │     │  │  └─ [id]
│  │  │     │  │     └─ route.ts
│  │  │     │  ├─ route.ts
│  │  │     │  └─ [id]
│  │  │     │     └─ route.ts
│  │  │     ├─ sign-in
│  │  │     │  └─ route.ts
│  │  │     ├─ tabs
│  │  │     │  ├─ add
│  │  │     │  │  └─ route.ts
│  │  │     │  ├─ edit
│  │  │     │  │  └─ [id]
│  │  │     │  │     └─ route.ts
│  │  │     │  ├─ route.ts
│  │  │     │  └─ [id]
│  │  │     │     └─ route.ts
│  │  │     └─ users
│  │  │        ├─ add
│  │  │        │  └─ route.ts
│  │  │        ├─ delete
│  │  │        │  └─ [id]
│  │  │        │     └─ route.ts
│  │  │        ├─ route.ts
│  │  │        └─ [id]
│  │  │           └─ route.ts
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  └─ layout.tsx
│  ├─ components
│  │  ├─ Footer.tsx
│  │  ├─ LoginForm.tsx
│  │  ├─ Navbar.tsx
│  │  └─ ui
│  │     ├─ Button.tsx
│  │     ├─ Checkbox.tsx
│  │     ├─ Input.tsx
│  │     └─ Lang.tsx
│  ├─ helper
│  │  └─ authentication.helper.ts
│  ├─ interfaces
│  │  └─ db.interfaces.ts
│  ├─ pages
│  │  ├─ index.tsx
│  │  ├─ login.tsx
│  │  ├─ roles.tsx
│  │  ├─ tabs.tsx
│  │  ├─ test.tsx
│  │  └─ users.tsx
│  └─ util
│     ├─ crypto.util.ts
│     ├─ response.util.ts
│     └─ withAuth.tsx
├─ tailwind.config.ts
└─ tsconfig.json

```