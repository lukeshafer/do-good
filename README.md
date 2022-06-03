# Do Good Collective

> dogoodcollective.net

## Developing

First clone this repository to your machine:

```bash
# via ssh
git clone git@github.com:lukeshafer/do-good.git
# via https
git clone https://github.com/lukeshafer/do-good.git
```

If developing, make sure to checkout the `dev` branch!

```bash
git checkout dev
```

Once you've cloned the repo, install dependecies with `npm` (or `pnpm install` or `yarn`):

```bash
npm install
```

And to start a development server to preview changes:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
