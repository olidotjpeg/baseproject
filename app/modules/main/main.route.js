(function() {
	'use strict';

	angular.module('appName')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.main',
				url: '/',
				views: {
					'main@application': {
						templateUrl: 'modules/main/index/index.template.html',
						controller: 'Index',
						controllerAs: 'index'
					}
				}
			};

			$stateProvider.state(Index);
		});
})();
