import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B-DFS1tT.mjs';
import { manifest } from './manifest_C-hntqpI.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/home.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.10.1_@types+node@24_78968cd9c09c7d2c2f43fbb8bec22421/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.js", _page1],
    ["src/pages/home.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "43d7d663-86a5-4146-85d8-437909486fd9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
