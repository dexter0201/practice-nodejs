(function () {
    'use strict';

    const fs = require('fs');
    var readableStream = fs.createReadStream('./test_data/file.txt');
    var data = '';

    readableStream.setEncoding('utf8');

    readableStream.on('data', (chunk) => {
        console.log(typeof chunk);

        data += chunk;
    });

    readableStream.on('end', () => {
        console.log(data);
    });
}());

/**
 * By default the data you read from a stream is a "Buffer" object. If you are reading strings
 * this may not be suitable for you. So, you can set encoding on the stream by "Readable.setEncoding()"
 * as show above.
 */