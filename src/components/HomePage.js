"use client"
import '@/styles/tailwind.css'
import React from 'react'
import bg from '@/assets/home/bg.svg'
import greenbg from '@/assets/home/greenbg.svg'
import mobile from '@/assets/home/mobile.svg'
import logo from '@/assets/home/logo.svg'
import arrow from '@/assets/home/arrow.svg'
import Image from 'next/image'
import Link from 'next/link'
import f1 from '@/assets/home/f1.svg'
import f2 from '@/assets/home/f2.svg'
import f3 from '@/assets/home/f3.svg'
import img1 from '@/assets/home/img1.svg'
import img2 from '@/assets/home/img2.svg'
import img3 from '@/assets/home/img3.svg'
import tick from '@/assets/home/tick.svg'
import dash from '@/assets/home/dashboard.svg'
import contact from '@/assets/home/contact.svg'
import mail from '@/assets/home/mail.svg'
import linkedin from '@/assets/home/linkedin.svg'
import x from '@/assets/home/x.svg'
import bar from '@/assets/home/bar.svg'
import call from '@/assets/home/call.svg'
import { useState, useEffect } from "react";
import cross from '@/assets/home/cross.svg'

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            "heading1": " Simplify rent collection",
            "heading2": "& rent reminders",

            "subheading": "Rent collection and reminders  has never been simpler. Our platform allows you to automate rents, ensuring you receive payments on time every month",

            "p1": "Never miss a payment with our automated rent reminders on whatsapp.",
            "p2": "All rent amount directly goes to your account as usual.",
            "p3": "Cash or UPI,  we manage both 😊 ",
            "p4": "Strong and stable just like you.",
            "img": f1,
        },
        {
            "heading1": "Hassle free new",
            "heading2": "tenant onboarding",

            "subheading": "Streamline the onboarding process for new tenants with our efficient system, the tenant is automatically added to your tenant list, making the entire process quick. ",

            "p1": "Tenant fill all the details - select Property - do the payment and submit Request. ",
            "p2": "Request then comes to Owners.",
            "p3": "Just look out details - Verify the payments - Assign the Room/Flat. ",
            "p4": "Approve and all set.",
            "img": f2,
        },
        {
            "heading1": "Quickly manage your",
            "heading2": "rooms in just one click",

            "subheading": "Our comprehensive room management feature provides detailed information on every room across all floors, including vacancy status ans many more",

            "p1": "Full floor plan in details with easiest UI possible.",
            "p2": "Red for occupied, green for available and yellow for vacating.",
            "p3": "Scan the QR, and get the live avaialbility of beds.",
            "p4": "And yes, anyone can scan the QR",
            "img": f3,
        }
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [slides.length]);

    return (
        <>
            <div className="navbar w-full flex justify-between bg-white items-center h-16 fixed top-0 left-0 z-10 px-4 lg:px-10">
                <div className="logo">
                    <Image src={logo} alt="logo" width={100} height={100} />
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex justify-between w-1/3 max-lg:w-1/2">
                    <Link href="/tenant/tenantDashboard">Tenants</Link>
                    <Link href="/owner/manage/dashboard">Owners</Link>
                    <Link href="#footer">Contact us</Link>
                    <Link href="#pricing">Pricing</Link>
                </div>
                <div className="signin hidden lg:flex">
                    <button
                        className="flex items-center px-10 py-3 text-white text-sm rounded-md cursor-pointer"
                        style={{ background: "#205500" }}
                    >
                        <Link href="/owner/register">Sign In</Link>
                    </button>
                    <button className='flex items-center max-sm:px-6 px-4 py-3 ml-2 text-white text-sm rounded-md cursor-pointer drop- ' style={{ background: "#205500" }}>
                        <Link href="/owner/manage/dashboard">Go To Demo</Link>
                        <Image src={arrow} alt="arrow" width={12} height={12} className=' ml-1' />
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-2xl z-50">
                        {isMenuOpen ? <Image src={cross} width={35} height={35} /> : <Image src={bar} width={35} height={35} />}
                    </button>
                </div>

                <div
                    className={`fixed inset-0 flex flex-col items-center justify-center z-20 transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                        } transition-transform duration-500 ease-in-out`}
                    style={{ backgroundImage: `url(${greenbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', backgroundRepeat: 'no-repeat' }}
                >
                    <div className="flex flex-col space-y-6 text-xl text-white">
                        <Link href="/tenant/tenantDashboard" onClick={toggleMenu}>
                            Tenants
                        </Link>
                        <Link href="/owner/manage/dashboard" onClick={toggleMenu}>
                            Owners
                        </Link>
                        <Link href="#footer" onClick={toggleMenu}>
                            Contact us
                        </Link>
                        <Link href="#pricing" onClick={toggleMenu}>
                            Pricing
                        </Link>
                        <button
                            className="flex items-center px-10 py-3 text-sm rounded-md cursor-pointer bg-white text-green-900"
                        >
                            <Link href="/owner/register">Sign In</Link>
                        </button>
                        <button className='flex items-center max-sm:px-6 px-4 py-3 bg-white text-sm rounded-md cursor-pointer text-green-900 '>
                            <Link href="/owner/manage/dashboard">Go To Demo</Link>
                            <Image src={arrow} alt="arrow" width={12} height={12} className=' ml-1 invert' />
                        </button>
                    </div>
                </div>
            </div>



            <main className="main pt-16 pb-6 max-sm:pb-10 flex" style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', backgroundRepeat: 'no-repeat' }}>
                <div className="part1 text-[40px] max-md:text-[25px] font-semibold absolute top-[13%] left-[5%]" style={{ color: "#205500" }}>
                    <div>
                        Property management
                    </div>
                    <div>
                        made simple
                    </div>
                </div>
                <div className=' ml-[20%] flex max-sm:ml-0 max-sm:flex-col'>
                    <div className="part2 w-[58%] pt-[14%] max-sm:pt-[32%] max-sm:w-[77%] max-sm:m-auto">
                        <Image src={mobile} className=' w-full h-full' alt='mobile' />
                    </div>
                    <div className="part3 pt-[5%] pl-[5%] space-y-10">
                        <div className="images max-sm:absolute max-sm:right-1">
                            <div className=' flex justify-center pb-10 max-sm:pb-8'>
                                <Image src={img3} alt="img" width={100} height={100} className='ml-[27%] max-sm:ml-0 max-sm:w-16 max-sm:relative max-sm:-left-[5.5rem] max-sm:top-6' />
                            </div>
                            <div className='flex relative right-[20%]'>
                                <Image src={img1} alt="img" width={450} height={100} className=' max-sm:hidden' />
                                <Image src={img2} alt="img" width={100} height={100} className='relative left-[21%] max-sm:w-16' />
                            </div>
                        </div>
                        <div className=' font-semibold text-[40px] space-y-2 max-sm:text-[25px]' style={{ color: "#205500" }}>
                            <div>
                                In just more
                            </div>
                            <div>
                                professional way
                            </div>
                        </div>
                        <div className='w-[65%] text-sm max-sm:w-11/12' style={{ color: '#737373' }}>
                            Designed for both small and large portfolios, it adapts to the unique needs of property managers, that saves time.
                        </div>
                        <div>
                            <button className='flex items-center max-sm:px-8 px-10 py-3 text-white text-sm rounded-[4px] cursor-pointer drop- ' style={{ background: "#205500" }}>
                                <div>
                                    Join the team
                                </div>
                                <Image src={arrow} alt="arrow" width={12} height={12} className=' ml-3' />
                            </button>
                        </div>
                    </div>
                </div>
            </main>



            <div className="feature slider bg-white">
                <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div className="slide bg-white" key={index}>
                            <div className="w-full bg-white py-20 pb-28 max-sm:pb-0 flex justify-evenly items-center max-sm:flex-col-reverse">

                                <div className="left w-2/5 space-y-7 max-sm:w-[95%] max-sm:m-auto max-sm:text-xs">

                                    <div className="heading text-[40px] font-semibold max-sm:hidden" style={{ color: "#205500" }}>
                                        <div>
                                            {slide.heading1}
                                        </div>
                                        <div>
                                            {slide.heading2}
                                        </div>
                                    </div>

                                    <div className="subheading" style={{ color: "#737373" }}>
                                        {slide.subheading}
                                    </div>

                                    <ul className='pointers space-y-4'>
                                        <li className='flex'><div><Image src={tick} alt="arrow" width={20} height={18} className=' mr-5' /></div> <div>{slide.p1} </div></li>
                                        <li className='flex'><div><Image src={tick} alt="arrow" width={20} height={18} className=' mr-5' /></div> <div>{slide.p2} </div></li>
                                        <li className='flex'><div><Image src={tick} alt="arrow" width={20} height={18} className=' mr-5' /></div> <div>{slide.p3}  </div></li>
                                        <li className='flex'><div><Image src={tick} alt="arrow" width={20} height={18} className=' mr-5' /></div> <div>{slide.p4} </div></li>
                                    </ul>

                                </div>

                                <div className={`right ${index == 0 ? 'w-[47%] max-sm:w-full' : 'w-2/5 max-sm:w-[87%]'} max-sm:pb-9`}>
                                    <div className="heading font-semibold max-sm:text-[25px] hidden max-sm:block mb-5 text-center" style={{ color: "#205500" }}>
                                        <div>
                                            {slide.heading1}
                                        </div>
                                        <div>
                                            {slide.heading2}
                                        </div>
                                    </div>
                                    <Image src={slide.img.src} width={100} height={100} className={`${index === 0 ? 'w-[100%]' : index === 2 ? 'w-[70%]' : 'w-[75%]'} h-full m-auto`} alt='images' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bars flex justify-center relative space-x-2 h-2 -top-10 max-sm:-top-[16rem]">
                    <div className="bar w-20 max-sm:w-12 rounded-xl transition-colors duration-1000"
                        style={{ background: currentSlide === 0 ? "#2C6F15" : '#D9D9D9' }}>
                    </div>
                    <div className="bar w-20 max-sm:w-12 rounded-xl transition-colors duration-1000"
                        style={{ background: currentSlide === 1 ? "#2C6F15" : '#D9D9D9' }}>
                    </div>
                    <div className="bar w-20 max-sm:w-12 rounded-xl transition-colors duration-1000"
                        style={{ background: currentSlide === 2 ? "#2C6F15" : '#D9D9D9' }}>
                    </div>
                </div>

            </div>


            <div id='pricing' className=" py-24 max-sm:py-12" style={{ backgroundImage: `url(${greenbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', backgroundRepeat: 'no-repeat' }}>
                <div className="flex justify-evenly items-center max-sm:flex-col">
                    <div className="left">
                        <div className="head font-semibold space-y-2 hidden max-sm:block text-white text-center text-[25px] pb-6">
                            <div className="head1">
                                Giving everything
                            </div>
                            <div className="head2">
                                in exchange of nothing
                            </div>
                        </div>
                        <Image src={dash} alt="img" className=' w-full max-sm:w-11/12 max-sm:m-auto' />
                    </div>
                    <div className="right text-white space-y-10">
                        <div className="head font-semibold space-y-2 max-sm:hidden text-[40px]">
                            <div className="head1">
                                Giving everything
                            </div>
                            <div className="head2">
                                in exchange of nothing
                            </div>
                        </div>
                        <div className="para text-xl text-gray-300 space-y-2 max-sm:text-[16px]">
                            <div className="para1">
                                Enjoy the 14 days FREE trial
                            </div>
                            <div className="para2">
                                After that Rs. 49* / bed  per month
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="contact bg-gray-100 py-10 flex justify-evenly items-center max-sm:flex-col">
                <div className="left w-1/2  space-y-7 max-sm:w-full max-sm:pb-5 text-left max-sm:text-center">
                    <div className="head font-semibold text-[40px] max-sm:text-[25px]" style={{ color: '#205500' }}>
                        We’re just 0 miles away
                    </div>
                    <div className="para max-sm:text-xs" style={{ color: '#737373' }}>
                        We’re here to help! Whether you have a question about our features, need assistance with your account, or want to provide feedback, our team is ready to assist you.
                    </div>
                    <div className='py-10 max-sm:py-4'>
                        <Image src={contact} alt="img" className=' w-30 m-auto' />
                    </div>
                    <div className=' flex justify-evenly max-sm:flex-col max-sm:items-center max-sm:space-y-3' style={{ color: '#363636' }}>
                        <div className='flex items-center'>
                            <div className='mr-3'>
                                <Image src={mail} alt="img" className=' w-4' />
                            </div>
                            <div>
                                pgms@deskmateai.com
                            </div>
                        </div>
                        <div className=' flex items-center'>
                            <div className='mr-3'>
                                <Image src={call} alt="img" className=' w-4' />
                            </div>
                            <div>
                                +91 -  99910 91058, 93060 23063
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right border border-[#D9D9D9] rounded-lg max-sm:w-11/12">
                    <div className="bg-white p-6 rounded-lg  -md">
                        <form className=' space-y-10 max-sm:text-xs'>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propertyName">
                                    Property Name
                                </label>
                                <input
                                    type="text"
                                    id="propertyName"
                                    placeholder="e.g. Sri Kaveri Girls P.G. Bangalore"
                                    className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                    Complete Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    placeholder="e.g. 12, Sathya Sai Layout, Whitefield"
                                    className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ownerName">
                                        Owner Name
                                    </label>
                                    <input
                                        type="text"
                                        id="ownerName"
                                        placeholder="e.g. Naryana N."
                                        className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="text"
                                        id="mobileNumber"
                                        placeholder="e.g. 9876543210"
                                        className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                                    />
                                </div>
                            </div>

                            <div className="">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                    Describe Your Issue
                                </label>
                                <textarea
                                    id="description"
                                    placeholder="e.g. need to purchase the software"
                                    className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                                    rows={4}
                                ></textarea>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="text-white font-bold py-2 px-4 rounded focus:outline-none focus: -outline w-full drop- -md"
                                    style={{ background: '#205500' }}
                                >

                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <footer id='footer' className=' text-white py-16 space-y-7' style={{ backgroundImage: `url(${greenbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', backgroundRepeat: 'no-repeat' }}>
                <div className=' flex w-1/2 max-sm:w-3/5 ml-[8%] max-sm:m-auto justify-between max-sm:flex-col'>

                    <div className=' max-sm:text-center max-sm:py-5'>
                        <div className='font-bold text-lg mb-3'>
                            Quick Links
                        </div>
                        <div>
                            <ul className=' space-y-2'>
                                <li>
                                    <Link href={'#'} >About Us</Link>
                                </li>
                                <li>
                                    <Link href={'#'} >Contact Us</Link>
                                </li>
                                <li>
                                    <Link href={'#'} >Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href={'#'} >Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className=' max-sm:text-center max-sm:py-5'>
                        <div className='font-bold text-lg mb-3'>
                            Services
                        </div>
                        <div>
                            <ul className=' space-y-2'>
                                <li>
                                    <Link href={'#'} >Owners Login</Link>
                                </li>
                                <li>
                                    <Link href={'#'} >Tenants Login</Link>
                                </li>
                                <li>
                                    <Link href={'#'} >Tenants Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className=' max-sm:text-center max-sm:py-5'>
                        <div className='font-bold text-lg mb-3'>
                            Our Social Media
                        </div>
                        <div>
                            <ul className='flex justify-center space-x-7'>
                                <li>
                                    <Link href={'https://x.com/PGMSDesktmateAI?s=08'} ><Image src={x} alt="img" className=' w-8' />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'https://www.linkedin.com/company/pgms-deskmate-ai/'} ><Image src={linkedin} alt="img" className=' w-8' />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className=' max-sm:text-center ml-[8%] max-sm:ml-0'>
                    This website design is developed by Deskmate AI Technologies © 2024
                </div>
            </footer>

        </>
    )
}

export default HomePage