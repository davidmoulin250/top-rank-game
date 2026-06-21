# Top 10 Showdown — static site served by nginx.
# No build step: vanilla HTML/CSS/JS. No runtime env injection needed —
# Supabase project URL + anon key are hardcoded in config.js (anon keys are public)
# and the right env (dev vs prod) is auto-selected by hostname.

FROM nginx:alpine
LABEL org.opencontainers.image.source="https://github.com/davidmoulin250/top-rank-game"

COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY net.js /usr/share/nginx/html/
COPY config.js /usr/share/nginx/html/
COPY categories.js /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /usr/share/nginx/html \
  && chown -R nginx:nginx /var/cache/nginx \
  && chown -R nginx:nginx /var/log/nginx \
  && sed -i 's|/run/nginx.pid|/var/cache/nginx/nginx.pid|' /etc/nginx/nginx.conf

USER nginx
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD pgrep nginx || exit 1
CMD ["nginx", "-g", "daemon off;"]
