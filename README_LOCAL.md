# Plectrum website — local setup

## Requirements

- Windows 10 or 11
- Node.js 20 or newer: https://nodejs.org/

## Run the website

1. Extract the ZIP file to a permanent folder.
2. Open the extracted folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run the following commands in PowerShell, Command Prompt or Git Bash:

```bash
npm install
npm run dev
```

5. Open the local address shown in the terminal, normally:

```text
http://localhost:3000
```

Stop the server with `Ctrl+C`.

## If an older copy shows a `fetchAsset` image error

Download and extract the latest ZIP again. The current package serves its
bundled images directly and automatically bypasses Cloudflare image services
when their local bindings are unavailable. Docker is not required.

## Production test

To verify the production build locally:

```bash
npm run build
npm run start
```

## Main project folders

- `app/` — pages, components and styling.
- `public/models/` — the four GLB product models.
- `public/team/` — team photographs.
- `public/brand/` — Plectrum logos.
- `public/media/` — homepage visual assets.

The deployed website and this local copy are separate. Local edits do not
automatically update the published website.
