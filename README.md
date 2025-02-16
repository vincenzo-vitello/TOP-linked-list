# TOP-linked-list

This is a basic implementation of a singly linked list in JavaScript. The class provides methods for common linked list operations, including adding, removing, and finding elements.

## Methods

### `prepend(value)`

Adds a new node with the given `value` to the beginning of the list.

### `append(value)`

Adds a new node with the given `value` to the end of the list.

### `getSize()`

Returns the number of elements in the list.

### `getHead()`

Returns the head (first node) of the list.

### `getTail()`

Returns the tail (last node) of the list.

### `atIndex(index)`

Returns the node at the specified `index`. If no node exists at that index, returns a message saying "There is no item at this index".

### `pop()`

Removes the last node from the list.

### `contains(val)`

Returns `true` if the list contains a node with the given `val`, otherwise returns `false`.

### `find(val)`

Returns the index of the node containing the given `val`. If not found, returns `null`.

### `toString()`

Returns a string representation of the list in the form `(data) -> (data) -> ... -> null`.

### `insertAt(value, index)`

Inserts a new node with the given `value` at the specified `index`.

### `removeAt(index)`

Removes the node at the specified `index`. If the index is out of range, returns a message saying "There is nothing at this index".
