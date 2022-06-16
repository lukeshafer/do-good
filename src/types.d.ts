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

type InternalLink = {
  id: number;
  title: string;
  page: {
    data: {
      attributes: Page;
    };
  };
};

type NavigationMenu = {
  includeHomePage: boolean;
  includeFAQ: boolean;
  pages: InternalLink[];
};

type FieldComponent = 'form-fields.text' | 'form-fields.drop-down';
type FieldType = 'short' | 'long' | 'phone' | 'email';

type ContactField = {
  __component: FieldComponent;
  name: string;
  isRequired: boolean;
  type: FieldType;
  note: string;
  allowOther: boolean;
  entries: [
    {
      value: string;
    }
  ];
};

type HomePage = {
  featured: FeaturedFundraiser;
  resourceLinks: InternalLink[];
};

type FeaturedFundraiser = {
  title: string;
  shortDescription: string;
  icon: StrapiImage;
  fundraiser: {
    data: {
      attributes: Fundraiser;
    };
  };
};

// Declaring Modules
declare module 'svelte-collapsible';
declare module 'svelte-collapsible-card';
