import { useNavigate } from "react-router";
import { Player } from "../helpers/addPlayer";
import { List } from "./List";

export function Stats(){
    const navigate = useNavigate();
    const total:Player[] = JSON.parse(localStorage.getItem("players")!) || [];
    const confirmed = total.filter(player=> player.status=="Yes");
    const declined = total.filter(player=> player.status=="No");
    return (
    <div className="w-1/2 mx-auto">
        <h1> Stats/Responses</h1>
        <hr/>
        <div className="flex gap-4 my-3">
            <List list={total} showBtn={false} title="Total"/>
            <List list={confirmed} showBtn={false} title="Confirmed"/>
            <List list={declined} showBtn={false} title="Declined"/>
        </div>
        <button className="w-fit" onClick={()=> navigate('/rsvp-service')}>Back</button>
    </div>
    )
}