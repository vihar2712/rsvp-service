import { useNavigate } from "react-router";
import { Player } from "../helpers/addPlayer";

type ListProps = {
    list:Player[],
    showBtn: boolean,
    title:string
}
export function List({title,list,showBtn}:ListProps){
    const navigate = useNavigate();
    return(
    <div>
        <h2 className="text-3xl font-bold underline">{title}</h2>
        <table className="border-collapse border border-gray-400 table-auto mt-3">
            <thead>
                <tr>
                    <th className="border border-gray-300 p-2">Name of Player</th>
                    <th className="border border-gray-300 p-2">RSVP Status</th>
                </tr>
            </thead>
            <tbody>
            {list?.map((player)=>
                <tr key={player.id}>
                <td className="border border-gray-300 text-center">{player.name}</td>
                <td className="border border-gray-300 p-2 flex justify-between gap-2">
                    <span className="mx-2 self-center">{player.status}</span>
                    {showBtn && <button className="" onClick={() => navigate('/update-status/'+player.id) }>Update Status</button>}
                </td>
                </tr>
            )}
            </tbody>
        </table>
           {!showBtn &&  <div className="mt-2">
                <span className="font-semibold ">Sum : {list.length} </span>
            </div>}
    </div>
    )
}