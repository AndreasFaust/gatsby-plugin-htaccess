const wwwSuppress = `
<IfModule mod_rewrite.c>
    RewriteEngine On
    # (1)
    # RewriteCond %{HTTPS} !=on
    RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]
    RewriteRule ^ %{ENV:PROTO}://%1%{REQUEST_URI} [R=301,L]
</IfModule>
`
const wwwForce = `
<IfModule mod_rewrite.c>
    RewriteEngine On
    # (1)
    # RewriteCond %{HTTPS} !=on
    RewriteCond %{HTTP_HOST} !^www\\. [NC]
    RewriteCond %{SERVER_ADDR} !=127.0.0.1
    RewriteCond %{SERVER_ADDR} !=::1
    RewriteRule ^ %{ENV:PROTO}://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
</IfModule>
`

const setWWW = (content, www) => www
    ? content.replace('### FORCE-WWW ###', wwwForce)
    : content.replace('### SUPPRESS-WWW ###', wwwSuppress)

module.exports = setWWW