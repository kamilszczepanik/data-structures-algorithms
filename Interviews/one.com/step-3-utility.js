import Queue from "./Queue.js";

class Utility {
  constructor({ url, maxGet, maxPut, processFn }) {
    this.url = url;
    this.maxGet = maxGet;
    this.maxPut = maxPut;
    this.processFn = processFn;
  }

  mockGet(empNo) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log("Get called " + empNo);
        return res({ empNo: empNo });
      }, 20);
    });
  }

  mockPut(empNo) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log("Put called " + JSON.stringify(empNo));
        return res({ empNo: empNo, isProcessed: true });
      }, 50);
    });
  }

  delay(t = 10) {
    return new Promise((resolve) => {
      setTimeout(resolve, t);
    });
  }

  async getElements(array, queue) {
    await this.delay();
    let tempPromises = [];

    for (let i = 0; i < array.length / this.maxGet; i++) {
      tempPromises = [];
      for (let j = i * this.maxGet; j < (i + 1) * this.maxGet; j++) {
        tempPromises.push(this.mockGet(array[j]));
      }

      const getResult = await Promise.all(tempPromises);
      for (let i = 0; i < getResult.length; i += 1) {
        queue.enqueue(getResult[i]);
      }
      await this.delay();
    }
  }

  async putElements(array, queue) {
    await this.delay();
    let processedItems = 0;

    while (processedItems < array.length) {
      const tempPromises = [];
      for (let j = 0; j < this.maxPut; j += 1) {
        const data = queue.dequeue();
        if (data && data.first) {
          data.processed = true;
          tempPromises.push(this.mockPut(data.first.value.empNo));
        }
      }

      if (tempPromises.length > 0) {
        await Promise.all(tempPromises);
        processedItems += tempPromises.length;
      } else {
        break;
      }

      await this.delay();
    }
  }

  async start(array) {
    const queue = new Queue();

    await Promise.all([
      this.getElements(array, queue),
      this.putElements(array, queue),
    ]);

    console.log("All operations completed!");
  }
}

const utility = new Utility({
  url: "/api/records/",
  maxGet: 5,
  maxPut: 2,
  processFn: function (data) {
    data.processed = true;
    return data;
  },
});

const empNumbers = Array.from({ length: 50 }, (_, i) => i + 1);

utility.start(empNumbers);
