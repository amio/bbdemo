/* Global Require */

require.config({
    shim: {
        _: {
            exports: '_'
        },
        B: {
            deps: [
                '_',
                '$'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        $: '../components/jquery/jquery',
        B: '../components/backbone-amd/backbone',
        _: '../components/underscore-amd/underscore',
        'text': '../components/requirejs-text/text',
        // base components
        'BC': 'controllers/base-controller',
        'BPV': 'views/base-page-view'
    }
});

require(['$', '_', 'B', 'app-router'], function ($, _, B, AppRouter){
    window.appRouter = new AppRouter();
    B.history.start();
});