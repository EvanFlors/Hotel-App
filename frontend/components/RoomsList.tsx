"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { FaStar, FaStarHalg } from "react-icons/fa"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const RoomsList = ({ rooms }: { rooms: any }) => {

    const [roomType, setRoomType] = useState("all")
    const [filteredRooms, setFilteredRooms] = useState("all")

    useEffect(() => {
        const filtered = rooms.data?.filter((room: any) => {
            return roomType === "all" ? rooms : roomType === room.attributes.type
        })
        setFilteredRooms(filtered)
    }, [roomType])

    return (
        <section className="py-16 min-h-[98vh]">
            {}
            <div className="flex flex-col items-center">
                {}
                <div className="relative w-[82px] h-[20px]">
                    <Image 
                        src={"/assets/heading-icon.svg"}
                        fill
                        alt="logo"
                        className="object-cover"
                    />
                </div>
                <h2 className="h2 mb-8">Our Rooms</h2>
            </div>

            {}
            <Tabs defaultValue="all" className="w-[240px] lg:w-[540px] h-[200px] lg:h-auto mb-8">
                <TabsList className="w-full h-full lg:h-[46px] flex flex-col lg:flex-row">
                    <TabsTrigger 
                        className="w-full h-full" 
                        value="all"
                        onClick={() => setRoomType("all")}
                    >
                        All
                    </TabsTrigger>
                    <TabsTrigger 
                        className="w-full h-full" 
                        value="single"
                        onClick={() => setRoomType("single")}
                    >
                        Single
                    </TabsTrigger>
                    <TabsTrigger 
                        className="w-full h-full" 
                        value="double"
                        onClick={() => setRoomType("double")}
                    >
                        Double
                    </TabsTrigger>
                    <TabsTrigger 
                        className="w-full h-full" 
                        value="extended"
                        onClick={() => setRoomType("extended")}
                    >
                        Extended
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredRooms.map((room: any) => {

                    const imgUrl = ""

                    return <div key={room.id}>
                        <Link href={`/room/${room.id}`}>
                            <div className="relative w-full h-[300px] overflow-hidden mb-6">
                                <Image 
                                    src={imgUrl} 
                                    fill
                                    priority
                                    alt="room image"
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                        <div className="h-[134px]">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        Capacity - {room.attributes.capacity} person
                                    </div>
                                    <div className="flex gap-1 text-accent">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStarHalf />
                                    </div>
                                </div>
                                <Link href={`/room/${room.id}`}>
                                    <h3 className="h3">
                                        {room.attributes.title}
                                    </h3>
                                </Link>
                                <p className="h3 font-secondary font-medium text-accent mb-4">
                                    ${room.attributes.price}{" "}
                                    <span className="text-base text-secondary">/ night</span>
                                </p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default RoomsList