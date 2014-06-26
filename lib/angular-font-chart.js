'use strict';

var fc = angular.module('ngFontChart', []);

fc.directive('ngFontChart', function() {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		scope:{
			value: '@',
			font: '@',
			startColor: '@',
			endColor: '@',
			extraClass: '&'
		},
		template: '<div><div class="ngfontchart icon background-transition-slow {{font}}"></div><odometer class="value" value="value"></odometer></div>',
		link: function(scope, element) {
			angular.element(element.children()[0]).css('background-position','0px '+scope.value+'%');
			angular.element(element.children()[0]).css('background-image', 'linear-gradient(to top, '+scope.startColor+' 0px, '+scope.startColor+' 50%, '+scope.endColor+' 50%, '+scope.endColor+' 100% )');

			angular.element(element.children()[1]).css('background', scope.startColor);
			angular.element(element.children()[1]).css('color', '#ffffff');

			scope.$watch('value', function(value) {
				if ( value != null ) {
					angular.element(element.children()[0]).css('background-position','0px '+value+'%');
				}
			});
		}
	};
});