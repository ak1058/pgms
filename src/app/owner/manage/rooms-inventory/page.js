"use client"
import '@/styles/tailwind.css'
import {
    Grid,
    Button,
    Breadcrumbs,
    ButtonGroup,
    Stack,
    TextField,
    InputAdornment,
    IconButton,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

import React from 'react'
import { useState, useEffect } from "react";
import searchSvg from '@/assets/search.svg'
import barsvg from '@/assets/bar.svg'
import availablesvg from '@/assets/available.svg'
import occupiedsvg from '@/assets/occupied.svg'
import vacatingsvg from '@/assets/vacating.svg'
import arrowdownsvg from '@/assets/arrowdown.svg'
import Image from 'next/image';
import bg from "@/assets/roomManagmentbg.svg"

const data = [
    {
        "floors": [
            {
                "floor_number": 1,
                "rooms": [
                    {
                        "room_number": 101,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 3,
                                "availability": "unavailable"
                            }
                        ]
                    },
                    {
                        "room_number": 102,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 103,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            },
                            {
                                "bed_number": 3,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 104,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 105,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 106,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            },
                            {
                                "bed_number": 3,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 107,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 108,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 109,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 110,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 111,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 112,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 113,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 114,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 115,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 2,
                                "availability": "vacating"
                            }
                        ]
                    },
                ]
            },
            {
                "floor_number": 2,
                "rooms": [
                    {
                        "room_number": 201,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            },
                            {
                                "bed_number": 3,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 202,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "unavailable"
                            }
                        ]
                    },
                    {
                        "room_number": 203,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            },
                            {
                                "bed_number": 3,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 204,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 205,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            },
                            {
                                "bed_number": 3,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 205,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            },
                            {
                                "bed_number": 3,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 206,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            },
                            {
                                "bed_number": 3,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 207,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            },
                            {
                                "bed_number": 3,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 208,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            },
                            {
                                "bed_number": 3,
                                "availability": "available"
                            }
                        ]
                    }
                ]
            },
            {
                "floor_number": 3,
                "rooms": [
                    {
                        "room_number": 301,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 302,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "unavailable"
                            }
                        ]
                    },
                    {
                        "room_number": 303,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 304,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            },
                            {
                                "bed_number": 3,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 305,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            }
                        ]
                    }
                ]
            },
            {
                "floor_number": 4,
                "rooms": [
                    {
                        "room_number": 401,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            },
                            {
                                "bed_number": 3,
                                "availability": "unavailable"
                            }
                        ]
                    },
                    {
                        "room_number": 402,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "vacating"
                            }
                        ]
                    },
                    {
                        "room_number": 403,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            },
                            {
                                "bed_number": 3,
                                "availability": "available"
                            }
                        ]
                    },
                    {
                        "room_number": 404,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "available"
                            },
                            {
                                "bed_number": 2,
                                "availability": "unavailable"
                            }
                        ]
                    },
                    {
                        "room_number": 405,
                        "beds": [
                            {
                                "bed_number": 1,
                                "availability": "vacating"
                            },
                            {
                                "bed_number": 2,
                                "availability": "available"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const page = () => {

    const showMore = (floorID) => {
        console.log(floorID)
        if (floorID === 0) {
            return;
        }
        let floor = document.querySelectorAll(".floor-Details");
        floor[floorID].classList.toggle('max-sm:hidden');

        let container = document.querySelectorAll(".container");
        container[floorID].classList.toggle('max-sm:h-80');
    }

    //Search
    const [queery, setQueery] = useState('');
    // console.log(queery);
    const filteredFloors = data[0].floors.filter((floor) =>
        floor.floor_number.toString().includes(queery.replace('floor', ''))
    );
    // console.log(filteredFloors)

    //counting vacancy
    const [vacating, setVacating] = useState({});
    const [vacancy, setvacancy] = useState(0);
    const [aval, setaval] = useState(0);
    const [occup, setoccup] = useState(0);
    useEffect(() => {
        const counts = {};
        let a = 0;
        let v = 0;
        let o = 0;
        data[0].floors.forEach(floor => {
            let vacatingCount = 0;
            floor.rooms.forEach(room => {
                room.beds.forEach(bed => {
                    if (bed.availability === "vacating") {
                        vacatingCount++;
                        v++;
                    }
                    if (bed.availability === "available") {
                        a++;
                    }
                    if (bed.availability === "unavailable") {
                        o++;
                    }
                });
            });
            counts[floor.floor_number] = vacatingCount;
        });

        setVacating(counts);
        setvacancy(v);
        setoccup(o);
        setaval(a);
    }, [data[0]]);

    useEffect(() => {
        console.log("useEffect running"); // Check if this prints
    }, []); // Only runs once when the component mounts
    const [showInput, setShowInput] = useState(false);
    const handleBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setShowInput(false);
        }
    };

    return (
        <>
            <Grid
                container
                style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    // background: "green",
                    height: "10%",
                    width: '95%',
                    margin: 'auto',
                }}
            >
                <Grid
                    item
                    lg={4}
                    style={{
                        // background: "red",
                        // justifyContent: "space-evenly",
                        display: showInput ? "none" : "flex",
                        flexDirection: "row",
                        // alignItems: "center",

                    }}
                >
                    <h1
                        style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontWeight: "600",
                            margin: 0,
                        }}
                    >
                        Room Management
                    </h1>
                    {/* <NavigateNextIcon sx={{ color: "#AEAEAE", marginLeft: "0.5rem" }} /> */}
                </Grid>
                <Grid
                    item
                    lg={3}
                    style={{
                        // background: "green",

                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: showInput ? "100%" : "unset",
                    }}
                >
                    <TextField
                        id="searchBarRoomManagement"
                        placeholder="Search Room no."
                        value={queery}
                        onChange={(e) => setQueery(e.target.value.toLowerCase())}
                        onBlur={handleBlur}
                        onFocus={() => setShowInput(true)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment
                                    position="start"
                                    sx={{
                                        marginRight: "-0.25rem",
                                    }}
                                >
                                    <IconButton onClick={() => setShowInput(true)}>
                                        <SearchRoundedIcon style={{ color: "#737373", fontSize: "small" }} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    sx={{
                                        marginLeft: "-0.25rem",
                                    }}
                                >
                                    <IconButton>
                                        <TuneRoundedIcon style={{ color: "#737373", fontSize: "small" }} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            sx: {
                                borderRadius: "5px",
                                color: "#737373",
                                height: 34,
                                fontSize: "12px",
                                fontWeight: "300",
                                fontFamily: "Inter",
                                background: "#FFFFFF",
                                boxShadow: "0px 0px 12px 0px #D2D2D240",
                                paddingLeft: 0,
                                paddingRight: 0,
                                transition: "width 0.3s ease",
                                '@media (max-width: 600px)': {
                                    width: showInput ? "100%" : "50px",
                                },
                            },
                        }}
                        sx={{
                            width: "100%",
                            '@media (min-width: 600px)': {
                                width: showInput ? "100%" : "100%", // Ensure proper width on larger screens
                            },
                        }}
                    />
                </Grid>
            </Grid>


            <div className="header">
                <div className="row w-[95%] h-[124px] top-[93px] left-[284px] rounded-lg bg-white border flex justify-around items-center mx-auto" style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div className="totalBeds w-1/5 text-center py-6">
                        <div className="value text-4xl py-2 font-extrabold">
                            {vacancy + aval + occup}
                        </div>
                        <div className="text max-md:text-[10px] font-inter">
                            Total Beds
                        </div>
                    </div>
                    <div className="availableBeds w-1/5 text-center py-6" style={{ color: "#379017" }}>
                        <div className="value font-extrabold text-4xl py-2">
                            {aval}
                        </div>
                        <div className="text max-md:text-[10px] font-inter">
                            Available
                        </div>
                    </div>
                    <div className="vacant w-1/5 text-center py-6" style={{ color: "#D89A3D" }}>
                        <div className="value font-extrabold text-4xl py-2">
                            {vacancy}
                        </div>
                        <div className="text max-md:text-[10px] font-inter">
                            Vacating
                        </div>
                    </div>
                    <div className="occupied w-1/5 text-center py-6" style={{ color: "#FF4B4B" }}>
                        <div className="value font-extrabold text-4xl py-2">
                            {occup}
                        </div>
                        <div className="text max-md:text-[10px] font-inter">
                            Occupied
                        </div>
                    </div>
                </div>
            </div>
            {
                filteredFloors.length > 0 ? (
                    filteredFloors.map(floor => {
                        return (
                            <>
                                <div className=" my-16 max-sm:my-12 bg-white border w-[95%] mx-auto rounded-md drop-shadow-md" key={floor.floor_number}>
                                    <div className="topButton flex justify-between items-center">
                                        <div className="floorNumber relative -top-8 max-md:top-0 left-4 w-auto bg-white mb-2 rounded-lg cursor-pointer flex justify-center items-center" onClick={() => showMore(floor.floor_number - 1)}>
                                            <h1 className="text-2xl font-bold px-8 max-sm:px-2 py-4 font-inter max-sm:text-[1rem]">{floor.floor_number}{[1, 21, 31, 41].includes(floor.floor_number) && <sup>st</sup>}
                                                {[2, 22, 32, 42].includes(floor.floor_number) && <sup>nd</sup>}
                                                {[3, 23, 33, 43].includes(floor.floor_number) && <sup>rd</sup>}
                                                {![1, 2, 3, 21, 22, 23, 31, 32, 33, 41, 42, 43].includes(floor.floor_number) && <sup>th</sup>} Floor</h1>
                                            <Image src={arrowdownsvg} alt="logo" className='w-3 hidden max-sm:block arrowDown' />
                                        </div>
                                        <div className="box relative -top-8 max-sm:px-0 right-4 max-md:top-0 bg-white rounded-lg p-3 flex max-sm:justify-end justify-evenly items-center text-yellow-400 max-sm:w-1/2">
                                            <div className=" text-3xl font-bold mr-2">
                                                {vacating[floor.floor_number]}
                                            </div>
                                            <div className=" w-3/5 font-inter max-sm:text-sm">
                                                Beds Vacating in 60 days
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tables bg-white relative -top-8 max-sm:-top-2 flex ${floor.floor_number === 1 ? 'max-sm:h-80' : 'max-sm:hidden'}  max-md:flex-col floor-Details max-sm:overflow-hidden max-sm:overflow-y-scroll max-sm:pb-[10%]`}>
                                        {floor.rooms &&
                                            Array.from({ length: Math.ceil(floor.rooms.length / 5) }, (_, colIndex) => (
                                                <table
                                                    className="table-fixed Group1 w-2/6 max-md:w-full"
                                                    style={{ borderSpacing: "10px", borderCollapse: "separate" }}
                                                    key={colIndex}
                                                >
                                                    <thead className="text-gray-400 text-sm py-2">
                                                        <tr className={colIndex != 0 ? "max-md:hidden" : ""} >
                                                            <th className=' text-[11px] font-medium whitespace-nowrap' style={{ color: '#9E9E9E' }}>Room no</th>
                                                            <th className="text-start whitespace-nowrap text-[11px] font-medium" style={{ color: '#9E9E9E' }}>Occupancy Availability</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-center">
                                                        {floor.rooms.slice(colIndex * 5, colIndex * 5 + 5).map((room) => (
                                                            <tr className="space-x-3" key={room.room_number}>
                                                                <td className="font-bold">{room.room_number}</td>
                                                                {room.beds &&
                                                                    room.beds.map((bed) => (
                                                                        <td key={bed.bed_id}>
                                                                            <div className="availability flex justify-start items-center">
                                                                                {bed.availability === "available" && (
                                                                                    <Image src={availablesvg} alt="logo" className="w-[25px]" />

                                                                                )}
                                                                                {bed.availability === "vacating" && (
                                                                                    <Image src={vacatingsvg} alt="logo" className="w-[25px]" />
                                                                                )}
                                                                                {bed.availability === "unavailable" && (
                                                                                    <Image src={occupiedsvg} alt="logo" className="w-[25px]" />
                                                                                )}
                                                                            </div>
                                                                        </td>
                                                                    ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            ))}
                                    </div>
                                </div>

                            </>
                        )
                    })
                ) : (
                    <section class="bg-white">
                        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div class="mx-auto max-w-screen-sm text-center">
                                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl  text-red-600">404</h1>
                                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
                                <p class="mb-4 text-lg font-light text-gray-950">Sorry, we can't find that <span className=" text-red-500">Floor</span> </p>
                            </div>
                        </div>
                    </section>
                )
            }
            <div className="h-2 hidden max-sm:block">s</div>
        </>
    );
}

export default page