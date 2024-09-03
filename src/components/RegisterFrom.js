import React, { useRef, useState } from 'react'
import mailsvg from "@/assets/login/mail.svg"
import passwordsvg from "@/assets/login/password.svg"
import personsvg from "@/assets/login/person.svg"
import callsvg from "@/assets/login/call.svg"
import eyeopensvg from "@/assets/login/eye-open.svg"
import eyeclosesvg from "@/assets/login/eye-closed.svg"
import questionsvg from "@/assets/login/question.svg"
import Image from 'next/image'
import { useForm } from "react-hook-form"


const RegisterFrom = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    const show = useRef()
    const showPassword = () => {
        if (show.current.src.endsWith("eye-open.0086bc24.svg")) {
            show.current.src = eyeclosesvg.src;
        } else {
            show.current.src = eyeopensvg.src;
        }
        let pass = document.getElementById("password");
        if (pass.type === "password") {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
    }
    const [showHint, setshowHint] = useState(false)

    return (
        <div className="form__container signup__container pt-0">


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="main flex flex-col justify-center items-center">
                    <h1 className="text-3xl text-center font-semibold" style={{ color: "#6FB258" }}>Create Account</h1>
                    <div className="rounded-lg p-8 flex flex-col w-2/3">
                        <h2 className="font-extralight text-sm title-font text-center mb-7" style={{ color: "#4D5965" }}>use your email for signUp</h2>
                        <div className="relative w-full">
                            <Image src={personsvg} alt="icon" className='relative top-[38px] left-[18px] w-5' />
                            <input type="text" id="full-name" placeholder='Name' name="full-name" className={`w-full rounded-xl py-2 pl-16 bg-white  border border-gray-300 tex outline-none text-gray-700  leading-8 transition-colors duration-200 ease-in-out`}   {...register("name", { required: true, pattern: /^(\b\w+\b\s*){1,3}$/ })} />
                            {errors.name && <span className=' absolute text-red-500 text-xs top-[77px] left-[15px]'>Max three word allowed</span>}
                        </div>
                        <div className="relative w-full">
                            <Image src={mailsvg} alt="icon" className='relative top-[38px] left-[11px] w-8' />
                            <input type="email" id="full-name" placeholder='Email' name="full-name" className={`w-full rounded-xl py-2 pl-16 bg-white  border border-gray-300 tex outline-none text-gray-700  leading-8 transition-colors duration-200 ease-in-out`}  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                            {errors.email && <span className=' absolute text-red-500 text-xs top-[79px] left-[15px]'>Email seems doesn&apos;t exist</span>}
                        </div>
                        <div className="relative w-full">
                            <Image src={callsvg} alt="icon" className='relative top-[35px] left-[18px] w-[1.35rem]' />
                            <input type="tell" id="full-name" placeholder='Mobile No.' name="full-name" className={`w-full rounded-xl py-2 pl-16 bg-white  border border-gray-300 tex outline-none text-gray-700  leading-8 transition-colors duration-200 ease-in-out`}  {...register("mobileNo", { maxLength: 10, minLength: 10, required: true, pattern: /^(\+91|91)?[6789]\d{9}$/ })} />
                            {errors.mobileNo && <span className=' absolute text-red-500 text-xs top-[70px] left-[15px]'>Allowed 10 digit mobile</span>}
                        </div>
                        <div className="relative w-full">
                            <Image src={passwordsvg} alt="icon" className='relative top-[35px] left-[18px] w-5' />
                            <input type="password" id="password" name="password" placeholder='Password' className={`w-full rounded-xl py-2 pl-16 bg-white  border border-gray-300 tex outline-none text-gray-700  leading-8 transition-colors duration-200 ease-in-out`}  {...register("password", { minLength: 8, required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)[A-Za-z0-9_]{8,16}$/ })} />
                            <span className="showPassword absolute top-[34px] right-[10px] cursor-pointer" onClick={showPassword}><Image src={eyeclosesvg} ref={show} alt="icon" className='relative top-[3px] w-6' /></span>
                            {errors.password && <span className=' absolute text-red-500 text-xs top-[74px] left-[15px]'>Doesn&apos;t meet the criteria</span>}
                            {errors.password && <Image src={questionsvg} alt="icon" className={`absolute cursor-pointer top-[38px] left-[415px] w-5 ${showHint ? "hidden" : ""}`} onClick={() => setshowHint(true)} />}

                            {showHint && <div className="passwordGuide text-red-500 text-xs absolute w-[176px] top-[15px] left-[410px] transition-all ease-in">
                                <p>Must be at least 8 characters <br /> One uppercase letter <br />One lowercase letter <br /> One underscore<br /> One digit</p>
                            </div>}

                        </div>
                        <button className="text-white border-0 py-2 px-8 outline-none text-sm w-44 text-center h-11 relative left-1/4 rounded-3xl mt-8 mb-4" style={{ background: "#6FB258" }}>Sign Up</button>
                        <p className="mt-3 underline font-extralight text-sm relative left-[9%]" style={{ color: "#4D5965" }} >Already have account but forgot password?</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterFrom