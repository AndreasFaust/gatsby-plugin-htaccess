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

### Rewrite Base

Set
