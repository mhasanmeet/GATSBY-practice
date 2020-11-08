/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'Some random description',
    author: 'Mahmudul Hasan',
    data: ['item 01', 'item 02'],
    person: {name: "Mahmudul Hasan", age: 32},
  }
  ,
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`
    }
  ],
}
