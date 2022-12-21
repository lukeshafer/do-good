import type { RequestHandler } from '@sveltejs/kit';
import { pageSchema } from '$lib/schemas';
import sanitizeHtml from 'sanitize-html';

export const get: RequestHandler = async ({ params }) => {
  const url = `${import.meta.env.VITE_API_PATH}/api/pages/${params.slug}`;
  const response = await fetch(url);

  try {
    const {
      data: { attributes: page },
    } = pageSchema.parse(await response.json());
    const sanitizedContent = sanitizeHtml(page.content);
    return {
      status: response.status,
      body: {
        title: response.ok && page.title,
        content: response.ok && sanitizedContent,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      status: response.status,
      error: err,
    };
  }
};
