/**
 * Main Router
 * Date: 4/17/13
 */
define(['jquery', 'underscore', 'backbone'], function ($, _, B) {
    'use strict';

    var AppRouter = B.Router.extend({

        routes: {
            '': 'index',
            'hotels/:city/:date': 'hotel-list',
            'hotel/:id': 'hotel'
        },

        initialize: function () {
            this.bindRoutes();

            // expose AppRouter
            return this;
        },

        /**
         * ROUTES
         */

        bindRoutes: function () {
            _.each(this.routes, function (name, path) {
                this.route(path, name, function () {
                    var args = this.parseRouteArgs(path, arguments);

                    if (this.isBack()) {
                        this.doBack(args);
                        return;
                    }

                    // make page views for path
                    require(['views/' + name], function (View) {
                        var newPageView = new View(args);
                        window.appRouter.historyPages.push({
                            hash: B.history.fragment,
                            view: newPageView
                        });
                    });
                });
            }, this);
        },
        parseRouteArgs: function (path, segments) {
            var keys = path.match(/:\w+/g),
                args = {};

            _.each(keys, function (key, index) {
                args[key.substring(1)] = segments[index];
            });

            return args;
        },

        /**
         * HISTORY LOG & PAGE CACHE
         */

        historyPages: [],
        getCurrentPageView: function () {
            return this.historyPages.length ? _.last(this.historyPages).view : undefined;
        },
        isBack: function () {
            var history = this.historyPages;

            for (var i = history.length; i--;) {
                if (history[i].hash === B.history.fragment) {
                    return true;
                }
            }
            return false;
        },
        doBack: function (args) {
            var history = window.appRouter.historyPages,
                fromPage = history.pop(),
                toPage = _.last(history);

            while (toPage.hash !== B.history.fragment) {
                history.pop();
                toPage = _.last(history);
            }
            toPage.view.renderPage({
                isBack: true,
                from: fromPage.view
            });
        }

    });
    return AppRouter;
});