meteor-counters
================

A simple counter collection to keep number sequencing.

## Installation

```bash
$ meteor add kenken:meteor-counters
```
This is just a simple package that keep the number sequence of any collection.

###Available Methods

####getNextSequence(collection)
The `getNextSequence()` will take in a collection name (a string), and return the current sequence. Think of it as the auto increment column in mySQL. If the collection name is not found, it will create a counter.

*Examples:*

```javascript
MCounters.getNextSequence('myCollection');	// will return 1, since no previous counter named 'myCollection'

MCounters.getNextSequence('myCollection');	// will return 2
```

####setSequence(collection, seq)
The `setSequence()` will take in a collection name (a string), and one integer sequence. If the collection name is not found, it will create a counter and set the sequence.

*Examples:*

```javascript
MCounters.setSequence('myCollection', 100);	// will return 100
```

####checkNextSequence(collection)
Similar to `getNextSequence()`, `checkNextSequence()` will take in a collection name (a string), and return the `next` sequence but will not set the counter.

*Examples:*

```javascript
MCounters.checkNextSequence('myCollection');	// will return 1, since no previous counter named 'myCollection'

MCounters.setNextSequence('myCollection', 100);	// set the counter to 100
MCounters.checkNextSequence('myCollection');	// will return 101
```

####checkCurrentSequence(collection)
Similar to `checkNextSequence()`, `checkCurrentSequence()` will take in a collection name (a string), and return the `current` sequence but will not set the counter. `0` will return if no collection found.

*Examples:*

```javascript
MCounters.checkCurrentSequence('myCollection');	// will return 0, since no previous counter named 'myCollection'

MCounters.setNextSequence('myCollection', 100);	// set the counter to 100
MCounters.checkCurrentSequence('myCollection');	// will return 100
```