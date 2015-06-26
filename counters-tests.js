describe('MCounters', function() {
	it('should export the MCounter module.', function() {
		expect(MCounters).to.be.an('object');
	});

	it('show getNextSequence is a function', function() {
		expect(MCounters.getNextSequence).to.be.a('function');
	});

	describe('getNextSequence', function() {
		if (Meteor.isServer) {
			it('should get the seq no. 1 when first call', function(done) {
				var seq = MCounters.getNextSequence('myCollection1');

				expect(seq).equal(1);

				done();
			});

			it('should get the seq no. 2 when second call', function(done) {
				var seq = MCounters.getNextSequence('myCollection1');

				expect(seq).equal(2);

				done();
			});

			// tear down
			Meteor.Counters.remove({});
		}
	});

	it('show setSequence is a function', function() {
		expect(MCounters.setSequence).to.be.a('function');
	});

	describe('setSequence', function() {
		if (Meteor.isServer) {
			it('should set the seq no. 100 and get back 100', function(done) {
				var seq = MCounters.setSequence('myCollection', 100);

				expect(seq).equal(100);

				done();
			});

			// tear down
			Meteor.Counters.remove({});
		}
	});

	it('show checkNextSequence is a function', function() {
		expect(MCounters.checkNextSequence).to.be.a('function');
	});

	describe('checkNextSequence', function() {
		if (Meteor.isServer) {
			it('should return the seq no. 1 when first call', function(done) {
				var seq = MCounters.checkNextSequence('myCollection2');

				expect(seq).equal(1);

				done();
			});

			it('should return the seq no. 101 when collection has already setup and with 100 in it', function(done) {
				// set the sequence to 100
				MCounters.setSequence('myCollection2', 100);

				var seq = MCounters.getNextSequence('myCollection2');

				expect(seq).equal(101);

				done();
			});

			// tear down
			Meteor.Counters.remove({});
		}
	});
});