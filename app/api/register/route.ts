import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import {StudentData} from '@/models/StudentRegistration'
import { sendEmail } from "@/lib/Email Service/email_service";


mongoose.connect(process.env.MONGODB_URL!)

export async function POST(req:NextRequest){
    try{
        const data = await req.json();
        const response = await StudentData.create({
            name:data.name,
            collage:data.collage,
            course:data.course,
            year:data.year,
            email:data.email,
            phoneNumber:data.phoneNumber,
            events:data.events,
            paymentMode:data.paymentMode,
            registrationType:data.registrationType,
            amount:data.amount,
        })
        sendEmail({
            email:data.email,
            name:data.name,
        })
        return NextResponse.json({success:true})
    }catch(error){
        console.log(error)
        return NextResponse.json({message:"Internal Server error"},{status:500})
    }
}