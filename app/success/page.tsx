'use client'
import { copyToClipboard } from "@/utils/functions";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function SuccessPage() {
  const [isCopy, setIsCopy] = useState(false);

  const copyAction = () => {
    copyToClipboard('8032827933');
    setIsCopy(true)
   setTimeout(() => setIsCopy(false), 2000);
  }

  return (
    <>
    <div className='registration-image-with-overlay h-[30vh] flex-col flex items-center justify-center'>
      <h2 className="text-2xl text-white mt-4 font-bold mb-2 text-center">Be A Memeber</h2>
      <p className="text-sm md:text-xl px-4 text-gray-300 text-center max-w-3xl mx-auto">
        Discover your rhythm, connect with fellow musicians, and showcase your talent every month.
      </p>
    </div>
    <div className="py-6 px-4">
      <h2 className="text-xl text-gray-700 mt-4 font-bold mb-2 ">Make your payments</h2>
      <p className="text-[14px] leading-5 md:text-xl text-gray-700  max-w-3xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam veniam ab exercitationem magni architecto ex labore totam, beatae perspiciatis doloremque eligendi? Ipsam facere veritatis rerum enim ut possimus. Odio?</p>
       <div className="flex py-3 border justify-between items-center mt-8 mb-5 px-4 border-gray-400 rounded-md">
           <span className="font-medium text-[14px]"> Account Name:</span> 
           <p className="text-[13px]">Obuwa Emmanuel</p>
       </div>
         <div className="flex py-3 border justify-between items-center my-5 px-4 border-gray-400 rounded-md">
           <span className="font-medium text-[14px]"> Account Number:</span> 
           <p className="text-[13px] flex items-center">{
            isCopy ? <Check size={18} className="mr-1" onClick={copyAction} /> : <Copy size={18} className="mr-1" onClick={copyAction} />
            }  8032827933 </p>
       </div>
        <div className="flex py-3 border justify-between items-center my-5 px-4 border-gray-400 rounded-md">
           <span className="font-medium text-[14px]"> Bank Name:</span> 
           <p className="text-[13px]">Palmpay</p>
       </div>
         <div className="flex py-3 border justify-between items-center my-5 px-4 border-gray-400 rounded-md">
           <span className="font-medium text-[14px]"> Amount:</span> 
           <p className="text-[13px]">₦ 10,000</p>
       </div>
    </div>
    </>
  )
}