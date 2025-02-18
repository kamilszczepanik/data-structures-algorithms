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
//     previous: {
//       value: 2,
//       previous: {
//         value: 1,
//         previous: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  // value as argument - list can't be empty, has to have a head
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode; // Head gets updated because of the reference
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;

    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
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
    const nextNode = unwantedNode.next;
    leader.next = indexGreaterThanListLength ? null : unwantedNode.next;
    nextNode.prev = leader;
    this.length--;

    return this;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.printList();
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.printList();
