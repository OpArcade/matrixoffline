import {Schema,model,models} from 'mongoose'

export const StudentRegistration = new Schema({

    name:{
        type:String,
        required:true,
    },
    collage:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    events:[{
        type:String,
        required:true,
    }],
    paymentMode:{
        type:String,
        required:true,
    },
    registrationType:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
},
{   
    timestamps:true,
}
)

export const StudentData = models.StudentData || model('StudentData',StudentRegistration);