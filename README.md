# Gatsby Plugin Htaccess

**Gatsby Plugin Htaccess** creates a “.htaccess”-file every time a gatsby build is triggered.
This file contains by default all rules specified by Apache Server Configs v3.0.0 from “HTML5 Boilerplate” (https://github.com/h5bp/server-configs-apache).
Additionally, the headers for HTTP caching are set as recommended by the Gatsby team: https://www.gatsbyjs.org/docs/caching/

## Getting Started

1. Install the package from npm

   **Via npm:**

   `npm install gatsby-plugin-htaccess`

   **Via yarn:**

   `yarn add gatsby-plugin-htaccess`

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

**Example:**

```
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-htaccess`,
            options: {
                RewriteBase: 'custom/',
            }
    },
},
```

### Force https

Name: https
Type: Boolean
Default: false

### Force/suppress “www” at the beginning of URLs

Name: https
Type: Boolean
Default: false (suppress)

### Follow Symlinks

Name: SymLinksIfOwnerMatch
Type: Boolean
Default: false `Options +FollowSymlinks`

By default `Options +FollowSymlinks` is activated.
If your hoster does not allow this option, you can switch to `Options +SymLinksIfOwnerMatch` by setting `SymLinksIfOwnerMatch` to `true`.

### Custom Redirects
