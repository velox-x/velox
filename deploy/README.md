Deployment instructions

1) What to publish
- Publish the entire `deploy/` folder as a static site root. The important files are:
  - `deploy/index.html` (example page and bookmarklet href templates)
  - `deploy/payloads/axiom.json`
  - `deploy/payloads/padre.json`
  - `deploy/payloads/axiom-bookmarklet.js`
  - `deploy/payloads/padre-bookmarklet.js`

2) Recommended host: GitHub Pages
- Create a new GitHub repo (e.g. `velox-bookmarklets`) or use an existing one.
- Commit the contents of `deploy/` to the repo root (not a subfolder) or enable Pages from the `deploy/` folder.
- Enable GitHub Pages for the repo (Settings → Pages) and publish from the `gh-pages` branch or the `main` branch `/docs` folder — whichever workflow you prefer.
- After publishing, your site will be available at `https://<username>.github.io/<repo>` or the custom domain you configure.

3) Update bookmarklet hrefs
- Open `deploy/index.html` and replace `<PUBLIC_BASE_URL>` with your published site base URL (no trailing slash), e.g. `https://alice.github.io/velox-bookmarklets`.
- The final bookmarklet `href` for Axiom will look like:
  - `javascript:(function(){var s=document.createElement('script');s.src='https://<username>.github.io/<repo>/payloads/axiom-bookmarklet.js';document.body.appendChild(s);})();`
- Drag that link to your bookmarks bar; the saved bookmark will run the loader which fetches the JSON payload and executes it.

4) Alternative: self-contained bookmarklet
- If you prefer a single bookmarklet with no network fetch, you can inline the decoded payload into a single `javascript:(function(){ ... })()` URL. Note:
  - Bookmark URLs have length limits in some browsers.
  - Large payloads may exceed practical limits, so loader approach is recommended.

5) Verify
- Visit the hosted loader URL (e.g. `https://<username>.github.io/<repo>/payloads/axiom-bookmarklet.js`) in your browser and check console logs.
- Drag the Axiom/Padre link to your bookmarks bar and click it on a page — open DevTools console to confirm payload executed.

6) Security notes
- Bookmarklets execute arbitrary JS on pages — only use trusted payloads and host them from trusted locations.

If you want, I can:
- Create a GitHub repo and push these files (I will need your GitHub username and whether you want the repo public or private).
- Produce self-contained bookmarklet strings for both terminals (if you accept potential length limits).
- Replace the `axiom.json` placeholder content with the real `padre.json` payload content if you provide it or ask me to copy both existing payload JSONs from `site/api/payload/` into `deploy/payloads/`.
