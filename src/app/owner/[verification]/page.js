"use client"
import '@/styles/tailwind.css'
import logosvg from "@/assets/login/logo.svg"
import homesvg from "@/assets/login/home.svg"
import pgsvg from "@/assets/login/pg.svg"
import registerHomesvg from "@/assets/login/registerHome.svg"
import registerLogosvg from "@/assets/login/registerLogo.svg"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import RegisterFrom from "@/components/RegisterFrom"
import LoginForm from "@/components/LoginForm"
import '@/styles/animation.css'
import Link from 'next/link'


const page = ({ params }) => {
  console.log(params.verification)
  const router = useRouter();
  const [showLoginComponent, setShowLoginComponent] = useState(true)


  const showLogin = () => {
    setShowLoginComponent(true);
    setTimeout(() => {
      router.push('/owner/login')
    }, 500);
  }

  const showRegistration = () => {
    router.push('/owner/register')
  }
  
  useEffect(() => {
    if (params.verification === 'login') {
      setShowLoginComponent(true);
    } else if (params.verification === 'register') {
      setShowLoginComponent(false);
    } else {
      //show page not found

    }
  }, [params])

  return (
    <>
      <div className={`container ${showLoginComponent ? "" : "right__panel__active"}`} id="container" >

        <div className="navbar flex justify-between  relative z-50">

          < div className="logo" >
            <Image src={showLoginComponent ? logosvg : registerLogosvg} alt='logo' className=' change m-10 w-28 h-auto' />
          </div >

          < div className="goToHome flex float-right m-10 justify-center items-center" >
            <div>
              <Image src={showLoginComponent ? homesvg : registerHomesvg} className=' change w-[14px] mr-3' />
            </div>
            <Link className='change font-light text-sm' style={{ color: showLoginComponent ? "white" : "#379017" }} href="/">Go to Home</Link>
          </div >
        </div>


        <RegisterFrom />
        <LoginForm />

        <div className="overlay__container" id="overlayContainer">

          <div className="overlay__wrapper">
            <div className="overlay__panel overlay__panel__left">
              <div className="main flex flex-col justify-center items-center mt-4">
                <Image src={pgsvg} alt="icon" className=' w-12' />
                <div className="rounded-lg p-8 flex flex-col w-4/5">
                  <h1 className="text-3xl text-center font-semibold text-white mb-7">Welcome !!</h1>
                  <div className="relative text-white text-center">
                    To keep connected with us please sign In with your personal info
                  </div>
                  <button className="text-gray-200 py-2 text-sm px-8 outline-none w-44 text-center h-11 relative left-1/4 rounded-3xl mt-8 mb-4 border-2 font-light" style={{ background: "#6FB258" }} onClick={showLogin}>Sign In</button>
                </div>
              </div>
            </div>

            <div className="overlay__panel overlay__panel__right">
              <div className="main flex flex-col justify-center items-center mt-4">
                < Image src={pgsvg} alt="logo" className=' w-12' />
                <div className="rounded-lg p-8 flex flex-col w-4/5">
                  <h2 className=" text-white title-font text-center font-semibold text-3xl mb-7">Create Account</h2>
                  <div className="relative text-white text-center">
                    To keep connected with us please sign Up with your personal info
                  </div>
                  <button className="text-gray-200 py-2 text-sm px-8 outline-none w-44 text-center h-11 relative left-1/4 rounded-3xl mt-8 mb-4 border-2 font-light" style={{ background: "#6FB258" }} onClick={showRegistration}>Sign Up</button>
                </div>
              </div >
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default page