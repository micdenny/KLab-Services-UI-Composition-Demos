/* global angular */
(function () {

    angular.module('app.sales')
        .directive('productShowcasePrice', ['$log',
            function($log) {
                $log.debug('productShowcasePrice directive');
            
                return {
                    restrict: 'E',
                    scope: {
                        product: '=',
                    },
                    templateUrl: '/app/modules/sales/components/productShowcasePrice.html'
                };
        }]);

}())