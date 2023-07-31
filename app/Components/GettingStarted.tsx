'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { BellDotIcon, CrossIcon, FileLock2, FileLock2Icon, GaugeCircleIcon, HeartHandshakeIcon, ImagePlusIcon, LucideUsers2, MessageSquareIcon, MessagesSquareIcon, MinusIcon, MonitorSmartphoneIcon, MoonIcon, ScrollTextIcon, SearchCheckIcon, SearchIcon, ShieldCheckIcon, SmileIcon, User2Icon, UserCheck2Icon, UserCircle2Icon, UserPlus, UserPlus2, XCircle } from "lucide-react"

const GettingStarted = () => {


  const triggerAction = (elem:any) =>{
      document.getElementById('trigger'+elem)?.click()
      setTimeout(() => {
        document.getElementById('trigger'+(elem+1))?.click()
      }, 100);
  }
  const ClosePopup = (elem:any) =>{
      document.getElementById('trigger'+elem)?.click()
  }

  return (
    <div className="Getting-Started" id='Getting-Started'>
      <h2 className='underline text-3xl font-bold p-5 mt-10 center'>#Getting Started:</h2>
      <ol className='flex flex-col py-5 px-12 list-disc text-xl gap-5 underline'>
        <Popover>
          <PopoverTrigger id="trigger1" className="hover:underline cursor-pointer ">
            <li className="text-start ">
              <strong>Create a New Account using Your Email.</strong>
            </li >
          </PopoverTrigger>
          <PopoverContent >
            <Card className="Getting-Started-Card w-1/2  overflow-scroll overflow-visible mx-5">
              <CardHeader>
                <div className="flex justify-between">
                <UserPlus2 color="#5fc3f0" size={24} style={{ display: 'inline' }} ></UserPlus2>
  
                </div>

                <CardTitle>Create a New Account</CardTitle>
              </CardHeader>
              <CardDescription className="p-5 py-2">
                Get started on ChatVerse by creating a new account using your email. It's quick and easy!
                ChatVerse prioritizes user privacy and security. After creating an account, users can sign in securely
                to access their chats. The verification process is designed to protect user data while maintaining ease
                of use.
              </CardDescription>
              <Button className="mx-5 my-2"
                  onClick={()=>{
                    triggerAction(1);
                    }}> Next
              </Button>
            </Card>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger id="trigger2" className="hover:underline cursor-pointer ">
            <li className="text-start ">
              <strong>Sign in with Your Account.</strong>
            </li >
          </PopoverTrigger>
          <PopoverContent>
            <Card className="Getting-Started-Card w-1/2  overflow-scroll overflow-visible mx-5 ">
              <CardHeader>
              <div className="flex justify-between">
              <User2Icon color="#5fc3f0" size={24} style={{ display: 'inline' }} ></User2Icon>
                <XCircle className="cursor-pointer" onClick={()=>ClosePopup(2)}></XCircle>
                </div>
                
                <CardTitle>Sign in with Your Account</CardTitle>
              </CardHeader>
              <CardDescription className="p-5 py-2">
                Already have an account? Sign in securely to access your chats and connect with friends.
              </CardDescription>
              <Button className="mx-5 my-2"
                  onClick={()=>{
                    triggerAction(2);
                    }}> Next
              </Button>
            </Card>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger id="trigger3" className="hover:underline cursor-pointer ">
            <li className="text-start ">
              <strong>Verify Your Account.</strong>
            </li >
          </PopoverTrigger>
          <PopoverContent>
            <Card className="Getting-Started-Card w-1/2  overflow-scroll overflow-visible mx-5 ">
              <CardHeader>
              <div className="flex justify-between">
              <UserCheck2Icon color="#5fc3f0" size={24} style={{ display: 'inline' }} ></UserCheck2Icon>
                <XCircle className="cursor-pointer" onClick={()=>ClosePopup(3)}></XCircle>
                </div>
                
                <CardTitle>Verify Your Account.</CardTitle>
              </CardHeader>
              <CardDescription className="p-5 py-2">
                Your privacy is important to us. Rest assured that we respect your privacy during the
                verification process.
              </CardDescription>
              <Button className="mx-5 my-2"
                  onClick={()=>{
                    triggerAction(3);
                    }}> Next
              </Button>
            </Card>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger id="trigger4" className="hover:underline cursor-pointer ">
            <li className="text-start ">
              <strong>Add Friends.</strong>
            </li >
          </PopoverTrigger>
          <PopoverContent>
            <Card className="Getting-Started-Card w-1/2  overflow-scroll overflow-visible mx-5">
              <CardHeader>
              <div className="flex justify-between">
              <LucideUsers2 color="#5fc3f0" size={24} style={{ display: 'inline' }} ></LucideUsers2>
                <XCircle className="cursor-pointer" onClick={()=>ClosePopup(4)}></XCircle>
                </div>
                
                <CardTitle>Add Friends</CardTitle>
              </CardHeader>
              <CardDescription className="p-5 py-2">
                Connect with your friends on ChatVerse. Easily search for and add friends to start chatting
                with them. You can add if you are using first time Vansh1190.
              </CardDescription>
              <Button className="mx-5 my-2"
                  onClick={()=>{
                    triggerAction(4);
                    }}> Next
              </Button>
            </Card>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger id="trigger5" className="hover:underline cursor-pointer ">
            <li className="text-start ">
              <strong>Start Chatting. </strong>
            </li >
          </PopoverTrigger>
          <PopoverContent>
            <Card className="Getting-Started-Card w-1/2  overflow-scroll overflow-visible mx-5">
              <CardHeader>
              <div className="flex justify-between">
              <MessageSquareIcon color="#5fc3f0" size={24} style={{ display: 'inline' }} ></MessageSquareIcon>
                <XCircle className="cursor-pointer" onClick={()=>ClosePopup(5)}></XCircle>
                </div>
              
                <CardTitle>Start Chatting.</CardTitle>
              </CardHeader>
              <CardDescription className="p-5 py-2">
                Once you've added friends, you can start engaging in real-time chats with them.
              </CardDescription>
              <Button className="mx-5 my-2"
                  onClick={()=>{
                    triggerAction(5);
                    }}> Next
              </Button>
            </Card>
          </PopoverContent>
        </Popover>
      </ol>
    </div >
  )
}

const Features = () => (
  <div className="Features" id="Features">
    <h2 className="underline text-3xl font-bold p-5 mt-10">ChatVerse Features:</h2>
    <ol className="py-5 px-12 list-disc text-xl grid grid-cols-2 grid-flow-row gap-4 sm:grid-cols-3 Features" >
      <Card className="FeaturesCard">
        <CardHeader>
          <HeartHandshakeIcon></HeartHandshakeIcon>
          <CardTitle>User-Friendly Account Creation</CardTitle>
        </CardHeader>
        <CardDescription className="p-5 py-2">
          The account creation process is simple and hassle-free. Users can easily create a new account using
          their email, ensuring a smooth onboarding experience.
        </CardDescription>
      </Card>



      <Card className="FeaturesCard">
        <CardHeader>
          <ShieldCheckIcon></ShieldCheckIcon>
          <CardTitle>Secure Sign-In and Verification</CardTitle>
        </CardHeader>
        <CardDescription className="p-5 py-2">
          ChatVerse prioritizes user privacy and security. After creating an account, users can sign in securely
          to access their chats. The verification process is designed to protect user data while maintaining ease
          of use.
        </CardDescription>
      </Card>



      <Card className="FeaturesCard">
        <CardHeader>
          <FileLock2Icon></FileLock2Icon>
          <CardTitle>Privacy-Respecting Approach</CardTitle>
        </CardHeader>
        <CardDescription className="p-5 py-2">
          ChatVerse takes privacy seriously and ensures that user data is handled with utmost confidentiality.
          User information is not shared with others without explicit consent.
        </CardDescription>
      </Card>



      <Card className="FeaturesCard">
        <CardHeader>
          <User2Icon></User2Icon>
          <CardTitle>Add Friends</CardTitle>
        </CardHeader>
        <CardDescription className="p-5 py-2">
          Users have the option to connect with their friends on ChatVerse. They can easily search for and add
          friends to start chatting with them.
        </CardDescription>
      </Card>



      <Card className="FeaturesCard col-span-2">
        <CardHeader>
          <MessagesSquareIcon></MessagesSquareIcon>
          <CardTitle>Real-Time Chatting</CardTitle>
        </CardHeader>
        <CardDescription className="p-5 py-2">
          ChatVerse provides a real-time chat platform, allowing users to engage in seamless conversations with
          their friends. Messages are delivered instantly when both users are online.
        </CardDescription>
      </Card>

      <Card className="FeaturesCard">
        <CardHeader>
          <MoonIcon></MoonIcon>
          <CardTitle>Dark Mode</CardTitle>
        </CardHeader>
        <CardDescription className="p-5 py-2">
          Switch to a dark color scheme according to Default Mobile Theme for a comfortable viewing experience, especially in low-light conditions. Saves battery life on devices with OLED or AMOLED screens.(Available in Android App)
        </CardDescription>
      </Card>

      <Card className="FeaturesCard">
        <CardHeader>
          <ScrollTextIcon></ScrollTextIcon>
          <CardTitle>Chat Summarizer</CardTitle>
        </CardHeader>
        <CardDescription className="p-5 py-2">
          Our application has a built-in Chat Summarizer for the Summary of All the previous messages, saving time
          for understanding the messages.
        </CardDescription>
      </Card>


      <Card className="FeaturesCard ">
        <CardHeader>
          <GaugeCircleIcon></GaugeCircleIcon>
          <CardTitle>Optimal Chat Experience</CardTitle>
        </CardHeader>
        <CardDescription className="p-5 py-2">
          For a successful chat experience, it's recommended that both users be active and have each other's chats
          open. This way, messages are more likely to be seen and responded to promptly.
        </CardDescription>
      </Card>

      <Card className="FeaturesCard col-span-2">
        <CardHeader>
          <BellDotIcon></BellDotIcon>
          <CardTitle>Notification</CardTitle>
        </CardHeader>
        <CardDescription className="p-5 py-2">
          Never miss a beat with our real-time message notifications. Get instant alerts whenever a new message arrives. Enjoy seamless communication with our reliable and efficient notification system.

        </CardDescription>
      </Card>


      <Card className="FeaturesCard">
        <CardHeader>
          <ImagePlusIcon></ImagePlusIcon>
          <CardTitle>Image Sharing</CardTitle>
        </CardHeader>
        <CardDescription className="p-5 py-2">
          Users can share images with their friends, adding a visual dimension to their conversations. Image size
          is limited to 5 MB to ensure quick and efficient sharing.
        </CardDescription>
      </Card>



      <Card className="FeaturesCard">
        <CardHeader>
          <SmileIcon></SmileIcon>
          <CardTitle>Emojis and Stickers</CardTitle>
        </CardHeader>
        <CardDescription className="p-5 py-2">
          To enhance communication, ChatVerse offers a variety of emojis and stickers that users can use to
          express themselves creatively.
        </CardDescription>
      </Card>


      <Card className="FeaturesCard">
        <CardHeader>
          <SearchIcon></SearchIcon>
          <CardTitle>Search Functionality</CardTitle>
        </CardHeader>
        <CardDescription className="p-5 py-2">
          ChatVerse includes a powerful search feature that allows users to find friends and past conversations
          quickly.
        </CardDescription>
      </Card>


      <Card className="FeaturesCard">
        <CardHeader>
          <MonitorSmartphoneIcon></MonitorSmartphoneIcon>
          <CardTitle>Multi-Platform Support</CardTitle>
        </CardHeader>
        <CardDescription className="p-5 py-2">
          ChatVerse is accessible across various devices and platforms, including web browsers, mobile phones, and
          tablets, ensuring users can stay connected wherever they go.
        </CardDescription>
      </Card>
    </ol>
  </div>
);

const Footer = () => {

  const RecordRating = () => {
    const subject = "Review About ChatVerse";
    const body = "We were happy to here from you,\nWrite your Review here";
  
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
  
    const mailtoLink = `mailto:vanshk605@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  
    window.location.href = mailtoLink;
  };

  // const triggerAction = (elem:any) =>{
  //     document.getElementById('trigger'+elem)?.click()
  //     setTimeout(() => {
  //       document.getElementById('trigger'+(elem+1))?.click()
  //     }, 100);
  // }
  // const ClosePopup = (elem:any) =>{
  //     document.getElementById('trigger'+elem)?.click()
  // }

  return (
    <>
    <div className="Getting-Started p-12 text-center" id='Aboutus'>
      <Button onClick={RecordRating} className="">Leave a Rating</Button>
    </div >
    <div className="Getting-Started text-center" id='Getting-Started'>
      <h2 className="">Made with 💖 by <a className="text-blue-700 underline" href="https://vansh1190.github.io/about">Vansh</a></h2>
    </div >
    </>
  )
}


export {
  GettingStarted,
  Features,
  Footer
}
