// Custom request logger middleware
// Logs method, url, status code and the time taken for the request.

function logger(req, res, next) {
    const start = Date.now();

    // When response finishes, print the log line
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
    });

    next();
}

export default logger;