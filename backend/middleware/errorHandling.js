

const errorHandler = (error,req,res,next) => {
    console.log(error.stack);
    res.status(error.status || 500).json({
        message: error.message || "Internal Server Error",
        stack: error.stack
    })
}


module.exports  = errorHandler