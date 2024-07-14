# TRUEMILLER Stack

Next.js template with TypeScript, ESLint, Prettier, Tailwind CSS, Husky, and a bunch of other linting tools.
Used for my own projects, but feel free to fork and use it yourself.

## Includes

```jsonc
"dependencies": {
  "next": "14.2.5",
  "react": "^18",
  "react-dom": "^18",
  "schema-dts": "^1.1.2",
  "tailwindcss": "^3.4.1"
},
"devDependencies": {
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18",
  "eslint": "^8",
  "eslint-config-next": "14.2.5",
  "eslint-config-prettier": "^9.1.0",
  "eslint-plugin-no-secrets": "^1.0.2",
  "eslint-plugin-paths": "^1.0.8",
  "eslint-plugin-prettier": "^5.1.3",
  "eslint-plugin-simple-import-sort": "^12.1.1",
  "eslint-plugin-tailwindcss": "^3.17.4",
  "eslint-plugin-unused-imports": "^3.0.0",
  "husky": "^9.0.11",
  "postcss": "^8",
  "prettier": "^3.3.3",
  "typescript": "^5"
}
```

## Extend with...
**shadcn-ui**
```bash
npx shadcn-ui@latest init
```

**Prisma**
```bash
yarn add -D prisma@latest 
yarn add @prisma/client 
```

**Auth.js w/ Prisma**
```bash
yarn add next-auth@beta #currently in beta.. https://authjs.dev/getting-started/installation?framework=next.js
yarn add @auth/prisma-adapter
```




