/* Global Require */

require.config({
    baseUrl: 'scripts',
    paths: {
        jquery: '../components/jquery/jquery',
        backbone: '../components/backbone-amd/backbone',
        underscore: '../components/underscore-amd/underscore',
        text: '../components/requirejs-text/text'
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