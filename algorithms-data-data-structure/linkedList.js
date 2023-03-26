class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds value at end
  append(data) {
    const node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }

    this.size++;
  }
  // adds value at start
  prepend(data) {
    const node = new Node(data);
    node.nextNode = this.head;
    this.head = node;
    this.size++;
  }

  printData() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }

  getSize() {
    // let current = this.head
    // let count = 1
    // while(current.nextNode){
    //     current = current.nextNode
    //     count++
    // }
    console.log(this.size);
  }

  getHead() {
    console.log(this.head);
  }

  getTail() {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    console.log(current);
  }

  getAtIndex(index) {
    if (index < 0 || index > this.size) return console.log("nope!");
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.nextNode;
      count++;
    }
    console.log(current);
  }

  pop() {
    if (!this.head) return null;
    if (!this.head.nextNode) return (this.head = null);
    let previous = this.head;
    let current = this.head.nextNode;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
  }

  contains(value) {
    let current = this.head;
    let isIn = false;
    while (current) {
      if (current.value == value) {
        console.log(current);
        isIn = true;
        break;
      }
      current = current.nextNode;
    }
    console.log(isIn);
  }

  findIndex(value) {
    let current = this.head;
    let count = 0;
    while (current && count < this.size) {
      if (current.value === value) {
        return console.log(count);
      }
      current = current.nextNode;
      count++;
    }

    console.log(-1); // value not found
  }

  toString() {
    console.log(JSON.stringify(this.head));
  }

  insertAt(index, data) {
    if (index < 0 || index > this.size) return -1;

    const newNode = new Node(data);
    let current = this.head;
    let previous = null;
    let count = 0;

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      this.size++;
      return;
    }

    while (count < index) {
      previous = current;
      current = current.nextNode;
      count++;
    }

    newNode.nextNode = current;
    previous.nextNode = newNode;
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) return -1;

    let current = this.head;
    let previous = null;
    let count = 0;

    if (index === 0) this.head = current.nextNode;
      while (count < index) {
        previous = current;
        current = current.nextNode;
        count++;
      }
      previous.nextNode = current.nextNode;
    this.size--;
    return current.value;
  }
}

const ll = new LinkedList();
ll.append(100);
ll.append(200);
ll.prepend(300);
//ll.removeAt(1);
ll.printData();
