class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = {
      value: null,
      next: null,
    };
    this.bottom = this.top;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  peek() {
    return this.top;
  }

  pop() {
    this.top = this.top.next;
    this.length--;
  }

  get isEmpty() {
    return !this.top.value ? true : false;
  }
}

const myStack = new Stack();

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
