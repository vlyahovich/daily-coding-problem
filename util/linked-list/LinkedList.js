const LinkedListNode = require('./LinkedListNode');

class LinkedList {
    constructor(arr) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        if (Array.isArray(arr)) {
            this.fromArray(arr);
        }
    }

    prepend(value) {
        let newNode = new LinkedListNode(value, this.head);

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    append(value) {
        let newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode;
        }

        this.length--;

        return deletedNode;
    }

    find(value, compare) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (compare && compare(currentNode.value, value)) {
                return currentNode;
            }

            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    fromArray(values) {
        values.forEach(value => this.append(value));

        return this;
    }

    toArray() {
        let nodes = [],
            currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }
}

module.exports = LinkedList;