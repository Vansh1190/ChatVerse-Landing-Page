'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { Separator } from '@radix-ui/react-separator'

const MenuNew = () => {
  const scrollTo = (ID:any) => {
    console.log(document.getElementById(ID))
    setTimeout(() => {
      document.getElementById(ID)?.scrollIntoView()
    }, 400);
    console.log(ID)
  }
  return (
    <Sheet>
      <SheetTrigger asChild  >
        <Button className='bg-transparent'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side='bottom'  className='flex flex-col text-xl align-center MenuButtons '>
        <SheetTitle className='font-bold text-xl MenuTitle '>ChatVerse</SheetTitle>

        <Button onClick={() => scrollTo('Home')}className='w-full '>
          <SheetClose className='w-full'>
            <button className='w-full'>Home</button>
          </SheetClose>
          <Separator />
        </Button>
        <Button onClick={() => scrollTo('Getting-Started')} className='w-full '>
          <SheetClose className='w-full'>
            <button className='w-full'>Getting Started</button>
          </SheetClose>
          <Separator />
        </Button>

        <Button onClick={() => scrollTo('Features')} className='w-full'>
          <SheetClose className='w-full'>
            <button className='w-full'>Features</button>
          </SheetClose>
          <Separator />
        </Button>
       
       
        <Button className='w-full' onClick={() => scrollTo('Aboutus')}> 
          <SheetClose className='w-full'>
            <button className='w-full'>About US</button>
          </SheetClose>
          <Separator />
        </Button>
        
        {/* <SheetHeader>
                    <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader> */}
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default MenuNew