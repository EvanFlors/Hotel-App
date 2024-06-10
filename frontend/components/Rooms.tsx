import RoomsList from "@/components/RoomsList"

const Rooms = () => {

    const rooms = []

    return (
        <section>
            <div className="container mx-auto">
                <RoomsList rooms={rooms}/>
            </div>
        </section>
    )
}

export default Rooms