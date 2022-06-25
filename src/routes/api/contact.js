// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
module.exports = {
  index: async (ctx) => {
    await strapi.plugins['email'].services.email.send({
      to: 'dogoodcollectiveorg@gmail.com',
      from: ctx.email,
      replyTo: ctx.email,
      subject: ctx.reason,
      text:
        ctx.msg +
        '\n\n\n' +
        ctx.name +
        '\n' +
        (ctx.pronouns === '' ? '' : ctx.pronouns + '\n') +
        (ctx.phone === '' ? '' : ctx.phone + '\n') +
        ctx.email,
    });
    ctx.send('Email sent.');
  },
};
