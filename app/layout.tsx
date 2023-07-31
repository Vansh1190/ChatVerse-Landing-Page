'use client'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import MenuNew from '@/app/MenuNew'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'inter.className'}>
        <main className='h-1522' id='Home'>
          <NavigationMenu style={{alignItems: 'center'}} className='p-5 fixed w-full bg-slate-900 flex align-center justify-between'>
            <div className='flex align-center justify-center gap-4 ' >
              <Avatar className='h-15 w-12 pt-2'>
                <AvatarImage loading='eager' src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" />
                <AvatarFallback>CV</AvatarFallback>
              </Avatar>
              <h1 className='text-slate-300 tracking-wider text-2xl font-bold grid content-center'>ChatVerse</h1   >
            </div>
            <MenuNew/>
          </NavigationMenu>
        </main>
        {children}
        <Toaster  />
      </body>
    </html>
  )
}
