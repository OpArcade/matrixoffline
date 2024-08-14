import { generateHtml } from './genrateHtml';
import nodemailer from 'nodemailer'

const getTransporter = async() =>{
    let transporter = nodemailer.createTransport({
        host : process.env.EMAIL_SMTP_HOST!,
        port : parseInt(process.env.EMAIL_SMTP_PORT!),
        // secure : true,
        secureConnection: false,
        auth : {
            user : process.env.EMAIL_SMTP_USER,
            pass : process.env.EMAIL_SMTP_PASSWORD,
        },
        tls:{
            ciphers:'SSLv3'
        }
    })
    return transporter;
}

export const sendEmail = async({email,name}:{email:string,name:string})=>{

    const transporter = await getTransporter();

    const getHtmlMailGenrator = generateHtml(name)
    const subject = "Your Registration Conformation"
    
    let response;

    try{
        response = await transporter.sendMail({
            from : process.env.EMAIL,
            to : email,
            subject,
            html : getHtmlMailGenrator,
        })
    }catch(error){
        console.error("error sending mail",error)
    }

}