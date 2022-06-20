import qs from 'qs';

const queryFooter = qs.stringify({
  populate: {
    footerResourceLinks: {
      populate: '*',
    },
    dgcLinks: {
      populate: '*',
    },
  },
});

const destructureFooter = async ({
  data: { attributes },
}: {
  data: { attributes: Footer };
}) => {
  const resourcePages = attributes.footerResourceLinks.map((link): Page => {
    const resourcePage = link.page.data?.attributes;
    return {
      ...resourcePage,
      title: link.title,
    };
  });

  const dgcPages = attributes.dgcLinks.map((link): Page => {
    const dgcPage = link.page.data?.attributes;
    return {
      ...dgcPage,
      title: link.title,
    };
  });

  return {
    resourcePages,
    dgcPages,
  };
};

const footerURL = `${import.meta.env.VITE_API_PATH}/api/footer?${queryFooter}`;
const footerResponse = await fetch(footerURL);

export const footer = await destructureFooter(await footerResponse.json());
