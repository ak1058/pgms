"use client"
import React, { useRef } from 'react'
import mailsvg from "@/assets/login/mail.svg"
import passwordsvg from "@/assets/login/password.svg"
import Image from 'next/image'
import { useForm } from "react-hook-form"
import eyeopensvg from "@/assets/login/eye-open.svg"
import eyeclosesvg from "@/assets/login/eye-closed.svg"


const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const showl = useRef()
    const showPassword = () => {
        if (showl.current.src.endsWith("eye-open.0086bc24.svg")) {
            showl.current.src = eyeclosesvg.src;
        } else {
            showl.current.src = eyeopensvg.src;
        }
        let pass = document.getElementById("passwordLogin");
        if (pass.type === "password") {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
    }

    const showForgetPassword = () => {
        console.log("forget");
    }


    return (
        <div className="form__container signin__container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="login flex flex-col justify-center items-center my-20">
                    < h1 className="text-3xl text-center font-semibold" style={{ color: "#6FB258" }}> Welcome!!</h1 >
                    <div className="rounded-lg p-8 flex flex-col w-2/3 justify-center items-center">
                        <h2 className="font-extralight text-sm title-font text-center mb-7" style={{ color: "#4D5965" }}>use your email for signIn</h2>
                        <div className="relative w-full">
                            <Image src={mailsvg} alt="icon" className='relative top-[38px] left-[14px] w-8' />
                            <input type="email" id="email" placeholder='Email / Mobile No.' name="email" className="w-full rounded-xl py-2 pl-16 bg-white  border border-gray-300 tex outline-none text-gray-700  leading-8 transition-colors duration-200 ease-in-out" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                            {/* {errors.email && <span className=' absolute top-[42px] -left-[170px] text-red-500'>This email is invalid</span>} */}
                        </div>
                        <div className="relative w-full">
                            <Image src={passwordsvg} alt="icon" className='relative top-[35px] left-[18px] w-5' />
                            <input type="password" id="passwordLogin" name="password" placeholder='Password' className="w-full rounded-xl py-2 pl-16 bg-white  border border-gray-300 tex outline-none text-gray-700  leading-8 transition-colors duration-200 ease-in-out" {...register("password", { required: true })} />
                            <span className="showlPassword absolute top-[34px] right-[10px] cursor-pointer" onClick={showPassword}><Image src={eyeclosesvg} ref={showl} alt="icon" className='relative top-[3px] w-6' /></span>
                            {errors.password && <span className=' absolute top-[75px] left-[10px] text-xs text-red-500 '>Invalid Email or Password</span>}
                        </div>
                        <button className="text-white border-0 py-2 px-8 outline-none text-sm w-44 text-center h-11 rounded-3xl mt-8 mb-4" style={{ background: "#6FB258" }}>Sign In</button>
                        <p className="mt-3 underline font-extralight text-sm cursor-pointer" style={{ color: "#4D5965" }} onClick={showForgetPassword}>Forget Password ?</p>
                    </div>
                </div >
            </form>
        </div>
    )
}

export default LoginForm