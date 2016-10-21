(function () {
    'use strict';

    const fs = require('fs');
    const zlib = require('zlib');

    fs.createReadStream('./test_data/input.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('./test_data/input.txt'));

}());

/**
 * Assume that you have an archive and want to decompress it. There are a number
 * of ways to archieve this. But the easies and cleanest way is to use piping and
 * chaining. Have a look at the above snippet.
 *
 * First, we create a simple readable stream from the file "input.txt.gz". Next,
 * we pipe this stream into another stream "zlib.createGunzip()" to un-gzip the
 * content. Lastly, as streams can be chained, we add a writable stream in order
 * to write the un-gzipped content to the file.
 */