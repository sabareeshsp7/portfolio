import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_BeBR8kWV.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DiXnNfwt.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/astro/","cacheDir":"file:///C:/astro/node_modules/.astro/","outDir":"file:///C:/astro/dist/","srcDir":"file:///C:/astro/src/","publicDir":"file:///C:/astro/public/","buildClientDir":"file:///C:/astro/dist/client/","buildServerDir":"file:///C:/astro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"home/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/home","isIndex":false,"type":"page","pattern":"^\\/home\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home.astro","pathname":"/home","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.10.1_@types+node@24_78968cd9c09c7d2c2f43fbb8bec22421/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.js","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/astro/src/pages/home.astro",{"propagation":"none","containsHead":true}],["C:/astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/contact@_@js":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/home@_@astro":"pages/home.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.10.1_@types+node@24_78968cd9c09c7d2c2f43fbb8bec22421/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/astro/node_modules/.pnpm/astro@5.10.1_@types+node@24_78968cd9c09c7d2c2f43fbb8bec22421/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_dfA-LqrA.mjs","\u0000@astrojs-manifest":"manifest_C-hntqpI.mjs","C:/astro/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.CUAdB9uK.js","C:/astro/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.DyIOsDOn.js","C:/astro/src/components/Roadmap.astro?astro&type=script&index=0&lang.ts":"_astro/Roadmap.astro_astro_type_script_index_0_lang.HfO5jxm4.js","C:/astro/src/components/Projects.astro?astro&type=script&index=0&lang.ts":"_astro/Projects.astro_astro_type_script_index_0_lang.DW50gxsZ.js","C:/astro/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.12U4IktA.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/astro/src/components/Header.astro?astro&type=script&index=0&lang.ts","function l(){const e=document.getElementById(\"mobile-menu\"),t=document.getElementById(\"mobile-menu-button\");e&&t&&(e.classList.contains(\"active\")?(e.classList.remove(\"active\"),t.setAttribute(\"aria-expanded\",\"false\")):(e.classList.add(\"active\"),t.setAttribute(\"aria-expanded\",\"true\")))}function i(){const e=document.getElementById(\"mobile-menu\"),t=document.getElementById(\"mobile-menu-button\");e&&t&&(e.classList.remove(\"active\"),t.setAttribute(\"aria-expanded\",\"false\"))}window.toggleMobileMenu=l;window.closeMobileMenu=i;let o=window.scrollY;window.addEventListener(\"scroll\",()=>{const e=document.querySelector(\"header\"),t=window.scrollY;e&&(t>o&&t>100?e.style.transform=\"translateY(-100%)\":e.style.transform=\"translateY(0)\",t>50?(e.classList.add(\"bg-gray-900/98\"),e.classList.remove(\"bg-gray-900/95\")):(e.classList.add(\"bg-gray-900/95\"),e.classList.remove(\"bg-gray-900/98\"))),o=t});document.addEventListener(\"click\",e=>{const t=document.getElementById(\"mobile-menu\"),n=document.getElementById(\"mobile-menu-button\"),s=e.target;t&&n&&s&&!n.contains(s)&&!t.contains(s)&&i()});"],["C:/astro/src/components/Contact.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){function E(){return new Promise(e=>{if(typeof window.emailjs<\"u\"){e(!0);return}const o=document.createElement(\"script\");o.src=\"https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js\",o.onload=()=>{setTimeout(()=>{typeof window.emailjs<\"u\"?(window.emailjs.init(\"7tb2hqb09a3qd6DDK\"),console.log(\"✅ EmailJS loaded and initialized\"),e(!0)):(console.error(\"❌ EmailJS failed to load\"),e(!1))},200)},document.head.appendChild(o)})}E().then(()=>{console.log(\"🚀 EmailJS ready for contact form\")});const d=document.getElementById(\"contact-form\"),r=document.getElementById(\"submit-btn\"),c=document.getElementById(\"btn-text\"),m=document.getElementById(\"btn-icon\"),f=document.getElementById(\"btn-spinner\"),t=document.getElementById(\"success-modal\"),n=document.getElementById(\"error-modal\"),i=document.getElementById(\"close-modal\"),a=document.getElementById(\"close-error-modal\"),u=document.getElementById(\"error-message\");if(!d||!r||!c||!m||!f||!t||!n||!i||!a||!u){console.error(\"Contact form: Some required elements not found\");return}d.addEventListener(\"submit\",async function(e){e.preventDefault(),r.disabled=!0,c.textContent=\"Sending...\",m.classList.add(\"hidden\"),f.classList.remove(\"hidden\");const o=new FormData(d),g={name:o.get(\"name\"),email:o.get(\"email\"),subject:o.get(\"subject\")||\"Portfolio Contact\",message:o.get(\"message\")};console.log(\"📧 Attempting to send email...\",g);try{if(typeof window.emailjs>\"u\")throw console.error(\"❌ EmailJS not loaded\"),new Error(\"EmailJS not loaded. Please refresh the page and try again.\");console.log(\"📧 EmailJS is available, sending email...\"),console.log(\"🔑 Using Service ID: service_j37vj2v\"),console.log(\"📝 Using Template ID: template_0f8yi3r\"),console.log(\"📧 Sending to: sabareeshsp7@gmail.com\");const s=await window.emailjs.send(\"service_j37vj2v\",\"template_0f8yi3r\",g);console.log(\"✅ Email sent successfully!\",s),console.log(\"📧 Email delivered to: sabareeshsp7@gmail.com\"),y(),d.reset()}catch(s){console.error(\"❌ EmailJS Error Details:\",s),s&&s.text&&console.error(\"❌ EmailJS Error Message:\",s.text);let l=\"Failed to send email via EmailJS. \";s instanceof Error&&(s.message.includes(\"not loaded\")?l+=\"Email service not ready. Please refresh and try again. \":s.message.includes(\"network\")?l+=\"Network error. Please check your internet connection. \":l+=`Error: ${s.message}. `),l+=\"You can contact me directly at sabareeshsp7@gmail.com\",h(l)}finally{r.disabled=!1,c.textContent=\"Send Message\",m.classList.remove(\"hidden\"),f.classList.add(\"hidden\")}});function y(){if(!t)return;t.classList.remove(\"hidden\"),t.classList.add(\"flex\",\"modal-enter\");const e=t.querySelector(\"div\");e&&e.classList.add(\"modal-content-enter\")}function h(e){if(!n||!u)return;u.textContent=e,n.classList.remove(\"hidden\"),n.classList.add(\"flex\",\"modal-enter\");const o=n.querySelector(\"div\");o&&o.classList.add(\"modal-content-enter\")}i.addEventListener(\"click\",function(){t&&(t.classList.add(\"hidden\"),t.classList.remove(\"flex\",\"modal-enter\"))}),a.addEventListener(\"click\",function(){n&&(n.classList.add(\"hidden\"),n.classList.remove(\"flex\",\"modal-enter\"))}),t.addEventListener(\"click\",function(e){e.target===t&&i&&i.click()}),n.addEventListener(\"click\",function(e){e.target===n&&a&&a.click()}),document.addEventListener(\"keydown\",function(e){e.key===\"Escape\"&&(t&&!t.classList.contains(\"hidden\")&&i&&i.click(),n&&!n.classList.contains(\"hidden\")&&a&&a.click())})});"]],"assets":["/_astro/home.D34GTYhB.css","/emailjs-setup-helper.html","/favicon.svg","/final-email-test.html","/sabari.png","/sabarii.png","/test-contact-form.html","/test-image.html","/_astro/Hero.astro_astro_type_script_index_0_lang.DyIOsDOn.js","/_astro/index.JaPjl0MY.js","/_astro/Projects.astro_astro_type_script_index_0_lang.DW50gxsZ.js","/_astro/Roadmap.astro_astro_type_script_index_0_lang.HfO5jxm4.js","/home/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"jqy8GrCtjASYq1qhkMsEDY5G2SralCtYVXWm+8Crxeg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
