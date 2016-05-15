(function() {
	'use strict';

	angular.module('appName')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Application = {
				name: 'application',
				abstract: true,
				views : {
					// Wrapping view
					'application': {
						templateUrl: 'modules/_application/application.template.html'
					},
					// Topbar
					'topbar@application': {
						templateUrl: 'modules/shared/topbar/topbar.template.html',
						controller: 'Topbar',
						controllerAs: 'topbar'
					}
				}
			};


			$stateProvider.state(Application);
		});
})();