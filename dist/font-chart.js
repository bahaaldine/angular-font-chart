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
	    	endColor: '@'
	    },
	    template: '<div class="ngfontchart icon background-transition-slow {{font}}"></div>',
		link: function(scope, element, attrs) {
			element.css('background-position','0px '+scope.value+'%')
			element.css('background-image', 'linear-gradient(to top, '+scope.startColor+' 0px, '+scope.startColor+' 50%, '+scope.endColor+' 50%, '+scope.endColor+' 100% )')
			scope.$watch('value', function(value) {
				if ( value != null ) {
					element.css('background-position','0px '+value+'%')
				}
			});
		}
	}
});