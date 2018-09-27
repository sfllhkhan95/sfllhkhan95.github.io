// importScripts('/webapp/cache-polyfill.js');

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('airhorner').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',

                '/css/blog-post.css',
                '/css/cat.css',
                '/css/modal.css',
                '/css/rain.css',
                '/css/navigation.css',
                '/css/new-age.css',
                '/css/portfolio.css',
                '/css/theme.css',

                '/js/navigation.js',
                '/js/new-age.js',
                '/js/new-age.min.js',
                '/js/rain.js',
                '/js/script.js',

                '/img/app-store-badge.svg',
                '/img/google-play-badge.svg',

                '/img/bg-cta.jpg',
                '/img/bg-pattern.png',
                '/img/bg.png',
                '/img/button.png',
                '/img/callout.jpg',
                '/img/loading.gif',
                '/img/me.jpg',
                '/img/pattern-bg.png',
                '/img/portfolio-apps.jpg',
                '/img/portfolio-games.jpg',
                '/img/portfolio-graphics.jpg',
                '/img/portfolio-libs.gif',
                '/img/portfolio-publications.jpg',
                '/img/portfolio-web.jpg',

                '/resume/index.html',
                '/resume/js/scripts.js',
                '/resume/js/stickyfill.min.js',
                '/resume/js/theia-sticky-sidebar.js',
                '/resume/css/style.css',

                '/resume/courses/bese/index.html',
                '/resume/courses/bese/css/style.css',
                '/resume/courses/bese/img/fyp.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});