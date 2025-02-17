class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.top) {
      this.top = this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  pop() {
    if (!this.top) return null;

    this.top = this.top.next;
    this.length--;

    if (this.length === 0) {
      this.bottom = null;
    }

    return this;
  }

  get isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();

console.log(myStack.peek());

myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");

console.log(myStack);

console.log(myStack.peek());

myStack.pop();

console.log(myStack);
console.log(myStack.isEmpty);

myStack.pop();
myStack.pop();

console.log(myStack.isEmpty);
