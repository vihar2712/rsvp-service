import { Player } from "./addPlayer";

export function fetchPlayer(id:string | undefined) {
    const listOfPlayers:Player[] = JSON.parse(localStorage.getItem("players")!);

    const player = listOfPlayers.filter(player=> player.id=== id)[0];

    return player;
    
}