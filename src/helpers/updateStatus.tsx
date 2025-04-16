import { Player } from "./addPlayer";

export function updateStatus(id:string | undefined, newStatus:string){
    console.log(newStatus,id);
    let listOfPlayers:Player[] = JSON.parse(localStorage.getItem("players")!);

    const index = listOfPlayers.findIndex((player: Player) => id === player.id);
    if (index!== -1) {
        const player = listOfPlayers[index];
        player.status = newStatus;
        listOfPlayers = [...listOfPlayers.slice(0, index), player, ...listOfPlayers.slice(index + 1)];    
    }
    localStorage.setItem("players",JSON.stringify(listOfPlayers));
}