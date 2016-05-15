(function () {
	'use strict';

	angular
		.module('appName')
		.controller('Index', Index);

	/* @ngInject */
	function Index() {
		/*jshint validthis: true */
		var vm 		= this;

		activate();

		function activate() {
			console.log('test');
		}

	}

})();
