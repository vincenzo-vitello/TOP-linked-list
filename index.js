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
    prepend(value){
        let temp = null;
        if(this.listHead != null) temp = this.listHead;
        this.listHead = new Node(value);
        this.listHead.next = temp;
    }
    append(value){
        if(!this.listHead) this.prepend(value)
        
        let temp = this.listHead;
        while(temp.next) temp = temp.next;
        temp.next = new Node(value)
    }
    getSize(){
        let temp = this.listHead;
        let counter = 0;
        while(temp){
            counter++;
            temp = temp.next
        }
        return counter
    }
    getHead(){
        return this.listHead
    }
    getTail(){
        let temp = this.listHead;
        while(temp.next) temp = temp.next;
        return temp
    }
    atIndex(index){
        let temp = this.listHead;
        for(let i = 0; i < index; i++){
            temp = temp.next;
            if(!temp) return "There is no item at this index"
        }
        return temp
    }
    pop() {
        let cur = this.listHead;
        let prev = null;
        while(cur.next){
            prev = cur;
            cur = cur.next
        }
        prev.next = null
    }
    contains(val){
        let temp = this.listHead;
        while(temp){
            if(temp.value === val) return true
            temp = temp.next
        }
        return false
    }
    find(val){
        let temp = this.listHead;
        let index = 0;
        while(temp){
            if(temp.value === val) return index;
            temp = temp.next;
            index++
        }
        return null
    }
    toString(){
        let temp = this.listHead;
        let listToString = "";
        while(temp !== null){
            listToString += `(${temp.value}) -> `
            temp = temp.next
        }
    }
    insertAt(value, index){
        if(!this.listHead) this.prepend(value);
        let cur = this.listHead;
        let prev = null;
        for(let i = 0; i < index; i++){
            prev = cur;
            cur = cur.next;
            if(!cur) break
        }
        const temp = new Node(value);
        prev.next = temp;
        temp.next = cur;
    }
    removeAt(index){
        if(!this.listHead) return "List is empty"

        let cur = this.listHead;
        let prev = null;
        for(let i = 0; i < index; i++){
            prev = cur;
            cur = cur.next;
            if(!cur) return "There is nothing at this index"
        }
        prev.next = cur.next
    }
}

const list = new LinkedList()

list.append(2);
list.prepend(1);
list.append(3);

console.log(list.toString())