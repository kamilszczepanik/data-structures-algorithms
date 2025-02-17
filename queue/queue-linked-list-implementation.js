class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  dequeue() {
    if (!this.first) return null;

    this.first = this.first.next;
    this.length--;

    if (this.length === 0) {
      this.last = null;
    }

    return this;
  }

  peek() {
    return this.first ? this.first.value : null;
  }

  get isEmpty() {
    return this.length === 0 ? true : false;
  }
}

const myQueue = new Queue();

// wait list app
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");

console.log(myQueue, myQueue.length);

myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue, myQueue.length);

console.log(myQueue.peek());
console.log(myQueue.isEmpty);

myQueue.dequeue();
console.log(myQueue, myQueue.length);

myQueue.dequeue();
console.log(myQueue, myQueue.length);
console.log(myQueue.isEmpty);
