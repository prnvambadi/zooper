"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../../public/images/zooperlogo.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { useState, useEffect } from 'react'




interface NavbarProps {
    
}

export const Navbar : React.FC<NavbarProps> =  () => {
    const [isClient, setIsClient] = useState(false)
    const [email, setEmail] = useState<string | null>(null);

 
    useEffect( () => {
      const storedEmail = localStorage.getItem('currentUser');
      setEmail(storedEmail);    }, []);

  return (
   <nav className='flex items-center justify-between bg-white px-8 drop-shadow-md'>
        {/*logo image */}
        <Link href="/">
            <Image src={Logo} height={150} width={150} alt='Zooper Brand Logo'/>
        </Link>
        <div className='flex items-center gap-4'>

                <Link href="/">
                    <h4 className='text-blue-500 hover:underline-offset-2 duration-300 text-xl'>Be a POSP</h4>
                </Link>
   
            <div className='flex items-center gap-4'>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
             <AvatarFallback>Zooper</AvatarFallback>
                </Avatar>
                <DropdownMenu>
  <DropdownMenuTrigger>{email || 'Guest'} | POSP</DropdownMenuTrigger>
  <DropdownMenuContent className='px-4 py-4'>
    <DropdownMenuItem className='text-md'>View Z Report </DropdownMenuItem>
    <DropdownMenuSeparator />
    <Link href="login">
    <DropdownMenuItem className='text-md'>Logout</DropdownMenuItem>
    </Link>
  </DropdownMenuContent>
</DropdownMenu>

            </div>
   </div>
           
   </nav>
  )
}

