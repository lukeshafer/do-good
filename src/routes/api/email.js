// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*
module.exports = {
  index: async (ctx) => {
    await strapi.plugins['email'].services.email.send({
      to: 'dogoodcollectiveorg@gmail.com',
      replyTo: 'dogoodcollectiveorg@gmail.com',
      subject: ctx.reason,
      text:
        ctx.msg +
        '\n\n\n' +
        ctx.name +
        '\n' +
        (ctx.pronouns === '' ? '' : ctx.pronouns + '\n') +
        (ctx.phone === '' ? '' : ctx.phone + '\n') +
        ctx.email,
      html: '<strong>This is a test email.</strong>',
    });
    ctx.send('Email sent.');
  },
};
*/
const sgMail = import('@sendgrid/mail');
sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);
export async function get() {
  const msg = {
    to: 'dogoodcollectiveorg@gmail.com',
    from: 'dogoodcollectiveorg@gmail.com',
    subject: 'Test Subject with Sendgrid',
    text: 'This is test text',
    html: '<p>This is more test text but in HTML</p>',
  };
  console.log('Form submitted');
  const output = await strapi.plugins['email'].services.sgMail.send(msg);
  return {
    body: output,
  };
}
