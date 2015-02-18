'use strict';

var fc = angular.module('ngFontChart', ['ngOdometer']);

fc.directive('ngFontChart', function() {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		scope:{
			value: '=',
			font: '@',
			startColor: '@',
			endColor: '@',
			extraClass: '&',
			symbol: '@'
		},
		template: '<div><div class="ngfontchart icon background-transition-slow {{font}}"></div><ng-odometer class="value" value="value"></ng-odometer></div><span class="ng-odometer-symbol">{{symbol}}</span>',
		link: function(scope, element) {
			angular.element(element.children()[0]).css('background-position','0px '+scope.value+'%');
			angular.element(element.children()[0]).css('background-image', 'linear-gradient(to top, '+scope.startColor+' 0px, '+scope.startColor+' 50%, '+scope.endColor+' 50%, '+scope.endColor+' 100% )');
			scope.$watch('value', function(value) {
				if ( value != null ) {
					angular.element(element.children()[0]).css('background-position','0px '+value+'%');
				}
			});
		}
	};
});