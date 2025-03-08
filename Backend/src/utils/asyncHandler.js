const asyncHandler = (requrestHandle) => {
    return (req,res, next) =>{
        Promise.resolve(requrestHandle(req,res,next)).catch((error) => next(error))
    }
}

export {asyncHandler}