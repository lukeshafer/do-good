// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const post = async ({ request }) => {
  //console.log(request);

  const body = await request.formData();

  const name = body.get('name');
  const pronouns = body.get('pronouns');
  const email = body.get('email');
  const phone = body.get('phone');
  const reason = body.get('reason');
  const msg = body.get('message');

  return {
    body: {
      name,
      pronouns,
      email,
      phone,
      reason,
      msg,
    },
  };
};
