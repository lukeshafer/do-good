module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/pages/:slug',
      handler: 'page.findOne',
      config: {
        auth: false,
      },
    },
  ],
};
