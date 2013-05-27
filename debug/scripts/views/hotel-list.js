/**
 * Hotel List View
 */

define([
    'underscore',
    'backbone',
    'views/base-page-view',
    'text!templates/hotel-list.html'
], function (_, B, BasePageView, hotelListTmpl) {
    'use strict';

    var IndexView = BasePageView.extend({
        className: 'hotel-list-view',
        initialize: function (args) {
            this.render(args);
        },
        render: function (renderArgs) {
            this.$el.html(_.template(hotelListTmpl)(renderArgs));

            // Render to page wrapper
            this.renderPage();
            return this;
        }
    });

    return IndexView;
});