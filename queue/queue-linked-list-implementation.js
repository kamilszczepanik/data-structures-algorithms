class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.first = { value, next: null };
    this.last = this.first;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    this.last.next = newNode;
    this.last = newNode;
    this.length++;

    return this;
  }

  dequeue() {
    // take the first and make the second - first
    this.first = this.first.next;
    if (this.length === 1) {
      this.last = null;
    }
    this.length--;

    return this;
  }

  peek() {
    return this.last.value;
  }

  get isEmpty() {
    return this.length === 0 ? true : false;
  }
}

const myQueue = new Queue("Joy");

// wait list app
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
