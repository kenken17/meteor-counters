Counters = new Mongo.Collection('counters');

MCounters = MCounters || {};

var getNextSequence = function(collection) {

	// if collection doesn't exist, create the first sequence with 1 and return it
	var counter = Counters.findOne({collection: collection});

	if (!counter) {
		Counters.insert({
			collection: collection,
			seq: 1
		});
	} else {
		Counters.upsert({
			collection: collection
		}, {
			$inc: {seq: 1}
		});
	}

	return Counters.findOne({collection: collection}).seq;
};

MCounters.getNextSequence = getNextSequence;