# Xexeboxes.com Static Mirror

This repository contains a static mirror of `https://xexeboxes.com` under `site/xexeboxes.com` for local serving or containerized deployment.

## Quick start (local)

```bash
python3 site/serve.py --port 8080 --dir site/xexeboxes.com
# Open http://localhost:8080
```

## Docker

Build and run an Nginx container serving the mirrored site:

```bash
cd site
docker build -t xexeboxes-static .
docker run --rm -p 8080:80 xexeboxes-static
# Open http://localhost:8080
```

## Notes
- Content is a point-in-time mirror; dynamic features that rely on backend APIs are not included.
- Update the mirror by re-running the mirroring step and rebuilding the image.