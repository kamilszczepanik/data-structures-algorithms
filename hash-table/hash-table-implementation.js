class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // O(1)

  set(key, value) {
    const address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
  } // O(1)

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } // O(1) - if no collision, when collision multiple times it will be O(n)

  keys() {
    const keys = [];
    const items = this.data.filter((item) => item);

    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items[i].length; j++) {
        keys.push(items[i][j][0]);
      }
    }

    return keys;
  } // O(n) - even slower because of the filter and double
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 10000);
myHashTable.set("kiwi", 10000);
myHashTable.get("grapes");
console.log("keys", myHashTable.keys());
