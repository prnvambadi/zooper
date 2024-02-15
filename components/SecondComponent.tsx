"use client";
import React from 'react'
import { DatePickerWithRange } from './Datepick'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface SecondProps {

}


const SecondComponent : React.FC<SecondProps> = () => {
  const percentage = 33;

  return (
    <div className=" shadow-lg w-full flex flex-col p-2 gap-y-4 border rounded justify-evenly ">
    <div className="flex justify-between py-2 px-2 items-center">
     <h4 className='text-slate-600 md:font-medium  text-sm '>Leads Overview</h4>
     <DatePickerWithRange />
    </div>
    <div className="bg-green-200 flex flex-col border  rounded ">
      <div className='bg-slate-200 flex justify-between px-4 py-2'>
      <h4>Total Leads : <span className="text-orange-500 font-semibold">39</span></h4>
         <a href="/" className='underline underline-offset-1'>View Details</a>
      </div>
      <div className='flex justify-around'>
        <div className='flex-flex-col flex-grow'>
                <div className='bg-white p-2'>
                <div style={{ width: 50, height: 50 }}>
                <CircularProgressbar value={percentage} text={`${percentage}%`} />;
</div>               <h2>Open Leads</h2>
                </div>
               <div className='bg-blue-200 flex justify-between items-center p-2'>
                    <h2>38 out of 39</h2>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
               </div>
            <div>

            </div>
        </div>
        <div className='flex-flex-col flex-grow'>
                <div className='bg-white p-2'>
                <div style={{ width: 50, height: 50 }}>
                <CircularProgressbar value={percentage} text={`${percentage}%`} />;
</div>            <h2>Drop Leads</h2>
                </div>
               <div className='bg-red-200 flex items-center justify-between p-2'>
                    <h2>1 out of 39</h2>
                    <svg width="15" height="15"
                     viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>

               </div>
            <div>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SecondComponent