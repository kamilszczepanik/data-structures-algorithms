// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  // value as argument - list can't be empty, has to have a head
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode; // Head gets updated because of the reference
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this;
  }

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    const indexGreaterThanListLength = index >= this.length;
    const leader = this.traverseToIndex(
      indexGreaterThanListLength ? this.length - 2 : index - 1
    );
    const unwantedNode = leader.next;
    leader.next = indexGreaterThanListLength ? null : unwantedNode.next;
    this.length--;

    return this;
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }

    let first = this.head;
    let second = first.next;
    this.tail = first;

    while (second) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }

    this.tail.next = null;
    this.head = first;
  }
}

const myLinkedList = new SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(32);
myLinkedList.append(161);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();
console.log(myLinkedList);
