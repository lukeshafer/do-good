// API Endpoint for __layout
import type { RequestHandler } from '@sveltejs/kit';
import { nav } from '$lib/apiHelpers/nav.json';
import { footer } from '$lib/apiHelpers/footer.json';

export const get: RequestHandler = async () => {
  return {
    body: {
      nav,
      footer,
    },
  };
};
