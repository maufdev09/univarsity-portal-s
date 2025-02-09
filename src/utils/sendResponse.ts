import { Response } from "express";

const sendResponse= <T>(res: Response, data:{
    statusCode: number,
    message?: string,
    data: T
}) =>{
    res.status(data.statusCode).json({
        success: data.statusCode < 400,
        message: data.message || "Success",
        data: data.data
    })
}


export default sendResponse;