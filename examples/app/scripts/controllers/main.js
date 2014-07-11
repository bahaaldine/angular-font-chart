'use strict';

/**
 * @ngdoc function
 * @name angularFontChartPagesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFontChartPagesApp
 */
var angularFontChart = angular.module('angularFontChartPagesApp');

angularFontChart.controller('bodyCtrl', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.getRandomValue = function(theme, chart){
      var themeIndex = theme;
      var chartIndex = chart;
      $timeout(function() {
        $scope.themes[themeIndex].charts[chartIndex].value = Math.floor(Math.random()*100);
        $scope.getRandomValue(themeIndex, chartIndex);
      }, 4000);
    };

    $scope.themes = [{
      title: 'Social',
      charts:[{
        font: 'fa-facebook',
        value: $scope.getRandomValue(0,0),
        startColor: '#3b5998'
      },{
        font: 'fa-twitter',
        value: $scope.getRandomValue(0,1),
        startColor: '#00abed'
      },{
        font: 'fa-google-plus',
        value: $scope.getRandomValue(0,2),
        startColor: '#d1002d'
      },{
        font: 'fa-linkedin',
        value: $scope.getRandomValue(0,3),
        startColor: '#0274b3'
      },{
        font: 'fa-pinterest',
        value: $scope.getRandomValue(0,4),
        startColor: '#ca2128'
      }]
    },{
      title: 'Mobile',
      charts:[{
        font: 'fa-android',
        value: $scope.getRandomValue(1,0),
        startColor: '#98cb02'
      },{
        font: 'fa-apple',
        value: $scope.getRandomValue(1,1),
        startColor: '#000000'
      },{
        font: 'fa-windows',
        value: $scope.getRandomValue(1,2),
        startColor: '#00bdee'
      },{
        font: 'fa-linux',
        value: $scope.getRandomValue(1,3),
        startColor: '#fed032'
      }]
    },{
      title: 'File',
      charts:[{
        font: 'fa-file-excel-o',
        value: $scope.getRandomValue(2,0),
        startColor: '#0d780d'
      },{
        font: 'fa-file-word-o',
        value: $scope.getRandomValue(2,1),
        startColor: '#2e599d'
      },{
        font: 'fa-file-pdf-o',
        value: $scope.getRandomValue(2,2),
        startColor: '#bb0706'
      },{
        font: 'fa-file-photo-o',
        value: $scope.getRandomValue(2,3),
        startColor: '#d56703'
      },{
        font: 'fa-file-video-o',
        value: $scope.getRandomValue(2,4),
        startColor: '#0b0b0b'
      }]
  	}];

}]);

angularFontChart.directive('background', ['$timeout', function($timeout) {
	return function(scope, elm) {
		var colors = ['#d35400', '#2c3e50', '#1abc9c', '#2980b9', '#7f8c8d', '#f1c40f', '#d35400', '#27ae60'];
		scope.updateBackgroud = function(){
			$timeout(function() {
				elm.css('background', colors[Math.floor(Math.random()*8)]);
				scope.updateBackgroud();
			}, 4000);
		};
		scope.updateBackgroud();
	};
}]);