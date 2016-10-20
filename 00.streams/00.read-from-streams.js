(function () {
    'use strict';

    const fs = require('fs');
    var readableStream = fs.createReadStream('./test_data/file.txt');
    var data = '';

    readableStream.on('data', (chunk) => {
        data += chunk;
    });

    readableStream.on('end', () => {
        console.log(data);
    });
}());

/**
 * The best way to read data from a stream is to listen to "data" event and attach a callback.
 * When a chunk of data is availabe, the readable stream emits a "data" event and your callback
 * executes. Take a look at the above snippet.
 *
 * The function call "fs.createReadStream()" gives you a readable stream. Initially, the stream
 * is in a static state. As soon as you listen to "data" event and attach a callback it starts
 * flowing. After that, chunks of data are read and passed to your callback. The stream implementor
 * decides how often "data" event is emitted. For example, an HTTP request may emit a "data" event
 * once a few KB of data are read. When ou are reading data from a file you may decide you emit
 * "data" event once a line is read.
 *
 * When there is no more data to read (end is reached), the stream emits an "end" event.
 * In the above snipped, we listen to this event to get notified when the end is reached.
 *
 * @Note: Commented code for bypass eslint validation.
*/