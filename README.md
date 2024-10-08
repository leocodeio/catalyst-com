# welcome

To run locally,
npm run local

```shellscript
npm install -g pnpm
pnpm i
pnpm run local
```

# commands followed

## Prisma

```shellscript
pnpm i prisma
npx prisma init
```

write the prisma code...

```shellscript
npx prisma generate
npx prisma db push
```

## vercel

```shellscript
pnpm i @vercel/remix
```

edit vite config
https://vercel.com/docs/frameworks/remix#vercel-vite-preset

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
