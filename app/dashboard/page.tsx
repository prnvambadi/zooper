"use client";
import { useRouter } from 'next/navigation'
import FourthComponent from '@/components/FourthComponent'
import LeftComponent from '@/components/LeftComponent'
import SecondComponent from '@/components/SecondComponent'
import Footer from '@/components/common/Footer'
import Image from 'next/image'
import React from 'react'
import Banner from "../../public/images/banner.jpg"
import { Navbar } from '@/components/common/Navbar'
import { isAuthenticated } from '@/protected/auth'

interface DashboardProps {

}

const Dashboard:React.FC<DashboardProps> =  () => {
  const router = useRouter();
  if (!isAuthenticated()) {
      router.push('/login');
      return null;
  }

  return (
   <>
       <Navbar/>
   <div className="flex items-center justify-center ">
            <Image src={Banner} width={Banner.width} height={Banner.height} alt="Zooper Banner"/>
        </div>

        <div className="mx-auto py-6 px-8">
                <h1>Welcome!</h1>
       
        <div className="p-4 md:grid md:grid-cols-3 md:gap-4">
          <div className="md:col-span-2">
            <LeftComponent />
          </div>
          <div className="md:flex md:flex-col  py-4 justify-around">
            <SecondComponent />
            <FourthComponent />
          </div>
        </div>
        <Footer/>
            </div>
   
   </>
  )
}

export default Dashboard;