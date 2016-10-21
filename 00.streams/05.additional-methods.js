/**
 * We discussed some of the importance concepts in readable streams. Here are some more
 * stream methods you need to know:
 *
 * 1. Readable.pause() - This method pauses the stream. If the stream is ready flowing,
 * it won't emit "data" events anymore. The data will be kipt in buffer. If you call this
 * on a static (non-flowing) stream, the stream starts flowing, but "data" won't be emitted.
 *
 * 2. Readable.resume() - Resumes a paused stream.
 *
 * 3. Readable.unpipe() - This removes destination streams from pipe destinations. If an
 * argument is passed, it stops the readable stream from piping into the particular destination
 * stream. Otherwise, all the destination streams are removed.
 */