/**
 * When you don't have more data to write you can simply call "end()" to notify
 * the stream that you have finished writing. Assuming "res" is an HTTP response
 * object, you often do the following to send the response to browser.
 *
 * // res.write('Some Data!!!');
 * // res.end('Ended.');
 *
 * When "end()" is called and every chunk of data has been flushed, a "finish"
 * event is emitted by the stream. Just note that you can't write to the stream
 * after calling "end()". For example, the following will result in an error.
 *
 * // res.write('Some Data!!');
 * // res.end();
 * // res.write('Trying to write again'); // Error!
 *
 * Here are some important "events" related to writable streams:
 * 1. "error" - Emitted to indicate that an error has occurred while writing/piping
 * 2. "pipe" - When a readable stream is piped into a writable stream, this event
 * is emitted by the writable stream.
 * 3. "unpipe" - Emitted when you call unpipe on the readable stream and stop it
 * from piping into the destination stream.
 */