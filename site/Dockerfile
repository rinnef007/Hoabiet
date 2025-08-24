# syntax=docker/dockerfile:1
FROM nginx:1.27-alpine

# Copy static content
COPY xexeboxes.com/ /usr/share/nginx/html/

# Replace default server config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -qO- http://localhost/ >/dev/null || exit 1