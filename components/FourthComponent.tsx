import React from 'react'
import { FaUpload } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";



interface LeftProps {

}

const FourthComponent : React.FC<LeftProps> = () =>{
  return (
    <div className=''>
          <h3 className="md:text-lg text-sm  font-semibold mb-4 text-slate-600 mt-4">Additional Service</h3>
      <div className="md:grid md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-4 ">
                <div className='px-2 py-4 border-2 border-b-green-400 border-b-4  hover:border-green-400 transition rounded-md flex items-center justify-between mb-2 shadow-lg'>
                <div className='items-center flex gap-2'>
                        <IoDocumentText/>
                        <h5>Solid Policy </h5>
                    </div>
                    <FaChevronRight/>
                </div>
                <div className='px-2 py-4 border-2 border-b-orange-400 border-b-4 hover:border-orange-400 transition rounded-md  flex items-center justify-between mb-2 shadow-lg'>
                    <div className='items-center flex gap-2'>
                        <FaUpload/>
                        <h5> Upload Offline Policy</h5>
                    </div>
                    <FaChevronRight/>

                </div>
                <div className='px-2 py-4 border-2 border-b-slate-500 border-b-4 hover:border-slate-500  transition rounded-md flex items-center justify-between mb-2 shadow-lg'>
                <div className='items-center flex gap-2'>
                        <FaUpload/>
                        <h5>Renewals</h5>
                    </div>
                    <FaChevronRight/>

                </div>
                <div className='px-2 py-4 border-2 border-b-blue-400 border-b-4 hover:border-blue-400  transition rounded-md flex items-center justify-between mb-2 shadow-lg'>
                <div className='items-center flex gap-2'>
                        <FaUser/>
                        <h5> User Listing</h5>
                    </div>
                    <FaChevronRight/>
             </div>
    </div>
    </div>
   
  )
}

export default FourthComponent