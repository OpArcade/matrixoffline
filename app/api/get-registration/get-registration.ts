import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import {StudentData} from '@/models/StudentRegistration'


mongoose.connect(process.env.MONGODB_URL!)

export async function GET(req:NextRequest,res:NextResponse){
    try{
        const result = await StudentData.find({});
        return NextResponse.json({success:true,Data:result})
    }catch(error){
        return NextResponse.json({message:"Internal Server error"},{status:500})
    }
}