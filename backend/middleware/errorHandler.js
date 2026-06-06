function errorHandler(err, req, res, next) {
    console.err(err.stack);
    res.status(err.status || 500).json({message: err.message || "Internal server error."});
}

module.exports = errorHandler;