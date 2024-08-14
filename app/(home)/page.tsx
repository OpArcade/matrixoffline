'use client'

import toast from 'react-hot-toast';
import './home.css'
import { useState } from "react";
import axios from 'axios';

export default function Home() {

  interface StudentProps{
    name:string,
    collage:string,
    course:string,
    year:number | undefined,
    email:string,
    phoneNumber:number | undefined,
    event:string[],
    paymentMode:string,
    registrationMode:string,
    totalAmount:number | undefined,
  }

  const [studentData,setUserData] = useState<StudentProps>({
    name:'',
    collage:'',
    course:'',
    year:0,
    email:'',
    phoneNumber:0,
    event:[],
    paymentMode:'',
    registrationMode:'',
    totalAmount:0,
  })

  const handleChange = (key:string,value:string | string[] | number)=>{    
    setUserData({
      ...studentData,
      [key] : value,
    });
  }

  const handleSubmit =async(e:any)=>{
    e.preventDefault()
    const onSubmit = {
      name : studentData.name,
      collage : studentData.collage,
      course : studentData.course,
      year : studentData.year,
      email : studentData.email,
      phoneNumber : studentData.phoneNumber,
      events : studentData.event,
      paymentMode : studentData.paymentMode,
      registrationType : studentData.registrationMode,
      amount : studentData.totalAmount,
    }
    try{
      await axios.post("/api/register",onSubmit).then((response)=>{
        toast.success('🥳 Registration Done Successfully..!')
      })
    }catch(error){
      toast.error("😰 There is an error while uploading the data")
    }
  }

  console.log(studentData)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:p-24 overflow-x-hidden">
      <video src="/3.mov" autoPlay={true} loop muted className="absolute z-[-1] top-0 w-full h-[1600px] object-cover"/>
      <form action="" className=" flex flex-col gap-4 md:w-1/3 form">
        <label htmlFor="name" className="text-white "> Name </label>
        <input required onChange={(e)=>handleChange('name',e.target.value)} type="text" name="name" id="name" className="rounded-md px-3 py-2 backdrop-blur-3xl bg-transparent border-green-600 border-2 placeholder-slate-400 " placeholder="Name"/>
        <label htmlFor="collage" className="text-white "> Collage </label>
        <input required onChange={(e)=>handleChange('collage',e.target.value)} type="text" name="collage" id="collage" className="rounded-md px-3 py-2 backdrop-blur-3xl bg-transparent border-green-600 border-2 placeholder-slate-400 " placeholder="Collage Name"/>
        <label htmlFor="course" className="text-white "> Course </label>
        <input required onChange={(e)=>handleChange('course',e.target.value)} type="text" name="course" id="course" className="rounded-md px-3 py-2 backdrop-blur-3xl bg-transparent border-green-600 border-2 placeholder-slate-400 " placeholder="Course"/>
        <label htmlFor="year" className="text-white "> Year </label>
        <input required onChange={(e)=>{Number(e.target.value) <=4 ? handleChange('year',e.target.value) : toast.error("The Imputed Year is Invalid") }} type="number" name="year" id="year" className="rounded-md px-3 py-2 backdrop-blur-3xl bg-transparent border-green-600 border-2 placeholder-slate-400 " placeholder="Year"/>
        <label htmlFor="email" className="text-white "> Email </label>
        <input required onChange={(e)=>handleChange('email',e.target.value)} type="email" name="email" id="email" className="rounded-md px-3 py-2 backdrop-blur-3xl bg-transparent border-green-600 border-2 placeholder-slate-400 " placeholder="Email"/>
        <label htmlFor="phone" className="text-white "> Phone Number </label>
        <input required onChange={(e)=>handleChange('phoneNumber',e.target.value)} type="number" id="phone" name="phone" className="rounded-md px-3 py-2 backdrop-blur-3xl bg-transparent border-green-600 border-2 placeholder-slate-400" placeholder="Phone Number"/>
        <p className="text-white ">Events</p>
          <div className="text-white flex flex-col gap-3 my-4">
            <div className="flex justify-between">
              <label htmlFor="liveProj">Live projects</label>
              <input onChange={(e)=>{
                setUserData({
                  ...studentData,
                  event : [...studentData.event,'live_projects'],
                });
              }} type="checkbox" name="events" id="liveProj" />
            </div>
            <div className="flex justify-between">
              <label htmlFor="gamingTournament">Gaming Tournament</label>
              <input  onChange={(e)=>{
                setUserData({
                  ...studentData,
                  event : [...studentData.event,'gamingTournament'],
                });
              }} type="checkbox" name="events" id="gamingTournament" />
            </div>
            <div className="flex justify-between">
              <label htmlFor="insideEdge">Inside Edge</label>
              <input  onChange={(e)=>{
                setUserData({
                  ...studentData,
                  event : [...studentData.event,'inside_edge'],
                });
              }} type="checkbox" name="events" id="insideEdge" />
            </div>
            <div className="flex justify-between">
              <label htmlFor="ui/ux">UI/UX Design</label>
              <input  onChange={(e)=>{
                setUserData({
                  ...studentData,
                  event : [...studentData.event,'ui_ux'],
                });
              }} type="checkbox" name="" id="ui/ux" />
            </div>
            <div className="flex justify-between">
              <label htmlFor="newsSurge">News Surge</label>
              <input  onChange={(e)=>{
                setUserData({
                  ...studentData,
                  event : [...studentData.event,'news_surge'],
                });
              }} type="checkbox" name="events" id="newsSurge" />
            </div>
            <div className="flex justify-between">
              <label htmlFor="dataScience">Data Science</label>
              <input  onChange={(e)=>{
                setUserData({
                  ...studentData,
                  event : [...studentData.event,'data_science'],
                });
              }} type="checkbox" name="events" id="dataScience" />
            </div>
            <div className="flex justify-between">
              <label htmlFor="pitchers">Pitchers</label>
              <input  onChange={(e)=>{
                setUserData({
                  ...studentData,
                  event : [...studentData.event,'pitchers'],
                });
              }} type="checkbox" name="events" id="pitchers" />
            </div>
          </div>
        <p className="text-white ">Mode Of Payment</p>
          <div className="text-white flex flex-col gap-3 my-4">
            <div className="flex justify-between">
              <label htmlFor="online">Online</label>
              <input required onChange={(e)=> handleChange('paymentMode',e.target.value)} type="radio" name="paymentMode" id="online" />
            </div>
            <div className="flex justify-between">
              <label htmlFor="offline">OffLine</label>
              <input required onChange={(e)=>handleChange('paymentMode',e.target.value)} type="radio" name="paymentMode" id="offline" />
            </div>
          </div>
        <p className="text-white ">Type of registration</p>
          <div className="text-white flex flex-col gap-3 my-4">
            <div className="flex justify-between">
              <label htmlFor="ronline">Online</label>
              <input required onChange={(e)=>handleChange('registrationMode',e.target.value)} type="radio" name="registrationMode" id="ronline" />
            </div>
            <div className="flex justify-between">
              <label htmlFor="roffline">OffLine</label>
              <input required onChange={(e)=>handleChange('registrationMode',e.target.value)} type="radio" name="registrationMode" id="roffline" />
            </div>
          </div>
        <label htmlFor="amount" className="text-white"> Amount </label>
        <input required type="number" name="amount" id="amount"
          onChange={(e)=>handleChange('totalAmount',parseInt(e.target.value))}
        className="rounded-md px-3 py-2 backdrop-blur-3xl bg-transparent border-green-600 border-2 placeholder-slate-400 " placeholder="Total Amount Plaid"/>
      <button onClick={handleSubmit}> Submit </button>
      </form>
    </main>
  );
}
