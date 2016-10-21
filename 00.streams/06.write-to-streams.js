(function () {
    'use strict';

    const fs = require('fs');
    var readableStream = fs.createReadStream('./test_data/file.txt');
    var writableStream = fs.createWriteStream('./test_data/output.txt');

    readableStream.setEncoding('utf8');

    readableStream.on('data', (chunk) => {
        writableStream.write(chunk);
    });
}());

/**
 * To write data to a wriable stream you need to call "write()" on the stream instance.
 * The above snipped demonstrates this technique.
 *
 * The above code is straightforward. It simply reads chunks of data from an input stream
 * and writes to the destination using "wirte()". THis function returns a Boolean value
 * indicating if the operation was successful. If "true", thenthe write was successful
 * and you can keep writing more data. If "false" is returned, it means something went
 * wrong and you ca'nt write anything at the moment. The wriable stream will let you know
 * when you can start writing more data by emitting a "drain" event.
 */