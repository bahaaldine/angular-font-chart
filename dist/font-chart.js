'use strict';

var fc = angular.module('ngFontChart', []);

fc.directive('ngFontChart', function() {
	return {
		restrict: 'A',
		scope:{
			iconFill: '='
		},
		link: function(scope, element, attrs) {
			scope.$watch('iconFill', function(value) {
				if ( value != null ) {
					element.css('background-position','0px '+value+'%')
				}
			});
		}
	}
});