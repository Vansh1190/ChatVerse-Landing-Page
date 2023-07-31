'use client'
import MenuNew from '@/app/MenuNew'
import Image from 'next/image'
import '../style/app.css'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

import HeaderImg from './MObile.png'
import { headers } from 'next/dist/client/components/headers'
import { Button } from '@/components/ui/button'
import Link from 'next/link'  
import { Features, Footer, GettingStarted } from './Components/GettingStarted'
import { toast } from '@/components/ui/use-toast'
import { ToastAction } from '@radix-ui/react-toast'
import { Blob } from 'buffer'

export default function Home() {

  const DownloadAPP = () => {
    // console.log('ehlo')
   

    toast({
      title: "Thank you for Downloading ChatVerse ",
      description: "We hope you like ChatVerse, we were happy to hear your valuable feedback.",
      duration:5000,
    })
    setTimeout(() => {
      window.location.href='/ChatVerse.apk'
    }, 3000);
  }
  
  const GotoChatVerse = () => {
    toast({
      title: "Thank you for Using ChatVerse ",
      description: "We hope you like ChatVerse, we were happy to hear your valuable feedback.\n You will be automatically redirected in 5s !",
      duration:7000,
      action: <Button>
        <ToastAction onClick={()=> window.open('https://chatuniverse.vercel.app')} altText="Try again">ChatVerse</ToastAction>
        </Button>
    })
    setTimeout(() => {
        window.location.href = 'https://chatuniverse.vercel.app'
    }, 6000);
  }

  return (
    <>
      <main className='HomePageDisplay pt-24' id='Home'>
        {/* <h1>1</h1> */}
        <Card className='flex align-center bg-transparent outline-none border-none justify-evenly '>
          <CardHeader className='flex align-center p-2 justify-evenly ' >
            <CardTitle className='title text-font-800 text-slate-300 text-xl '>#Stay Connected
              <p className='description text-xs pt-2 pl-2'>Discover a world of real-time messaging and experience with Chatverse</p></CardTitle>

            <CardDescription className='ButtonCont flex gap-2'>
              <Button onClick={GotoChatVerse}>
                {/* <Link href='https://chatuniverse.vercel.app'> */}
                  Go to ChatVerse
                {/* </Link> */}
              </Button>
              <Button onClick={DownloadAPP}>Download</Button>
            </CardDescription>
          </CardHeader >
          <CardHeader className='flex px-0 space-x-0 align-center' >
            <Image
              src={HeaderImg}
              id='HomePageDisplayImg'
              alt="Picture of the author"
            />
          </CardHeader>
        </Card>
      </main>

      <GettingStarted/>
      <Features/>
      <Footer/>
    </>

  )
}
