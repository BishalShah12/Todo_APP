import {User} from '../models/user.models.js'
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"


const generateAccessAndRefreshToken = async (userId) => {
    try {
       const user = await User.findById(userId)
       const newAccessToken = user.generateAccessToken()
       const newRefreshToken = user.generateRefreshToken()

       user.refreshToken = newRefreshToken
       await user.save({validateBeforeSave:false})

       return {newAccessToken, newRefreshToken}

    } catch (error) {
       throw new ApiError(500, "Something went wrong while generating refresh and access Token")
    }
}



const register = asyncHandler(async (req, res) => {
   const {username, email, password} = req.body;

   if (!username,!email,!password) {
       throw new ApiError(404, "All filed are required")
   }

   const existedUser = await User.findOne({
       $or:[{username},{email}]
   })

   if (existedUser) {
       throw new ApiError(406,"User or Email alredy existed")
   }

   const user = await User.create({
       username:username.toLowerCase().trim(),
       email,
       password,
   })

   const createdUser = await User.findById((user._id)).select(
       "-password -refreshToken"
   )

   if (!createdUser) {
       throw new ApiError(500, "Something went wrong while registering the user")
   }

   const accessToken = user.generateAccessToken()
   const refreshToken = user.generateRefreshToken()

   const options = {
       httpOnly:true,
       secure:true
   }

   return res.status(201)
   .cookie("accessToken", accessToken, options)
   .cookie("refreshToken", refreshToken, options)
   .json(
       new ApiResponse(200, "User registered successfully",createdUser)
   )
})

const login = asyncHandler(async(req,res) => {
   const {username, password} = req.body;

//    console.log(username) 
   if (!username) {
       throw new ApiError(405,"Email is required")
   }

   const user = await User.findOne(
       { username } 
   )

   if (!user) {
       throw new ApiError(409, "user is not existed")
   }

   const isPasswordValid = await user.isPasswordCorrect(password)

   if (!isPasswordValid) {
       throw new ApiError(409, "email or password is incorrect")
   }
   // console.log(user._id);
   const loggedInUser = await User.findById(user._id).select(
       "-password -refreshToken")

   const options = {
       httpOnly:true,
       secure:true
   }
   

   const {newAccessToken, newRefreshToken} = await generateAccessAndRefreshToken(user._id)

   return res.status(201)
   .cookie("accessToken", newAccessToken, options)
   .cookie("refreshToken", newRefreshToken, options)
   .json(
       new ApiResponse(
           200,
           "User logged in successfully",
           {
               user:loggedInUser, newRefreshToken, newAccessToken
           }

       )
   )
})

const logout = asyncHandler(async(req,res) => {
   await User.findByIdAndUpdate(
       req.user._id,
       {
           $set:{
               refreshToken: undefined
           }
       },
       {
           new:true
       }
   )

   const options = {
       httpOnly:true,
       secure:true,
   }

   return res
   .status(200)
   .clearCookie("accessToken", options)
   .clearCookie("refreshToken", options)
   .json(
       new ApiResponse(200, "User logged Out",{})
   )
})

const getProfile = asyncHandler(async (req, res, next) => {
    const userId = req.user._id;
  
    const profile = await User.findById(userId);

    if (!profile) {
        throw new ApiError(401,"user is unauthrized")
    }
  
    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            "getProfile successfully",
            {profile}
            )
    );
  });



export {
    register, 
    login,
    logout,
    getProfile,
}