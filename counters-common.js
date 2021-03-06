if (!Meteor.Counters) {
	Meteor.Counters = new Mongo.Collection('MCounters');
}

MCounters = MCounters || {};

MCounters.getNextSequence = function(collection) {
	// if collection doesn't exist, create the first sequence with 1 and return it
	var counter = Meteor.Counters.findOne({collection: collection});

	if (!counter) {
		Meteor.Counters.insert({
			collection: collection,
			seq: 1
		});

		return 1;
	} else {
		// get the current seq
		var currentSeq = counter.seq;

		Meteor.Counters.update({
			collection: collection
		}, {
			$inc: {seq: 1}
		});

		// check the seq is indeed increase by one?
		var newSeq = Meteor.Counters.findOne({collection: collection}).seq;

		if (newSeq === currentSeq + 1) {
			return newSeq;
		} else {
			throw Meteor.Error('Sequence not match');
		}
	}
};

MCounters.setSequence = function(collection, seq) {
	Meteor.Counters.upsert({
		collection: collection
	}, {
		$set: {
			seq: seq
		}
	});

	return Meteor.Counters.findOne({collection: collection}).seq;
};

MCounters.checkNextSequence = function(collection) {
	// if collection doesn't exist, create the first sequence with 1 and return it
	var counter = Meteor.Counters.findOne({collection: collection});

	if (!counter) {
		return 1;
	} else {
		// return current sequence + 1
		return counter.seq + 1;
	}
};

MCounters.checkCurrentSequence = function(collection) {
	// if collection doesn't exist, create the first sequence with 0 and return it
	var counter = Meteor.Counters.findOne({collection: collection});

	if (!counter) {
		return 0;
	} else {
		// return current sequence
		return counter.seq;
	}
};