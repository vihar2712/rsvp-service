import { useEffect, useState } from "react";
import { addPlayer, Player } from "../helpers/addPlayer";
import { useNavigate, useParams } from "react-router";
import { fetchPlayer } from "../helpers/fetchPlayerDetails";
import { updateStatus } from "../helpers/updateStatus";

type FormProps = {
    label:string,
}
export function Form({label}:FormProps){
    const {playerId} = useParams();
    const [playerName,setPlayerName] = useState<string>("");
    const [status,setStatus] = useState<string>("yes");
    const list:Player[] = JSON.parse(localStorage.getItem("players")!) || [];
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(()=> {
        if(label==="Edit"){
            setLoading(true);
            const playerDetails = fetchPlayer(playerId);
            setPlayerName(playerDetails.name);
            setStatus(playerDetails.status);
            setLoading(false);
        }
    },[playerId])

    return (
        !loading && 
            <div className="w-1/4 mx-auto">
                <h2 className="text-2xl"> {label} player</h2>
                <hr/>
                <form className="flex flex-col gap-3 mt-5" onSubmit={(e)=> {
                    e.preventDefault();
                    if(label=="Edit"){
                       updateStatus(playerId,status);
                    }
                    else{
                        addPlayer(playerName,status,list);   
                    }
                    navigate('/rsvp-service');
                }}> 
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input id="name" className="border-2 p-1 rounded-lg w-full" type="text" name="name"  placeholder="Enter player's name" value={playerName} required onChange={(e)=> setPlayerName(e.target.value)}/>
                    </div>
                    <div> 
                        <label htmlFor="status">RSVP Status : </label>
                        <select id="status" onChange={(e)=> setStatus(e.target.value)} className="bg-gray-600 rounded-md" value={status}>
                            <option>Yes</option>
                            <option>Maybe</option>
                            <option>No</option>
                        </select>
                    </div> 
                    <div className="flex gap-2">
                        <button type="submit" className="w-fit">{label}</button>
                        <button className="w-fit" onClick={()=> navigate('/rsvp-service')}>Back</button>
                    </div>
                </form>
        </div>
    )
}