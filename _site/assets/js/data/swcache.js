const resource = [
  /* --- CSS --- */
  '/jekyll/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/jekyll/app.js',
  '/jekyll/sw.js',

  /* --- HTML --- */
  '/jekyll/index.html',
  '/jekyll/404.html',

  
    '/jekyll/tabs/about.html',
  
    '/jekyll/tabs/categories.html',
  
    '/jekyll/tabs/tags.html',
  
    '/jekyll/tabs/archives.html',
  
    '/jekyll/tabs/repositories.html',
  
    '/jekyll/tabs/status-checks.html',
  
    '/jekyll/tabs/resources.html',
  
    '/jekyll/tabs/links.html',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/jekyll/assets/js/dist/categories.min.js',
    '/jekyll/assets/js/dist/commons.min.js',
    '/jekyll/assets/js/dist/home.min.js',
    '/jekyll/assets/js/dist/misc.min.js',
    '/jekyll/assets/js/dist/page.min.js',
    '/jekyll/assets/js/dist/post.min.js'
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

