import qs from 'qs';
import { navigationMenuSchema } from '$lib/schemas';
import { ZodError } from 'zod';

const queryNav = qs.stringify({
  fields: '*',
  populate: {
    pages: {
      populate: {
        links: {
          populate: '*',
        },
        page: {
          populate: '*',
        },
        fundraisers: {
          populate: '*',
        },
        fundraiser: {
          populate: '*',
        },
      },
    },
  },
});

// pass data from Nav response - breaks data down into attributes
const destructureNav = (navData: unknown) => {
  try {
    const { data } = navigationMenuSchema.parse(navData);

    if (data === null || data === undefined) {
      throw new Error('Nav data is null or undefined');
    }

    return data?.attributes;
  } catch (err) {
    if (err instanceof ZodError) {
      console.log(JSON.stringify(err.errors, null, 2));
    }
    return {
      includeHomePage: false,
      includeFAQ: false,
      includeContactForm: false,
      pages: [],
    };
  }
};

const navURL = `${
  import.meta.env.VITE_API_PATH
}/api/navigation-menu?${queryNav}`;
const navResponse = await fetch(navURL);
const navData = await navResponse.json();

export const nav = destructureNav(navData);
