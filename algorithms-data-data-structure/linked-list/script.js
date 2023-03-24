class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  // adds value at end
  append(data){
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
  prepend(data){
    const node = new Node(data)
    node.nextNode = this.head
    this.head = node
    this.size++
  }

  printData(){
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }

  getSize(){
    // let current = this.head
    // let count = 1
    // while(current.nextNode){
    //     current = current.nextNode 
    //     count++
    // }
    console.log(this.size)
  }

  getHead(){
    console.log(this.head)
  }

  getTail(){
    let current = this.head
    while(current.nextNode){
        current = current.nextNode
    }
    console.log(current)
  }

  getAtIndex(index){
    if(index < 0 || index > this.size) return console.log('nope!')
    let current = this.head
    let count = 0
    while(count < index){
        current = current.nextNode
        count++
    }
    console.log(current)
  }

  pop(){
    if(!this.head) return null
    if(!this.head.nextNode)  return this.head = null; 
    let previous = this.head
    let current = this.head.nextNode
    while(current.nextNode){
        previous = current
        current = current.nextNode
    }
    previous.nextNode = null
  }
}

const ll = new LinkedList();
ll.append(100)
// ll.append(200)
// ll.prepend(300)
ll.pop()
ll.printData()
