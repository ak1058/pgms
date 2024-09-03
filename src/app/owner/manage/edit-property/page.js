"use client"
import React, { useState } from 'react'
import edit from '@/assets/edit/edit.svg'
import Image from 'next/image'
import owner from '@/assets/edit/owner.svg'
import manager from "@/assets/edit/manager.svg";
import girl from '@/assets/edit/girl.svg'
import active from '@/assets/edit/active.svg'
import total from '@/assets/edit/total.svg'

const UserCard = ({ name, email, phone, role, imgSrc }) => {
    return (
        <div className="flex items-center p-4 bg-white shadow-md">
            <img
                className="w-16 h-16"
                src={imgSrc.src}
                alt={name}
            />
            <div className="flex flex-col space-y-2 ml-4">
                <div className="flex items-center space-x-2">
                    <h2 className="text-[16px] max-md:text-sm font-semibold truncate max-w-xs ">{name}</h2>
                    <button className="ml-2 text-gray-400 hover:text-gray-600">
                        <Image src={edit} alt="edit" width={13} height={13} className='invert' />
                    </button>
                </div>
                <p className="text-gray-500 truncate text-xs">{email}</p>
                <p className="text-gray-500 text-xs">{phone}</p>
            </div>
            <div className={`${role == 'Owner' ? 'max-md:-ml-[33px]' : ''} mt-10 ml-[0.95rem]`}>
                <span className="px-5 py-2 text-xs bg-green-100 rounded" style={{ background: "#37901738", color: "#2C6F15" }}>
                    {role}
                </span>
            </div>
        </div>
    );
};

const PropertyCard = ({
    title,
    address,
    imageSrc,
    tags,
    buildingInfo,
    amenities,
}) => {
    return (
        <div className="mx-6 p-6 max-md:p-3 bg-white rounded-lg shadow-lg max-md:pb-28">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl max-md:text-sm font-bold">{title}</h1>
                    <p className="text-gray-500 mt-1 text-xs max-md:text-[10px]">📍 {address}</p>
                </div>
                <img
                    src={imageSrc}
                    alt="Property"
                    className="w-24 h-24 rounded-md object-cover"
                />
            </div>

            <div className="mt-4 flex space-x-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-pink-100 text-pink-500 px-3 py-2 rounded-md text-sm flex max-md:text-[9px]"
                    >
                        <Image src={tag.icon} width={12} height={12} className=' mr-1 max-md:w-[9px]' /> {tag.label}
                    </span>
                ))}
            </div>

            <div className="mt-8 flex max-md:flex-col max-md:space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg drop-shadow-lg w-2/5 mr-6 max-md:w-full">
                    <h2 className="text-lg mb-4">Building info.</h2>
                    <ul className="mt-2 space-y-3">
                        {buildingInfo.map((info, index) => (
                            <li key={index} className='flex text-sm max-md:text-[10px]'>
                                <div className='w-1/2'> {info.label} </div>  <div>{info.value}</div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg drop-shadow-lg w-3/5 max-md:w-full">
                    <h2 className="text-lg mb-4">Amenities</h2>
                    <ul className="mt-2 space-y-3">
                        {amenities.map((amenity, index) => (
                            <li key={index} className='flex text-sm max-md:text-[10px]'>
                                <div className='w-2/5'>{amenity.label} </div> <div>{amenity.value}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const editProperty = () => {
    const propertyDetailsArray = [
        {
            title: "Varthur, Sri Kaveri Girls Studio Rooms",
            address: "78, 2nd Cross Rd, Prasanth Layout, Prasanth Extension, Whitefield, Bengaluru, Karnataka 560066",
            imageSrc: "https://via.placeholder.com/100",
            tags: [
                { icon: girl.src, label: "Girls Only" },
                { icon: active.src, label: "101 Active Tenants" },
                { icon: total.src, label: "62 Total Rooms" },
            ],
            buildingInfo: [
                { label: "PGMS Property Id", value: "SKPG01" },
                { label: "Total Beds", value: "156" },
                { label: "Sharing", value: "1, 2, 3 & 4" },
                { label: "Manager", value: "Sri Chinnaswamy B." },
                { label: "Payment UPI Id’s", value: "9876543210@ybl" },
                { label: "Merchant Id’s", value: "PGTESTPAYUAT" },
            ],
            amenities: [
                { label: "Electricity", value: "Included" },
                { label: "Water", value: "24*7 Hot and cold" },
                { label: "Wifi", value: "200 Mbps" },
                { label: "Refrigerator", value: "10" },
                { label: "Washing Machine", value: "5" },
                { label: "Food", value: "2 Times on weekday, 3 Times on Sat, Sun" },
                { label: "Others", value: "Gym, Games, Power Backup, TV" },
            ],
        },
        {
            title: "Whitefield, Sri Kaveri Boys Studio Rooms",
            address: "45, 3rd Main Rd, Prasanth Layout, Whitefield, Bengaluru, Karnataka 560067",
            imageSrc: "https://via.placeholder.com/100",
            tags: [
                { icon: girl.src, label: "Boys Only" },
                { icon: active.src, label: "98 Active Tenants" },
                { icon: total.src, label: "64 Total Rooms" },
            ],
            buildingInfo: [
                { label: "PGMS Property Id", value: "SKPG02" },
                { label: "Total Beds", value: "152" },
                { label: "Sharing", value: "1, 2, 3" },
                { label: "Manager", value: "Sri Ramesh K." },
                { label: "Payment UPI Id’s", value: "1234567890@upi" },
                { label: "Merchant Id’s", value: "PGTESTPAYUBOY" },
            ],
            amenities: [
                { label: "Electricity", value: "Included" },
                { label: "Water", value: "24*7 Hot and cold" },
                { label: "Wifi", value: "150 Mbps" },
                { label: "Refrigerator", value: "8" },
                { label: "Washing Machine", value: "4" },
                { label: "Food", value: "3 Times on all days" },
                { label: "Others", value: "Gym, Indoor Games, Power Backup, TV" },
            ],
        },
        {
            title: "Marathahalli, Sri Kaveri Co-Ed Studio Rooms",
            address: "60, 5th Cross Rd, Prasanth Layout, Marathahalli, Bengaluru, Karnataka 560068",
            imageSrc: "https://via.placeholder.com/100",
            tags: [
                { icon: girl.src, label: "Co-Ed" },
                { icon: active.src, label: "120 Active Tenants" },
                { icon: total.src, label: "75 Total Rooms" },
            ],
            buildingInfo: [
                { label: "PGMS Property Id", value: "SKPG03" },
                { label: "Total Beds", value: "180" },
                { label: "Sharing", value: "1, 2, 3 & 4" },
                { label: "Manager", value: "Sri Divya S." },
                { label: "Payment UPI Id’s", value: "8765432109@upi" },
                { label: "Merchant Id’s", value: "PGTESTPAYCOED" },
            ],
            amenities: [
                { label: "Electricity", value: "Included" },
                { label: "Water", value: "24*7 Hot and cold" },
                { label: "Wifi", value: "250 Mbps" },
                { label: "Refrigerator", value: "12" },
                { label: "Washing Machine", value: "6" },
                { label: "Food", value: "3 Times on all days" },
                { label: "Others", value: "Gym, Indoor Games, Power Backup, TV" },
            ],
        },
        {
            title: "Kundalahalli, Sri Kaveri Family Studio Rooms",
            address: "33, 1st Main Rd, Kundalahalli, Bengaluru, Karnataka 560069",
            imageSrc: "https://via.placeholder.com/100",
            tags: [
                { icon: girl.src, label: "Family Only" },
                { icon: active.src, label: "60 Active Families" },
                { icon: total.src, label: "40 Total Rooms" },
            ],
            buildingInfo: [
                { label: "PGMS Property Id", value: "SKPG04" },
                { label: "Total Beds", value: "100" },
                { label: "Sharing", value: "2 & 3" },
                { label: "Manager", value: "Sri Harish R." },
                { label: "Payment UPI Id’s", value: "6543210987@upi" },
                { label: "Merchant Id’s", value: "PGTESTPAYFAM" },
            ],
            amenities: [
                { label: "Electricity", value: "Included" },
                { label: "Water", value: "24*7 Hot and cold" },
                { label: "Wifi", value: "100 Mbps" },
                { label: "Refrigerator", value: "5" },
                { label: "Washing Machine", value: "3" },
                { label: "Food", value: "Cook on own" },
                { label: "Others", value: "Gym, Games, Power Backup, TV" },
            ],
        }
    ];


    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;

    // Handlers for navigating between pages
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>

            <div className="navbar flex justify-between w-full h-[65px] my-5 pt-[13.5px] px-[24px] pb-[13.5px] max-sm:gap-0 max-sm:px-0 items-center">
                <div className="heading h-auto gap-3 max-sm:pl-2 w-full">
                    <h1 className=' text-[18px] font-semibold text-left leading-5 font-inter' >Management&apos;s  Profile</h1>
                </div>

                <div className="Seclected navbarMenu flex justify-end items-center w-full max-sm:w-auto max-sm:h-9 py-1 px-2 gap-2 max-sm:pr-2 max-sm:hidden">
                    <button className='flex items-center px-8 py-3 text-white text-sm font-bold rounded-md cursor-pointer drop-shadow' style={{ background: "#6FB258" }}>
                        <div className='mr-1'>
                            <Image src={edit} width={15} height={15} />
                        </div>
                        <div>
                            Edit Details
                        </div>
                    </button>
                </div>
            </div>


            <div className="flex justify-around max-md:flex-col max-md:space-y-2 max-md:w-[90%] max-md:m-auto">
                <UserCard
                    name="Rohan Purohit Reddy Chin..."
                    email="rohanpurohit@gmail.com"
                    phone="9876543210"
                    role="Owner"
                    imgSrc={owner}
                />
                <UserCard
                    name="Sri Chinnaswamy B."
                    email="srichinaswam@gmail.com"
                    phone="9876543210"
                    role="Manager"
                    imgSrc={manager}
                />
            </div>

            <div className="flex justify-between items-center mt-8 mb-4 px-6">
                <h2 className="text-lg text-gray-700">Properties Information</h2>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className={`border rounded-md ${currentPage === 1 ? "border-gray-300 text-gray-400" : "border-gray-500 text-gray-500"} py-1 px-3`}
                        style={{ background: "#E4E4E4" }}>
                        &lt;
                    </button>
                    <span className="text-gray-500">
                        {currentPage}/{totalPages}
                    </span>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`border rounded-md ${currentPage === totalPages ? "border-gray-300 text-gray-400" : "border-gray-500 text-gray-500"} py-1 px-3`}
                        style={{ background: "#E4E4E4" }}>
                        &gt;
                    </button>
                </div>
            </div>


            <PropertyCard {...propertyDetailsArray[currentPage - 1]} />


        </>
    )
}

export default editProperty