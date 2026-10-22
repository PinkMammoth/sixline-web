# SixLine website security audit — 22 October 2026

## Remediation results — 22 October 2026

**Current verdict: the targeted repository/build fixes are complete and locally validated. The published site remains unchanged and serves an older static build. Its historical build runtime and credential privileges still require verification.** The initial audit below is retained as a historical record; its statements about unavailable hosting access, missing configuration, old versions and unimplemented remediation describe the initial assessment, not the current state.

### Changes applied

- **Node.js:** selected the already-installed nvm **24.22.1** runtime for installation, audit, typechecking and builds. Its bundled Undici reports **7.30.1**. No Node installation, global default/alias change, shared binary replacement or shell-profile change was needed. `.nvmrc` now pins **24.22.1**; `package.json` and the existing root lockfile engine metadata now require **`>=24.22.1 <25`**. README documents `nvm use`. Existing parent terminals can still have 24.8.0 in PATH: run **`nvm use` inside this repository** before further work. Other projects' selections are untouched.
- **Netlify:** added `netlify.toml` with build command **`npm run build`**, publish directory **`dist`**, and **`NODE_VERSION = "24.22.1"`**. Both runtime pins agree. This is a repository change for a future authorised build, not a dashboard change or deployment. [Netlify documents these version selectors](https://docs.netlify.com/build/configure-builds/manage-dependencies/).
- **Undici:** reviewed the official [8.12.2 security release](https://github.com/nodejs/undici/releases/tag/v8.12.2) and npm metadata. Updated only the locked transitive package **8.12.1 → 8.12.2**, its registry URL and registry-provided SHA-512 integrity. Its Node requirement remains **>=22.19.0**, compatible with 24.22.1; parent `unifont` already accepts `^8.0.0`. No direct dependency, override or parent upgrade was added. Installation used **`npm install --ignore-scripts --no-audit --no-fund`** under the patched runtime, with an isolated HOME and no deployment environment. No install/lifecycle script was executed.
- Compared the lockfile with the start-of-remediation snapshot: all package entries and all unrelated metadata are unchanged. The pre-existing root engine addition was retained and updated consistently with `package.json`; only that engine value and Undici's three fields differ from the starting snapshot. No application source, styling, content, public asset, Astro config or redirect was edited.

Confirmed path: **`astro 7.3.8 → unifont 0.7.5 → undici 8.12.2`**. This is build/development tooling. `unifont` can load the npm Undici proxy dispatcher when HTTP(S) proxy variables exist; other fetch operations can use Node's bundled Undici. The configured fonts are local. Neither copy executes on behalf of visitors to the generated static site. Versions otherwise remain Astro **7.3.8**, Vite **8.3.4**, Sharp **0.35.5**, TypeScript **6.0.3**, Tailwind/integration **4.3.3**. npm **11.19.1** was already bundled in the selected Node installation; no standalone npm upgrade was performed.

### Validation completed

| Check | Result |
| --- | --- |
| Dependency audit | `npm audit --package-lock-only --ignore-scripts --json`: **0 findings**, 382 dependencies. Vendor-fixed versions independently checked; earlier registry/advisory discrepancy remains a reason not to rely only on npm audit. |
| Typechecking | `npm run check`: **49 files, 0 errors, 0 diagnostic warnings, 0 hints**. Existing empty-release glob warning remains. |
| Production build | `npm run build`: success on **Node 24.22.1**, output/mode **static**, nine HTML pages plus `robots.txt` and local assets. |
| Regression comparison | Built once before installing the Undici patch and again afterward using the same patched Node and environment. **All 26 output files have identical SHA-256 hashes**, with no additions/removals. This covers generated markup, scripts, CSS, fonts and media; no interactive/browser testing was performed. |
| Build warnings | Exactly the same existing empty-release warnings before/after: one glob-loader warning and two empty-collection warnings. No new build warning or regression observed. |
| Generated artifact review | No server/functions/edge bundle, source map, repository/config/env file, external script/form/iframe, or secret-pattern candidate found in `dist/`. All scripts are embedded in the static HTML. |
| Change review | `git diff --check` passes. No unrelated locked dependency changed. |

The sandbox blocked Astro's temporary local-font HTTP listener (`listen EPERM`) during the first baseline build. Both successful comparison builds ran with the necessary sandbox exception and a minimal environment containing only the patched runtime path, isolated HOME, `CI=true` and telemetry-disable setting. This temporary build-time listener is not a deployed service. No deployment credentials were supplied to validation builds.

### Netlify and live exposure: read-only verification

The CLI did not return usable structured status. A read-only API request using the existing cached login identified **`sixline` / `https://sixline.xyz`**, linked to the matching `sixline-web` repository. Credentials were used only in memory for Netlify authentication; their values and environment-variable values were not logged or saved.

- Returned site settings: branch **main**, base directory empty, command **`npm run build`**, publish **`dist`**, functions directory unset, **0 configured plugins**, **0 injected snippets**, no database, `use_server: false`.
- Published production deploy **`6ad3654cb2e4c9dad30a9890`** is ready, published **17 October 2026**, commit **`de17abd79efd71b808da083cbc993380e211ab28`**. It is older than the reviewed working tree and does **not** contain this remediation.
- Published deploy metadata lists no available/required functions, no required edge functions, no required server and no server object. Some site/edge flags are null rather than explicit false, and the separate edge-function endpoint returned 404; those responses alone are not proof of absence. The combined artifact inventory and deployment metadata support a static published deployment, with no application server runtime identified.
- Published inventory: **23 static files**, including seven HTML pages and local fonts/CSS/images; no source maps, server bundle, `.env`, dependency manifest, private-key file or repository metadata path. Ordinary GET requests to the seven published HTML paths produced no secret-pattern candidates. This is a limited pattern scan, not proof that arbitrary secrets cannot exist.
- Site-filtered environment API returned **no variables**. Legacy build environment metadata exposes only the key name `DEPRECATED`; its value was not printed. No unnecessary attached build secret was identified from the returned data. Token scope, organization-level access, historical build environments, integration authorization and build logs were not independently established.
- Ordinary HTTP GET followed the HTTP→HTTPS redirect successfully. Homepage and `robots.txt` returned **200**, with **HSTS `max-age=31536000`**. These responses had no CSP, `X-Content-Type-Options`, explicit referrer policy, framing header, permissions policy or wildcard CORS header. Homepage contained no external script URL. Header hardening remains **LOW**, separate from these patches.
- Untrusted build flow is **`review`**, allowed branches list **main**, and non-Git production deploy prevention is **false**. These settings do not establish who can approve builds or use deploy tokens; there is no evidence here of an unauthorized deployment. No settings were changed.

### Residual concerns and manual actions before deployment

1. Run **`nvm use`** in existing developer terminals. Do not continue website work under the old 24.8.0 PATH. The shared old installation remains available to other projects; their remediation is outside this repository's scope.
2. Review the pending diff, then use the normal separately authorised release process. This task performed **no deployment, production setting change, credential rotation, commit or push**. The remote repository/build has not received these changes.
3. For the next authorised Netlify build, confirm logs show **Node 24.22.1**, the intended npm version, locked **Undici 8.12.2**, the correct commit, static output and publish directory `dist`. Verify no context-specific setting/base directory bypasses the repository pins. Historical production build Node version is still unknown; existing static files do not expose that build process as a running public Node server.
4. Manually verify account/token/deploy-key privileges, organization/shared secret inheritance, historical build logs, integration access, preview approval/secret rules, and who can publish non-Git deploys. The returned empty environment list does not establish all those permissions. Revoke/rotate only if evidence of exposure appears and approval is given.
5. Schedule compatible CSP/standard-header hardening before launch; retain required inline behavior and self-hosted fonts. Recheck live headers and artifacts after a separately authorised deployment. No browser/E2E test was run.

**Immediate work remaining is operational verification and release review, not another dependency upgrade.** The local patch is validated; the published site has not been patched through a new deployment. No evidence found requires taking the static website offline or rotating credentials.

---

## Initial audit record — before remediation

## Executive verdict

**REQUIRES VERIFICATION for production; confirmed vulnerable Node.js on this developer/audit host.** The reviewed website generates static files. No public server-side execution or input-processing endpoint is implemented in this repository. No evidence of compromise or committed credentials was found. This does not establish that a deployed site, Netlify account, or build environment is safe.

The immediate priority is the build/developer environment: local Node.js **24.8.0** predates the 21 October security releases, and the locked transitive **Undici 8.12.1** falls within vendor-confirmed affected ranges. Static visitors cannot directly invoke these packages on a correctly configured static host. Build dependencies can nevertheless access build environment variables, modify published JavaScript, and affect deployment integrity.

No critical production exposure requiring shutdown, or credential leak requiring rotation, was established. Review the minimal patch plan below before implementation. No remediation has been implemented.

## Scope and evidence limits

- Reviewed working tree at `600fd27`, all six commits reachable from local refs, 171 unique historical file blobs, application/configuration files, lockfile metadata, and installed package manifests. The clone is not shallow; remote-only/deleted/unreachable history was not fetched or scanned.
- The pre-existing dirty `package-lock.json` adds only root `engines.node: >=22.12.0`; it changes no resolved dependency, integrity, or version. This change was preserved.
- Diagnostics read manifests and source without importing dependencies or executing package scripts. No install, build, development server, browser/E2E test, deployment, commit, push, credential rotation, or production change was performed. This report is the only repository file created by the audit.
- Initial `npm audit --package-lock-only --ignore-scripts --json` failed with registry DNS error `EAI_AGAIN`. A network-enabled retry succeeded: **0 reported advisories**, 382 dependencies. Vendor advisories below independently confirm affected Undici versions; the registry result is not a clean bill of health and its discrepancy remains unexplained.
- Official advisory pages were accessible. Comprehensive vendor review of every transitive package, package provenance/signatures, and byte-for-byte verification of installed code against registry archives were not performed. Matching version metadata and lockfile hashes alone do not exclude malicious packages.
- No production URL, Netlify site identifier, hosting configuration, deployed artifact, `dist/`, or deployment logs were available. No live production requests were made. Actual hosting, DNS, TLS, dashboard configuration, credentials and privileges remain unknown.

## Architecture: repository versus production

| Component | Observed evidence and conclusion |
| --- | --- |
| Astro | Manifest range `^7.3.8`; lockfile and installed version **7.3.8**. |
| Integrations | `@astrojs/sitemap` **3.7.4**, enabled only with `SITE_URL`; `@tailwindcss/vite` **4.3.3**. No hosting adapter, React, Next.js, or MDX integration. |
| Rendering | `astro.config.mjs` omits `output`; installed Astro schema `node_modules/astro/dist/core/config/schemas/base.js` defaults to `static`. No `prerender = false`, server islands, actions, or request-time middleware. Expected artifact is `dist/`. |
| Routes | Nine content pages (`/`, `/create`, `/download`, `/features`, `/practice`, `/pricing`, `/support`, `/updates`, `/404`) and `src/pages/robots.txt.ts`. The latter is a typed GET route **prerendered at build time**, using configured `site`, not request input. Sitemap is generated when configured. |
| Browser | Local CSS, fonts and assets; scripts for initial JS marker, menu, section reveals, and practice animation. No remote script, analytics, iframe, fetch, WebSocket, or form integration identified in application source. |
| Server/runtime | A static deployment needs no continuously running application Node.js or PHP process. Actual production process model is **unverified**. `astro dev` and `astro preview` are local Node services, not evidence of production hosting. |
| Netlify | No `netlify.toml`, `.netlify`, `_headers`, `_redirects`, functions/edge-functions directory, Netlify adapter, or Netlify configuration in reachable history. Netlify use is a user-supplied belief, not repository-confirmed. Dashboard plugins, injected scripts, functions and rewrites cannot be ruled out. |
| Build tooling | npm, lockfile v3; no other project lockfile or `packageManager` pin. `.nvmrc` selects **22**, root engine permits **>=22.12.0**, actual local runtime **24.8.0**, npm **11.6.0**. Actual CI version and install command unknown. |
| PHP | No PHP/phtml files, Composer manifest/lockfile, PHP build commands, containers, or PHP integration found in repository/history. No configured external backend. Provider-internal infrastructure is outside this assessment. |
| Public input | No submitted forms, upload, login, checkout API, contact API, or dynamic user-data handler. Checkout/download/support destinations are `null` in `src/data/site.ts`. Requests to static files are handled by the host. |

All seven packages under `dependencies` are involved in generating site output; their placement does not make them production server software. Lock metadata contains 305 non-dev and 77 dev entries (including optional platform packages); npm audit groups these as 205 prod, 77 dev and 101 optional, 382 total. None is established as a deployed server dependency.

## Immediate risk assessment

Severity reflects this deployment context; vendor severity is separately identified where useful.

| Finding | Severity | Evidence | Actual exposure | Recommended action |
| --- | --- | --- | --- | --- |
| F1: Unpatched local Node.js | **HIGH — urgent patch or rotation** | `node --version`: 24.8.0; [21 October vendor release](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases) | **Developer/audit host confirmed**; build pipeline unknown. Attacks require relevant DNS/TLS/HTTP/Brotli operations on attacker-influenced data. No website-to-Node execution path shown. | Update this host to **24.22.1**; verify all build hosts. For configured Node 22 use **22.23.4**. |
| F2: Undici 8.12.1 in build tooling | **MEDIUM — address before launch** (vendor high for several issues) | `astro -> unifont 0.7.5 -> undici 8.12.1`; vendor ranges below | **Build/developer tooling**, conditional outbound-network exposure. Local font configuration reduces reachability. No public runtime, custom TLS callbacks, shared interceptor cache, SSE or Undici WebSocket use identified. | Target **8.12.2** after approval, preserving other resolutions. Node patch alone does not update this npm package. |
| F3: Deployed architecture and build secret access unknown | **UNKNOWN — requires external verification** | No deployment config/log/artifact or authenticated Netlify view | Production, deploy previews, dashboard plugins and build environments may differ from source. | Verify published commit, publish directory, functions, plugins, build command/version, preview trust rules and secret scopes before clearing incident. |
| F4: Hosting security headers not defined in repository | **LOW — hardening recommendation** | No `_headers`, Netlify headers, CSP configuration or CSP meta tag | Actual HTTP headers unknown; no active injection demonstrated. | Inspect ordinary responses when URL is known; add compatible headers only if missing. |
| F5: No PHP or Next.js attack surface in reviewed website | **NOT AFFECTED — verified not applicable** | No PHP/Composer or Next.js/React dependency/source/backend | Repository implementation only; external systems unverified. | Do not apply PHP CVE-2026-109618/109619 or Next.js patches to this tree. Reassess if external runtime discovered. |
| F6: Reviewed Astro/Sharp and Vite advisories already fixed or inapplicable | **NOT AFFECTED — verified not applicable** | Astro 7.3.8, Sharp 0.35.5, Vite 8.3.4; vendor comparisons below | No affected version in those comparisons; hosting adapter advisories require absent adapters. | No framework major upgrade warranted by these advisories. |
| F7: No credential candidate found | **NOT AFFECTED — verified not applicable** to detected repository leaks | Redacted-only pattern scan of 86 working files and 171 historical blobs; manual env/config review | No leak demonstrated. External secret stores, deployed bundles and remote history unverified. | No automatic rotation; investigate and revoke/rotate promptly if external evidence reveals exposure. |
| F8: Dependency supply-chain authenticity not established | **UNKNOWN — requires external verification** | Registry audit zero conflicts with affected vendor ranges; archive/provenance verification not completed | Install/build code can access available deployment credentials and alter static output. | Complete targeted patch review and registry/provenance checks; keep deployment credentials out of untrusted builds. |

## Advisory/version verification

### Node.js

The official [21 October security announcement](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases) fixes affected supported lines at **22.23.4, 24.22.1 and 26.12.1**. The local **24.8.0** is an older affected-line release. High issues include Brotli decoder memory corruption/RCE **CVE-2026-111497**, DNS NUL handling **CVE-2026-105482**, and TLS hostname validation **CVE-2026-106069 / CVE-2026-105483**. Exploitability depends on invoking the affected operation with malicious data; vulnerable runtime presence is not proof of exploitation. Other included HTTP, crypto, permission-model and dependency fixes are also covered by updating Node. See the [Node 24 release](https://nodejs.org/en/blog/release/v24.22.1) and [Node 22 release](https://nodejs.org/en/blog/release/v22.23.4).

Node can process remote data during dependency retrieval, telemetry and tool operations even though fonts/content are local. `@astrojs/telemetry/dist/post.js` uses global fetch. Treat developer/build patching as urgent; confirm the deployment builder separately. Production static file serving does not execute this project's Node dependencies.

### Undici: separately installed npm package

The following vendor-confirmed ranges contain **8.12.1** and are fixed in **8.12.2**:

| Official advisory | Affected 8.x range | Required behavior / contextual assessment |
| --- | --- | --- |
| [GHSA-xjj6-f33q-929c / CVE-2026-109869](https://github.com/nodejs/undici/security/advisories/GHSA-xjj6-f33q-929c), high | `>=8.0.0 <8.12.2` | Malicious fetch response causes process exit. Conditional build/tool outbound exposure. |
| [GHSA-qrxm-fqhp-jwvm / CVE-2026-87018](https://github.com/nodejs/undici/security/advisories/GHSA-qrxm-fqhp-jwvm), high | `>=8.0.0 <8.12.2` | Malicious TLS 1.2 renegotiation crashes client. Conditional outbound exposure. |
| [GHSA-2m5v-pch6-74hx / CVE-2026-109383](https://github.com/nodejs/undici/security/advisories/GHSA-2m5v-pch6-74hx), high | `>=8.0.0 <8.12.2` | Function-valued `tls` options lost by Agent. No such custom callback identified. |
| [GHSA-4w7w-5xrc-9h26 / CVE-2026-109829](https://github.com/nodejs/undici/security/advisories/GHSA-4w7w-5xrc-9h26), high | `>=8.0.0 <8.12.2` | Specific shared cache and redirect interceptor composition. No such composition identified. |
| [GHSA-4qv8-2p9j-2685](https://github.com/nodejs/undici/security/advisories/GHSA-4qv8-2p9j-2685), moderate | `>=8.0.0 <8.12.2` | EventSource parser exhaustion; not used by website. |
| [GHSA-f72v-6w45-q472](https://github.com/nodejs/undici/security/advisories/GHSA-f72v-6w45-q472), moderate | `>=8.0.0 <8.12.2` | Mixed-case integrity token bypass; no such use identified. |
| [GHSA-9fm3-97px-rjf6](https://github.com/nodejs/undici/security/advisories/GHSA-9fm3-97px-rjf6), moderate | `>=8.0.0 <8.12.2` | Undici WebSocket PONG buffering; no such client identified. |
| [GHSA-55wc-3pg8-jfw6](https://github.com/nodejs/undici/security/advisories/GHSA-55wc-3pg8-jfw6), moderate | `>=8.0.0 <8.12.2` | Decompress interceptor with throwing handler; no such composition identified. |

[GHSA-qq8j-7v2v-3rwp](https://github.com/nodejs/undici/security/advisories/GHSA-qq8j-7v2v-3rwp), high, affects `>=8.11.0 <8.11.2`: **8.12.1 is not affected**.

Installed `unifont/dist/index.mjs:880` conditionally imports Undici and installs a proxy dispatcher when HTTP(S) proxy variables exist. It otherwise uses global fetch, backed by Node's bundled implementation. Local font providers avoid configured font-CDN requests, but do not prove every tool operation is offline. Patching both the Node runtime and npm package addresses these distinct copies.

### Astro, Vite and adapters

| Official advisory | Vendor affected/fixed version | Comparison |
| --- | --- | --- |
| [Astro AVIF RCE GHSA-26w7-cxv4-gfx2](https://github.com/withastro/astro/security/advisories/GHSA-26w7-cxv4-gfx2), critical | Astro `<7.2.8`; fixed 7.2.8 requiring Sharp 0.35.4 | **7.3.8 / Sharp 0.35.5** beyond fixes. No untrusted image source/upload configured. |
| [Astro JSX/MDX XSS GHSA-98hj-9722-w3j8](https://github.com/withastro/astro/security/advisories/GHSA-98hj-9722-w3j8) | Astro `<7.3.2`; fixed 7.3.2 | **7.3.8** fixed; no MDX integration. |
| [Astro transition CSS GHSA-mpr7-6m5w-76rw](https://github.com/withastro/astro/security/advisories/GHSA-mpr7-6m5w-76rw) | `>=7.1.0 <=7.3.2`; fixed 7.3.3 | **7.3.8** fixed; no Astro View Transitions configured. |
| [Node adapter SSRF GHSA-m8p5-r7qv-cx4c](https://github.com/withastro/astro/security/advisories/GHSA-m8p5-r7qv-cx4c) | `@astrojs/node <=11.1.6`; fixed 11.1.7 | Package absent. |
| [Vite GHSA-rq7h-c2jc-7f22](https://github.com/vitejs/vite/security/advisories/GHSA-rq7h-c2jc-7f22), [GHSA-vfpm-58rq-9qcg](https://github.com/vitejs/vite/security/advisories/GHSA-vfpm-58rq-9qcg), [GHSA-9jrq-w75r-8gcw](https://github.com/vitejs/vite/security/advisories/GHSA-9jrq-w75r-8gcw) | Relevant 8.3 branch `8.3.0–8.3.2`; fixed 8.3.3 | **8.3.4** fixed. Development server issues, not static delivery. |
| [Vite WebSocket file read GHSA-p9ff-h696-f583](https://github.com/vitejs/vite/security/advisories/GHSA-p9ff-h696-f583), high | Relevant 8.x range `8.0.0–8.0.4`; fixed 8.0.5 | **8.3.4** outside affected range. |
| [Vite GHSA-8g5g-mxqh-grgj](https://github.com/vitejs/vite/security/advisories/GHSA-8g5g-mxqh-grgj), 21 October | 6.4.4; fixed 6.4.5 | **8.3.4** outside affected range. |

The [Astro vendor list](https://github.com/withastro/astro/security/advisories) also includes Netlify Image CDN allowlist issues **GHSA-4233-jc72-56c5 / GHSA-hp3v-mfqw-h74c**. `@astrojs/netlify` is absent, so no installed adapter version needs patching here; dashboard-installed adapters/plugins remain unverified. No new applicable high/critical advisory for sitemap/Tailwind was returned by npm audit; this is limited registry coverage, not exhaustive assurance. PHP/Next.js advisories were not mapped to unrelated packages because those technologies are absent.

## Dependency and supply-chain review

Direct locked/installed versions agree: Astro **7.3.8**, sitemap **3.7.4**, Tailwind and its Vite integration **4.3.3**, Inter/Space Grotesk/IBM Plex Mono font packages **5.3.0**, dev checker **0.9.10**, TypeScript **6.0.3**. Transitive Vite is **8.3.4**, Sharp **0.35.5**. All 301 present lockfile package locations checked match installed version metadata; remaining entries include platform-specific optional packages. File integrity was not independently revalidated.

All 382 resolved lock entries use HTTPS `registry.npmjs.org` and carry integrity hashes. No Git, local-link, tarball from another host, or unversioned remote resolution was found. The package named `github-slugger` is an ordinary registry package, not a Git dependency. Dependencies entered in the initial 14 October commit; no subsequent committed dependency/version changes were found.

Root scripts are only `astro dev`, `astro build`, `astro preview`, `astro check`, and `astro`. No root install/postinstall hook, curl-to-shell download, Git hook, CI workflow, remote-action reference or other build automation was found in source or reachable history. Thus there are no repository GitHub Actions permissions or action pins to correct; organization settings and external CI remain unknown.

Lock metadata flags only optional **fsevents 2.3.3** with an install script; its package is not installed on this Linux host, so the script body was not inspected. No installed dependency manifest declares `preinstall`, `install` or `postinstall`. Some published manifests include `prepare` scripts (e.g. Undici's Husky/platform helper); those are not normally run for registry tarball dependencies during consumer installation. Git/source installs would change that assessment. Native binaries/compiler bindings still execute during builds even without lifecycle hooks. Registry integrity pins bytes, not publisher trust.

## Secrets and production exposure

No secret candidate was emitted by the location/type-only scan for private keys, AWS key IDs, common provider/GitHub/npm tokens, JWTs, authenticated URLs, and credential assignments. No secret values were printed or sent to a service. Pattern scans have false negatives; no claim of comprehensive secret detection is made. Runtime-injected tooling credential stores were outside application scope and were not read.

Only application environment reference is **`SITE_URL`**, used for intentionally public URLs; `.env.example` contains a commented placeholder. No `PUBLIC_` variable references, `.env` secrets, tracked key files, token definitions, credential-bearing workflow, or sensitive files under `public/` were found. `.gitignore` excludes environment files other than the example, dependencies, generated output and logs. Ignoring files does not remove historical leaks; reachable history was scanned separately.

No public source maps are present in `public/`, and configuration does not enable production source maps. No `dist/` artifact was available, so generated bundles and deployed maps/files could not be checked. `public/` is copied into static output; it currently contains intended brand/media/favicon files and `.gitkeep` placeholders. The deployment **must publish only `dist/`**, never the repository root.

`set:html` appears in heading components and the features page, fed by repository-controlled strings. No user-controlled path to those sinks was identified. Keep CMS/request/user content escaped if introduced later. No current form/contact processing, authentication, admin page, dynamic CORS policy, proxy rewrite, or configured third-party runtime integration was found. Lemon Squeezy is only a comment describing a future checkout; its URL is null. Fonts are self-hosted. Embedded data-URI SVG textures and inline script/style use matter when designing CSP.

Repository evidence cannot establish HTTPS redirects, HSTS, CSP, `X-Content-Type-Options`, referrer policy, framing protection, DNS ownership, dangling domain records, preview access controls, Netlify Forms, account MFA, token scopes or installed integration privileges. There is no domain to assess. Do not infer these protections are missing merely because the host can set them outside Git.

## Immediate containment and minimal patch plan — proposed, not applied

1. **Before the next dependency install/build involving deployment credentials**, patch local Node **24.8.0 -> 24.22.1**, keeping its major version. Inspect actual CI logs/settings: if the builder uses Node 22, target **22.23.4**, then pin `.nvmrc` to that patch after approval. If CI actually uses 24, retain 24 and patch to **24.22.1** instead of silently switching majors. Update the documented baseline/engine requirement consistently. No PHP/Next.js upgrade or framework major upgrade is justified.
2. **Confirm hosting and credential boundaries now.** Verify the published commit, build command `npm run build`, publish directory `dist`, Node/npm versions and exact install command. Check deployed Functions/Edge Functions, plugins, snippets, redirects, previews and environment-variable scopes in Netlify. The source needs only optional public `SITE_URL`; investigate every additional production secret. Untrusted previews/builds should not receive deployment/admin credentials. If unknown server execution or exposed credentials are discovered, contain that specific surface promptly; revoke/rotate compromised credentials only with approval. No shutdown or blanket rotation is justified by current evidence.
3. **After review/approval**, update only transitive Undici **8.12.1 -> 8.12.2** in the lockfile through a targeted, script-disabled operation. Parent `unifont 0.7.5` allows `^8.0.0`, so no parent/framework major upgrade or permanent override is expected. Inspect the resulting diff and registry provenance/integrity before any installation. Undici 8.12.1 already requires Node `>=22.19.0`; the current root minimum 22.12.0 is therefore too permissive for this tree. Proposed patched Node versions satisfy the observed existing constraints; verify 8.12.2 metadata before approval to install. Do not run `npm audit fix`, delete/recreate the lockfile, or accept unrelated changes. Any package installation still requires explicit approval.
4. **Before launch**, reproduce builds using approved npm and lockfile (`npm ci` policy), restrict build credentials/plugins to necessary scope, and record deployment configuration. If headers are absent, introduce a reviewed CSP and standard headers in a separate minimal change. Account for the inline JS marker, generated styles, local fonts and `data:` images; a blind `script-src 'self'` policy would break inline behavior. Validate any HTTPS/HSTS policy against actual domain/subdomain use first. These hardening changes can wait until the runtime patch and deployment checks are resolved.

## Recommended post-patch verification

- Record Node/npm versions from the actual developer and deployment environments; verify installed Undici **8.12.2**, and that its dependency path remains the expected one. Review only intended manifest/lock/config diffs, preserving the pre-existing lockfile metadata change.
- Repeat script-disabled npm audit and compare with vendor advisory ranges even if the registry still reports zero. Validate artifact provenance/integrity for changed packages. An approved clean install/build should run without unnecessary secrets and with telemetry policy made explicit.
- After installation approval, run `npm run check` and `npm run build`; inspect `dist/` for HTML/CSS/JS/fonts, expected routes and robots/sitemap behavior. Confirm there is no server bundle, function artifact, source-map leak, environment file, private key, unexpected external script, or secret-bearing client asset. Preserve content, styling, links and redirect behavior. No browser/E2E test without separate permission.
- Obtain the production URL and a read-only settings/build-log review. Use ordinary HEAD/GET requests for TLS redirects, security headers, expected pages and known artifact paths; do not run exploit payloads or intrusive scans. Compare deployed commit and artifacts with the reviewed build. Inspect dashboard redirects, domain records and previews before declaring production unaffected.

**Do now:** review this plan, patch developer/build Node, and establish what is actually deployed and which credentials builds can access. **Next:** approve the single Undici patch and controlled verification. **Can wait:** CSP/header hardening until launch preparation. No evidence currently warrants taking the static website offline, rotating credentials, or upgrading Astro to another major version.
