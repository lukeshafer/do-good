import type { RequestHandler } from '@sveltejs/kit';
import { fundraiserSchema } from '$lib/schemas';
import sanitizeHtml from 'sanitize-html';

export const get: RequestHandler = async ({ params }) => {
  const url = `${import.meta.env.VITE_API_PATH}/api/fundraisers/${params.slug}`;
  const response = await fetch(url);

  try {
    const {
      data: { attributes: fundraiser },
    } = fundraiserSchema.parse(await response.json());
    const sanitizedStory = sanitizeHtml(fundraiser.story, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    });
    return {
      status: response.status,
      body: {
        title: response.ok && fundraiser.title,
        story: response.ok && sanitizedStory,
        href: response.ok && fundraiser.donationLink,
      },
    };
  } catch (err) {
    return {
      status: response.status,
      error: err,
    };
  }
};
