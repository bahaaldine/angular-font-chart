[![Build Status](https://travis-ci.org/bahaaldine/angular-facebook-font.svg?branch=master)](https://travis-ci.org/bahaaldine/angular-facebook-font)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

# Angular Font Chart
===========

angular-font-chart lets you create awesome charts based on:
- Font Awesome http://fortawesome.github.io/Font-Awesome/
- Hubsopt odometer http://github.hubspot.com/odometer/

## Demo page

http://bahaaldine.github.io/angular-font-chart

## Installation

Install depedencies using bower: 
```
bower install angular-font-chart
```

Add js libraries to your application:
```html
	...
	<script src="bower_components/angular-font-chart/dist/angular-font-chart.js"></script>
    <script src="bower_components/odometer/odometer.min.js"></script>
    ...
```

Add css stylesheets to your application:
```html
	<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="bower_components/angular-font-chart/dist/css/angular-font-chart.css"/>
    <link rel="stylesheet" href="bower_components/odometer/themes/odometer-theme-minimal.css"/>
```

Add ngFontChart module to you application
```javascript
	...
	angular
	  .module('myAwesomeApp', [
	    ...
	    'ngFontChart',
	    ...
	  ])
	...
```

## Usage

All you need is to place a ngFontChart with its attribute in your view like the following piece of code:
```javascript
	...
		<ng-font-chart 
	      font="fa facebook"
	      value="23"
	      start-color="#3b5998"
	      end-color="rgba(255,255,255, 0.8)">
	    </ng-font-chart> 
	...
```
`value`: the actual chart value, can be dynamically set through controller scope variable, e.g. : `value="{{myScopeVariable}}"`. The value can also be refresh, the transition from one value to the other will be automatically done.

`start-color`: the start-color is the chart fill color. It's often related to the font awesome icon you are using. The color in the example is the Facebook color.

`end-color`: the end-color is the chart background color.


## Brower compatibility

Chrome: 35
Safari: 7
