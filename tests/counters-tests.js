describe('MCounters', function() {
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

	// setup
	before(function(done) {
		if (Meteor.isServer) {
			Meteor.Counters.remove({});
		}

		done();
	});

	// Tear down
	after(function(done) {
		if (Meteor.isServer) {
			Meteor.Counters.remove({});
		}

		done();
	});

	it('should export the MCounter module.', function(done) {
		expect(MCounters.getNextSequence).to.be.a('function');

		done();
	});

	it('should get the seq no. 1 when first call', function(done) {
		var seq = MCounters.getNextSequence('myCollection');

		expect(seq).equal(1);

		done();
	});

	it('should get the seq no. 2 when second call', function(done) {
		var seq = MCounters.getNextSequence('myCollection');

		expect(seq).equal(2);

		done();
	});
});