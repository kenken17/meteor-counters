meteor-counters
================

A simple counter collection to keep number sequencing.

## Installation

```bash
$ meteor add kenken:meteor-counters
```
This is just a simple package that keep the number sequence for each call to `getNextSequence()` method.

###Methods
So far only one method. Welcome ideas on how to improve this package.

####getNextSequence(collection)
The `getNextSequence()` will take in a collection name (a string), and return the current sequence. Think of it as the auto increment column in mySQL. If the collection name is not found, it will create a counter.

*Examples:*

```javascript
MCounters.getNextSequence('myCollection');	// will return 1, since no previous counter named 'myCollection'

MCounters.getNextSequence('myCollection');	// will return 2
```
