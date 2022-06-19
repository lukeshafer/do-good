import qs from 'qs';

const queryNav = qs.stringify({
  fields: '*',
  populate: {
    pages: {
      populate: '*',
    },
  },
});

// pass data from Nav response - breaks data down into attributes
const destructureNav = async ({
  data: { attributes },
}: {
  data: { attributes: NavigationMenu };
}) => {
  const pages = attributes.pages.map((page): Page => {
    const newPage = page.page.data?.attributes;
    return {
      ...newPage,
      title: page.title,
    };
  });
  return {
    ...attributes,
    pages,
  };
};

const navURL = `${
  import.meta.env.VITE_API_PATH
}/api/navigation-menu?${queryNav}`;
const navResponse = await fetch(navURL);

export const nav = await destructureNav(await navResponse.json());
