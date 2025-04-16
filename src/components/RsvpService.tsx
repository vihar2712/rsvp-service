import { useNavigate } from "react-router";
import { List } from "./List";
import { Player } from "../helpers/addPlayer";

export function RsvpService(){
    const navigate = useNavigate();
    const allPlayers:Player[] = JSON.parse(localStorage.getItem("players")!) || [];

    return (
        <div className="w-1/4 mx-auto">
            <List list={allPlayers} showBtn={true} title="List of All Players"/>
            {/* <h1> Update Status </h1>
            <h1> List of all confirmed attendees</h1>
            <h1> Total responses</h1>
            <h1> Confirmed responses</h1>
            <h1> Declined responses</h1> */}
            <div className="mt-2 flex gap-3">
                <button className="" onClick={() => navigate('/add-player') }>Add Player</button>
                <button className="" onClick={() => navigate('/stats') }>Stats</button>
            </div>
        </div>
    )
}