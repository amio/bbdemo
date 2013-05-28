define(['jquery', 'underscore', 'backbone'], function ($, _, B) {
    'use strict';

    var BaseView = B.View.extend({
        tagName: 'div',

        renderPage: function (opt) {
            // todo: render page frame first, then load page content.

            var router = window.appRouter,
                isBack = opt && opt.isBack,
                toView = this,
                fromView = isBack ? opt.from : router.getCurrentPageView();

            toView.$el.addClass('page').appendTo('#wrapper');
            toView.$el.position();

            // Rebind events when do back
            if (isBack) {
                toView.delegateEvents();
            }

            if (this.supportAnimation() && fromView) {
                var animName = isBack ? 'slideright' : 'slideleft';
                toView.doSlide(fromView, toView, animName, function (fromView, toView) {
                    fromView.remove();
                });
            } else {
                fromView && fromView.remove();
            }

        },

        supportAnimation: function () {
            // TODO: check if allow animation
            return true;
        },

        /**
         * Do Slide Animation with current page view and new page view
         * @param fromPageView {Backbone.View}
         * @param toPageView {Backbone.View}
         * @param animationName {String}
         * @param callback {Function}
         */
        doSlide: function (fromPageView, toPageView, animationName, callback) {
            var fromEl = fromPageView.$el,
                toEl = toPageView.$el;

            fromEl.one('webkitAnimationEnd animationend', function () {
                fromEl.removeClass(animationName + ' out');
                toEl.removeClass(animationName + ' in');
                callback(fromPageView, toPageView);
            });

            fromEl.addClass(animationName + ' out');
            toEl.removeClass('pending').addClass(animationName + ' in');
        }
    });

    return BaseView;
});