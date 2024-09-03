"use client"
import '@/styles/tailwind.css'
import { colors } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import wifisvg from "@/assets/resolvePageSvg/wifi.svg"
import electricitysvg from "@/assets/resolvePageSvg/electricity.svg"
import watersvg from "@/assets/resolvePageSvg/water.svg"
import othersvg from "@/assets/resolvePageSvg/other.svg"
import foodsvg from "@/assets/resolvePageSvg/food.svg"
import furnituresvg from "@/assets/resolvePageSvg/furniture.svg"
import cleaningsvg from "@/assets/resolvePageSvg/cleaning.svg"
import barsvg from "@/assets/resolvePageSvg/bar.svg"
import rightsvg from "@/assets/resolvePageSvg/right.svg"
import deletesvg from "@/assets/resolvePageSvg/delete.svg"
import crosssvg from "@/assets/resolvePageSvg/cross.svg"
import nextsvg from "@/assets/resolvePageSvg/next.svg"
import Image from 'next/image'

const data = [
    {
        "numberOfActiveComplaints": 10,
        "numberOfComplaintsResolvedThisMonth": 3,
        "numberOfComplaintsLogedThisMonth": 7,
        "activeComplaints": [
            {
                "type": "wifi",
                "roomNo": "101",
                "description": "Internet is not working.",
                "tenantName": "John Doe",
                "date": "2024-07-20",
                "status": "active"
            },
            {
                "type": "food",
                "roomNo": "102",
                "description": "Food quality is poor.",
                "tenantName": "Jane Smith",
                "date": "2024-07-21",
                "status": "active"
            },
            {
                "type": "water",
                "roomNo": "103",
                "description": "No hot water in the shower.",
                "tenantName": "Sam Wilson",
                "date": "2024-07-22",
                "status": "active"
            },
            {
                "type": "cleaning",
                "roomNo": "104",
                "description": "Room has not been cleaned.",
                "tenantName": "Emily Brown",
                "date": "2024-07-23",
                "status": "active"
            },
            {
                "type": "electricity",
                "roomNo": "105",
                "description": "Frequent power cuts.",
                "tenantName": "Michael Johnson",
                "date": "2024-07-24",
                "status": "active"
            }
            ,
            {
                "type": "electricity",
                "roomNo": "106",
                "description": "Frequent power cuts.",
                "tenantName": "Michael Johnson",
                "date": "2024-07-24",
                "status": "active"
            }
            ,
            {
                "type": "electricity",
                "roomNo": "107",
                "description": "Frequent power cuts.",
                "tenantName": "Michael Johnson",
                "date": "2024-07-24",
                "status": "active"
            }
            ,
            {
                "type": "electricity",
                "roomNo": "108",
                "description": "Frequent power cuts.",
                "tenantName": "Michael Johnson",
                "date": "2024-07-24",
                "status": "active"
            }
            ,
            {
                "type": "electricity",
                "roomNo": "109",
                "description": "Frequent power cuts.",
                "tenantName": "Michael Johnson",
                "date": "2024-07-24",
                "status": "active"
            }
            ,
            {
                "type": "electricity",
                "roomNo": "110",
                "description": "Frequent power cuts.",
                "tenantName": "Michael Johnson",
                "date": "2024-07-24",
                "status": "active"
            }
        ],
        "resolvedComplaints": [
            {
                "type": "wifi",
                "roomNo": "106",
                "description": "Internet was slow.",
                "tenantName": "Alice Green",
                "date": "2024-07-01",
                "status": "resolved"
            },
            {
                "type": "food",
                "roomNo": "107",
                "description": "Food was cold.",
                "tenantName": "Bob White",
                "date": "2024-07-05",
                "status": "resolved"
            },
            {
                "type": "water",
                "roomNo": "108",
                "description": "Leaking faucet.",
                "tenantName": "Charlie Black",
                "date": "2024-07-10",
                "status": "resolved"
            }
        ]
    }

]

const page = () => {
    const [count, setcount] = useState([
        { type: "food", count: 0 },
        { type: "furniture", count: 0 },
        { type: "cleaning", count: 0 },
        { type: "wifi", count: 0 },
        { type: "electricity", count: 0 },
        { type: "water", count: 0 },
        { type: "other", count: 0 },
    ])

    const [filterArray, setfilterArray] = useState([]);
    const [originalArray, setoriginalArray] = useState([]);
    const [selectall, setselectall] = useState(false);
    const [selectedRooms, setselectedRooms] = useState([]);

    const colorObject = {
        "food": ["#F2FFEE", "#205500"], //bg and text
        "furniture": ["#FFF7ED", "#6A2100"],
        "cleaning": ["#F8F1F8", "#572256"],
        "wifi": ["#F9FAFF", "#1C274C"],
        "electricity": ["#FFFBED", "#776B00"],
        "other": ["#EFEFEF", "#000000"],
        "water": ["#F3F9F9", "#0B5B5B"],
    }

    const getTypeWithCapitalLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    let getCount = (typeCount) => {
        if (typeCount === 'all') {
            return originalArray[0] && originalArray[0].activeComplaints.length;
        } else {
            let it = count.find((item) => item.type === typeCount);
            return it.count === 0 ? 0 : it.count;
        }

    }

    const filterAccToType = (filterType) => {
        let facalities = document.getElementsByClassName('facality');
        for (let i = 0; i < facalities.length; i++) {
            let element = facalities[i];
            if (element.classList.contains(filterType)) {
                element.classList.add('active')
            } else {
                if (element.classList.contains('active')) {
                    element.classList.remove('active');
                }
            }
        }
        if (filterType === "all") {
            setfilterArray(originalArray[0].activeComplaints);
        } else {
            let filter = originalArray[0].activeComplaints.filter((item) => item.type === filterType);
            setselectall(false);
            setfilterArray(filter);
        }
    }
    const handleSelectedAllChange = (e) => {
        let isChecked = e.target.checked;
        let item = document.getElementsByClassName('selectAllItems')[0];
        if (isChecked) {
            item.innerHTML = "All Selected"
        } else {
            item.innerHTML = "Select All"
        }
        setselectall(isChecked);
        setselectedRooms(isChecked ? filterArray.map(item => item.roomNo) : []);
        setfilterArray(originalArray[0].activeComplaints)
    }

    const handleIndivisualRoomSelected = (roomNumber) => (e) => {
        let isChecked = e.target.checked;
        const updatedSelectedRoom = isChecked ? [...selectedRooms, roomNumber] : selectedRooms.filter(item => item !== roomNumber);
        setselectedRooms(updatedSelectedRoom);
        const allSelected = updatedSelectedRoom.length === filterArray.length;
        setselectall(allSelected);
    }

    const showConfirmResolveBox = () => {
        let overlay = document.getElementsByClassName('overlay')[0];
        overlay.classList.remove('hidden')
        let confirmationBox = document.getElementsByClassName('confirmResolve')[0];
        confirmationBox.classList.remove('hidden');

    }

    const hideConfirmResolveBox = () => {
        let menu = document.getElementsByClassName('navbarMenu')[0];
        if (!menu.classList.contains('max-sm:hidden')) {
            hideMenu()
        }
        let overlay = document.getElementsByClassName('overlay')[0];
        overlay.classList.add('hidden')
        let confirmationBox = document.getElementsByClassName('confirmResolve')[0];
        confirmationBox.classList.add('hidden');
        setselectedRooms([]);
        setselectall(false);
    }

    const discardConfirmResolve = () => {
        hideConfirmResolveBox();
    }

    const handelClickOnMarkedAsResolve = () => {
        setoriginalArray(prevData => {
            let newData = [...prevData];
            let resolved = newData[0].resolvedComplaints;

            let complainResolvedSuccessfully = originalArray[0].activeComplaints.filter(item => selectedRooms.includes(item.roomNo))
            complainResolvedSuccessfully.map(i => i.status = "resolved");
            newData[0].resolvedComplaints = [...resolved, ...complainResolvedSuccessfully];

            newData[0].activeComplaints = originalArray[0].activeComplaints.filter(item => !selectedRooms.includes(item.roomNo));

            newData[0].numberOfActiveComplaints = newData[0].activeComplaints.length;
            newData[0].numberOfComplaintsResolvedThisMonth += complainResolvedSuccessfully.length;
            newData[0].numberOfComplaintsLogedThisMonth += complainResolvedSuccessfully.length;
            return newData;
        })
        hideConfirmResolveBox();
        setselectall(false)
    }

    const setCountValue = () => {
        let updateCount = [
            { type: "food", count: 0 },
            { type: "furniture", count: 0 },
            { type: "cleaning", count: 0 },
            { type: "wifi", count: 0 },
            { type: "electricity", count: 0 },
            { type: "water", count: 0 },
            { type: "other", count: 0 },
        ]
        let ot = 0;
        {
            originalArray[0] && originalArray[0].activeComplaints && originalArray[0].activeComplaints.map(active => {
                let oth = true;
                updateCount.forEach((item) => {
                    if (item.type === active.type) {
                        item.count += 1
                        oth = false;
                    }
                })
                if (oth) {
                    ot++;
                }
            })
        }

        updateCount.forEach((item) => {
            if (item.type === "other") {
                item.count = ot
            }
        })

        setcount(updateCount);
    }

    const showmenu = () => {
        let menu = document.getElementsByClassName('navbarMenu')[0];
        let action = document.getElementsByClassName('action')[0];
        let overlay = document.getElementsByClassName('overlay')[0];

        // menu.classList.toggle('max-sm:hidden');
        menu.classList.remove('max-sm:hidden');
        action.classList.remove('hidden');
        action.classList.add('flex');
        menu.classList.add('showMenuStyle');
        overlay.classList.remove('hidden');

    }
    const hideMenu = () => {
        let overlay = document.getElementsByClassName('overlay')[0];
        let menu = document.getElementsByClassName('navbarMenu')[0];
        let action = document.getElementsByClassName('action')[0];
        // menu.classList.toggle('max-sm:hidden');

        overlay.classList.add('hidden');
        action.classList.remove('flex');
        action.classList.add('hidden');
        menu.classList.remove('showMenuStyle');
        menu.classList.add('max-sm:hidden');

    }
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy(50, 0);
        }
        const isScrollEnd = scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth;
        if (isScrollEnd) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth - 300 - scrollRef.current.clientWidth;
        }
    };

    useEffect(() => {
        setoriginalArray(data);
    }, [data])

    useEffect(() => {
        if (originalArray.length > 0) {
            setCountValue();
            setfilterArray(originalArray[0].activeComplaints);
        }
    }, [originalArray]);

    return (
        <>
            <div className=' pb-[3%]'>
                <div className='overlay hidden'></div>
                <div className="confirmResolve absolute top-[44%] left-[36%] bg-white p-7 z-20 pt-2 hidden max-sm:left-0 rounded-lg">
                    <div className="cros float-right cursor-pointer text-gray-600" onClick={hideConfirmResolveBox}>
                        <Image src={crosssvg} alt="logo" className="w-3 h-6" />
                    </div>
                    <div className="head my-3 text-center font-semibold">
                        Are You Sure ?
                    </div>
                    <div className='text-center pb-8 text-gray-500 text-[12px]'>
                        You are marking the selected complaint as <b>Resolved</b>
                    </div>
                    <div className="actionConfirm justify-between flex">
                        <div className='No flex rounded-sm px-8 py-2 items-center cursor-pointer' style={{ background: "#FF4B4B2E" }} onClick={discardConfirmResolve}>
                            <div className="text text-[14px] max-sm:text-[10px] font-medium max-sm:hidden" style={{ color: "#FF4B4B" }}>
                                Discard
                            </div>
                            <Image src={deletesvg} alt="logo" className="w-3 h-6 ml-2" />
                        </div>
                        <div className='Yes flex rounded-sm px-8 py-2 items-center cursor-pointer' style={{ background: "#3790172E" }} onClick={handelClickOnMarkedAsResolve}>
                            <div className="text text-[14px] max-sm:text-[10px] font-medium max-sm:hidden" style={{ color: "#379017" }}>
                                Change
                            </div>
                            <Image src={rightsvg} alt="logo" className="w-3 h-6 ml-2" />
                        </div>
                    </div>
                </div>
                <div className="navbar flex justify-between w-full h-[65px] my-5 pt-[13.5px] px-[24px] pb-[13.5px] max-sm:gap-0 max-sm:px-0 items-center">
                    <div className="heading h-auto gap-3 max-sm:pl-2 w-full">
                        <h1 className=' text-[18px] font-semibold text-left leading-5 font-inter' >Resolve Complaints</h1>
                    </div>

                    <div className="Seclected navbarMenu flex justify-end items-center w-full max-sm:w-auto max-sm:h-9 py-1 px-2 gap-2 max-sm:pr-2 max-sm:hidden">
                        <div className="action justify-between w-full py-3 pr-2 hidden">
                            <div>
                                Actions
                            </div>
                            <div className="cross cursor-pointer" onClick={hideMenu}>
                                <Image src={crosssvg} alt="logo" className="w-3 h-6" />
                            </div>
                        </div>
                        <div className='flex bg-white mr-5 border rounded-md px-6 py-3  text-sm drop-shadow'>
                            <input type="checkbox" name="selected" id="" className="w-4 mr-3 cursor-pointer" checked={selectall} onChange={handleSelectedAllChange} />
                            <div className='selectAllItems'>
                                Select All
                            </div>
                        </div>
                        <button className='px-10 py-3 text-white text-sm font-bold rounded-md cursor-pointer drop-shadow' style={selectedRooms.length > 0 ? { background: "#6FB258" } : { background: "#AED6A0" }} disabled={!selectedRooms.length > 0} onClick={showConfirmResolveBox}>
                            Mark as resolved →
                        </button>
                    </div>
                    <div className="menu hidden max-sm:block pr-2f">
                        <Image src={barsvg} alt="logo" className="w-4 h-6 mr-2  max-sm:w-2 cursor-pointer" onClick={showmenu} />
                    </div>
                </div>

                <div className="header">
                    <div className="row w-[95%] rounded-lg bg-white border flex justify-around items-center flex-col drop-shadow mx-auto py-3">
                        <div className="complainStatus flex justify-around items-center w-[95%]">
                            <div className="Total w-1/5 text-left flex justify-center items-center pt-3 pb-7 max-sm:py-3 max-sm:pt-0 max-sm:flex-col max-sm:justify-between max-sm:w-auto " style={{ color: "#FF4B4B" }}>
                                <div className="value font-bold text-5xl mr-3 max-sm:mr-0 max-sm:text-3xl">
                                    {originalArray[0] && originalArray[0].numberOfActiveComplaints}
                                </div>
                                <div className="text max-md:text-[13px]">
                                    Active
                                </div>
                            </div>
                            <div className="lodges w-1/5 text-left flex justify-center items-center pt-3 pb-7 max-sm:py-3 max-sm:pt-0 max-sm:flex-col max-sm:justify-between max-sm:w-auto" style={{ color: "#D89A3D" }}>
                                <div className="value font-bold text-5xl mr-3 max-sm:mr-0 max-sm:text-3xl">
                                    {originalArray[0] && originalArray[0].numberOfComplaintsLogedThisMonth}
                                </div>
                                <div className="text max-md:text-[13px]">
                                    lodged today
                                </div>
                            </div>
                            <div className="resolved w-[22%] text-left flex justify-center items-center pt-3 pb-7 max-sm:py-3 max-sm:pt-0 max-sm:flex-col max-sm:justify-between max-sm:w-auto" style={{ color: "#379017" }}>
                                <div className="value font-bold text-5xl mr-3 max-sm:mr-0 max-sm:text-3xl">
                                    {originalArray[0] && originalArray[0].numberOfComplaintsResolvedThisMonth}
                                </div>
                                <div className="text max-md:text-[13px]">
                                    Resolved
                                </div>
                            </div>
                        </div>

                        <div ref={scrollRef} className="facalities scroll-smooth max-sm:relative max-sm:w-11/12 max-sm:-left-[14px] flex  justify-evenly items-center w-full py-1 px-2 gap-2 max-sm:pr-2 max-sm:overflow-auto max-sm:overflow-x-scroll max-sm:gap-[19px] max-sm:justify-normal max-sm:h-14">
                            <div className='all active facality flex pl-5 pr-[0.05rem] border-gray-300 rounded-lg max-sm:rounded-sm px-3 py-2 items-center cursor-pointer  max-sm:w-16 max-sm:py-1 max-sm:pl-2 max-sm:pr-0 ' style={{ background: "#F7EBF0" }} onClick={() => filterAccToType("all")}>
                                <div className="text text-[14px] font-medium max-sm:pl-[0.4rem]">
                                    All
                                </div>
                                <div className="status relative -top-[21px] -right-[10px]  max-sm:-right-2 p-2 rounded-full w-5 h-5 text-sm flex justify-center items-center max-sm:w-0 max-sm:h-0 max-sm:text-[0.65rem] max-sm:-top-3" style={{ background: "#F7EBF0" }}>
                                    {getCount("all")}
                                </div>
                            </div>
                            <div className='wifi facality flex pl-5 pr-[0.05rem] max-sm:pr-3 border-gray-300 rounded-lg px-3 py-2 items-center cursor-pointer  max-sm:w-16 max-sm:py-1 max-sm:pl-2 ' style={{ background: "#F9FAFF" }} onClick={() => filterAccToType("wifi")}>
                                <Image src={wifisvg} alt="logo" className="w-4 h-6 mr-2 max-sm:mx-2 max-sm:w-7" />
                                <div className="text text-[14px] max-sm:text-[10px] font-medium max-sm:hidden">
                                    Wifi
                                </div>
                                <div className="status relative -top-[21px] -right-[10px]  max-sm:right-2 p-2 rounded-full w-5 h-5 text-sm flex justify-center items-center max-sm:w-0 max-sm:h-0 max-sm:text-[0.65rem] max-sm:-top-4" style={{ background: "#F9FAFF" }}>
                                    {getCount("wifi")}
                                </div>
                            </div>
                            <div className='food facality flex pl-5 pr-[0.05rem] max-sm:pr-3 rounded-lg px-3 py-2 items-center cursor-pointer  max-sm:w-16 max-sm:py-1 max-sm:pl-2 ' style={{ background: "#F8FFF6" }} onClick={() => filterAccToType("food")}>
                                <Image src={foodsvg} alt="logo" className="w-4 h-6 mr-2 max-sm:mx-2 max-sm:w-7" />
                                <div className="text text-[14px] max-sm:text-[10px] font-medium max-sm:hidden">
                                    Food
                                </div>
                                <div className="status relative -top-[21px] -right-[10px]  max-sm:right-2 p-2 rounded-full w-5 h-5 text-sm flex justify-center items-center max-sm:w-0 max-sm:h-0 max-sm:text-[0.65rem] max-sm:-top-4" style={{ background: "#F8FFF6" }}>
                                    {getCount("food")}
                                </div>
                            </div>
                            <div className='water facality flex pl-5 pr-[0.05rem] rounded-lg px-3 py-2 items-center cursor-pointer max-sm:w-16 max-sm:py-1 max-sm:pr-3 max-sm:pl-2' style={{ background: "#E7ECFD" }} onClick={() => filterAccToType("water")}>
                                <Image src={watersvg} alt="logo" className="w-3 h-6 mr- max-sm:mx-2 max-sm:w-7 mr-2 max-sm:mr-0" />
                                <div className="text text-[14px] max-sm:text-[10px] font-medium max-sm:hidden">
                                    Water
                                </div>
                                <div className="status relative -top-[21px] -right-[10px]  max-sm:-right-1 p-2 rounded-full w-5 h-5 text-sm flex justify-center items-center  max-sm:w-0 max-sm:h-0 max-sm:text-[0.65rem] max-sm:-top-4" style={{ background: "#DADFF0" }}>
                                    {getCount("water")}
                                </div>
                            </div>
                            <div className='furniture facality flex pl-5 pr-[0.05rem] max-sm:pr-3 rounded-lg px-3 py-2 items-center cursor-pointer  max-sm:w-20 max-sm:py-1 max-sm:pl-2 ' style={{ background: "#FFF7ED" }} onClick={() => filterAccToType("furniture")}>
                                <Image src={furnituresvg} alt="logo" className="w-3 h-6 mr- max-sm:mx-2 max-sm:w-7 mr-2 max-sm:mr-0" />
                                <div className="text text-[14px] max-sm:text-[10px] font-medium max-sm:hidden">
                                    Furniture
                                </div>
                                <div className="status relative -top-[21px] -right-[10px]  max-sm:-right-[0.05rem] p-2 rounded-full w-5 h-5 text-sm flex justify-center items-center max-sm:w-0 max-sm:h-0 max-sm:text-[0.65rem] max-sm:-top-4" style={{ background: "#FFF7ED" }}>
                                    {getCount("furniture")}
                                </div>
                            </div>
                            <div className='cleaning facality flex pl-5 pr-[0.05rem] max-sm:pr-4 rounded-lg px-3 py-2 items-center cursor-pointer  max-sm:w-20 max-sm:py-1 max-sm:pl-3 ' style={{ background: "#F8F1F8" }} onClick={() => filterAccToType("cleaning")}>
                                <Image src={cleaningsvg} alt="logo" className="w-4 h-6 mr-2 max-sm:w-7" />
                                <div className="text text-[14px] max-sm:text-[10px] font-medium max-sm:hidden">
                                    Cleaning
                                </div>
                                <div className="status relative -top-[21px] -right-[10px]  max-sm:-right-1 p-2 rounded-full w-5 h-5 text-sm flex justify-center items-center max-sm:w-0 max-sm:h-0 max-sm:text-[0.65rem] max-sm:-top-4" style={{ background: "#F8F1F8" }}>
                                    {getCount("cleaning")}
                                </div>
                            </div>
                            <div className='electricity facality flex pl-5 pr-[0.05rem] max-sm:pr-3 rounded-lg px-3 py-2 items-center cursor-pointer  max-sm:w-20 max-sm:py-1 max-sm:pl-2 ' style={{ background: "#FFFBED" }} onClick={() => filterAccToType("electricity")}>
                                <Image src={electricitysvg} alt="logo" className="w-3 h-6 ml-2 max-sm:w-7 mr-2 max-sm:mr-0" />
                                <div className="text text-[14px] max-sm:text-[10px] font-medium max-sm:hidden">
                                    Electricity
                                </div>
                                <div className="status relative -top-[21px] -right-[10px]  max-sm:-right-1 p-2 rounded-full w-5 h-5 text-sm flex justify-center items-center max-sm:w-0 max-sm:h-0 max-sm:text-[0.65rem] max-sm:-top-4" style={{ background: "#FFFBED" }}>
                                    {getCount("electricity")}
                                </div>
                            </div>
                            <div className='other facality flex pl-5 pr-[0.05rem] max-sm:pr-3 rounded-lg px-3 py-2 items-center cursor-pointer  max-sm:w-16 max-sm:py-1 max-sm:pl-2 ' style={{ background: "#F9F5ED" }} onClick={() => filterAccToType("other")}>
                                <Image src={othersvg} alt="logo" className="w-4 h-6 mr-2 max-sm:mx-2 max-sm:w-7" />
                                <div className="text text-[14px] max-sm:text-[10px] font-medium max-sm:hidden">
                                    Other
                                </div>
                                <div className="status relative -top-[21px] -right-[10px]  max-sm:right-1 p-2 rounded-full w-5 h-5 text-sm flex justify-center items-center max-sm:w-0 max-sm:h-0 max-sm:text-[0.65rem] max-sm:-top-4" style={{ background: "#F9F5ED" }}>
                                    {getCount("other")}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nextMove w-4 relative -top-[54px] float-right right-[17px] cursor-pointer hidden max-sm:block " onClick={handleScroll}>
                        <Image src={nextsvg} alt="logo" className="w-4 h-6 max-sm:w-4" />
                    </div>
                </div>


                <div className={`mt-10 w-[95%] m-auto flex justify-between flex-wrap max-sm:overflow-y-scroll ${filterArray && filterArray.length > 3 ? "max-sm:h-[61vh]" : "max-sm:h-auto"}`}>
                    {filterArray && filterArray.map(active => {
                        return (
                            <>
                                <div className={`complainBox flex flex-col w-[48%] pt-2 px-4 pb-4 bg-white drop-shadow rounded-lg mb-5 max-sm:w-full  ${selectedRooms && selectedRooms.includes(active.roomNo) ? "opacity-60" : ""} `} key={active.roomNo}>
                                    <div className="head flex justify-between pb-3">
                                        <div className="roomNumber flex mr-2 bg-white rounded-md py-3" style={{ color: colorObject[active.type][1] }}>
                                            <input type="checkbox" name="selected" className="w-4 cursor-pointer mr-3 text-[16px]" checked={selectedRooms && selectedRooms.includes(active.roomNo)} onChange={handleIndivisualRoomSelected(active.roomNo)} />
                                            Room. {active.roomNo}
                                        </div>
                                        <div className="type">
                                            <div className='Food flex rounded-lg px-6 py-2  items-center' style={{ background: colorObject[active.type][0] }}>
                                                <div className="text text-[14px] max-sm:text-[10px] max-sm:hidden font-semibold" style={{ color: colorObject[active.type][1] }}>
                                                    {getTypeWithCapitalLetter(active.type)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="description font-light text-sm tracking-wider pb-6" style={{ color: "#322E2E" }}>
                                        {active.description}
                                    </div>
                                    <div className="conclusion flex justify-between italic text-sm pb-2" style={{ color: colorObject[active.type][1] }}>
                                        <div className="name ">
                                            By {active.tenantName}
                                        </div>
                                        <div className="date">
                                            {active.date}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default page