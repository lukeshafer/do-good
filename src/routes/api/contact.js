// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export function post(request) {
  const formBody = await request.json();

  const name = formBody.name;
  const pronouns = formBody.pronouns;
  const email = formBody.email;
  const phone = formBody.phone;
  const reason = formBody.reason;
  const message = formBody.message;

  return {
    body: {
      name,
      pronouns,
      email,
      phone,
      reason,
      message,
    },
  };
}
