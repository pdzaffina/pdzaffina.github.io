
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/peter/projects/pdzaffina.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/peter/projects/pdzaffina.github.io/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/peter/projects/pdzaffina.github.io/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/home/peter/projects/pdzaffina.github.io/src/pages/index.js")),
  "component---src-pages-new-home-js": preferDefault(require("/home/peter/projects/pdzaffina.github.io/src/pages/new-home.js"))
}

