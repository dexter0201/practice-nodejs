(function () {
    'use strict';

    const fs = require('fs');
    var readableStream = fs.createReadStream('./test_data/file.txt');
    var writeableStream = fs.createWriteStream('./test_data/output.txt');

    readableStream.pipe(writeableStream);
}());

/**
 * Pipe is a great mechanism in which you can read data from the source and write to
 * destination without managing the flow yourself. Take a look at the above snippet.
 *
 * The above snipped makes use of the "pipe()" function to write the content of "file.txt"
 * to "output.txt". As "pipe()" manages the data flow for you, you should not worry about
 * slow or fast data flow. This makes "pipe()" a neat tool to read and write data. You
 * should also note that "pipe()" returns the destination stream. So, you can easily
 * utilize this to chain multiple streams together.
 */