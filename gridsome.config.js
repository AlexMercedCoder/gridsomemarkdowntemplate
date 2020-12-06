// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Your site name',
  siteDescription: 'Write a description here',
  siteUrl: 'https://www.devNursery.com',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'markdown/**/*.md',
        typeName: 'Markdown',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
        }
      }
    },
  ],
  templates: {
    Tag: '/tag/:id',
    Markdown: '/mark/:path',
  },
  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener', ],
      anchorClassName: 'icon icon-link',
    }
  },
}
