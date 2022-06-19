import qs from 'qs';

const queryFooter = qs.stringify({
  populate: {
    footerResourceLinks: {
      populate: '*',
    },
  },
});

const destructureFooter = async ({
  data: { attributes },
}: {
  data: { attributes: Footer };
}) => {
  const pages = attributes.footerResourceLinks.map((link): Page => {
    const newPage = link.page.data?.attributes;
    return {
      ...newPage,
      title: link.title,
    };
  });
  return {
    pages,
  };
};

const footerURL = `${import.meta.env.VITE_API_PATH}/api/footer?${queryFooter}`;
const footerResponse = await fetch(footerURL);

export const footer = await destructureFooter(await footerResponse.json());
