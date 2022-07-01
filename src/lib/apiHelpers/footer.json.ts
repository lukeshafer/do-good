import qs from 'qs';

const queryFooter = qs.stringify({
  fields: '*',
  populate: {
    footerResourceLinks: {
      populate: {
        page: {
          populate: '*',
        },
      },
    },
    dgcLinks: {
      populate: {
        page: {
          populate: '*',
        },
      },
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
    console.log('resourcePage: ', resourcePage);
    return {
      ...resourcePage,
      title: link.title,
      slug: link.page.data?.attributes.slug,
    };
  });

  const dgcPages = attributes.dgcLinks.map((link): Page => {
    const dgcPage = link.page.data?.attributes;
    console.log('dgcPage: ', dgcPage);
    return {
      ...dgcPage,
      title: link.title,
      slug: link.page.data?.attributes.slug,
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
