Tinytest.add('MCounters Exports', function(test) {
	test.isNotUndefined(MCounters, 'MCounters is exported.');
});

Tinytest.add('getNextSequence', function(test) {

	Meteor.Counters.remove({});

	// setup
	Meteor.Counters.allow({
		insert: function() {
			console.log('-------------------insert-------------------');
			return true;
		},

		update: function() {
			console.log('-------------------update-------------------');
			return true;
		},

		remove: function() {
			console.log('-------------------remove-------------------');
			return true;
		}
	});

	// 1.
	test.equal('function', typeof MCounters.getNextSequence, 'MCounters.getNextSequence is a function.');

	var seq = MCounters.getNextSequence('myCollection');

	// 2.
	test.equal(seq, 1, 'First call should get 1.');

	seq = MCounters.getNextSequence('myCollection');

	// 3.
	test.equal(seq, 2, 'Second call should get 2.');

	// Tear down
	Meteor.Counters.remove({});
});
