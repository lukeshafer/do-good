// Content types from strapi
type Fundraiser = {
  title: string;
  shortDescription: string;
  goal: number;
  story: string;
  donationLink: string;
};

type Page = {
  title: string;
  slug: string;
  content: string;
};

// Declaring Modules
declare module 'svelte-collapsible';
declare module 'svelte-collapsible-card';
