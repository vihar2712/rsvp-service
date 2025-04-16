import { useNavigate } from "react-router";
import { List } from "./List";

export function RsvpService(){
    // localStorage.clear();
    const navigate = useNavigate();

    return (
        <div className="w-1/4 mx-auto">
            <List/>
            {/* <h1> Update Status </h1>
            <h1> List of all confirmed attendees</h1>
            <h1> Total responses</h1>
            <h1> Confirmed responses</h1>
            <h1> Declined responses</h1> */}
            <div className="mt-2 flex gap-3">
                <button className="" onClick={() => navigate('/add-player') }>Add Player</button>
                <button className="" onClick={() => navigate('/add-player') }>Stats</button>
            </div>
        </div>
    )
}