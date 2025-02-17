class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.listHead = null;
    }

    prepend(value) {
        let temp = this.listHead;
        this.listHead = new Node(value);
        this.listHead.next = temp;
    }

    append(value) {
        if (this.listHead === null) {
            this.prepend(value);
            return;
        }
        let temp = this.listHead;
        while (temp.next) temp = temp.next;
        temp.next = new Node(value);
    }

    getSize(){
        let temp = this.listHead;
        let counter = 0;
        while (temp) {
            counter++;
            temp = temp.next;
        }
        return counter;
    }

    getHead() {
        return this.listHead;
    }

    getTail() {
        if (!this.listHead) return null;
        let temp = this.listHead;
        while (temp.next) temp = temp.next;
        return temp;
    }

    atIndex(index) {
        let temp = this.listHead;
        for (let i = 0; i < index; i++) {
            if (!temp) return "There is no item at this index";
            temp = temp.next;
        }
        return temp;
    }

    pop() {
        if (!this.listHead) return;
        if (!this.listHead.next) {
            this.listHead = null;
            return;
        }
        let cur = this.listHead;
        let prev = null;
        while (cur.next) {
            prev = cur;
            cur = cur.next;
        }
        prev.next = null;
    }

    contains(val) {
        let temp = this.listHead;
        while (temp) {
            if (temp.data === val) return true;
            temp = temp.next;
        }
        return false;
    }

    find(val) {
        let temp = this.listHead;
        let index = 0;
        while (temp) {
            if (temp.data === val) return index;
            index++;
            temp = temp.next;
        }
        return null;
    }

    toString() {
        let temp = this.listHead;
        let listToString = "";
        while (temp) {
            listToString += `(${temp.data}) -> `;
            temp = temp.next;
        }
        return listToString + "null";
    }

    removeAt(index) {
        if (!this.listHead) return "The list is empty.";
        if (index === 0) {
            this.listHead = this.listHead.next;
            return;
        }
        let cur = this.listHead;
        let prev = null;
        for (let i = 0; i < index; i++) {
            if (!cur) return "There is nothing at this index";
            prev = cur;
            cur = cur.next;
        }
        prev.next = cur.next;
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
        let cur = this.listHead;
        let prev = null;
        for (let i = 0; i < index; i++) {
            prev = cur;
            cur = cur?.next;
            if (!cur && i < index - 1) return;
        }
        const temp = new Node(value);
        prev.next = temp;
        temp.next = cur;
    }
}

const list = new LinkedList();
list.append(2);
list.prepend(1);
list.append(3);
list.append(4)

console.log(list.toString())
console.log("size: ", list.getSize())
console.log("head: ", list.getHead())
console.log("tail: ", list.getTail())
console.log("at index 2: ", list.atIndex(2))
console.log("at index 4: ", list.atIndex(4))
console.log("removed last element")
list.pop()
console.log(list.toString())
console.log("list contains 1:", list.contains(1))
console.log("find 1 at: ", list.find(1))
console.log("prepending 4")
list.prepend(4);
console.log(list.toString())
console.log("injecting 5 at index 1")
list.insertAt(5, 1)
console.log("added 5 at index 1: ", list.toString())
console.log("removing element at index 2")
list.removeAt(2)
list.prepend([1, 2, 3])
console.log(list.toString())
