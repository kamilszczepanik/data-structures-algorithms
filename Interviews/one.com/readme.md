/*
Question:
    Write a utility that will GET a record from a REST API endpoint, perform 
    some operations to the data, then PUT the processed data to the same 
    endpoint.
    It should be possible to provide an array of record IDs that need to be
    processed. There should be a way to specify the maximum number of concurrent
    connections for both GET and PUT URLs.

Example:

    const utility = new Utility({
        url: '/api/records/',
        maxGet: 10,
        maxPut: 2,
        processFn: function (data) {
            data.processed = true;
            return data;
        }
    });

    utility.start([1, 2, 3, 4, ... , 499, 500]);
*/

/*

const empNumbers = Array.from({ length: 500 }, (_, i) => i + 1);

// GET
{
    empNo: 35,
    isProcessed: false
}

const mockGet = (empNo) => { return new Promise((res, rej) => { setTimeout(() => {
    return res({empNo: empNo});
}, 20) });
}

// perfrom processing

// PUT

const mockPut = (empNo) => { return new Promise((res, rej) => { setTimeout(() => {
    return res({empNo: empNo, isProcessed: true});
}, 50) });
}

{
    empNo: 35,
    isProcessed: true
}

*/


// GET [1,2,3,4,5,6,7,8,9,10] - 20ms
// return [1,2,3,4,5,6,7,8,9,10]

// TO QUEUE [3,4],[5,6],[7,8],[9,10]

// PUT - 50ms
// [1,2]

// GET [10-20] - 20ms
// return [10-20]

// TO QUEUE [3-20]

// PUT - 50ms
// [1,2]

// GET [20-30] - 20ms
// return [20-30]

// TO QUEUE [5-30]

// PUT - 50ms
// [3,4] mockPut
