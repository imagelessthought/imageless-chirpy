const resource = [
  /* --- CSS --- */
  '/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/app.js',
  '/sw.js',

  /* --- HTML --- */
  '/index.html',
  '/404.html',

  
    '/tabs/about.html',
  
    '/tabs/categories.html',
  
    '/tabs/tags.html',
  
    '/tabs/archives.html',
  
    '/tabs/repositories.html',
  
    '/tabs/status-checks.html',
  
    '/tabs/resources.html',
  
    '/tabs/links.html',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/assets/js/dist/categories.min.js',
    '/assets/js/dist/commons.min.js',
    '/assets/js/dist/home.min.js',
    '/assets/js/dist/misc.min.js',
    '/assets/js/dist/page.min.js',
    '/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

