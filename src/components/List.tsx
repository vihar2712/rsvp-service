import { useNavigate } from "react-router";
import { Player } from "../helpers/addPlayer";

export function List(){
    const navigate = useNavigate();
    const list:Player[] = JSON.parse(localStorage.getItem("players")!) || [];
    return(
    <div >
        <h1>List of Players</h1>
        <table className="border-collapse border border-gray-400 table-auto mt-3">
            <thead>
                <tr>
                <th className="border border-gray-300">Name of Player</th>
                <th className="border border-gray-300">RSVP Status</th>
                </tr>
            </thead>
            <tbody>
            {list?.map((player)=>
                <tr key={player.id}>
                <td className="border border-gray-300 text-center">{player.name}</td>
                <td className="border border-gray-300 p-2">
                    <span className="mx-2">{player.status}</span>
                    <button className="" onClick={() => navigate('/update-status/'+player.id) }>Update Status</button>
                </td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
    )
}