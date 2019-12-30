# Gatsby Plugin Htaccess

**Gatsby Plugin Htaccess** creates a “.htaccess”-file every time a gatsby build is triggered.
This file contains by default all basic rules specified by [Apache Server Configs v2.4.0](https://github.com/h5bp/server-configs-apache).

Additionally, the headers for HTTP caching are set as recommended by the Gatsby team: https://www.gatsbyjs.org/docs/caching/

#### Default output

Without any configuration the plugin will output these files:

- [/public/.htaccess](https://github.com/AndreasFaust/gatsby-plugin-htaccess/blob/master/defaults/htaccess)
- [/public/static/.htaccess](https://github.com/AndreasFaust/gatsby-plugin-htaccess/blob/master/defaults/static-htaccess)

## Getting Started

1. Install the package with **npm** or **yarn**

   `npm install gatsby-plugin-htaccess`

   `yarn add gatsby-plugin-htaccess`

2. Add to plugins in your gatsby-config.js

```javascript
module.exports = {
  plugins: ['gatsby-plugin-htaccess'],
}
```

## Options

| **Name**             | **Type**                        | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------------- | :------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RewriteBase          | bool or string                  | Set to `true`, it will output `RewriteBase /`. You can also define a custom RewriteBase.                                                                                                                                                                                                                                                                                                                                                                                                       |
| https                | bool                            | Force https.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| www                  | bool                            | Suppress/force “www” at the beginning of URLs. By default "www" is supressed.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| DisallowSymLinks     | bool                            | By default `Options +FollowSymlinks` is activated. <br> If your hoster does not allow this option, you can set DisallowSymLinks to `true`.                                                                                                                                                                                                                                                                                                                                                     |
| SymLinksIfOwnerMatch | bool                            | You can restrict follow symlinks to owner match.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| host                 | string                          | Defines the domain, every other domain, that leads to your website, gets redirected to. Like **Redirecting Domains** from **redirects**, but without having to define the alternate hosts.                                                                                                                                                                                                                                                                                                     |
| ErrorDocument        | string                          | Define custom ErrorDocuments. Default: `ErrorDocument 404 /404/index.html`                                                                                                                                                                                                                                                                                                                                                                                                                     |
| redirect             | array of objects and/or strings | **Fully customized redirects:** Can be defined as strings. <br> **Redirecting Domains:** If there are several domains pointing to your site, you can redirect them to your main domain by setting up objects with the keys `from` and `to`. <br> **Redirects from Gatsby:** Redirects from Gatsby are not automatically integrated. If you just want that, you should generally go with [gatsby-plugin-htaccess-redirects](https://github.com/GatsbyCentral/gatsby-plugin-htaccess-redirects). |
| custom               | string                          | Custom Rules are added at the end of the file `public/.htaccess`.                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Example Options:

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/custom/',
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'www.mydomain.com', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 401 /error_pages/401.html
          ErrorDocument 404 /error_pages/404.html
          ErrorDocument 500 /error_pages/500.html
        `,
        redirect: [
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
          {
            from: 'my-domain.com',
            to: 'mydomain.com',
          },
          {
            from: 'my-other-domain.com',
            to: 'mydomain.com',
          },
        ],
        custom: `
            # This is a custom rule!
            # This is a another custom rule!
        `,
      },
    },
  ],
}
```

## Contributing

Every contribution is very much appreciated.
Feel free to file bugs, feature- and pull-requests.

**If this plugin is helpful for you, star it on [GitHub](https://github.com/AndreasFaust/gatsby-plugin-htaccess).**

## Thanks

This plugin is based on [gatsby-plugin-htaccess-redirects](https://github.com/GatsbyCentral/gatsby-plugin-htaccess-redirects) by **Gatsby Central**.

The htaccess-directives are taken from [Apache Server Configs](https://github.com/h5bp/server-configs-apache) by **H5BP**.
