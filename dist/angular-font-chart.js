/*! angular-font-chart - v0.9.21 - 2015-02-18
* Copyright (c) 2015 ; Licensed  */
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
		template: '<div><div class="ngfontchart icon background-transition-slow {{font}}"></div><ng-odometer class="value" value="value"></ng-odometer><span class="ng-odometer-symbol">{{symbol}}</span></div>',
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