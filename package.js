Package.describe({
	name: 'kenken:meteor-counters',
	summary: 'A simple counter collection to keep number sequencing.',
	version: '1.1.0',
	git: 'https://github.com/kenken17/meteor-counters'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	// Meteor dependencies
	api.use('mongo');
	api.use('underscore');

	// Both client and server file
	api.addFiles('lib/counters.js');

	if (api.export) {
		api.export('MCounters');
	}
});

Package.onTest(function(api) {
	api.use(['mike:mocha-package@0.5.6', "practicalmeteor:chai"]);
	api.use('kenken:meteor-counters');

	api.addFiles('tests/counters-tests.js', ['server', 'client']);
});
