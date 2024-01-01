const resource = [
  /* --- CSS --- */
  '/technical/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/technical/app.js',
  '/technical/sw.js',

  /* --- HTML --- */
  '/technical/index.html',
  '/technical/404.html',

  
    '/technical/tabs/about.html',
  
    '/technical/tabs/categories.html',
  
    '/technical/tabs/tags.html',
  
    '/technical/tabs/archives.html',
  
    '/technical/tabs/repositories.html',
  
    '/technical/tabs/status-checks.html',
  
    '/technical/tabs/resources.html',
  
    '/technical/tabs/links.html',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/technical/assets/js/dist/categories.min.js',
    '/technical/assets/js/dist/commons.min.js',
    '/technical/assets/js/dist/home.min.js',
    '/technical/assets/js/dist/misc.min.js',
    '/technical/assets/js/dist/page.min.js',
    '/technical/assets/js/dist/post.min.js'
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

