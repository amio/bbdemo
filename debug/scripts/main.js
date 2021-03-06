/* Global Require */

require.config({
    baseUrl: 'scripts',
    shim: {
        zepto: {
            exports: 'Zepto'
        }
    },
    paths: {
        zepto: '../components/zepto/zepto',
        backbone: '../components/backbone-amd/backbone',
        underscore: '../components/underscore-amd/underscore',
        text: '../components/requirejs-text/text'
    },
    map: {
        // Ensure Zepto is used instead of jQuery.
        '*': { 'jquery': 'zepto' }
    },

    // For r.js build
    deps: [
        'views/base-page-view',
        'views/index',
        'views/hotel',
        'views/hotel-list'
    ]
});

require(['backbone', 'app-router'], function (B, AppRouter){
    window.appRouter = new AppRouter();
    B.history.start();
});