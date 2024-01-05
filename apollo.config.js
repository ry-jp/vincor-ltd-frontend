module.exports = {
    client: {
      service: {
        name: 'vincor-ltd-frontend',
        // URL to the GraphQL API
        url: 'https://vincor.com/graphql',
      },
      // Files processed by the extension
      includes: [
        'woonuxt_base/**/*.vue',
        'woonuxt_base/**/*.js',
      ],
    },
  }