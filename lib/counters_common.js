;(function() {
	if (!Meteor.Counters) {
		Meteor.Counters = new Mongo.Collection('MCounters');
	}

	MCounters = MCounters || {};

	_.extend(MCounters, {
		"getNextSequence": function(collection) {
			Meteor.call('MCounters.methodGetNextSequence', collection);
		},

		"setSequence": function(collection, seq) {
			return Meteor.call('MCounters.methodSetSequence', collection, seq);
		}
	});
}());