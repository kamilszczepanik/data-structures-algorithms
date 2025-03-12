// Cache
// help me to implement cache mechanism with custom ttl and max entries so I can use it like so:

class Cache {
  constructor({ ttl = 60000, maxEntries = 1 }) {
    this.ttl = ttl;
    this.maxEntries = maxEntries;
    this.cache = new Map();
  }

  get isFull() {
    return this.cache.size >= this.maxEntries;
  }

  get isEmpty() {
    return this.cache.size === 0;
  }

  clearExpiredEntries() {
    const now = Date.now();

    for (const [key, value] of this.cache.entries()) {
      if (value.ttl < now) {
        this.cache.delete(key);
      }
    }
  }

  set(key, value, { ttl } = {}) {
    if (!key || !value) {
      throw new Error("Key and value are required");
    }

    if (this.isFull) {
      const oldestEntry = this.cache.entries().next().value;
      this.cache.delete(oldestEntry[0]);
    }

    this.cache.set(key, { value, ttl });

    return this;
  }

  get(key) {
    if (!key) {
      throw new Error("Key is required");
    }

    const entry = this.cache.get(key);

    return entry ?? undefined;
  }

  remove(key) {
    if (!key) {
      throw new Error("Key is required");
    }

    this.cache.delete(key);

    return this;
  }

  clear() {
    this.cache.clear();

    return this;
  }
}

const cache = new Cache({ ttl: 60000, maxEntries: 1 });

cache.set("foo", "bar");
console.log(cache.get("foo"));

console.log(cache.remove("foo"));
console.log(cache.get("foo"));

cache.set("foo", "bar");
cache.set("foo1", "bar1");

console.log("should be undefined", cache.get("foo"));
console.log("should be bar1", cache.get("foo1"));

cache.set("john", "doe", { ttl: 500 });

setTimeout(() => {
  console.log("should be undefined", cache.get("john"));
}, 1000);

// should return undefined because it's expired
