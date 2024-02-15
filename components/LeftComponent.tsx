"use client";
import React, { useState } from 'react'
import PrivateVehicle from "../public/images/private.svg"
import CommercialVehicle from "../public/images/commercial.svg"
import Tractor from "../public/images/tractor.png"
import Bike from "../public/images/bike.png"
import Image from 'next/image';
import GoodsVehicle from "../public/images/goodsvehicle.png";
import Bus from "../public/images/bus.svg"
import { type } from 'os';
import { types } from 'util';





interface LeftProps{

}


interface VehicleType {
    id: number;
    name: string;
    image: any;
    tabs: Tab[];
}

interface Tab {
    value: string;
    label: string;
    content: string;
    image : any;
}

const LeftComponent: React.FC<LeftProps> = () => {
    const [selectedType, setSelectedType] = useState<string | null>('Private');
    const [clickedCard, setClickedCard] = useState<number | null>(1);
    const [selectedTab, setSelectedTab] = useState<string>('2wheeler');
    const [selectedNestedTab, setSelectedNestedTab] = useState<string>('old');



    const vehicleTypes: VehicleType[] = [
        {
          id: 1,
          name: 'Private',
          image: PrivateVehicle,
          tabs: [
            { value: '2wheeler', label: '2 Wheeler', content: 'Content for 2 Wheeler' , image :Bike  },
            { value: '4wheeler', label: '4 Wheeler', content: 'Content for 4 Wheeler' , image :PrivateVehicle },
          ],
        },
        {
          id: 2,
          name: 'Commercial',
          image: CommercialVehicle,
          tabs: [
            { value: 'goods', label: 'Goods Carrying Vehicle', content: 'Content for Goods Carrying Vehicle', image :GoodsVehicle },
            { value: 'passenger', label: 'Passenger Carrying Vehicle', content: 'Content for Passenger Carrying Vehicle' , image :Bus },
          ],
        },
        {
          id: 3,
          name: 'Miscellaneous',
          image: Tractor,
          tabs: [{ value: 'misc', label: 'Miscellaneous', content: 'Content for Miscellaneous Vehicle',  image :Tractor  }],
        },
      ];

      const handleCardClick = (typeName: string,) => {
        setSelectedType(typeName);
        setSelectedTab(typeName); 
        setSelectedNestedTab('old'); 
      };

  return (
    <div className="py-8 px-4 border-t shadow-lg rounded-md">
     <div className='text-center'>
  <h2 className='text-4xl text-bold'>What you want to insure today?</h2>
  <div className="flex flex-wrap justify-center p-6 gap-4">
    {vehicleTypes.map((type) => (
      <div
        key={type.id}
        className={`border rounded-lg flex flex-col justify-center items-center p-4 transition duration-300 hover:border-orange-500 ${
          selectedType === type.name ? 'bg-orange-400 border-orange-500' : 'bg-slate-200 hover:border-orange-300'
        }`}
        style={{ width: "100px", height: "100px" }}
        onClick={() => handleCardClick(type.name)}
      >
        <Image src={type.image} alt="image" width={50} height={50} />
        <p className="mt-2 text-center text-sm">{type.name}</p>
      </div>
    ))}
  </div>
</div>



<div className='flex flex-col w-full '>
  {vehicleTypes.map((type) => (
    <React.Fragment key={type.id}>
      {selectedType === type.name && (
        <div className='flex justify-start'>
          {type.tabs.map((tab) => (
            <button
              key={tab.value}
              className={`px-4 py-2 font-semibold ${selectedTab === tab.value ? 'border-b-2 border-orange-500 text-orange-500 bg-white' : 'border-b-2 border-transparent text-black bg-white'} focus:outline-none`}
              onClick={() => setSelectedTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </React.Fragment>
  ))}
  <div className='flex flex-col w-full px-2 py-4 border border-b-4  gap-y-4'>
    <div className='grid grid-cols-3 '>
      <div className='col-span-2  flex-col w-full  flex gap-y-4'>
      <div className='w-full flex mt-4'>
  <button className={`px-2 py-2 md:px-6 rounded-md rounded-r-none ${selectedNestedTab === 'old' ? 'bg-[#1C1F3E] text-white' : 'bg-white text-blue-800 '} border border-[#1C1F3E] text-sm whitespace-nowrap`} onClick={() => setSelectedNestedTab('old')}>Old Vehicle</button>
  <button className={`px-2 py-2 md:px-6 rounded-md rounded-l-none ${selectedNestedTab === 'new' ? 'bg-[#1C1F3E] text-white' : 'bg-white text-blue-800 '} border border-[#1C1F3E]  text-sm whitespace-nowrap`} onClick={() => setSelectedNestedTab('new')}>New Vehicle</button>
</div>

        <div>
          {vehicleTypes.map((type) => (
            <div key={type.id} className={`${selectedType === type.name ? 'block' : 'hidden'}`}>
              {type.tabs.map((tab) => (
                <div key={tab.value} className={`${selectedTab === tab.value ? 'block' : 'hidden'} `}>
                  {selectedNestedTab === 'old' && (
                    <div className=' md:mt-4 md:mb-4'>
                      <label>Registration Number</label>
                      <input className="p-2 block w-full border border-gray-300  mt-2" placeholder='Enter Registration Number'/>
                    </div>
                  )}
                  {selectedNestedTab === 'new' && (
                    <div className='md:mb-4 md:mt-4'>
                      <label className="mb-4">RTO Code</label>
                      <input className="block w-full p-2 border border-gray-300  mb-4 " placeholder='Enter RTO Code'/>
                      <label  className="mb-4">Customer Mobile Number</label>
                      <input className="block w-full p-2 border border-gray-300  mb-4 " placeholder='Enter Customer Mobile Number'/>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='hidden md:flex md:items-center md:justify-center'>
  {vehicleTypes.map((type) => (
    <div key={type.id} className={`${selectedType === type.name ? 'block' : 'hidden'}`}>
      {type.tabs.map((tab) => (
        <div key={tab.value} className={`${selectedTab === tab.value ? 'block' : 'hidden'} flex items-center justify-center`}>
          <Image src={tab.image} alt="Vehicle Image" width={100} height={100} />
        </div>
      ))}
    </div>
  ))}
</div>
    </div>
    <div className='flex items-center justify-center '>
      <button className='bg-orange-500 px-10 py-2 rounded-md font-semibold text-white text-sm'>Find Plans</button>
    </div>
  </div>
</div>

</div>
  )
}

export default LeftComponent


//