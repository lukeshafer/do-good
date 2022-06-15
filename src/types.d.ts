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

type NavigationMenu = {
  includeHomePage: boolean;
  includeFAQ: boolean;
  pages: [
    {
      id: number;
      title: string;
      page: {
        data: {
          attributes: Page;
        };
      };
    }
  ];
};

type FieldType = 'short' | 'long' | 'phone' | 'email';

type ContactField = {
  __component: string;
  name: string;
  isRequired: boolean;
  type: FieldType;
  note: string;
};

// Declaring Modules
declare module 'svelte-collapsible';
declare module 'svelte-collapsible-card';
