/*! angular-font-chart - v0.9.12 - 2014-06-27
* Copyright (c) 2014 ; Licensed  */
'use strict';

var fc = angular.module('ngFontChart', []);

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
			extraClass: '&'
		},
		template: '<div><div class="ngfontchart icon background-transition-slow {{font}}"></div><ng-odometer class="value" value="value"></ng-odometer></div>',
		link: function(scope, element) {
			angular.element(element.children()[0]).css('background-position','0px '+scope.value+'%');
			angular.element(element.children()[0]).css('background-image', 'linear-gradient(to top, '+scope.startColor+' 0px, '+scope.startColor+' 50%, '+scope.endColor+' 50%, '+scope.endColor+' 100% )');

			angular.element(element.children()[1]).css('background', scope.endColor);
			angular.element(element.children()[1]).css('color', '#ffffff');

			scope.$watch('value', function(value) {
				if ( value != null ) {
					angular.element(element.children()[0]).css('background-position','0px '+value+'%');
				}
			});
		}
	};
});