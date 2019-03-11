const normaliseHost = (host) => `
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTP_HOST} !=${host}
  RewriteRule (.*) %{ENV:PROTO}://${host}/$1 [R=301,L]
</IfModule>
`

const setHost = (content, host) => host
  ? content.replace('### NORMALIZE-HOST ###', normaliseHost(host))
  : content

module.exports = setHost