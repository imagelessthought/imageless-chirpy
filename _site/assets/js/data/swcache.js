const resource = [
  /* --- CSS --- */
  '/main/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/main/app.js',
  '/main/sw.js',

  /* --- HTML --- */
  '/main/index.html',
  '/main/404.html',

  
    '/main/tabs/about.html',
  
    '/main/tabs/categories.html',
  
    '/main/tabs/tags.html',
  
    '/main/tabs/archives.html',
  
    '/main/tabs/repositories.html',
  
    '/main/tabs/status-checks.html',
  
    '/main/tabs/resources.html',
  
    '/main/tabs/links.html',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/main/assets/js/dist/categories.min.js',
    '/main/assets/js/dist/commons.min.js',
    '/main/assets/js/dist/home.min.js',
    '/main/assets/js/dist/misc.min.js',
    '/main/assets/js/dist/page.min.js',
    '/main/assets/js/dist/post.min.js'
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

