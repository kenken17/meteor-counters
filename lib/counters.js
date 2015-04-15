Meteor.Counters = new Mongo.Collection('MCounters');

MCounters = MCounters || {};

var getNextSequence = function(collection) {

	// if collection doesn't exist, create the first sequence with 1 and return it
	var counter = Meteor.Counters.findOne({collection: collection});

	if (!counter) {
		Meteor.Counters.insert({
			collection: collection,
			seq: 1
		});
	} else {
		Meteor.Counters.update({
			collection: collection
		}, {
			$inc: {seq: 1}
		});
	}

	return Meteor.Counters.findOne({collection: collection}).seq;
};

MCounters.getNextSequence = getNextSequence;