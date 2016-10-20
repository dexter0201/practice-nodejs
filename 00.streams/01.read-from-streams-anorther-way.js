(function () {
    'use strict';

    const fs = require('fs');
    var readableStream = fs.createReadStream('./test_data/file.txt');
    var data = '';

    readableStream.on('readable', () => {
        var chunk = null;

        while ((chunk = readableStream.read()) !== null) {
            data += chunk;
        }
    });

    readableStream.on('end', () => {
        console.log(data);
    });

}());

/**
 * There is also another way to read from stream. You just need to call "read()" on the stream
 * instance repeatedly until every chunk of data has been read.
 *
 * The "read()" function reads some data from the internal buffer and returns it. When there
 * is nothing to read, it returns "null". So, in the while loop we check for "null" and
 * terminate the loop. Note that the "readable" event is emitted when a chunk of data
 * can be read from the stream.
 */