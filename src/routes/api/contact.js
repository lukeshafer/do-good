// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const post = (request) => {
  console.log(request);

  return {
    body: {
      message: 'ok',
    },
  };
};
