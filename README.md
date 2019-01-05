# Gatsby Plugin Htaccess

**Gatsby Plugin Htaccess** creates a “.htaccess”-file every time a gatsby build is triggered.
This file contains by default all rules specified by Apache Server Configs v3.0.0 from “HTML5 Boilerplate” (https://github.com/h5bp/server-configs-apache).
Additionally, the headers for HTTP caching are set as recommended by the Gatsby team: https://www.gatsbyjs.org/docs/caching/

## Getting Started

1. Install the package from npm

   **Via npm:** `npm install gatsby-plugin-htaccess`

   **Via yarn:** `yarn add gatsby-plugin-htaccess`

2. Add to plugins at your gatsby-config.js

```
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-htaccess`,
            options: {
                https: true,
                SymLinksIfOwnerMatch: true,
                www: true,
            }
    },
},
```

## Options

### Set RewriteBase

    Name: RewriteBase
    Type: Boolean/String
    Default: none

Set to `true`, it will output `RewriteBase /`.
If you want a custom RewriteBase, just type a string.

```
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-htaccess`,
            options: {
                RewriteBase: '/custom/',
            }
    },
},
```

### Force https

|          |         |
| -------- | ------- |
| Name:    | https   |
| Type:    | Boolean |
| Default: | false   |

### Suppress/force “www” at the beginning of URLs

    Name: www
    Type: Boolean
    Default: false (== suppress)

### Follow Symlinks

    Name: SymLinksIfOwnerMatch
    Type: Boolean
    Default: false

By default `Options +FollowSymlinks` is activated.
If your hoster does not allow this option, you can switch to `Options +SymLinksIfOwnerMatch` by setting `SymLinksIfOwnerMatch` to `true`.

### Custom Redirects

    Name: redirects
    Type: array of objects/strings
    Default: null

Fully customized redirects you can type as string.
If you have several domains for your site and want them all to link to your main domain, you can setup this via objects with the keys `from` and `to`.

```
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-htaccess`,
            options: {
                redirects: [
                    { from: 'my-domain.com', to: 'mydomain.com' },
                    { from: 'my-other-domain.com', to: 'mydomain.com' },
                    'RewriteRule ^not-existing-domain/?$ /existing-domain [R=301,L,NE]',
                ],
            }
    },
},
```

If you want to automatically integrate the Gatsby-redirects, you should generally go with [gatsby-plugin-htaccess-redirects](https://github.com/GatsbyCentral/gatsby-plugin-htaccess-redirects).

### Custom Rules

    Name: custom
    Type: string
    Default: null

Custom Rules are added at the end of the generated .htaccess-file.

```
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-htaccess`,
            options: {
                custom: `
                    # This is a custom rule!
                    # This is a another custom rule!
                `,
            }
    },
},
```

## Contributing

Every contribution is very much appreciated.
I am neither a .htaccess-, nor a Gatsby-expert — so feel free to file bugs, feature- and pull-requests.
If this plugin is helpful for you, star it.

## Thanks

This plugin is based on **gatsby-plugin-htaccess-redirects** (https://github.com/GatsbyCentral/gatsby-plugin-htaccess-redirects) by **Gatsby Central**.

The htaccess-directives are taken from **Apache Server Configs** (https://github.com/h5bp/server-configs-apache) by H5BP.
