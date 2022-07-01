# Do Good Collective

> dogoodcollective.net

## Setting Up Development Environment

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

Once you've cloned the repo and you're in the folder, install dependecies with `npm` (or `pnpm install` or `yarn`):

```bash
npm install
```

And to start a development server to preview changes:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Developing

### Frameworks

If you're new to Svelte or SvelteKit, check out the docs:

> https://svelte.dev/ is for Svelte, the markup language and JS library. These docs will help you with language and syntax features (start here!)

> > https://svelte.dev/tutorial/basics is a wonderful place to get an idea of how Svelte works! It's all in browser so it's easy to do anywhere. You also don't have to do all of the tutorials - going up to the 'making an app' section is enough to get started (but you can do more if you want!)

> https://kit.svelte.dev/ is for SvelteKit, the framework this project is built on, which is the guide for the file structure and tools for building our site.

### File Structure

All code you will write is in the `src` folder. `src/routes` contains the different pages for the site -- `src/routes/index.svelte` is a good place to start if you feel like the structure is overwhelming, or you can look in `src/global.css` if you are wanting to style things.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
