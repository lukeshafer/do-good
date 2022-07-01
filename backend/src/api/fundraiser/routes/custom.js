module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/fundraisers/:slug',
      handler: 'fundraiser.findOne',
      config: {
        auth: false,
      },
    },
  ],
};
