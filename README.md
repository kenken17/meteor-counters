meteor-counters
================

A simple counter collection to keep number sequencing.

## Installation

```bash
$ meteor add kenken:meteor-counters
```
This is just a simple package that keep the number sequence of any collection.

###Available Methods

####getNextSequence(collection) - *server-side*
The `getNextSequence()` will take in a collection name (a string), and return the current sequence. Think of it as the auto increment column in mySQL. If the collection name is not found, it will create a counter. Calling `getNextSequence()` on client side will return `undefined`.

*Examples:*

```javascript
MCounters.getNextSequence('myCollection');	// will return 1, since no previous counter named 'myCollection'

MCounters.getNextSequence('myCollection');	// will return 2
```

####setSequence(collection, seq) - *server-side*
The `setSequence()` will take in a collection name (a string), and one integer sequence. If the collection name is not found, it will create a counter and set the sequence. Calling `setSequence()` on client side will return `undefined`.

*Examples:*

```javascript
MCounters.setSequence('myCollection', 100);	// will return 100
```
