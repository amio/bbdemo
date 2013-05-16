/**
 * Global Config
 * Date: 4/27/13
 */
define([], function (){
    'use strict';

    function getBrowserPlatform(){
        // TODO: getBrowserPlatform. (android/ios/else)
        return 'ios';
    }

    return {
        userAgent: navigator.userAgent,
        platform: getBrowserPlatform(),

        serverURL: 'http://www.example.com/rest'
    };
});
